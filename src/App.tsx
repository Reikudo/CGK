import React from 'react';
import {Switch, Route} from "react-router-dom";

import Header from './components/Header';
import Main from './components/pages/Main';
import Contacts from './components/pages/Contacts';
import Rights from './components/pages/Rights';
import Rules from './components/pages/Rules';
import './App.scss';


function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route
                    exact path="/"
                    component={() => <Main/>}
                />
              <Route
                path="/contacts"
                component={() => <Contacts/>}
              />
              <Route
                path="/Rights"
                component={() => <Rights/>}
              />
              <Route
                path="/Rules"
                component={() => <Rules/>}
              />
            </Switch>
        </div>
    );
}

export default App;
