import React from "react";
import { connect } from "react-redux";
import Joi from "joi";
import { compose } from "redux";
import withPizzastoreService from "../hoc/with-pizzastore-service";
import {fetchSignUpData} from "../../actions/actions-user";
import {Redirect} from "react-router";
import Form from "../common/form";

class SignUpForm extends Form {

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
    this.props.fetchSignUpData(this.state.data);
  };

  render () {

    if (this.props.userName) {
      return <Redirect
        to="/signin"/>
    }

    return (
      <form>
        <h3>Sign Up</h3>
        {this.renderInput("userName", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("Sign up")}
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
    fetchSignUpData: fetchSignUpData(pizzastoreService, dispatch)
  }
}


export default compose(
  withPizzastoreService(),
  connect(mapStateToProps,mapDispatchToProps)
)(SignUpForm);