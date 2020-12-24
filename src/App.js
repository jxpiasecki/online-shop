import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import {HomePage} from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/shop" exact component={ShopPage}/>
                <Route path="/sign-in" exact component={SignInAndSignUpPage}/>
            </Switch>
        </div>
    );
}

export default App;
