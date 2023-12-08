import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/header";
import img_cross from "/public/image/cable/cros_optical.png";
import img_cable from "/public/image/cable/img_cable.png";
import {useDispatch, useSelector} from "react-redux";
import {addToCartProductAction} from "@/store/slices/productSlice";
import {useState} from "react";


export default function Pizzas() {
    const userCart = useSelector(state => state.userCart || []);
    console.log(userCart)

    //TODO: очистить корзину
    //TODO: сортировка/фильтрация
    //TODO: корзину и оформление заказа как в леруа
    //TODO: добавить бэк


    const dispatch = useDispatch();

    const crossOptical = [
        { id: 1, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC ПУСТОЙ', price: 12500, totalPrice: 12500, count: 1, image: img_cross},
        { id: 2, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 4 PORT укомплектованный', price: 16200, totalPrice: 16200, count: 1, image: img_cross},
        { id: 3, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 8 PORT укомплектованный', price: 19700, totalPrice: 19700, count: 1, image: img_cross},
        { id: 4, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 12 PORT  укомплектованный', price: 23100, totalPrice: 23100, count: 1, image: img_cross},
        { id: 5, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 16 PORT укомплектованный', price: 27000, totalPrice: 27000, count: 1, image: img_cross},
        { id: 6, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-1U-24-FC/UPC OM4 24 PORT  укомплектованный', price: 34000, totalPrice: 34000, count: 1, image: img_cross},
        { id: 7, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-2U-48-FC ПУСТОЙ', price: 23500, totalPrice: 23500, count: 1, image: img_cross },
        { id: 8, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-2U-48-FC/UPC OM4 32 PORT укомплектованный', price: 53530, totalPrice: 53530, count:1, image: img_cross },
        { id: 9, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-2U-48-FC/UPC OM4 48 PORT укомплектованный', price: 67840, totalPrice: 67840, count: 1, image: img_cross},
        { id: 10, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'FDF 4U-SP-FC-144port ПУСТОЙ', price: 46500, totalPrice: 46500, count: 1, image: img_cross},
        { id: 11, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-4U-144-FC/UPC OM4 96 PORT укомплектованный', price: 135200, totalPrice: 135200, count: 1, image: img_cross},
        { id: 12, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)', name: 'OK-FDF-4U-144-FC/UPC OM4 144 PORT укомплектованный', price: 175320, totalPrice: 175320, count: 1, image: img_cross },
        { id: 13, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-DIN-12SC ПУСТОЙ (крепление на дин-рейку)', price: 8900, totalPrice: 8900, count: 1, image: img_cross },
        { id: 14, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-4SC ПУСТОЙ', price: 6300, totalPrice: 6300, count: 1, image: img_cross },
        { id: 15, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-8SC ПУСТОЙ', price: 8000, totalPrice: 8000, count: 1, image: img_cross },
        { id: 16, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-4FC ПУСТОЙ', price: 6300, totalPrice: 6300, count: 1, image: img_cross },
        { id: 17, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-8FC ПУСТОЙ', price: 8000, totalPrice: 8000, count: 1, image: img_cross },
        { id: 18, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-4SC SC или LC 4 PORT укомплектованный', price: 10300, totalPrice: 10300, count: 1, image: img_cross },
        { id: 19, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-8SC SC или LC 8 PORT укомплектованный', price: 15300, totalPrice: 15300, count: 1, image: img_cross },
        { id: 20, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-4FC FC/UPC 4 PORT укомплектованный', price: 10300, totalPrice: 10300, count: 1, image: img_cross, },
        { id: 21, mainType: 'Кроссы FDF OM4', type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)', name: 'ОК-ОРБ-8-8FC FC/UPC до 8 PORT укомплектованный', price: 15300, totalPrice: 15300, count: 1, image: img_cross, },
        { id: 22, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-Т-А2-2.7', price: 251, totalPrice: 251, count: 1, image: img_cable },
        { id: 23, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-Т-А4-2.7', price: 258, totalPrice: 258, count: 1, image: img_cable },
        { id: 24, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-Т-А6-2.7', price: 269, totalPrice: 269, count: 1, image: img_cable },
        { id: 25, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-Т-А8-2.7', price: 280, totalPrice: 280, count: 1, image: img_cable },
        { id: 26, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-Т-А12-2.7', price: 306, totalPrice: 306, count: 1, image: img_cable },
        { id: 27, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-Т-А16-2.7', price: 332, totalPrice: 332, count: 1, image: img_cable },
        { id: 28, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-М2П-А2-2.7', price: 250, totalPrice: 250, count: 1, image: img_cable },
        { id: 29, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-М2П-А4-2.7', price: 257, totalPrice: 257, count: 1, image: img_cable },
        { id: 30, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-М2П-А8-2.7', price: 279, totalPrice: 279, count: 1, image: img_cable },
        { id: 31, mainType: 'Кабели', type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты', name: 'Кабель волоконно-оптический ОКСЛ-М2П-А16-2.7', price: 331, totalPrice: 331, count: 1, image: img_cable },
    ];

    const [selectedMainType, setSelectedMainType] = useState(crossOptical[0].mainType);

    const handleNavItemClick = (mainType) => {
        setSelectedMainType(mainType);
    };

    console.log("Selected Main Type ====", selectedMainType);

    const filteredCrossOptical = crossOptical.filter(item => item.mainType === selectedMainType);


    const buttonClick = (item) => {
        dispatch(addToCartProductAction(item))
        console.log("Item" ,item);
    }
    return (
        <>
            <Header/>
            <div className="container">
                <ul className="nav">
                    {crossOptical
                        .filter((item, index, array) => {
                            return array.findIndex((el) => el.mainType === item.mainType) === index;
                        })
                        .map((uniqueItem) => (
                            <li className="nav-item" key={uniqueItem.id}>
                                <button onClick={() => {handleNavItemClick(uniqueItem.mainType)}} className="nav-link">{uniqueItem.mainType}</button>
                            </li>
                        ))}
                </ul>
                <div id="pizza" className="pizza">
                    <div className="pizza__title">
                        {selectedMainType}
                    </div>
                    <div className="pizza__body row">
                        {filteredCrossOptical
                            .map((item, index) => (
                                <div key={index} className="pizza__item d-flex flex-column gap-5 col-lg-3">
                                    <div className="pizza__item-start">
                                        <button className="pizza__img-button">
                                            <Image src={item.image} alt="Product image" className="pizza__item-img"/>
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