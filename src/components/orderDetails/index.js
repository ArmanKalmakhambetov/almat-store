// orderDetails/index.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllOrdersAction, getAllProductsAction} from '@/store/slices/productSlice';

const OrderDetails = ({ orderId, onGoBack }) => {
    const dispatch = useDispatch();
    const crossOptical = useSelector(state => state.usercart.allProducts);
    const allOrders = useSelector((state) => state.usercart.allOrders || []);
    const order = allOrders.find(item => item.id === orderId);

    useEffect(() => {
        dispatch(getAllOrdersAction());
        dispatch(getAllProductsAction());
    }, [dispatch, crossOptical]);

    // Функция для вызова обратного вызова при нажатии кнопки "Назад"
    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <div className="container mt-5">
            <h2>Детали заказа</h2>
            <p>Номер заказа: {order.id}</p>
            <p>Имя: {order.username}</p>
            <p>Телефон: {order.phone}</p>
            <p>Адрес доставки: {order.address}</p>
            <p>Статус заказа: {order.status}</p>
            <p>Дата создания: {order.createdAt}</p>
            <p>Общая сумма заказа: {order.totalPrice}</p>

            <h3>Товары:</h3>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Номер</th>
                    <th>Название продукта</th>
                    <th>Количество</th>
                    <th>Цена</th>
                    <th>Сумма</th>
                </tr>
                </thead>
                <tbody>
                    {order.product_ids.map((product) => {
                        const matchedProduct = crossOptical.find(item => item.id === product[0]);
                        return (
                            <tr key={product[0]}>
                                <td>{product[0]}</td>
                                <td>{matchedProduct ? matchedProduct.name : 'Название не найдено'}</td>
                                <td>{product[1]}</td>
                                <td>{matchedProduct ? matchedProduct.price : 'Цена не найдена'}</td>
                                <td>{matchedProduct ? matchedProduct.price * product[1] : 'Сумма не найдена'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Добавьте кнопку "Назад" */}
            <button className="btn btn-primary mb-5 mt-3" onClick={handleGoBack}>
                Назад к заказам
            </button>
        </div>
    );
};

export default OrderDetails;
