import axios from 'axios';

export default class PizzastoreService {

    _urlCase = 'http://localhost:3001/';

    getPizzas = async () => {
        return await axios.get(`${this._urlCase}menu/`)
        .then(res => res.data);
    }

    signUp = async (userName, password) => {
        return await axios.post(`${this._urlCase}clients/add/`, {
            "clientName": userName,
            "password": password
        })
        .then(res => res.data)
        .catch(err => console.log("Error: ", err));
    } 

    signIn = async (userName, password) => {
        return await axios.post(`${this._urlCase}authentication/`, {
            "clientName": userName,
            "password": password
        })
        .then(res => res)
        .catch(err => err.response.status);
    } 
}