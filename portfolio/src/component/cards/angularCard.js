import React, { Component } from 'react'
import projimg01 from '../../resources/procimg01.jpg'
import projimg05 from '../../resources/img11.JPG'

import posed from 'react-pose';
import SplitText from 'react-pose-text';

const Sidebar = posed.div({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '-100%', delay: 300 },
});

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


class AngularCard extends Component {
    render(){
        return(
          <div>
            <div className="cardTitle-margin-padding">
            </div>
             <Sidebar initialPose="closed" pose="open">
            <div className="col s12 m6">
            <h4><SplitText initialPose="exit" pose="enter" charPoses={charPoses2}>Angular</SplitText></h4>
              <div className="card medium">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" alt="angular" src={projimg01}></img>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.cardTitle}<i className="material-icons right">more_vert</i></span>
                    <p><a href={this.props.url}><i className="fab fa-github-alt"></i> {this.props.linkName}</a></p>
                    <div className="row">
                      <div className="col s1">
                      <h5><i className="fab fa-angular"></i></h5>
                      </div>
                      <div className="col s1">
                      <h5><i className="fab fa-node"></i></h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.cardTitle}<i className="material-icons right">close</i></span>
                    <p>{this.props.cardContent}</p>
                  </div>
              </div>   
            </div>
            </Sidebar>
            <Sidebar initialPose="closed" pose="open">
            <div className="col s12 m6">
            <h4><SplitText initialPose="exit" pose="enter" charPoses={charPoses2}>PHP</SplitText></h4>
              <div className="card medium">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" alt="angular" src={projimg05}></img>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.cardTitle2}<i className="material-icons right">more_vert</i></span>
                    <p><a href={this.props.url2}><i className="fab fa-github-alt"></i> {this.props.linkName2}</a></p>
                    <div className="row">
                      <div className="col s1">
                      <h5><i className="fab fa-php"></i></h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.cardTitle2}<i className="material-icons right">close</i></span>
                    <p>{this.props.cardContent2}</p>
                  </div>
              </div>   
            </div>
            </Sidebar>
          </div>
          
   
                   
        )
    }
}

export default AngularCard;