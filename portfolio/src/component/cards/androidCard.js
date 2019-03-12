import React, {Component} from 'react';
import angular from '../../resources/angular.png'
class AndroidCard extends Component{
    render(){
        return(
            <div>
            <div className="cardTitle-margin-padding">
            <h4>Android</h4>
            </div>
            <div className="col s12 m1"></div>
            <div className="col s12 m10">
              <div className="card medium">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" alt="angular" src={angular}></img>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.cardTitle}<i className="material-icons right">more_vert</i></span>
                    <p><a href={this.props.url}>{this.props.linkName}</a></p>
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