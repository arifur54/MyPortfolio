import React, {Component} from 'react';
import projimg03 from '../../resources/procimg03.jpg'
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

class AndroidCard extends Component{
    render(){
        return(
            <div>
            <div className="cardTitle-margin-padding">
            <h4><SplitText initialPose="exit" pose="enter" charPoses={charPoses2}>Android</SplitText></h4>
            </div>
            <div className="col s12 m1"></div>
            <div className="col s12 m10">
              <div className="card medium">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" alt="angular" src={projimg03}></img>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.cardTitle}<i className="material-icons right">more_vert</i></span>
                    <p><a href={this.props.url}><i className="fab fa-github-alt"></i> {this.props.linkName}</a></p>
                    <div className="row">
                      <div className="col s3">
                      <h5><i className="fab fa-android"></i></h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.cardTitle}<i className="material-icons right">close</i></span>
                    <p>{this.props.cardContent}</p>
                  </div>
              </div>   
            </div>
            <div className="col s12 m1"></div>
           

            </div>
        )
    }
}

export default AndroidCard;