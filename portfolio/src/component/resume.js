import React, { Component } from 'react';
import Education from './education';
import Work from './work';
import {Link} from 'react-router-dom';
import myimg from '../resources/me.jpg';

class Resume extends Component {
    render(){
        return(
            <div className="container mod-pos" style={{display: 'flex'}}>
                <div className="row">
                    <div className="col s12 m4">
                        
                        <img src={myimg} alt="Avatar" className="avatar-aboutme img-rotate "/>
                        <h4>Arifur Rahman</h4>
                        <h5>Software Developer</h5>
                        <hr style={{borderTop: '3px solid #833fb2'}}></hr>
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To obtain a position as a software developer, develop applications and programs as required, and improve skills along the way as a developer and gain experience and knowledge in this industry
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2'}}></hr>
                        <h5>Address</h5>
                        <p>110 River Street, Toronto, ON, M5A 0N3</p>
                        <h5>Phone</h5>
                        <p>647-706-0044</p>
                        <h5>Email</h5>
                        <p>arif.r.92@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        {/* <Link to="../resources/ResumeUpdatedNov2018.doc" download="ResumeUpdatedNov2018.doc">
                        <button className="waves-effect waves-light btn"><i className="material-icons left">cloud_download</i>Download Resume</button></Link> */}
                    </div>
                    <div className="col s12 m8">
                        <div className="background-resume">
                            <div className="resume-mergin-padding">
                                <h4>Education</h4>
                                <hr style={{borderTop: '2px solid white', margin: '1px'}}></hr>
                            </div>
                            <div className="resume-mergin-padding2">
                                    <Education
                                        schoolName="George Brown College, Toronto, ON"
                                        programName="Computer Programmer Analyst – Advanced Diploma"
                                        dates="Expected graduation 2019 "
                                        schoolName2="Humber College, Toronto, ON"
                                        programName2="Media Foundation Certification"
                                        startDate={2014}
                                        endDate={2015}
                                    />
                            </div>
                        

                            <div className="resume-mergin-padding">
                                <h4>Work Experience</h4>
                                <hr style={{borderTop: '2px solid white', margin: '1px'}}></hr>
                            </div>
                            <div className="resume-mergin-padding2">
                                    <Work
                                    workName="The Source Bell Electronic Toronto, ON"
                                    workStatus="Sales Associate"
                                    startDate={2014}
                                    endDate={2017}
                                    workName2="ESSO, Toronto, ON"
                                    workStatus2="Cashier"
                                    startDate2={2012}
                                    endDate2={2013}
                                    />
                            </div>
                        </div>
                        <Link to="../resources/ResumeUpdatedNov2018.doc" download="ResumeUpdatedNov2018.doc">
                        <button className="waves-effect waves-light btn right"><i className="material-icons left">cloud_download</i>Download Resume</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;  