// ViewOrders.js
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllOrdersAction, getAllOrdersReducer} from "@/store/slices/productSlice";

const ViewOrders = () => {
    const allOrders = useSelector(state => state.usercart.allOrders || []);
    const [orders, setOrders] = useState([allOrders]);
    const dispatch = useDispatch();

    console.log(orders)

    // Example: Fetch orders from the server on component mount
    useEffect(() => {
        dispatch(getAllOrdersAction())
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Просмотр заказов</h2>
                    <ul className="list-group">
                        {allOrders.map((order) => (
                            <li key={order.id} className="list-group-item">{order.address}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ViewOrders;
