import React from 'react'
import { RouteChanging } from '../../Redux/Route/Route-Actions';
import { connect } from 'react-redux'

const SignIn = ({ route }) => (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
        <main className="pa4 black-80 shadow">
            <form className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                    </div>

                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={() => route('home')} />
                </div>
                <div className="lh-copy mt3">
                    <p className="f6 link dim black db pointer" onClick={() => route('register')}>Register</p>
                </div>
            </form>
        </main>
    </article>
)

const dispatchToProps = dispatch => {

    return ({
        route: RouteChange => { dispatch(RouteChanging(RouteChange)) }
    }
    )
}





export default connect(null, dispatchToProps)(SignIn);