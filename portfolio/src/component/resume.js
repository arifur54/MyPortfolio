import React, { Component } from 'react';
import Education from './education';
import Work from './work';
import myimg from '../resources/me.jpg';
import resume from '../resources/ResumeUpdatedNov2018.doc';

import posed from 'react-pose';
import SplitText from 'react-pose-text';
import M from 'materialize-css';


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
    componentDidMount(){
      let elems = document.querySelectorAll(".tabs")
      M.Tabs.init(elems); 
    }
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
                        <a href="/">atarifurrahman.com</a>
                        {/* <Link to="../resources/ResumeUpdatedNov2018.doc" download="ResumeUpdatedNov2018.doc">
                        <button className="waves-effect waves-light btn"><i className="material-icons left">cloud_download</i>Download Resume</button></Link> */}
                    </div>
                    </Sidebar>
                      <div className="col s12 m8">
                            <ul className="tabs" id="tabs">
                              <li className="tab col s6"><a href="#test1">Resume</a></li>
                              <li className="tab col s6"><a href="#test2">Cover Letter</a></li>
                            </ul>
                          <div id="test1">
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

                          <div id="test2">
                            <div className="background-resume">
                              <div className="resume-mergin-padding">
                                <p>Dear Reader,</p>
                                <p>I am writing to express my interest in software development and related fields. I’m currently in the sixth and final semester, 
                                  enrolled in Computer Programmer Analyst (T127) program at George Brown College. </p>
                                <p>
                                I have strong a foundation on object-oriented programming and web programming, I have designed and created multiple websites and small applications as
                                 a part of different projects in George Brown College. I am familiar with, Oracle SQL, Java, C#, JavaScript, Python, PHP, and with Agile methodology.  
                                I always like experimenting with new things and different technologies and I am always eager to meet new people and interact with them.
                                </p>  

                                <p>
                                  If you have any questions or concerns, feel free to contact me. The contact imformations are provided below.
                                </p>

                                <p>Best Regards,</p>
                                <p>Arifur Rahman</p>
                                </div>
                            </div>
                          </div>

                      </div>


                </div>
            </div>
        )
    }
}

export default Resume;  