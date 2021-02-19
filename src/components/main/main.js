import React from 'react';
import './main.css';
import Navbar from '../main/navbar/navbar'
import Header from '../header/header';
import Footer from '../footer/footer';
import Products from './components/products/products'
import DemoScripts from './components/demoScripts/demoScripts';
import SalesTeam from './components/salesTeam/salesTeam';
import Demos from './components/demos/demos';
import Settings from './components/settings/settings';
import Customers from './components/customers/customers';
import { Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <div>
      <Header />
      <div className="mainDiv">

        <div>
          <Navbar />
        </div>

        <div className="mainObj">
          <Switch>
            <Route exact path='/' component={Settings} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/demoScripts' component={DemoScripts} />
            <Route exact path='/salesTeam' component={SalesTeam} />
            <Route exact path='/demos' component={Demos} />
            <Route exact path='/customers' component={Customers} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
