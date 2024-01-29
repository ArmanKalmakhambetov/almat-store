import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    Button,
    Container,
    Typography,
    Divider,
    ThemeProvider,
    createTheme,
    Stack,
    MenuItem,
    FormControl,
    Select
} from "@mui/material";
import Header from "@/components/header";
import {getAllProductsAction, addToCartProductAction} from '@/store/slices/productSlice';
import Image from "next/image";
import sort from '../../../public/image/cable/sort.png';

const theme = createTheme();


export default function Pizzas() {
    const dispatch = useDispatch();
    const [clickCount, setClickCount] = useState(0);
    const [selectedMainType, setSelectedMainType] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const crossOptical = useSelector((state) => state.usercart.allProducts);
    const host = 'http://localhost:8000';
    const [sortState, setSortState] = useState('');

    // Extract uniqueMainTypes and uniqueTypes based on the selectedMainType
    const uniqueMainTypes = [...new Set(crossOptical.map((item) => item.mainType))];
    const uniqueTypes = selectedMainType
        ? [...new Set(crossOptical.filter((item) => item.mainType === selectedMainType).map((item) => item.type))]
        : [];

    useEffect(() => {
        dispatch(getAllProductsAction());
        setSelectedMainType(uniqueMainTypes[0]);
    }, [crossOptical]);

    const handleNavItemClick = (mainType) => {
        setSelectedMainType(mainType);
        setSelectedType(''); // Reset selectedType when changing mainType
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
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

    const setActiveState = (number) => {
        if (sortState == '1') {
            setSortState('2')
        } else {
            setSortState(number)
        }
        console.log(sortState)

    }

    const filteredMainType = crossOptical.filter((item) => item.mainType === selectedMainType);

    const filteredByType = selectedType
        ? filteredMainType.filter((item) => item.type === selectedType)
        : filteredMainType;

    const sortedProducts = filteredByType
        .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortState === '1') {
                return a.price - b.price;
            } else if (sortState === '2') {
                return b.price - a.price;
            }
            return 0;
        });

    return (
        <ThemeProvider theme={theme}>
            <>
                <Header clickCount={clickCount}/>

                <Container>
                    <FormControl>
                        <Select
                            value={selectedMainType}
                            onChange={(event) => handleNavItemClick(event.target.value)}
                            displayEmpty
                        >
                            <MenuItem value="" disabled>
                                Select Main Type
                            </MenuItem>
                            {uniqueMainTypes.map((uniqueItem) => (
                                <MenuItem key={uniqueItem} value={uniqueItem}>
                                    {uniqueItem}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {selectedMainType && (
                        <FormControl>
                            <Select
                                value={selectedType}
                                onChange={handleTypeChange}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    Select Type
                                </MenuItem>
                                <MenuItem value="">
                                    Show All Types
                                </MenuItem>
                                {uniqueTypes.map((type) => (
                                    <MenuItem key={type} value={type}>
                                        {type}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    <Divider/>

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
                            <Button onClick={() => setActiveState('1')}>
                                <Image src={sort} alt='alt'></Image>

                            </Button>
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

