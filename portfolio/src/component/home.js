import React, { Component } from 'react';
// import myimg from '../resources/me.jpg';
import myimg2 from '../resources/me2.jpg'
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
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 30
    }
  };




class Home extends Component {
    render(){
        return(
            <div>
                <div className="home-color">
                    <div className="container center mod-pos">
                        <div className="row">
                        <Sidebar className="sidebar" initialPose="exit" pose="enter">
                            <div className="col s12">
                            <img src={myimg2} alt="Arifur Rahman" className="avatar circle img-hover"/>
                            </div>          
                            </Sidebar>          
                        </div>
                        <div className="banner-border">
                        
                            <h4><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                            Welcome to my 
                             </SplitText><i><SplitText initialPose="exit" pose="enter" charPoses={charPoses}> portfolio</SplitText></i></h4>
                            <h4 className="flow-text">
                            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                               My name is Arfur Rahman  
                            </SplitText>                                
                            </h4>
                            <h4 className="flow-text" style={{paddingBottom: "10px"}}>
                            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                I am a software developer
                            </SplitText>    
                            </h4>
                       
                            <hr/>
                            <Sidebar className="sidebar" initialPose="exit" pose="enter">
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/arifur-rahman-03719614b/" aria-hidden="true"><i className="fab fa-linkedin"></i></a>
                                <a href="https://www.facebook.com/profile.php?id=764825532" aria-hidden="true"><i className="fab fa-facebook"></i></a>
                                <a href="https://github.com/arifur54/" aria-hidden="true"><i className="fab fa-github-alt"></i></a>
                            </div>
                            </Sidebar>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;  