import axios from 'axios';

const API_URL = "http://fakestoreapi.com/products";


export const getAllCategories = async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data;
}







