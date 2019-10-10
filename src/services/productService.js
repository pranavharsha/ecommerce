import axios from 'axios';


const config = { headers: { contentType: 'application/json' } };

export const getProducts = () => axios.get('https://anatta-demo-app.herokuapp.com/api/products', config);
export const getProductImage = (id) => axios.get(`https://anatta-demo-app.herokuapp.com/api/products/${id}/image`, config);