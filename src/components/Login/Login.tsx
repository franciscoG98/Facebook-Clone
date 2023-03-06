import React, { useState } from 'react'
import './login.scss'

import facebookLogo from '../../imgs/logos/facebookLogo.svg'
import SignUp from '../SignUp/SignUp'

const Login = () => {
    const [showSignUp, setShowSignUp] = useState(false)

    return (
        <div>
            <div className="login">
                <SignUp show={showSignUp} setShow={setShowSignUp} />
                <div className="login-container">
                    <div className="login-header">
                        <img
                            src={facebookLogo}
                            alt='facebook logo'
                        />
                        <h2>Connect with friends and the world around you on Facebook.</h2>
                    </div>

                    <div className="login-fields">
                        <div className="login-box">
                            <input type="text" placeholder='Email address or phone number' />
                            <input type="password" placeholder='Password' />
                            <button className='btn-login'>Log in</button>
                            <p className='forgot-passwd'>Forgot password?</p>
                            <div className='login-seperator'></div>

                            <button
                                className='btn-create-acc'
                                onClick={() => { setShowSignUp(true) }}
                            >Create New Account</button>
                        </div>

                        <p><strong>Create a Page</strong> for a celebrity, brand or business</p>

                    </div>
                </div>

                <div className="login-footer">
                    <div className="login-footer-lang">
                        <ul className='footer-list'>
                            <li><a href='#'>English [US]</a></li>
                            <li><a href='#'>Español</a></li>
                            <li><a href='#'>Português (Brasil)</a></li>
                            <li><a href='#'>Français (France)</a></li>
                            <li><a href='#'>Italiano</a></li>
                            <li><a href='#'>Deutsch</a></li>
                            <li><a href='#'>العربية</a></li>
                            <li><a href='#'>中文(简体)</a></li>
                            <li><a href='#'>हिन्दी</a></li>
                            <li><a href='#'>日本語</a></li>
                            <li><button className='add-lang'>+</button></li>
                        </ul>
                    </div>
                    <div className='login-seperator'></div>

                    <div className="login-footer-links">
                        <ul className='footer-list'>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Log In</a></li>
                            <li><a href="#">Messenger</a></li>
                            <li><a href="#">Facebook Lite</a></li>
                            <li><a href="#">Watch</a></li>
                            <li><a href="#">Places</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Marketplace</a></li>
                            <li><a href="#">Meta Pay</a></li>
                            <li><a href="#">Oculus</a></li>
                            <li><a href="#">Portal</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Bulletin</a></li>
                            <li><a href="#">Fundraisers</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Voting Information Center</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Privacy Center</a></li>
                            <li><a href="#">Groups</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Create Ad</a></li>
                            <li><a href="#">Create Page</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Cookies</a></li>
                            <li><a href="#">Ad choices</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Contact Uploading & Non-Users</a></li>
                        </ul>
                    </div>
                    <p className='footer-copyright'>Meta © 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Login