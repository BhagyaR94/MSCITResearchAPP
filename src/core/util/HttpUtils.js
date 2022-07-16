import axios from 'axios';
import { useSelector } from 'react-redux';
import store from '../store/store';

// const SERVER = 'http://192.168.1.16:8080';
const SERVER = 'https://research-bhagya.herokuapp.com';
//make sure that you don't use localhost when working with emulators or external devices as 
// the localhost is a relative term according to the device that you use.

export class HttpUtils {

    constructor() {

    }

    head = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: '',
        }
    };

    getRequest = (api, ...parameters) => {
        return axios.get(SERVER + '/' + api, this.head).then().catch();
    };

    postRequest = (api, ...parameters) => {
        this.head.headers.Authorization = `Bearer ${store.getState().authReducer && store.getState().authReducer.accessToken || ""}`;
        return axios.post(SERVER + '/' + api, ...parameters, this.head).then().catch();
    }
}

export const getAccessToken = () => {
    const auth = useSelector((state) => { state.auth });
    return auth ? auth.accessToken : '';
}