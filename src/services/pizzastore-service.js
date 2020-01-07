import http from './httpService';
import config from '../config';


export default class PizzastoreService {

    getPizzas = async () => {
        return await http.get(`${config.urlCase}menu/`)
        .then(res => res.data);
    };

    signUp = async (user) => {
        return await http.post(`${config.urlCase}clients/add/`, {
            "clientName": user.userName,
            "password": user.password
        })
        .then(res =>{    if (res.status === 409) {
            alert('User existing!!!');
        }
           return res.data;
        })
        .catch(err => console.log("Error: ", err));
    };

    signIn = async (user) => {
        return await http.post(`${config.urlCase}authentication/`, {
            "clientName": user.userName,
            "password": user.password
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
