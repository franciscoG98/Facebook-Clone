import React, { useState, useEffect, useRef } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

import './signUp.scss'

type SignUpProps = {
    show: boolean,
    setShow: (show: boolean) => void
}

const SignUp = (props: SignUpProps) => {

    const [dateDay, setDateDay] = useState<Array<number>>([])
    const [dateYear, setDateYear] = useState<Array<number>>([])
    const [isCustom, setIsCustom] = useState(false)
    const fnameRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        for (let i = 1; i <= 31; i++) {
            setDateDay(prevD => [...prevD, i])
        }

        for (let i = 2023; i >= 1905; i--) {
            setDateYear(prevY => [...prevY, i])
        }

        if (fnameRef.current) {
            fnameRef.current.focus()
        }

    }, [])

    return (
        <div style={{ display: props.show ? "flex" : "none" }}>
            <div className="overlay-signup"></div>
            <div className='signup'>
                <div className="signup-container">
                    <div className="signup-header">
                        <div>
                            <h1>Sign Up</h1>
                            <p>It’s quick and easy.</p>
                        </div>
                        <GrFormClose
                            size={30}
                            id='close-icon'
                            onClick={() => { props.setShow(false) }}
                            style={{ cursor: 'pointer'}}
                        />
                    </div>

                    <div className="signup-seperator"></div>

                    <form action='#'>
                        <div className="signup-fields">
                            <div className="signup-inputs">
                                <div>
                                    <input type='text' placeholder='First Name' required ref={fnameRef} />
                                    <input type='text' placeholder='Surname' required />
                                </div>
                                <input className='default-input' type='text' placeholder='Mobile number or email address' required />
                                <input className='default-input' type="password" placeholder='New password' required />
                            </div>
                            <div className="signup-boxes">
                                <div className='info-text'>
                                    <p>Birthday</p>
                                    <AiOutlineQuestionCircle size={14} />
                                </div>
                                <div className='signup-box'>
                                    <select name='day' id='day-date' required>
                                        {
                                            dateDay.map((day, index) => (

                                                <option value={day} key={index}>{day}</option>
                                            ))
                                        }
                                    </select>
                                    <select name='month' id='month-date' required>
                                        <option value="Jan">Jan</option>
                                        <option value="Feb">Feb</option>
                                        <option value="Mar">Mar</option>
                                        <option value="Jan">Jan</option>
                                        <option value="Apr">Apr</option>
                                        <option value="May">May</option>
                                        <option value="Jun">Jun</option>
                                        <option value="Jul">Jul</option>
                                        <option value="Aug">Aug</option>
                                        <option value="Sep">Sep</option>
                                        <option value="Oct">Oct</option>
                                        <option value="Nov">Nov</option>
                                        <option value="Dec">Dec</option>
                                    </select>
                                    <select name='year' id='year-date' required>
                                        {
                                            dateYear.map((year, index) => (
                                                <option value={year} key={index}>{year}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='info-text'>
                                    <p>Gender</p>
                                    <AiOutlineQuestionCircle size={14} />
                                </div>
                                <div className='signup-box'>
                                    <div className='checkbox-wrapper'>
                                        <label htmlFor='female'>Female</label>
                                        <input type='radio' name="gender" value='Female' id='female' onChange={() => setIsCustom(false)} />
                                    </div>
                                    <div className='checkbox-wrapper'>
                                        <label htmlFor='male'>Male</label>
                                        <input type='radio' name="gender" value='Male' id='male' onChange={() => setIsCustom(false)} />
                                    </div>
                                    <div className='checkbox-wrapper'>
                                        <label htmlFor='custom'>Custom</label>
                                        <input type='radio' name="gender" value='Custom' id='custom' onChange={() => setIsCustom(true)} />
                                    </div>
                                </div>

                                {
                                    isCustom ? (
                                        <div className="signup-custom">
                                            <select name='select-pronoun'>
                                                <option value="default">Select your propnoun</option>
                                                <option value="She">She: Wish her a happy birthday!</option>
                                                <option value="He">He: Wish him a happy birthday!</option>
                                                <option value="They">They: Wish them a happy birthday!</option>
                                            </select>
                                            <p>Your pronoun is visible to everyone.</p>
                                            <input className='default-input' type='text' placeholder='Gender (optional)' />
                                        </div>
                                    ) : ''
                                }


                            </div>
                            <div className="signup-text">
                                <p>People who use our service may have uploaded your contact information to Facebook. <a href='#'>Learn more.</a></p>
                                <p>By clicking Sign Up, you agree to our <a href='#'>Terms, Privacy Policy</a> and <a href='#'>Cookies Policy.</a> You may receive SMS Notifications from us and can opt out any time.</p>
                            </div>
                            <button type='submit' id='signup-btn'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp