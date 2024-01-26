import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCartProductAction, getAllProductsAction, getAllProductsReducer} from "@/store/slices/productSlice";
import {Button, Container, Divider, Stack, ThemeProvider, createTheme, Typography} from "@mui/material";
import Image from "next/image";
import OrderDetails from "@/components/orderDetails";
import ProductDetails from "@/components/productDetails";

const theme = createTheme();

const AllProducts = () => {
    const dispatch = useDispatch();
    const [selectedMainType, setSelectedMainType] = useState('');
    const crossOptical = useSelector((state) => state.usercart.allProducts);
    const filteredCrossOptical = crossOptical.filter((item) => item.mainType === selectedMainType);
    const sortedCrossOptical = filteredCrossOptical
        ? [...filteredCrossOptical].sort((a, b) => a.id - b.id)
        : [];
    const uniqueMainTypes = [...new Set(crossOptical.map((item) => item.mainType))];
    const [selectedProductId, setSelectedProductId] = useState(null);
    const host = 'http://localhost:8000/';

    useEffect(() => {
        dispatch(getAllProductsAction());
        console.log(crossOptical)
        setSelectedMainType(uniqueMainTypes[0]);
    }, [crossOptical]);

    const handleNavItemClick = (mainType) => {
        setSelectedMainType(mainType);
    };

    const handleSelectProduct = (productId) => {
        setSelectedProductId(productId);
    };

    const handleGoBack = () => {
        setSelectedProductId(null);
    };

    return (
        <ThemeProvider theme={theme}>
            {selectedProductId ? (
                <ProductDetails productId={selectedProductId} onGoBack={handleGoBack}/>
            ) : (
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
                    <Divider/>
                    <div className="pizza">
                        <Typography variant="h4" className="pizza__title">
                            {selectedMainType}
                        </Typography>
                        <div className="pizza__body row">
                            {sortedCrossOptical.map((item, index) => (
                                <div key={index} className="pizza__item d-flex flex-column gap-5 col-lg-3">
                                    <div className="pizza__item-start">
                                        <Button className="pizza__img-button">
                                            {item.image.split(',').map((imageUrl, imageIndex) => {
                                                const trimmedUrl = `${host}${imageUrl.trim()}`;
                                                console.log(trimmedUrl);

                                                return (
                                                    <div key={imageIndex}>
                                                        <Image src={trimmedUrl} width={200} height={200}
                                                               alt="Product image"/>
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
                                        <Button onClick={() => handleSelectProduct(item.id)} className="pizza__item-button">
                                            Изменить
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            )}
        </ThemeProvider>
    );
}

export default AllProducts;
