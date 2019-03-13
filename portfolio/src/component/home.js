import React, { Component } from 'react';
import myimg from '../resources/me.jpg';
class Home extends Component {
    render(){
        return(
            <div>
                <div className="home-color">
                    <div className="container center mod-pos">
                        <div className="row">
                            <div className="col s12">
                            <img src={myimg} alt="Arifur Rahman" className="avatar circle img-rotate img-hover"/>
                            </div>                    
                        </div>
                        <div className="banner-border">
                            <h4>Welcome to my <i>portfolio</i></h4>
                            <h4 className="flow-text">
                               My name is Arfur Rahman                               
                            </h4>
                            <h4 className="flow-text" style={{paddingBottom: "10px"}}>
                                I am a software developer
                            </h4>
                            
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