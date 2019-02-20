import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://portfolio-data-2bf84.firebaseio.com/'
});


export default instance;