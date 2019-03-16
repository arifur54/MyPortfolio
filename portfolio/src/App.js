import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Main from './component/main';
import M from 'materialize-css';
import './App.css';

import mylogo from './resources/mylogo.png';


class App extends Component {
  state = { isOpen: false };

  componentDidMount(){
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    setTimeout(this.toggle, 1000);
  }
  openSideNav () {
    let elem = document.getElementById('slide-out')
    var instance = M.Sidenav.getInstance(elem);
    instance.open();
  }
  closeSideNav(){
    let elem = document.getElementById('slide-out')
    var instance = M.Sidenav.getInstance(elem);
    instance.close();
  }

  

  render() {
    return (
      <div>
        <div className="navbar-fixed">
      <nav className="nav-wrapper header-color">
        <div className="container li-font">
          <Link to="/" className="brand-logo"><img src={mylogo} alt="mylogo" style={{height: "70px", width: "70px"}}></img></Link>
          <Link to="#" className="sidenav-trigger" data-target="slide-out">
            <i className="material-icons" onClick={this.openSideNav} >menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contactme">Contact Me</Link></li>
          </ul>
        </div>
    </nav>
    </div>

    <ul className="sidenav sidenavbar-color" id="slide-out" >
      <div className="container li-font"  style={{color: 'aliceblue'}}>
        <h5>Menu Options</h5>  
        <li className="item"><Link to="/" style={{color: 'aliceblue'}} onClick={this.closeSideNav}>Home</Link></li>    
        <li className="item"><Link to="/aboutme" style={{color: 'aliceblue'}} onClick={this.closeSideNav}>About Me</Link></li>
        <li className="item"><Link to="/projects" style={{color: 'aliceblue'}} onClick={this.closeSideNav}>Projects</Link></li>
        <li className="item"><Link to="/resume" style={{color: 'aliceblue'}} onClick={this.closeSideNav}>Resume</Link></li>
        <li className="item"><Link to="/contactme" style={{color: 'aliceblue'}}  onClick={this.closeSideNav}>Contact Me</Link></li>
      </div>
    </ul>    

    <div>
        <Main />
    </div>


  </div>
    )
  }
}

export default App;
