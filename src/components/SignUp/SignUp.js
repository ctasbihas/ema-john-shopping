import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    
    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/')
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two password did not match')
            return;
        }
        if (password.length <6) {
            setError('Password must be 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" />
                    </div>
                    <p style={{color: 'red'}}>{ error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" required />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
                <div className='divider'>
                    <span className='line'></span>
                    <span>or</span>
                    <span className='line'></span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;