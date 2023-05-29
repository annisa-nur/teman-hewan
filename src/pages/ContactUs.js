import React from "react"; 
import { Component } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Cart from "./Cart";
import { FaHome } from "react-icons/fa";

export default class ContactUs extends Component {
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
            <Link to="/"><FaHome className="home-btn"/></Link>
              <h3 className="cnt">Contact Us</h3>
            </article>
            <div className="form-approval">
              <label className="txt-aprv"htmlFor="name">Name</label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-approval">
              <label className="txt-aprv"htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-approval">
              <label className="txt-aprv"htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <section className="button-approval">
            <Popup trigger=
                {<button className="btn-primary">Send</button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Email successfully delivered..
                            </div>
                        </div>
                    )
                }
            </Popup>
            </section>
          </div>
        <Footer />
        </form>
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
