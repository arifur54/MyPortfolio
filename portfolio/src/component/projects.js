import React, { Component } from 'react';
import AngularCard from './cards/angularCard';
import ReactCard from './cards/reactcard';
import AndroidCard from './cards/androidCard';
import AngularCard2 from './cards/angularCard2';
import M from 'materialize-css';
import posed from 'react-pose';

const Sidebar = posed.div({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '-100%', delay: 300 },
});

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
        {/* <Sidebar initialPose="closed" pose="open"> */}
          {/* <h4>Angular</h4> */}
            <AngularCard 
              url="https://github.com/arifur54/VideoStoreProject"
              linkName="github repositories"
              cardTitle="Video Store App"
              cardContent="This a simple video store application for managing movies and customer, this application implements full CRUD (Create, read, update, and delete) operations
              as well as manages movies and status. This application was created with MEAN Stack (Angular, Express, Node.js and MongoDB)"
              url2="https://github.com/arifur54/contactPhp"
              linkName2="github repositories"
              cardTitle2="Contact List"
              cardContent2="Simple contact list created with Php. With this application, users can store a person's contact information
              along with images as well as update and delete contacts as they prefer"
            
            />
          {/* </Sidebar> */}
          {/* <Sidebar initialPose="closed" pose="open"> */}
            <ReactCard 
            url="https://github.com/arifur54/MyPortfolio"
            linkName="github repositories"
            cardTitle="My Portfolio"
            cardContent="This website was created using React and Node.js, React along with Materializecss was used to create front-end user interface, events and routing of the website and Node.js along with 
            Nodemailer was used to handle back-end server that allows users to send an email. "
            />
          {/* </Sidebar> */}

          <Sidebar initialPose="closed" pose="open">
            <AndroidCard 
             url="https://github.com/arifur54/AndroidProjectV2"
             linkName="github reprositories"
             cardTitle="ResTracker"
             cardContent="An Android program that allows users to keep track of their favorite restaurents. Users can enter their favourite restaurant name,
             location (which is auto generated using Googles Places Autocomplete API), tags, descrpition and rating . the users can later view 
            the names and locations of the restaurants as well as share those information to others via email. "
            />
        </Sidebar>
         </div>



        {/* Tab 2 */}
        <div id="test2" className="col s12">
            <AngularCard2 
            url="https://github.com/farhadraiyan/CityHopper"
            linkName="github reprositories"
            cardTitle="City Hopper"
            cardContent="I am currently working on project name City Hopper. It is currently under active development with four other talented developers in the group. 
            This app connects drivers and riders, making the travel between cities more affordable and easier. This app allows users to select their designated destination and 
            it will match with the drivers that are going to that specific destinations. This app also allows the drivers to pick the time and date and location they want to go to and meet up,
             as well as how much each driver are willing to charge."            
            />
            
        </div>
        </div>
      </div>
        
        )
    }
}

export default Projects; 