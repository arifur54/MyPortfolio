import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Main from './component/main';
import M from 'materialize-css';
import './App.css';


class App extends Component {
  componentDidMount(){
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
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
        <div className="container">
          <Link to="/" className="brand-logo">MY PORTFOLIO</Link>
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

    <ul className="sidenav sidenavbar-color" id="slide-out">
      <div className="container"  style={{color: 'aliceblue'}}>
        <h5>Menu Options</h5>   
        <li><Link to="/" style={{color: 'aliceblue'}} onClick={this.closeSideNav}>Home</Link></li>    
        <li><Link to="/aboutme" style={{color: 'aliceblue'}} onClick={this.closeSideNav}>About Me</Link></li>
        <li><Link to="/projects" style={{color: 'aliceblue'}} onClick={this.closeSideNav}>Projects</Link></li>
        <li><Link to="/resume" style={{color: 'aliceblue'}} onClick={this.closeSideNav}>Resume</Link></li>
        <li><Link to="/contactme" style={{color: 'aliceblue'}}  onClick={this.closeSideNav}>Contact Me</Link></li>
      </div>
    </ul>    

    <div>
        <Main />
    </div>

    {/* <footer className="page-footer" style={{backgroundColor: '#000000'}}>
      <div className="container center">
        Arifur Rahman © {(new Date().getFullYear())} <br></br>
        Made with react
      </div>
    </footer> */}
  </div>
    )
  }
}

export default App;
