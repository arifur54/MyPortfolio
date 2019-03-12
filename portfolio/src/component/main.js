import React from 'react';
import Home from './home';
import Aboutme from './aboutme';
import Contactme from './contactme';
import Resume from './resume';
import Projects from './projects';
import MailConf from './mailConf';
import Page404 from './page404';


import {Switch, Route} from 'react-router-dom';


const Main = () =>(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutme' component={Aboutme} />
        <Route path='/contactme' component={Contactme} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
        <Route path='/mailconf' component={MailConf} />
        <Route path='/*' component={Page404} />
    </Switch>
)

export default Main;