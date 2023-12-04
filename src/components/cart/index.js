import {useDispatch, useSelector} from "react-redux";
import Header from "@/components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {incrementAction, incrementReducer} from "@/store/slices/productSlice";


export default function Cart() {
    const [count, setCount] = useState(2);
    const data = useSelector((state) => state.usercart.userCart);
    console.log("Data",data)

    const clickUpCount = (id) => {
        setCount(count + 1);
        console.log("Count ", count)
        const updatedData = data.map((item) => {
            if (item.id === id) {
                return { ...item, count: count };
            }
            return item;
        });
        console.log("Updated Data ====", updatedData)
        dispatch(incrementAction(updatedData))
    }

    const clickDownCount = (id) => {
        setCount(count - 1);
    }
    const dispatch = useDispatch();



    return (
        <>
            <Header/>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Тип</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.price}</td>
                            <td>{item.count}</td>
                            <td className="d-flex">
                                <button className="btn" onClick={() => clickUpCount(item.id)}>+</button>
                                <button className="btn" onClick={() => clickDownCount(item.id)}>-</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>


    );
}