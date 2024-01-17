import {useDispatch, useSelector} from "react-redux";
import Header from "@/components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from "next/navigation";
import ContactForm from "@/components/contacts";


export default function Order() {
    const data = useSelector((state) => state.usercart.userCart);
    const dispatch = useDispatch();
    const router = useRouter();
    let total = 0;
    console.log(data);

    data.map(item => {
        total += item.count * item.price;
    })


    return (
        <>
            <Header/>
            <div className="container d-flex gap-5">
                <div style={{"width":"500px"}}>
                    <ContactForm total={total}/>
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Тип</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Сумма</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <>

                            <tr className="" key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.price}</td>
                                <td className="text-center">{item.count}</td>
                                <td>{item.price * item.count}</td>
                            </tr>
                        </>
                    ))}
                    </tbody>
                    <div className="mt-5">
                        Итог: {total}
                    </div>
                </table>

            </div>
        </>
    );
}