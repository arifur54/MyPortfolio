import React, { Component } from 'react';
import axios from 'axios';

// const emailRegex = RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//   );

import posed from 'react-pose';
import SplitText from 'react-pose-text';


const Sidebar = posed.div({
    exit: {
      x: '-100%'
    },
    enter: {
      x: '0%',
      beforeChildren: true,
      staggerChildren: 50
    }
  });
  const charPoses = {
    exit: { y: 20, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
      transition: ({ charInWordIndex }) => ({
        type: 'spring',
        delay: charInWordIndex * 10,
        stiffness: 500 + charInWordIndex * 150,
        damping: 10 - charInWordIndex * 0.5
      })
    }
  };

const formValid = (formErrors, ...rest) =>{
    let valid = true;

   Object.values(formErrors).forEach(val => {
      val.length <= 0 && (valid = false)
   })

   Object.values(rest).forEach(val => {
       val != null && (valid = false)
   })
    return valid;

}

class Contactme extends Component {
    constructor(props){
        super(props)

        this.state={
            first_name: "",
            last_name: "",
            email: "",
            subject: "",
            message: "",
            formErrors: {
                first_name: "",
                last_name: "",
                email: "",
                subject: "",
                message: ""
            }
        }
    

        
        this.handleChange = this.handleChange.bind(this)
        this.sendEmail = this.sendEmail.bind(this)    
        
    }
    handleChange = e => {
        e.preventDefault();
        const {id , value} = e.target;
        let formErrors = this.state.formErrors;
    
        switch(id){
            case "first_name":
            formErrors.first_name = value.length > 0 ? "First Name is Required" : ""
            break;
            case "last_name":
            formErrors.last_name = value.length > 0 ? "Last Name is Required " : ""
            break;
            case "email":
            formErrors.email = value.length > 0 ? "Email Required" : ""
            break;
            case "subject":
            formErrors.subject = value.length > 0 ? "Subject Required" : ""
            break;
            case "message":
            formErrors.message = value.length > 0 ? "message Required" : ""
            break;
            default:
            break;
         }

        this.setState({ formErrors, [id]: value })
    }
    async sendEmail(e){
        e.preventDefault();

        const {first_name, last_name, email, subject, message} = this.state

        if(formValid(this.state.formErrors)){
            console.log("Submitting") 
            this.props.history.push('/mailconf');
            await axios.post('/form',{
            first_name,
            last_name,
            email,
            subject,
            message
            })    
        }else{
            console.log("form invalid")
        }
                
    }


    render(){
        return(
            <div className="container" style={{margin:'auto'}}>
            {/* <div className="container-grid2"> */}
            <Sidebar className="sidebar" initialPose="exit" pose="enter">
            <h4> <SplitText charPoses={charPoses}>Contact Me</SplitText></h4>
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
                        <button className="btn-large waves-effect waves-light" type="submit" name="action">Send
                            <i className="material-icons right">send</i>
                        </button>
                    </div> 
                </form>
                </Sidebar>
                {/* </div> */}
            </div>
        )
    }
}

export default Contactme;  