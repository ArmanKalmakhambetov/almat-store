import {useDispatch, useSelector} from "react-redux";
import Header from "@/components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {incrementAction, incrementReducer} from "@/store/slices/productSlice";


export default function Cart() {
    const [count, setCount] = useState(2);
    const data = useSelector((state) => state.usercart.userCart);
    const [updatedData, setUpdatedData] = useState(data);
    console.log("Data",data)




    const clickUpCount = (id) => {

        const updatedDataCopy = updatedData.map((item) => {
            if (item.id === id) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });

        setUpdatedData(updatedDataCopy);
        dispatch(incrementAction(id, updatedDataCopy));
        // console.log("Count ", count)
        // const updatedData = data.map((item) => {
        //     if (item.id === id) {
        //         return { ...item, count: count + 1 };
        //     }
        //
        //     return item;
        // });
        // setUpdatedData(updatedData);
        // dispatch(incrementAction(updatedData))
        // console.log("Updated Data ====", updatedData)

    }

    useEffect(() => {

    }, [updatedData])

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
                        {updatedData.map((item, index) => (

                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.price}</td>
                                <td>{item.count}</td>
                                <td className="d-flex">
                                    <button className="btn" onClick={() => clickUpCount(item.id, item.count)}>+</button>
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