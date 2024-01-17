import React, { useState } from 'react';
import {createProductAction} from "@/store/slices/productSlice";
import {useDispatch} from "react-redux";

const AddProductForm = () => {
    const [productMainType, setProductMainType] = useState('');
    const [productType, setProductType] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(''); // Состояние для хранения файла
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('productMainType', productMainType);
        formData.append('productType', productType);
        formData.append('productName', productName);
        formData.append('productPrice', productPrice);
        // formData.append('productImage', productImage);


        console.log({productPrice})
        console.log(Object.fromEntries(formData))

        dispatch(createProductAction(Object.fromEntries(formData)));

        setProductName('');
        setProductMainType('');
        setProductType('');
        setProductPrice('');
        // setProductImage(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProductImage(file);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Добавление продукта</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="productMainType" className="form-label">Основной тип:</label>
                            <input
                                type="text"
                                id="productMainType"
                                className="form-control"
                                value={productMainType}
                                onChange={(e) => setProductMainType(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productType" className="form-label">Тип:</label>
                            <input
                                type="text"
                                id="productType"
                                className="form-control"
                                value={productType}
                                onChange={(e) => setProductType(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label">Название продукта:</label>
                            <input
                                type="text"
                                id="productName"
                                className="form-control"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productPrice" className="form-label">Цена продукта:</label>
                            <input
                                type="text"
                                id="productPrice"
                                className="form-control"
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                                required
                            />
                        </div>
                        {/*<div className="mb-3">*/}
                        {/*    <label htmlFor="productImage" className="form-label">Выберите изображение:</label>*/}
                        {/*    <input*/}
                        {/*        type="file"*/}
                        {/*        id="productImage"*/}
                        {/*        className="form-control"*/}
                        {/*        onChange={handleFileChange}*/}
                        {/*        accept="image/*" // Только изображения*/}
                        {/*        required*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <button type="submit" className="btn btn-primary">Добавить продукт</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;
