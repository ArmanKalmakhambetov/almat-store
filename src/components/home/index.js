import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/header";
import img_cable from "/public/image/cable/cros_optical.png";
import {useDispatch, useSelector} from "react-redux";
import {addToCartProductAction} from "@/store/slices/productSlice";


export default function Pizzas() {
    const userCart = useSelector(state => state.userCart || []);
    console.log(userCart)

    const dispatch = useDispatch();

    const crossOptical = [
        { id: 1, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC ПУСТОЙ', price: 12500, count: 1 },
        { id: 2, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 4 PORT укомплектованный', price: 16200, count: 1 },
        { id: 3, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 8 PORT укомплектованный', price: 19700, count: 1 },
        { id: 4, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 12 PORT  укомплектованный', price: 23100, count: 1 },
        { id: 5, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 16 PORT укомплектованный', price: 27000, count: 1 },
        { id: 6, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 24 PORT  укомплектованный', price: 34000, count: 1 },
        { id: 7, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-2U-48-FC ПУСТОЙ', price: 23500, count: 1 },
        { id: 8, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-2U-48-FC/UPC OM4 32 PORT укомплектованный', price: 53530, count: 1 },
        { id: 9, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-2U-48-FC/UPC OM4 48 PORT укомплектованный', price: 67840, count: 1 },
        { id: 10, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'FDF 4U-SP-FC-144port ПУСТОЙ', price: 46500, count: 1 },
        { id: 11, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-4U-144-FC/UPC OM4 96 PORT укомплектованный', price: 135200, count: 1 },
        { id: 12, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-4U-144-FC/UPC OM4 144 PORT укомплектованный', price: 175320, count: 1, },
        { id: 13, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-DIN-12SC ПУСТОЙ (крепление на дин-рейку)', price: 8900, count: 1, },
        { id: 14, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-4SC ПУСТОЙ', price: 6300, count: 1, },
        { id: 15, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-8SC ПУСТОЙ', price: 8000, count: 1, },
        { id: 16, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-4FC ПУСТОЙ', price: 6300, count: 1, },
        { id: 17, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-8FC ПУСТОЙ', price: 8000, count: 1, },
        { id: 18, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-4SC SC или LC 4 PORT укомплектованный', price: 10300, count: 1, },
        { id: 19, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-8SC SC или LC 8 PORT укомплектованный', price: 15300, count: 1, },
        { id: 20, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-4FC FC/UPC 4 PORT укомплектованный', price: 10300, count: 1, },
        { id: 21, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-8FC FC/UPC до 8 PORT укомплектованный', price: 15300, count: 1, },

    ];


    const buttonClick = (item) => {
        dispatch(addToCartProductAction(item))
        console.log("Item" ,item);
    }
    return (
        <>
            <Header/>
            <div className="container" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
                {/*<nav className="navbar navbar-expand-sm bg-white navbar-dark sticky-top">*/}
                {/*    <div>*/}
                {/*        <ul className="navbar-nav">*/}
                {/*            <li className="nav-item">*/}
                {/*                <a className="nav-link text-secondary" href="#pizza">Пиццы</a>*/}
                {/*            </li>*/}
                {/*            <li className="nav-item">*/}
                {/*                <a className="nav-link text-secondary" href="#combo">Комбо</a>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</nav>*/}
                <div id="pizza" className="pizza">
                    <div className="pizza__title">
                        {crossOptical[0].mainType}
                    </div>
                    <div className="pizza__body row">
                        {crossOptical.map((item, index) => (
                                <div className="pizza__item d-flex flex-column gap-5 col-lg-3">
                                    <div className="pizza__item-start">
                                        <button className="pizza__img-button">
                                            <Image src={img_cable} alt="" className="pizza__item-img"/>
                                        </button>
                                        <div className="pizza__item-title">{item.name}</div>
                                        <div className="pizza__item-text">Тип: {item.type}</div>
                                    </div>
                                    <div className="pizza__item-end align-items-center d-flex justify-content-between">
                                        <div className="pizza__item-price">Цена: {item.price}</div>
                                        <button onClick={() => {
                                            buttonClick(item)
                                        }} className="pizza__item-button">Выбрать
                                        </button>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}