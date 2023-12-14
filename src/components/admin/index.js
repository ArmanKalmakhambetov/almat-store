import Header from "@/components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import AddProductForm from '../addProduct';
import AllOrders from '../allOrders';

export default function Admin() {
    const [component, setComponent] = useState('');

    return (
        <>
            <Header/>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-2">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <button onClick={() => {setComponent('addProduct')}} className='btn'>Добавить продукт</button>
                            </li>
                            <li className="list-group-item">
                                <button onClick={() => {setComponent('orders')}} className='btn'>Просмотр заказов</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <>
                            {component === 'addProduct' && <AddProductForm />}
                            {component === 'orders' && <AllOrders />}
                        </>
                    </div>
                </div>
            </div>
        </>
    );
}