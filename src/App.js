import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import {HomePage} from "./pages/homepage/homepage.component";

const HatsPage = () => (
    <div><h1>Hats page</h1></div>
);

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/hats" exact component={HatsPage}/>
            </Switch>
        </div>
    );
}

export default App;
