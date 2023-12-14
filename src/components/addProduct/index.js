import React, { useState } from 'react';

const AddProductForm = () => {

    const [productMainType, setProductMainType] = useState('');
    const [productType, setProductType] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Product added:', { productMainType, productType, productName, productPrice, productImage });

        setProductName('');
        setProductMainType('');
        setProductType('');
        setProductPrice('');
        setProductImage('');
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
                        <div className="mb-3">
                            <label htmlFor="productImage" className="form-label">Ссылка на изображение:</label>
                            <input
                                type="text"
                                id="productImage"
                                className="form-control"
                                value={productImage}
                                onChange={(e) => setProductImage(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Добавить продукт</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;
