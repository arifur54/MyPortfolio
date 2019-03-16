import React, {Component} from 'react';
import projimg04 from '../../resources/procimg04.JPG';


class AngularCard2 extends Component{
    render(){
        return(
            <div>
            <div className="cardTitle-margin-padding">
            <h4>MEAN Stack</h4>
            </div>
            <div className="col s12 m1"></div>
            <div className="col s12 m10">
              <div className="card medium">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" alt="angular" src={projimg04}></img>
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
            <div className="col s12 m1"></div>
            
            </div>
        )
    }
}

export default AngularCard2;