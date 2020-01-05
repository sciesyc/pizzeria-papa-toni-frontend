import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "react-bootstrap-dialog";
import { compose } from "redux";
import withPizzastoreService from "../hoc/with-pizzastore-service";
import { fetchSignInData } from "../../actions/actions-user";
import {Redirect} from "react-router";
import Input from "../input";

class SignInPage extends Component {

    state = {
        account: { userName: "", password: "" }
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
    };

    handleChange = ({currentTarget: input}) => {
        let account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account})
    };

    render () {
        let {userName, password} = this.state.account;

        if (localStorage.getItem('token')) {
            return <Redirect to='/'/>;
        }

        return ( 
            <form>
                <h3>Sign In</h3>
                <Input name="userName"
                       value={userName}
                       label="Username"
                       onChange={this.handleChange}
                />
                <Input name="password"
                       value={password}
                       label="Password"
                       onChange={this.handleChange}
                />
                <button
                    onClick={this.handleFormSubmit}
                    type="submit" className="btn btn-primary">
                    Submit
                </button>
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
};

export default compose(
    withPizzastoreService(),
    connect(mapStateToProps,mapDispatchToProps)
)(SignInPage);