import React, { Component } from 'react';

class Education extends Component {
    render(){
        return(
            <div>
                <div className="row" style={{marginBottom: '0px'}}>
                    <div className="col s8 m7">
                        <h6>{this.props.schoolName}</h6>
                        <p style={{fontStyle: 'italic'}}>{this.props.programName}</p>
                    </div>
                    <div className="col s4 m5 right-align">
                        <h6>{this.props.dates}</h6>
                    </div>
                </div>
                <ul className="a" style={{margin:'0px 0px 0px 25px'}}>
                    <li>Created Interactive websites using Html, CSS, PHP and JavaScript</li>
                    <li>Created console based, GUI applications using Java and C#</li>
                    <li>Designed Database and manipulated data using SQL Developer </li>
                </ul>   
                <div style={{margin:'10px'}}></div>
                <div className="row" style={{marginBottom: '0px'}}>
                    <div className="col s8 m7">
                        <h6>{this.props.schoolName2}</h6>
                        <p style={{fontStyle: 'italic'}}>{this.props.programName2}</p>
                    </div>
                    <div className="col s4 m5 right-align">
                        <h6>{this.props.startDate} - {this.props.endDate}</h6>
                    </div>
                </div>
                <ul className="a" style={{margin:'0px 0px 0px 25px'}}>
                    <li>Used adobe creative suit for verity of projects and assignments</li>
                    <li>Created Logos, developed webpage mockups, and various design for different projects</li>
                    <li>Developed short films and interview, using various cameras and equipment </li>
                </ul>   
            </div>
        )
    }
}

export default Education;  