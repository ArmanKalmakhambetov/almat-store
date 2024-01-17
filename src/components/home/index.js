import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/header";
import { getAllProductsAction} from '@/store/slices/productSlice';
import {useDispatch, useSelector} from "react-redux";
import {addToCartProductAction} from "@/store/slices/productSlice";
import {useEffect, useState} from "react";
import img_cross from '../../../../store-back/public/cable/cros_optical.png';
import img_cable from '../../../../store-back/public/cable/img_cable.png';

export default function Pizzas() {

    const dispatch = useDispatch();
    const [clickCount, setClickCount] = useState(0);
    const crossOptical = useSelector(state => state.usercart.allProducts);
    const uniqueMainTypes = [...new Set(crossOptical.map(item => item.mainType))];
    const [selectedMainType, setSelectedMainType] = useState('');


    useEffect(() => {
        dispatch(getAllProductsAction());
        setSelectedMainType(uniqueMainTypes[0])
    }, [crossOptical]);


    //TODO: компонент для вывода всех ордеров и изменение (нужно добавить связь с бэком)
    //TODO: компонент для создания продукта (нужно добавить связь с бэком)
    //TODO: аутентификация (будет страница для добавления нового продукта и будет страница где показывать все заказы и там можно будет менять статус заказа)
    //TODO: сортировка/фильтрация
    //TODO: корзину и оформление заказа как в леруа
    //TODO: разобраться с отображением изображений из базы
    //TODO: поиск по заказам, фильтрация и сортировка

    const handleNavItemClick = (mainType) => {
        setSelectedMainType(mainType);
    };

    console.log("Selected Main Type ====", selectedMainType);

    const filteredCrossOptical = crossOptical.filter(item => item.mainType === selectedMainType);


    const buttonClick = (item, event) => {
        setClickCount(clickCount + 1)
        dispatch(addToCartProductAction(item))
    }

    return (
        <>
            <Header clickCount = {clickCount}/>
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
                                            <Image src={img_cross} width={200} height={200} alt="Product image"/>
                                        </button>
                                        <div className="pizza__item-title">{item.name}</div>
                                        <div className="pizza__item-text">Тип: {item.type}</div>
                                    </div>
                                    <div className="pizza__item-end align-items-center d-flex justify-content-between">
                                        <div className="pizza__item-price">Цена: {item.price}</div>
                                        <button onClick={(e) => {
                                            buttonClick(item, e)
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