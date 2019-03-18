import React, { Component } from 'react';
import projimg02 from '../../resources/procimg02.JPG'

// import posed from 'react-pose';
import SplitText from 'react-pose-text';

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


// const Sidebar = posed.div({
//   open: {
//     x: '0%',
//     delayChildren: 200,
//     staggerChildren: 50
//   },
//   closed: { x: '-100%', delay: 300 },
// });


class ReactCard extends Component {
    render(){
        return(
            <div>
            <div className="cardTitle-margin-padding">
            <h4><SplitText initialPose="exit" pose="enter" charPoses={charPoses2}>React</SplitText></h4>
            </div>
            <div className="col s12 m1 l1"></div>
            {/* <Sidebar initialPose="closed" pose="open"> */}
            <div className="col s12 m10 l10">
              <div className="card medium">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" alt="angular" src={projimg02}></img>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.cardTitle}<i className="material-icons right">more_vert</i></span>
                    <p><a href={this.props.url}><i className="fab fa-github-alt"></i> {this.props.linkName}</a></p>
                    <div className="row">
                      <div className="col s1">
                      <h5><i className="fab fa-react"></i></h5>
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
            {/* </Sidebar> */}
            <div className="col s12 m1 l1"><br></br></div>
            </div>
        )
    }
}

export default ReactCard;
