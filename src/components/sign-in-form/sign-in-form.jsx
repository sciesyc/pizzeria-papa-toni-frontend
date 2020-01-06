import React from "react";
import { connect } from "react-redux";
import Joi from "joi";
import { compose } from "redux";
import withPizzastoreService from "../hoc/with-pizzastore-service";
import { fetchSignInData } from "../../actions/actions-user";
import {Redirect} from "react-router";
import Form from "../common/form";

class SignInForm extends Form {

  state = {
    data: { userName: "", password: ""},
    errors: {}
  };

  schema = {
    userName: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  doFormSubmit = () => {
    this.props.fetchSignInData(this.state.data.userName, this.state.data.password);
  };

  render () {
    let { data, errors} = this.state;

    if (localStorage.getItem('token')) {
      return <Redirect to='/'/>;
    }

    return (
      <form>
        <h3>Sign In</h3>
        {this.renderInput("userName", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("Sign in")}
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
)(SignInForm);