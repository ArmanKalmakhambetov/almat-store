import Header from "@/components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import AddProductForm from '../addProduct';
import AllOrders from '../allOrders';
import { useRouter } from 'next/navigation';
import {useSelector} from "react-redux";

export default function Admin() {
    const [component, setComponent] = useState('');
    const router = useRouter();
    const isAuth = useSelector((state) => state.usercart.isAuth);

    const handleUnauthorizedAccess = () => {
        router.push('/login');
    };

    const handleComponentSet = (value) => {
        try {
            setComponent(value);
        } catch (e) {
            console.log("catch flow")
        }
    }

    return (
        <>
            <Header/>
            {isAuth ? (
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-2">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <button onClick={() => { handleComponentSet('addProduct') }} className='btn'>Добавить продукт</button>
                                </li>
                                <li className="list-group-item">
                                    <button onClick={() => { handleComponentSet('orders') }} className='btn'>Просмотр заказов</button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-10">
                            <>
                                {component === 'addProduct' && <AddProductForm onUnauthorizedAccess={handleUnauthorizedAccess} />}
                                {component === 'orders' && <AllOrders onUnauthorizedAccess={handleUnauthorizedAccess} />}
                            </>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    вы не авторизованы
                    {handleUnauthorizedAccess()}
                </div>
            )}
        </>
    );
}
