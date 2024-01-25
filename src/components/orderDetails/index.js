import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {editOrderAction, getAllOrdersAction, getAllProductsAction, getOrderAction} from '@/store/slices/productSlice';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button, TextField,
} from '@mui/material';
const theme = createTheme();

const OrderDetails = ({ orderId, onGoBack }) => {
    const dispatch = useDispatch();
    const crossOptical = useSelector(state => state.usercart.allProducts);
    const allOrders = useSelector((state) => state.usercart.allOrders || []);
    const orderFromDb = useSelector(state => state.usercart.order[0]);
    const order = allOrders.find(item => item.id === orderId) || orderFromDb;
    const [isEdit, setIsEdit] = useState(false);
    const [editedOrder, setEditedOrder] = useState({
        username: order.username,
        phone: order.phone,
        address: order.address,
        status: order.status,
        totalPrice: order.totalPrice,
    });

    console.log('Order State:', order);

    useEffect(() => {
        dispatch(getAllOrdersAction());
        dispatch(getAllProductsAction());
        dispatch(getOrderAction(orderId))
    }, [dispatch]);



    // Function to trigger the callback when the "Go Back" button is clicked
    const handleGoBack = () => {
        onGoBack();
    };

    const editOrder = async () => {
        await dispatch(editOrderAction(editedOrder, orderId));
        await dispatch(getOrderAction(orderId));
        setIsEdit(false);

    };

    const setButton = () => {
        setIsEdit(true);
    };

    const handleInputChange = (field, value) => {
        setEditedOrder(prevState => ({ ...prevState, [field]: value }));
    };

    const renderOrderDetails = () => (
        <Container>
            <Typography variant="h4">Детали заказа</Typography>
            <Typography className='mb-3 mt-3'>Номер заказа: {order.id}</Typography>
            <Typography className='mb-3'>Имя: {order.username}</Typography>
            <Typography className='mb-3'>Телефон: {order.phone}</Typography>
            <Typography className='mb-3'>Адрес доставки: {order.address}</Typography>
            <Typography className='mb-3'>Статус заказа: {order.status}</Typography>
            <Typography className='mb-3'>Дата создания: {order.createdAt}</Typography>
            <Typography className='mb-3'>Общая сумма заказа: {order.totalPrice}</Typography>
        </Container>
    );

    const renderEditableOrderDetails = () => (
        <Container>
            <Typography variant="h4">Детали заказа</Typography>
            <Typography className='mb-3 mt-3'>Номер заказа: {editedOrder.id}</Typography>
            <Typography className='mb-3 '>
                <TextField
                    defaultValue={editedOrder.username}
                    label="Имя"
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className='mb-3'
                />
            </Typography>
            <Typography className='mb-3'>
                <TextField
                    label="Телефон"
                    defaultValue={editedOrder.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className='mb-3'
                />
            </Typography>
            <Typography className='mb-3'>
                <TextField
                    label="Адрес доставки"
                    defaultValue={editedOrder.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className='mb-3'
                />
            </Typography>
            <Typography className='mb-3'>
                <TextField
                    label="Статус заказа"
                    defaultValue={editedOrder.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className='mb-3'
                />
            </Typography>
            <Typography className='mb-3'>
                <TextField
                    label="Общая сумма"
                    defaultValue={editedOrder.totalPrice}
                    onChange={(e) => handleInputChange('totalPrice', e.target.value)}
                    className='mb-3'
                />
            </Typography>
        </Container>
    );

    return (
        <ThemeProvider theme={theme}>
            <Container className="mt-5">
                {isEdit ? renderEditableOrderDetails() : renderOrderDetails() }
                <Container>
                    <TableContainer>
                        <Typography variant="h4">Товары:</Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Номер</TableCell>
                                    <TableCell>Название продукта</TableCell>
                                    <TableCell>Количество</TableCell>
                                    <TableCell>Цена</TableCell>
                                    <TableCell>Сумма</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {order.product_ids.map((product) => {
                                    const matchedProduct = crossOptical.find(item => item.id === product[0]);
                                    return (
                                        <TableRow key={product[0]}>
                                            <TableCell>{product[0]}</TableCell>
                                            <TableCell>{matchedProduct ? matchedProduct.name : 'Название не найдено'}</TableCell>
                                            <TableCell>{product[1]}</TableCell>
                                            <TableCell>{matchedProduct ? matchedProduct.price : 'Цена не найдена'}</TableCell>
                                            <TableCell>{matchedProduct ? matchedProduct.price * product[1] : 'Сумма не найдена'}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                        <Container className='d-flex gap-5'>
                            <Button variant="contained" color="warning" className="mb-5 mt-3" onClick={handleGoBack}>
                                Назад к заказам
                            </Button>
                            {isEdit ? (
                                <Button variant="contained" color='success' className="mb-5 mt-3" onClick={editOrder}>
                                    Сохранить
                                </Button>
                            ) : (
                                <Button variant="contained" color="info" className="mb-5 mt-3" onClick={setButton}>
                                    Изменить
                                </Button>
                            )}
                        </Container>
                    </TableContainer>
                </Container>
            </Container>
        </ThemeProvider>
    );
};

export default OrderDetails;
