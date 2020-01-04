import React from 'react'
import { RouteChanging } from '../../Redux/Route/Route-Actions';
import { connect } from 'react-redux'
import { UserChange } from '../../Redux/Route/User/User-Action';



class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmitSignIn = () => {

        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                hash: this.state.password,
            })

        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.user(user)
                    this.props.route('home')
                }
            })

    }

    render() {
        const { route } = this.props
        return (
            < article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5" >
                <main className="pa4 black-80 shadow">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input onChange={(event) => { this.setState({ email: event.target.value }) }} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={(event) => { this.setState({ password: event.target.value }) }} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                            </div>

                        </fieldset>
                        <div className="">
                            <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => route('register')} className="f6 link dim black db pointer" >Register</p>
                        </div>
                    </div>
                </main>
            </article >
        )
    }
}

const dispatchToProps = dispatch => {

    return ({
        route: RouteChange => { dispatch(RouteChanging(RouteChange)) },
        user: userChange => dispatch(UserChange(userChange))

    }
    )
}





export default connect(null, dispatchToProps)(SignIn);