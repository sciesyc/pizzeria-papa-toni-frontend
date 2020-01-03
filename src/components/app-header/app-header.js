import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './app-header.css';
import {compose} from "redux";
import withPizzastoreService from "../hoc/with-pizzastore-service";

class AppHeader extends Component {

    itemsCounter = (item, idx) => {
        let {count} = item;
        let sum = 0;
        sum += count;
        return sum;
    }

 render() {


   const { orderTotal, items, count } = this.props;
     return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/">
            <div className="navbar-brand" href="#">Papa Toni</div>
          </Link>
          
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li key="homelink" className="nav-item active">
              <Link to="/">
                <div className="nav-link" href="#">Home <span className="sr-only">(current)</span></div>
              </Link>
            </li>
            <li  key="signinlink" className="nav-item">
              <Link to="/signin">
                <div className="nav-link" href="#">Sign in</div>
              </Link>
            </li>
            <li  key="signuplink" className="nav-item">
              <Link to="/signup">
                <div className="nav-link" href="#">Sign up</div>
              </Link>
            </li>
            <li  key="historylink" className="nav-item">
             <Link to="/history">
                <div className="nav-link" href="#">History</div>
             </Link>
            </li>
            <li  key="logoutlink" className="nav-item">
              <Link to="/logout">
                <div className="nav-link" href="#">Log out</div>
              </Link>
            </li>
          </ul>
          <Link to="/cart">
          <div>
            <i className="cart-icon fa fa-shopping-cart" />
              Items {items.length }({orderTotal})
          </div>
          </Link>
        </div>
      </nav>
     )
  }
}

const mapStateToProps = ({ orderCart: { cartItems, orderTotal }}) => {
    return {
        orderTotal,
        items:cartItems
    }
};

export default connect(mapStateToProps)(AppHeader);