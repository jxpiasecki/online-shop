import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import {HomePage} from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFormAuth = null;

    componentDidMount() {
        this.unsubscribeFormAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            console.log(user);
        });
    }

    componentWillUnmount() {
        //this.setState({currentUser: null});
        this.unsubscribeFormAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentUser = {this.state.currentUser}/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/shop" exact component={ShopPage}/>
                    <Route path="/sign-in" exact component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
