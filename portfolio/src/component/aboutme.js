import React, { Component } from 'react';
import img1 from '../resources/cardimg01.jpeg';
import img2 from '../resources/cardimg02.jpg';
import img3 from '../resources/cardimg03.jpg';
import img4 from '../resources/cardimg04.jpg';
import myimg from '../resources/me.jpg';
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

  const charPoses2 = {
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


class Aboutme extends Component {
    render(){
        return(
            <div className="container-body">
                <div className="container">
                    <div className="container-grid">
                        <div className="row">
                            <div className="col s12 m6">
                                {/* <div className="card-panel"> */}
                                <Sidebar className="sidebar" initialPose="exit" pose="enter">
                                    <h4> <SplitText charPoses={charPoses2}>About me</SplitText></h4>
                                </Sidebar>
                                <Sidebar className="sidebar" initialPose="exit" pose="enter">
                                    <img src={myimg} alt="Avatar" className="avatar-aboutme img-rotate" style={{float: "left", margin: "4px 10px 0px 0px"}}/>
                                   
                                    <p style={{textAlign: "left", marginBottom:"1px"}}>

                                    My name is Arifur Rahman, I am a Toronto based software developer. I am passionate about programming, 
                                    developing applications and learning about new and old technologies in general. I really like working on and developing web applications, 
                                    I am currently working and experimenting with Angular and React for front-end web development, and also getting accustomed to Node.js 
                                    for back-end web development. I have also recently experimented with DataFrames and data manipulation with python libraries such as Numpy, 
                                    Panda, Scikit-learn and also experimented with Artificial neural network using Tenserflow and it's extension Keras.
                                    </p>
                                    <p style={{marginTop: "1px"}}>
                                    Other than programming and coding I also like to do photography, travel to new places and I am always eager to meet and interact with new people and learn about a different 
                                    culture. also during my free time, I also like to play video games, watch movies but mostly I go through youtube videos and watch technology 
                                    related videos.
                                    </p>
                                </Sidebar> 
                                {/* </div> */}
                            </div>
                            <div className="col s12 m6">
                            <Sidebar className="sidebar" initialPose="exit" pose="enter">
                                <h4> <SplitText charPoses={charPoses2}>Skills</SplitText></h4>
                            </Sidebar>
                                    <h6><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>Angular</SplitText></h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '70%'}}></div>
                                    </div>
                                    <h6><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>React</SplitText></h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '60%'}}></div>
                                    </div>
                                    <h6><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>JavaScript</SplitText></h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '70%'}}></div>
                                    </div>
                                    <h6><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>Node.js</SplitText></h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '65%'}}></div>
                                    </div>
                                    <h6><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>Java</SplitText></h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '70%'}}></div>
                                    </div>
                                    <h6><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>Python</SplitText></h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '65%'}}></div>
                                    </div>
                                    <h6><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>Php</SplitText></h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '60%'}}></div>
                                    </div>
                                    <h6><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>My SQL</SplitText></h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '62%'}}></div>
                                    </div>
                                    <h6><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>C#</SplitText></h6>
                                    <div className="progress">
                                        <div className="determinate" style={{width: '65%'}}></div>
                                    </div>
                            </div>
                            <div className="col s12 m12">
                            <div className="center">
                            <Sidebar className="sidebar" initialPose="exit" pose="enter">
                                    <h4> <SplitText charPoses={charPoses2}>My Interests</SplitText></h4>
                            </Sidebar>
                            </div>
                            <div style={{color: "black"}}>
                                    <div className="col s12 m12 l6">
                                        <div className="card horizontal">
                                            <div className="card-image">
                                                <img src={img1} alt="img"></img>                                                
                                            </div>
                                            <div className="card-stacked">
                                                <div className="card-content">
                                                <h6>Coding</h6>
                                                {/* <p> */}
                                                <SplitText initialPose="exit" pose="enter" charPoses={charPoses2} className="f-p">
                                                    I really enjoy programming even in my free time. I like tinkering with technologies and different programming languages.
                                                    </SplitText>
                                                {/* </p>  */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m12 l6">
                                    <div className="card horizontal">
                                            <div className="card-image">
                                                <img src={img2} alt="img"></img>                                                
                                            </div>
                                            <div className="card-stacked">
                                                <div className="card-content">
                                                <h6>Photography</h6>
                                                {/* <p> */}
                                                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses2} className="f-p">
                                                        I like taking pictures and videos, my favourite types of photography is Landscape and 
                                                        portrate.
                                                    </SplitText>
                                                {/* </p>  */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m12 l6">
                                    <div className="card horizontal">
                                             <div className="card-image">
                                                <img src={img3} alt="img"></img>                                                
                                            </div>
                                            <div className="card-stacked">
                                                <div className="card-content">
                                                <h6>Video Games</h6>
                                                {/* <p> */}
                                                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses2} className="f-p">
                                                        I am really picky about games and what I play, I enjoy playing games with good narrative and
                                                        gameplay. One of my most favorite game of all time is Red Dead Redemption 2. 
                                                    </SplitText>
                                                {/* </p>  */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m12 l6">
                                    <div className="card horizontal">
                                            <div className="card-image">
                                                <img src={img4} alt="img"></img>                                                
                                            </div>
                                            <div className="card-stacked">
                                                <div className="card-content">
                                                <h6>Coffee</h6>
                                                {/* <p> */}
                                                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses2} className="f-p">
                                                        It gets me through my day, it helps me relax, specially when I am stuck at a problem.
                                                    </SplitText>
                                                {/* </p>  */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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