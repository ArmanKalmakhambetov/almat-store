import {useDispatch, useSelector} from "react-redux";
import Header from "@/components/header";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Cart() {

    const dispatch = useDispatch();

    const data = useSelector((state) => state.usercart.userCart);
    console.log("Data",data)

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
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.price}</td>
                            <td>{item.count}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>


    );
}