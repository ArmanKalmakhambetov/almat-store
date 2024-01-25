import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Button, Container, Typography, Divider, ThemeProvider, createTheme, Stack} from "@mui/material";
import img_cross from '../../../../store-back/public/cable/cros_optical.png';
import Header from "@/components/header";
import { getAllProductsAction, addToCartProductAction} from '@/store/slices/productSlice';
import Image from "next/image";


const theme = createTheme();

export default function Pizzas() {
    const dispatch = useDispatch();
    const [clickCount, setClickCount] = useState(0);
    const crossOptical = useSelector((state) => state.usercart.allProducts);
    const uniqueMainTypes = [...new Set(crossOptical.map((item) => item.mainType))];
    const [selectedMainType, setSelectedMainType] = useState('');
    const host ='http://localhost:8000';


    useEffect(() => {
        dispatch(getAllProductsAction());
        setSelectedMainType(uniqueMainTypes[0]);
    }, [crossOptical]);

    const handleNavItemClick = (mainType) => {
        setSelectedMainType(mainType);
    };

    const filteredCrossOptical = crossOptical.filter((item) => item.mainType === selectedMainType);

    const buttonClick = (item) => {
        setClickCount(clickCount + 1);
        dispatch(addToCartProductAction(item));
    };

    return (
        <ThemeProvider theme={theme}>
            <>
                <Header clickCount={clickCount} />

                <Container>
                    <Stack direction="row" spacing={2}>
                        {crossOptical
                            .filter((item, index, array) => array.findIndex((el) => el.mainType === item.mainType) === index)
                            .map((uniqueItem) => (
                                <Button key={uniqueItem.id} onClick={() => handleNavItemClick(uniqueItem.mainType)}>
                                    {uniqueItem.mainType}
                                </Button>
                            ))}
                    </Stack>
                    <Divider />
                    <div className="pizza">
                        <Typography variant="h4" className="pizza__title">
                            {selectedMainType}
                        </Typography>
                        <div className="pizza__body row">
                            {filteredCrossOptical.map((item, index) => (
                                <div key={index} className="pizza__item d-flex flex-column gap-5 col-lg-3">
                                    <div className="pizza__item-start">
                                        <Button className="pizza__img-button">
                                            {item.image.split(',').map((imageUrl, imageIndex) => {
                                                const trimmedUrl = `${host}${imageUrl.trim()}`;
                                                console.log(trimmedUrl);

                                                return(
                                                    <div key={imageIndex}>
                                                        <Image src={trimmedUrl} width={200} height={200} alt="Product image" />
                                                    </div>
                                                )

                                            })}

                                        </Button>
                                        <Typography variant="h6" className="pizza__item-title">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" className="pizza__item-text">
                                            Тип: {item.type}
                                        </Typography>
                                    </div>
                                    <div className="pizza__item-end align-items-center d-flex justify-content-between">
                                        <Typography variant="body1" className="pizza__item-price">
                                            Цена: {item.price}
                                        </Typography>
                                        <Button onClick={() => buttonClick(item)} className="pizza__item-button">
                                            Выбрать
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </>
        </ThemeProvider>
    );
}

//TODO: поиск по заказам, фильтрация и сортировка
//TODO: обновление в реальном времени заказа
//TODO: сортировка/фильтрация и поиск
//TODO: корзину и оформление заказа как в леруа
//TODO: Создать переменную в product slice url и проставить его во всех запросах