import React from 'react';
import "./pizza-menu-list-item.css";
const PizzaMenuListItem = ({pizza, onAddedToCart}) => {
    const {pizza_name, cooking_time} = pizza;
    

    return (
        <div className="card mb-3 li-container" >
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={`http://localhost:3001/pizza-pictures/pizza-icon.png`} className="card-img" alt="cover" width="60" height="200"/>
            </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{pizza_name}</h5>
                    <p className="card-text">Waiting for pizza: {cooking_time} minutes</p>
                    <p className="card-text"><small className="text-muted">Ingridients: tomatoes,pepperoni,cheese.</small></p>
                    <button
                    onClick={onAddedToCart} 
                    className="btn btn-info add-to-card">Add to card</button>
                </div>
                </div>
            </div>
        </div>
    );   
}

export default PizzaMenuListItem;  