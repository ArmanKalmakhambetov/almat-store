// ViewOrders.js
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersAction } from '@/store/slices/productSlice';
import OrderDetails from '../orderDetails/index'

const ViewOrders = () => {
    const allOrders = useSelector((state) => state.usercart.allOrders || []);
    const dispatch = useDispatch();
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    useEffect(() => {
        dispatch(getAllOrdersAction());
    }, [dispatch]);

    // Function to handle selecting an order
    const handleSelectOrder = (orderId) => {
        setSelectedOrderId(orderId);
    };

    const handleGoBack = () => {
        setSelectedOrderId(null);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2 className='mb-5 text-center'>Просмотр заказов</h2>

                    {/* Conditionally render OrderDetails component */}
                    {selectedOrderId ? (
                        <OrderDetails orderId={selectedOrderId} onGoBack={handleGoBack} />
                    ):(
                        <>
                            {allOrders.length < 1 ? (
                                <div className='text-center fs-2'>Заказов нет(</div>
                            ) : (
                                <table className="table">
                                    <thead className='sticky-top'>
                                    <tr>
                                        <th>ID заказа</th>
                                        <th>Имя</th>
                                        <th>Телефон</th>
                                        <th>Адрес</th>
                                        <th>Статус</th>
                                        <th>Дата создания</th>
                                        <th>Действия</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {allOrders.map((order) => (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.username}</td>
                                            <td>{order.phone}</td>
                                            <td>{order.address}</td>
                                            <td>{order.status}</td>
                                            <td>{order.createdAt}</td>
                                            <td>
                                                <button className='btn' onClick={() => handleSelectOrder(order.id)}>
                                                    выбрать
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )}
                        </>
                    ) }
                </div>
            </div>
        </div>
    );
};

export default ViewOrders;
