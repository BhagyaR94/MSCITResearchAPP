import axios from 'axios';

// const SERVER = 'http://192.168.8.101:3000';
const SERVER = '127.0.0.1:8080';

export class HttpUtils {

    head = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ',
        }
    };

    getRequest = (api, ...parameters) => {
        console.log('calling get api', api);
        return axios.get(SERVER + '/' + api, this.head).then().catch();
    };

    postRequest = (api, ...parameters) => {
        console.log('params', ...parameters);
        console.log('calling post api', api);
        return axios.post(SERVER + '/' + api, ...parameters, this.head).then().catch();
    }
}