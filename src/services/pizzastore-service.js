import axios from 'axios';

export default class PizzastoreService {

    _urlCase = 'http://localhost:3001/';

    getPizzas = async () => {
        return await axios.get(`${this._urlCase}menu/`)
        .then(res => res.data);
    } 
}