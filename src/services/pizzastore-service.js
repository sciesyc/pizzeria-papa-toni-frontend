import http from './httpService';
import config from '../config';


export default class PizzastoreService {

    getPizzas = async () => {
        return await http.get(`${config.urlCase}menu/`)
        .then(res => res.data);
    };

    signUp = async (userName, password) => {
        return await http.post(`${config.urlCase}clients/add/`, {
            "clientName": userName,
            "password": password
        })
        .then(res => res.data)
        .catch(err => console.log("Error: ", err));
    };

    signIn = async (userName, password) => {
        return await http.post(`${config.urlCase}authentication/`, {
            "clientName": userName,
            "password": password
        })
        .then(res =>res)
        .catch(err => err.response.status);
    };

    sentOrder = async (userName, isDone, totalCookingTime) => {
        return await http.post(`${config.urlCase}menu/add/`, {
            "clientName": userName,
            "isReady": isDone,
            "cooking_time": totalCookingTime
    })
        .then(res => {
            if (res.data.cooking_time === 0) {
                return;
            }
            return res.data;
        })
        .catch(err => console.log(err))
    };

    getOrderHistory = async (userName) => {
        return await http.get(`${config.urlCase}history/${userName}/`)
        .then(res=> {
            return res.data
        })
        .catch(err => console.log(err));
    }
};
