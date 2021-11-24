import axios from "axios";

export const fetchData = (dispatch, addResluts) => {
    axios.get('https://fakestoreapi.com/products')
    .then((data) => dispatch(addResluts(data.data)))};