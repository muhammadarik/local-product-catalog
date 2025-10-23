import React, { createContext, useState } from 'react';


const ProductsContext = createContext();


const initialProducts = [
{
id: '1',
name: 'Kain Tenun Lombok',
price: '150000',
description: 'Kain tenun khas Lombok, motif tradisional.',
image: null,
},
{
id: '2',
name: 'Oleh-oleh Dodol Garut',
price: '50000',
description: 'Dodol legit buatan UMKM lokal.',
image: null,
},
];


export const ProductsProvider = ({ children }) => {
const [products, setProducts] = useState(initialProducts);


const createProduct = (data) => {
const newProduct = { ...data, id: Date.now().toString() };
setProducts((prev) => [newProduct, ...prev]);
};


const updateProduct = (id, data) => {
setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...data } : p)));
};


const deleteProduct = (id) => {
setProducts((prev) => prev.filter((p) => p.id !== id));
};


const getProductById = (id) => products.find((p) => p.id === id);


return (
<ProductsContext.Provider value={{ products, createProduct, updateProduct, deleteProduct, getProductById }}>
{children}
</ProductsContext.Provider>
);
};


export default ProductsContext;