import React, { Component } from 'react';
import myimg from '../resources/me.jpg';

class Aboutme extends Component {
    render(){
        return(
            <div className="container-body">
                <div className="container">
                    <div className="container-grid">
                        <div className="row">
                            <div className="col s12 m6">
                                <div className="container center">
                                    <h3 style={{textDecoration: "underline"}}>About me</h3>
                                    <img src={myimg} alt="Avatar" className="avatar-aboutme img-rotate"/>
                                    <p>Hello there, My name is Arifur Rahman, I am Toronto based software developer. I am currently on my final semister of
                                        computer programming analytic program at George Brown college. 
                                    </p>
                                </div>
                            </div>
                            <div className="col s12 m6">
                                <div className="container center">
                                    <h3>Skills</h3>
                                    <h6>Angular</h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '70%'}}></div>
                                    </div>
                                    <h6>React</h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '60%'}}></div>
                                    </div>
                                    <h6>JavaScript</h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '70%'}}></div>
                                    </div>
                                    <h6>Nodejs</h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '65%'}}></div>
                                    </div>
                                    <h6>Java</h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '67%'}}></div>
                                    </div>
                                    <h6>Python</h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '65%'}}></div>
                                    </div>
                                    <h6>Php</h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '60%'}}></div>
                                    </div>
                                    <h6>My SQL</h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '62%'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m12">
                            <h3>My Interests</h3>
                                <div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;  