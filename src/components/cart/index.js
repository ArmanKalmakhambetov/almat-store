import { useDispatch, useSelector } from 'react-redux';
import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {
    incrementAction,
    decrementAction,
    clearCartAction,
} from '@/store/slices/productSlice';
import { useRouter } from 'next/navigation';
import cartLogo from '../../../public/image/logo/telezhka_pbuneqj5o42t_256.png';
import Image from 'next/image';
import {
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';

export default function Cart() {
    const data = useSelector((state) => state.usercart.userCart) || null;
    const [updatedData, setUpdatedData] = useState(data);
    const dispatch = useDispatch();
    const router = useRouter();

    const clickUpCount = (id) => {
        const updatedDataCopy = updatedData.map((item) => {
            if (item.id === id) {
                const newCount = item.count + 1;
                const total = item.price * newCount;
                return { ...item, count: newCount, totalPrice: total };
            }
            return item;
        });

        setUpdatedData(updatedDataCopy);
        dispatch(incrementAction(id, updatedDataCopy));
    };

    const clickDownCount = (id) => {
        const updatedDataCopy = updatedData.map((item) => {
            if (item.id === id) {
                const newCount = Math.max(item.count - 1, 0);
                const total = item.price * newCount;
                return { ...item, count: newCount, totalPrice: total };
            }
            return item;
        });

        setUpdatedData(updatedDataCopy);
        dispatch(decrementAction(id, updatedDataCopy));
    };

    const nextClick = () => {
        router.push('/order');
    };

    const clearCart = () => {
        dispatch(clearCartAction());
        setUpdatedData([]);
    };

    return (
        <>
            <Header />
            {data.length >= 1 ? (
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'end',
                    }}
                >
                    <Button
                        onClick={clearCart}
                        sx={{ width: '100px', marginBottom: '10px' }}
                        variant="contained"
                        color="error"
                    >
                        Очистить
                    </Button>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Название</TableCell>
                                <TableCell>Тип</TableCell>
                                <TableCell>Цена</TableCell>
                                <TableCell>Количество</TableCell>
                                <TableCell>Действия</TableCell>
                                <TableCell>Сумма</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {updatedData.map((item, index) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>{item.price}</TableCell>
                                    <TableCell align="center">{item.count}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => clickUpCount(item.id)}>+</Button>
                                        <Button onClick={() => clickDownCount(item.id)}>-</Button>
                                    </TableCell>
                                    <TableCell>{item.price * item.count}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Button
                        onClick={nextClick}
                        sx={{ width: '100px', marginTop: '10px' }}
                        variant="contained"
                        color="primary"
                    >
                        Далее
                    </Button>
                </Container>
            ) : (
                <Container
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5',
                    }}
                >
                    <Image
                        style={{ width: '100px', height: '100px' }}
                        src={cartLogo}
                        alt="cart logo"
                    />
                    <div>
                        <div className="fs-2">В корзине нет товаров(</div>
                    </div>
                </Container>
            )}
        </>
    );
}
