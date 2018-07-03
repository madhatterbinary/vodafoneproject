import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vodafone-ulysses.firebaseio.com/'
});

export default instance;