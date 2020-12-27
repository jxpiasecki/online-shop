import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import {HomePage} from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from "./redux/user/user.actions";

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentUser: null
    //     }
    // }

    unsubscribeFormAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                // Sign in
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    }, () => console.log(this.state));
                });
            } else {
                // Sign out, clear current user
                //this.setState({currentUser: userAuth}, () => console.log(this.state));
                //this.setState({currentUser: null}, () => console.log(this.state));
                setCurrentUser(null);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFormAuth();
    }

    render() {
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
}

const mapDispatchToProps = dispatch =>({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
