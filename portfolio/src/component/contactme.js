import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';


import axios from 'axios';

class Contactme extends Component {
    constructor(props){
        super(props)

        this.state={
            first_name: "",
            last_name: "",
            email: "",
            subject: "",
            message:"",
            formValid: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
    }
    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }
    async sendEmail(e){
        e.preventDefault();

        const {first_name, last_name, email, subject, message} = this.state

        await axios.post('/form',{
            first_name,
            last_name,
            email,
            subject,
            message
        })

        
    }
    redirect(){
        window.location="/mailconf"  
    } 

    render(){
        return(
            <div className="container" style={{margin:'auto'}}>
                <h3>Contact Me</h3>
                <form className="col s12" onSubmit={this.sendEmail}>
                    <div className="row">
                        <div className="input-field col s6">
                        <i className="material-icons prefix">face</i>
                            <input id="first_name" type="text" className="validate" onChange={this.handleChange} required></input>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="last_name" type="text" className="validate" onChange={this.handleChange} required></input>
                            <label htmlFor="last_name">Last Name</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                            <input id="email" type="email" className="validate" onChange={this.handleChange} required></input>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                            <i className="material-icons prefix">subject</i>
                            <input id="subject" type="text" className="validate" onChange={this.handleChange} required></input>
                            <label htmlFor="subject">Subject</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="message" className="materialize-textarea" data-length="200" onChange={this.handleChange} required></textarea>
                            <label htmlFor="message">Please Enter your message here</label>
                        </div>
                    </div>
                    <div className="center">
                    <button className="btn-large waves-effect waves-light" onClick={this.redirect} type="submit" name="action">Send
                        <i className="material-icons right">send</i>
                    </button>
                    </div> 
                </form>
            </div>
        )
    }
}

export default Contactme;  