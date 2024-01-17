import {useDispatch, useSelector} from "react-redux";
import Header from "@/components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {incrementAction, decrementAction, clearCartAction} from "@/store/slices/productSlice";
import {useRouter} from "next/navigation";
import cartLogo from "../../../public/image/cart/d-cart.c259d025.svg"
import Image from "next/image";


export default function Cart() {
    const data = useSelector((state) => state.usercart.userCart) || null;
    const [updatedData, setUpdatedData] = useState(data);
    console.log("Data",data)
    const dispatch = useDispatch();
    const router = useRouter();

    const clickUpCount = (id) => {

        const updatedDataCopy = updatedData.map((item) => {
            if (item.id === id) {
                const newCount = item.count + 1;
                const total = item.price * newCount
                return { ...item, count: newCount, totalPrice: total };
            }
            return item;
        });

        setUpdatedData(updatedDataCopy);
        dispatch(incrementAction(id, updatedDataCopy));
    }





    const clickDownCount = (id) => {
        const updatedDataCopy = updatedData.map((item) => {
            if (item.id === id) {
                const newCount = Math.max(item.count - 1, 0);
                const total = item.price * newCount;
                return { ...item, count: newCount, totalPrice: total  };
            }
            return item;
        });

        setUpdatedData(updatedDataCopy);
        dispatch(decrementAction(id, updatedDataCopy));
    }

    const nextClick = () => {
        router.push("/order")
    }

    const clearCart = () => {
        dispatch(clearCartAction());
        setUpdatedData([]);
    }

    return (
        <>
            <Header/>
            {
                data.length >= 1 ? (
                    <div className="container d-flex flex-column align-items-end">
                <button onClick={clearCart} style={{"width":"100px"}} className="btn btn-danger">Очистить</button>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Тип</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Действия</th>
                        <th>Сумма</th>
                    </tr>
                    </thead>
                    <tbody>
                    {updatedData.map((item, index) => (
                        <tr className="" key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.price}</td>
                            <td className="text-center">{item.count}</td>
                            <td>
                                <button className="btn" onClick={() => clickUpCount(item.id)}>+</button>
                                <button className="btn" onClick={() => clickDownCount(item.id)}>-</button>
                            </td>
                            <td>
                                {item.price * item.count}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button onClick={nextClick} style={{"width":"100px"}} className="btn btn-primary">Далее</button>
            </div>
                ) : (
                <div className="container d-flex align-items-center justify-content-center gap-5">
                    <Image style={{'width':'100px', 'height':'100px'}} src={cartLogo} alt="cart logo"/>
                    <div>
                        <div className='fs-2'>В корзине нет товаров(</div>
                    </div>
                </div>
                )}
        </>
    );
}