import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Typography, Divider, ThemeProvider, createTheme, Stack } from "@mui/material";
import Header from "@/components/header";
import { getAllProductsAction, addToCartProductAction } from '@/store/slices/productSlice';
import Image from "next/image";

const theme = createTheme();

export default function Pizzas() {
    const dispatch = useDispatch();
    const [clickCount, setClickCount] = useState(0);
    const [selectedMainType, setSelectedMainType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const crossOptical = useSelector((state) => state.usercart.allProducts);
    const uniqueMainTypes = [...new Set(crossOptical.map((item) => item.mainType))];

    const host = 'http://localhost:8000';

    useEffect(() => {
        dispatch(getAllProductsAction());
        setSelectedMainType(uniqueMainTypes[0]);
    }, [crossOptical]);

    const handleNavItemClick = (mainType) => {
        setSelectedMainType(mainType);
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const buttonClick = (item) => {
        setClickCount(clickCount + 1);
        dispatch(addToCartProductAction(item));
    };

    const filteredCrossOptical = crossOptical.filter((item) => item.mainType === selectedMainType);
    const sortedCrossOptical = filteredCrossOptical
        ? [...filteredCrossOptical].sort((a, b) => a.id - b.id)
        : [];

    const filteredProducts = sortedCrossOptical.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortBy === 'asc') {
            return a.price - b.price;
        } else if (sortBy === 'desc') {
            return b.price - a.price;
        }
        return 0;
    });

    return (
        <ThemeProvider theme={theme}>
            <>
                <Header clickCount={clickCount} />

                <Container>
                    <Stack direction="row" spacing={2}>
                        {uniqueMainTypes.map((uniqueItem) => (
                            <Button key={uniqueItem} onClick={() => handleNavItemClick(uniqueItem)}>
                                {uniqueItem}
                            </Button>
                        ))}
                    </Stack>
                    <Divider />

                    <div className="pizza">
                        <Typography variant="h4" className="pizza__title">
                            {selectedMainType}
                        </Typography>

                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={handleSearchTermChange}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">
                                    Search
                                </button>
                            </div>
                        </div>

                        <div className="mb-3">
                            <select className="form-select" value={sortBy} onChange={handleSortChange}>
                                <option value="">Sort by</option>
                                <option value="asc">Price: Low to High</option>
                                <option value="desc">Price: High to Low</option>
                            </select>
                        </div>

                        <div className="pizza__body row">
                            {sortedProducts.map((item, index) => (
                                <div key={index} className="pizza__item d-flex flex-column gap-5 col-lg-3">
                                    <div className="pizza__item-start">
                                        <Button className="pizza__img-button">
                                            {item.image.split(',').map((imageUrl, imageIndex) => {
                                                const trimmedUrl = `${host + imageUrl.trim()}`;
                                                console.log(trimmedUrl);

                                                return (
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
//TODO: сортировка/фильтрация и поиск
//TODO: slider
//TODO: корзину и оформление заказа как в леруа
//сделать jwt token или как-то оставлять авторизованным

