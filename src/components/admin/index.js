import Header from "@/components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import AddProductForm from '../addProduct';
import AllOrders from '../allOrders';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router

export default function Admin() {
    const [component, setComponent] = useState('');
    const router = useRouter(); // Initialize useRouter

    // Function to handle unauthorized access (401)
    const handleUnauthorizedAccess = () => {
        // Redirect to the login page
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
        </>
    );
}
