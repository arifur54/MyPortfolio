import React, { Component } from 'react';
import Education from './education';
import Work from './work';
import myimg from '../resources/me.jpg';
import resume from '../resources/ResumeUpdatedNov2018.doc';

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

  const charPoses3 = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 5
    }
  };

  const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 30
    }
  };



class Resume extends Component {
    render(){
        return(
            <div className="container mod-pos" style={{display: 'flex'}}>
                <div className="row">
                <Sidebar initialPose="exit" pose="enter">
                    <div className="col s12 m4">
                        
                        <img src={myimg} alt="Avatar" className="avatar-aboutme img-rotate "/>
                        <h4><SplitText charPoses={charPoses}>Arifur Rahman</SplitText></h4>
                        <h5><SplitText charPoses={charPoses3}>Software Developer</SplitText></h5>
                        <hr style={{borderTop: '3px solid #833fb2'}}></hr>
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To obtain a position as a software developer, develop applications and programs as required, and improve 
                        skills along the way as a developer and gain experience and knowledge in this industry
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
                    </Sidebar>
                    <div className="col s12 m8">
                    <Sidebar initialPose="exit" pose="enter">
                        <div className="background-resume">
                            <div className="resume-mergin-padding">
                                <h4><SplitText charPoses={charPoses3}>Education</SplitText></h4>
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
                                <h4><SplitText charPoses={charPoses}>Work Experience</SplitText></h4>
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
                        <a href={resume} download="resume.doc">
                        <button className="waves-effect waves-light btn right"><i className="material-icons left">cloud_download</i>Download Resume</button>
                        </a>
                        </Sidebar>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Resume;  