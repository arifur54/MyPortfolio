import React, { Component } from 'react';
import myimg from '../resources/me.jpg';
class Home extends Component {
    render(){
        return(
            <div style={{width: '100%', height: '100%',margin: 'auto'}}>
                <div className="home-color">
                    <div className="container center">
                        <div className="row">
                            <div className="col s12">
                            <img src={myimg} alt="Arifur Rahman" className="avatar circle img-rotate img-hover"/>
                            </div>                    
                        </div>
                        <div className="banner-border">
                            <p className="flow-text">
                                Hi, My name is Arifur Rahman, I am Toronto based software developer. Blah blah blah.
                                 My name is Arifur Rahman, I am Toronto based software developer. 
                                 My name is Arifur Rahman, I am Toronto based software developer.
                            </p>
                            <hr/>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/arifur-rahman-03719614b/" aria-hidden="true"><i className="fab fa-linkedin"></i></a>
                                <a href="https://www.facebook.com/profile.php?id=764825532" aria-hidden="true"><i className="fab fa-facebook"></i></a>
                                <a href="https://github.com/arifur54/" aria-hidden="true"><i className="fab fa-github-alt"></i></a>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;  