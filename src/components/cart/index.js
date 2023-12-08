import {useDispatch, useSelector} from "react-redux";
import Header from "@/components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {incrementAction, decrementAction} from "@/store/slices/productSlice";
import {useRouter} from "next/navigation";


export default function Cart() {
    const data = useSelector((state) => state.usercart.userCart);
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

    return (
        <>
            <Header/>
            <div className="container d-flex flex-column align-items-end">
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
                                    {item.totalPrice}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={nextClick} style={{"width":"100px"}} className="btn btn-primary">Далее</button>
            </div>
        </>
    );
}