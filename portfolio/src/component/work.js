import React, { Component } from 'react';

class Work extends Component {
    render(){
        return(
            <div>
                <div className="row" style={{marginBottom: '0px'}}>
                    <div className="col s8 m7">
                        <h6>{this.props.workName}</h6>
                        <p style={{fontStyle: 'italic'}}>{this.props.workStatus}</p>
                    </div>
                    <div className="col s4 m5 right-align">
                        <h6>{this.props.startDate} - {this.props.endDate}</h6>
                    </div>
                </div>
                <ul className="a" style={{margin:'0px 0px 0px 25px'}}>
                    <li>Have great understanding of Canadian wireless companiest</li>
                    <li>Performed wireless activation for new and older customers as an agent of Bell Canada</li>
                    <li>Promote Bell Canada’s home services and encourage new activation </li>
                    <li>Have great understanding of variety of electrical equipment’s and their usage  </li>
                    <li>Tracked, managed and matched promotions from various competition so that customers get the best deal possible </li>
                </ul>   
                <div style={{margin:'10px'}}></div>
                <div className="row" style={{marginBottom: '0px'}}>
                    <div className="col s8 m7">
                        <h6>{this.props.workName2}</h6>
                        <p style={{fontStyle: 'italic'}}>{this.props.workStatus2}</p>
                    </div>
                    <div className="col s4 m5 right-align">
                        <h6>{this.props.startDate2} - {this.props.endDate2}</h6>
                    </div>
                </div>
                <ul className="a" style={{margin:'0px 0px 0px 25px'}}>
                    <li>Hands-on experience in accepting payments from customers and give change and receipts</li>
                    <li>In-depth knowledge of handling returns and exchanges for goods</li>
                    <li>Used accurate procedure for cash, credit, or any other types of payment</li>
                </ul>   
            </div>
        )
    }
}

export default Work;  