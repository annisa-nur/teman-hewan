import React from "react"; 
import { Component } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Cart from "./Cart";

export default class ApprovalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3000/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render() {
    return(
      <div className="App" >
        {/* <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST"> */}
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} >
          <div className="form-col">
            <article className="descp">
              <h3>Approval Form</h3>
              <p>Get your approval from the owner of the pet</p>
            </article>
            <div className="form-approval">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-approval">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-approval">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <div className="button-approval">
              <Link to="/Cart" className="btn-primary">
                Get Approval!
              </Link>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
  handleSubmit(event) {
  }
}
