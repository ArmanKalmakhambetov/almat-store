// orderDetails/index.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersAction } from '@/store/slices/productSlice';
import img_cross from "../../../public/image/cable/cros_optical.png";
import img_cable from "../../../public/image/cable/img_cable.png";

const OrderDetails = ({ orderId, onGoBack }) => {
    const dispatch = useDispatch();
    const allOrders = useSelector((state) => state.usercart.allOrders || []);
    const order = allOrders.find(item => item.id === orderId);

    const crossOptical = [
        { id: 1, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC ПУСТОЙ', price: 12500, totalPrice: 12500, count: 1, image: img_cross},
        { id: 2, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 4 PORT укомплектованный', price: 16200, totalPrice: 16200, count: 1, image: img_cross},
        { id: 3, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 8 PORT укомплектованный', price: 19700, totalPrice: 19700, count: 1, image: img_cross},
        { id: 4, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 12 PORT  укомплектованный', price: 23100, totalPrice: 23100, count: 1, image: img_cross},
        { id: 5, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 16 PORT укомплектованный', price: 27000, totalPrice: 27000, count: 1, image: img_cross},
        { id: 6, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 24 PORT  укомплектованный', price: 34000, totalPrice: 34000, count: 1, image: img_cross},
        { id: 7, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-2U-48-FC ПУСТОЙ', price: 23500, totalPrice: 23500, count: 1, image: img_cross },
        { id: 8, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-2U-48-FC/UPC OM4 32 PORT укомплектованный', price: 53530, totalPrice: 53530, count:1, image: img_cross },
        { id: 9, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-2U-48-FC/UPC OM4 48 PORT укомплектованный', price: 67840, totalPrice: 67840, count: 1, image: img_cross},
        { id: 10, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'FDF 4U-SP-FC-144port ПУСТОЙ', price: 46500, totalPrice: 46500, count: 1, image: img_cross},
        { id: 11, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-4U-144-FC/UPC OM4 96 PORT укомплектованный', price: 135200, totalPrice: 135200, count: 1, image: img_cross},
        { id: 12, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-4U-144-FC/UPC OM4 144 PORT укомплектованный', price: 175320, totalPrice: 175320, count: 1, image: img_cross },
        { id: 13, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-DIN-12SC ПУСТОЙ (крепление на дин-рейку)', price: 8900, totalPrice: 8900, count: 1, image: img_cross },
        { id: 14, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-4SC ПУСТОЙ', price: 6300, totalPrice: 6300, count: 1, image: img_cross },
        { id: 15, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-8SC ПУСТОЙ', price: 8000, totalPrice: 8000, count: 1, image: img_cross },
        { id: 16, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-4FC ПУСТОЙ', price: 6300, totalPrice: 6300, count: 1, image: img_cross },
        { id: 17, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-8FC ПУСТОЙ', price: 8000, totalPrice: 8000, count: 1, image: img_cross },
        { id: 18, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-4SC SC или LC 4 PORT укомплектованный', price: 10300, totalPrice: 10300, count: 1, image: img_cross },
        { id: 19, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-8SC SC или LC 8 PORT укомплектованный', price: 15300, totalPrice: 15300, count: 1, image: img_cross },
        { id: 20, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-4FC FC/UPC 4 PORT укомплектованный', price: 10300, totalPrice: 10300, count: 1, image: img_cross, },
        { id: 21, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-8FC FC/UPC до 8 PORT укомплектованный', price: 15300, totalPrice: 15300, count: 1, image: img_cross, },
        { id: 22, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-Т-А2-2.7', price: 251, totalPrice: 251, count: 1, image: img_cable },
        { id: 23, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-Т-А4-2.7', price: 258, totalPrice: 258, count: 1, image: img_cable },
        { id: 24, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-Т-А6-2.7', price: 269, totalPrice: 269, count: 1, image: img_cable },
        { id: 25, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-Т-А8-2.7', price: 280, totalPrice: 280, count: 1, image: img_cable },
        { id: 26, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-Т-А12-2.7', price: 306, totalPrice: 306, count: 1, image: img_cable },
        { id: 27, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-Т-А16-2.7', price: 332, totalPrice: 332, count: 1, image: img_cable },
        { id: 28, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-М2П-А2-2.7', price: 250, totalPrice: 250, count: 1, image: img_cable },
        { id: 29, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-М2П-А4-2.7', price: 257, totalPrice: 257, count: 1, image: img_cable },
        { id: 30, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-М2П-А8-2.7', price: 279, totalPrice: 279, count: 1, image: img_cable },
        { id: 31, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-М2П-А16-2.7', price: 331, totalPrice: 331, count: 1, image: img_cable },
    ];

    useEffect(() => {
        dispatch(getAllOrdersAction());
    }, [dispatch]);

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
            <p>Общая сумма заказа: {}</p>

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
