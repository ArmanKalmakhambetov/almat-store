import React, { useState } from 'react';
import { createProductAction } from "@/store/slices/productSlice";
import { useDispatch } from "react-redux";
import { useDropzone } from 'react-dropzone';
import { useRef } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
} from '@mui/material';

const AddProductForm = () => {
    const [mainType, setProductMainType] = useState('');
    const [type, setProductType] = useState('');
    const [name, setProductName] = useState('');
    const [price, setProductPrice] = useState('');
    const [productImages, setProductImages] = useState([]); // массив для хранения выбранных файлов
    const dispatch = useDispatch();
    const formData = new FormData();
    const [selectedFiles, setSelectedFiles] = useState([])
    const inputRef = useRef(null);


    const handleFileChange1 = (acceptedFiles) => {
        setSelectedFiles(acceptedFiles);
        console.log(selectedFiles)
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*', // specify the file types you want to accept
        multiple: true,
        maxFiles: 10,
        onDrop: handleFileChange1,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        formData.append('mainType', mainType);
        formData.append('type', type);
        formData.append('name', name);
        formData.append('price', price);
        selectedFiles.forEach((file) => {
            console.log(file)
            formData.append('image', file);
        });



        dispatch(createProductAction(formData));

        setProductName('');
        setProductMainType('');
        setProductType('');
        setProductPrice('');
        setProductImages([]);
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        setProductImages([...files]);
    };

    return (
        <Container>
            <Typography variant="h4">Добавление продукта</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Основной тип"
                    value={mainType}
                    onChange={(e) => setProductMainType(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Категория"
                    value={type}
                    onChange={(e) => setProductType(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Название продукта"
                    value={name}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Цена продукта"
                    value={price}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                />
                <div {...getRootProps()} style={{ cursor: 'pointer', padding: '20px', border: '2px dashed #ddd' }}>
                    <input {...getInputProps()} ref={inputRef} style={{ display: 'none' }} />
                    <p>Перетащите сюда файлы или нажмите, чтобы выбрать файлы</p>
                </div>

                {selectedFiles.length > 0 && (
                    <>
                        <p>Выбранные файлы:</p>
                        <ul>
                            {selectedFiles.map((file) => (
                                <li key={file.name}>{file.name}</li>
                            ))}
                        </ul>
                    </>
                )}

                {selectedFiles.length > 0 &&
                    selectedFiles.map((file) => (
                        <div key={file.name}>
                            <img src={URL.createObjectURL(file)} alt='' width={400} height={300} />
                        </div>
                    ))}

                <br />
                {/*<input*/}
                {/*    type="file"*/}
                {/*    onChange={handleFileChange}*/}
                {/*    accept="image/*"*/}
                {/*    multiple // Позволяет выбирать несколько файлов*/}
                {/*    required*/}
                {/*/>*/}
                <Button type="submit" variant="contained" color="primary">
                    Добавить продукт
                </Button>
            </form>
        </Container>
    );
};

export default AddProductForm;
