import React, {Component} from 'react';

class MailConf extends Component {
    constructor(){
        super()
        setTimeout(()=>{
            window.location="/contactme";
        },5000)
    }
    render(){
        return(
            <div className="container center" style={{marginTop: "5%"}}>
                <h4>Thank you for connecting.. Your mail has been received </h4>
                <h6>{`Redirecting.....`}</h6>
            </div>
        )
    }
}

export default MailConf;