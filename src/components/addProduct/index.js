import React, { useState } from 'react';
import { createProductAction } from "@/store/slices/productSlice";
import { useDispatch } from "react-redux";
import {
    Container,
    Typography,
    TextField,
    Button,
} from '@mui/material';

const AddProductForm = () => {
    const [productMainType, setProductMainType] = useState('');
    const [productType, setProductType] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);
    const dispatch = useDispatch();
    const formData = new FormData();

    const handleSubmit = (e) => {
        e.preventDefault();


        formData.append('productMainType', productMainType);
        formData.append('productType', productType);
        formData.append('productName', productName);
        formData.append('productPrice', productPrice);
        formData.append('productImage', productImage);

        dispatch(createProductAction(Object.fromEntries(formData)));

        setProductName('');
        setProductMainType('');
        setProductType('');
        setProductPrice('');
        setProductImage(null);
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setProductImage(file);
    };

    return (
        <Container>
            <Typography variant="h4">Добавление продукта</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Основной тип"
                    value={productMainType}
                    onChange={(e) => setProductMainType(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Тип"
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Название продукта"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Цена продукта"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                />
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*" // Only images
                  required
                />
                <Button type="submit" variant="contained" color="primary">
                    Добавить продукт
                </Button>
            </form>
        </Container>
    );
};

export default AddProductForm;
