import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "react-bootstrap-dialog";
import { compose } from "redux";
import withPizzastoreService from "../hoc/with-pizzastore-service";
import { fetchSignInData } from "../../actions/user-actions";
import {Redirect} from "react-router";

class SignInPage extends Component {

    state = {
        userName: "",
        password: ""
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.userName === "" || this.state.password === "") {
            return this.dialog.show({
                title: "Empty fields",
                body: "Please enter your username and password",
                bsSize: "large"
            })
        } else {
            this.props.fetchSignInData(this.state.userName, this.state.password);
        }
    }

    render () {

        if (localStorage.getItem('token')) {
            return <Redirect to='/'/>;
        }

        return ( 
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label >User name</label>
                    <input
                    onChange={(e) => this.setState({ userName: e.target.value })} 
                    type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input
                    onChange={(e) => this.setState({ password: e.target.value })}  
                    type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button
                onClick={this.handleFormSubmit}
                    type="submit" className="btn btn-primary">Submit</button>
                <Dialog ref={(component) => {this.dialog = component}} />
            </form>
        )
    }

}

const mapStateToProps = ( {userName} ) => {
    return {
        userName
    }
};

const mapDispatchToProps = (dispatch, {pizzastoreService}) => {
    return {
        fetchSignInData: fetchSignInData(pizzastoreService, dispatch)
    }
} 



export default compose(
    withPizzastoreService(),
    connect(mapStateToProps,mapDispatchToProps)
)(SignInPage);