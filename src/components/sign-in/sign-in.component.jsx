import React from "react";
import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
                email: '',
                password: '',
            }
        )
        alert('submit');
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
                [name]: value
            }
        )
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    {/*<input name="email" type="email" onChange={this.handleChange} value={this.state.email} required/>*/}
                    {/*<label>Email</label>*/}
                    <FormInput handleChange={this.handleChange} label="Email" name="email" type="email"
                               value={this.state.email} required={true}/>

                    {/*<input name="password" type="password" onChange={this.handleChange} value={this.state.password} required/>*/}
                    {/*<label>Password</label>*/}
                    <FormInput handleChange={this.handleChange} label="Password" name="password" type="password"
                               value={this.state.password} required={true}/>

                    {/*<input name="submit" type="submit" value="Submit"/>*/}
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;