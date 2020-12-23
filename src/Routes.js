import React from 'react';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import Character from './Character/Character';
import Home from './Home/Home';

const Routes = ()=> {
   return <BrowserRouter>
       <Switch> 
        <Route path='/' exact component={Home}></Route>
        <Route path='/character/:id' exact component={Character}></Route>

       
       </Switch>
      </BrowserRouter>
}
export default Routes;
