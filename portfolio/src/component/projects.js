import React, { Component } from 'react';
import AngularCard from './cards/angularCard';
import ReactCard from './cards/reactcard';
import AndroidCard from './cards/androidCard';
import AndroidCard2 from './cards/angularCard2';
import M from 'materialize-css';

class Projects extends Component { 
    componentDidMount(){
        let elems = document.querySelectorAll(".tabs")
        M.Tabs.init(elems); 
    }

    render(){
        return(
        <div className="row">
        <div className="col s12" style={{padding: "0px"}}>
        {/* <div className="container"> */}
          <ul className="tabs" id="tabs">
            <li className="tab col s6"><a href="#test1">Completed</a></li>
            <li className="tab col s6"><a href="#test2">Ongoing</a></li>
          </ul>
        {/* </div> */}
        </div>
        <div className="container">
        {/* Tab 1 */}
        <div id="test1">
          {/* <h4>Angular</h4> */}
            <AngularCard 
              url="https://github.com/"
              linkName="github"
              cardTitle="Video Store App"
              cardContent="Created with angular"
              url2="https://github.com/"
              linkName2="github"
              cardTitle2="Blah Blah Blah"
              cardContent2="Created with angular"
            
            />

            <ReactCard 
            url="https://github.com/"
            linkName="github"
            cardTitle="Video Store App"
            cardContent="Created with React"
            />

            <AndroidCard 
             url="https://github.com/"
             linkName="github"
             cardTitle="Video Store App"
             cardContent="Created with Android"
            />

         </div>



        {/* Tab 2 */}
        <div id="test2" className="col s12">
            <AndroidCard2 
            url="https://github.com/"
            linkName="github"
            cardTitle="Video Store App"
            cardContent="Created with Android"            
            />
            
        </div>
        </div>
      </div>
        
        )
    }
}

export default Projects; 