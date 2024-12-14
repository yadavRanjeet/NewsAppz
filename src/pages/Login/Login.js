import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { login } from '../../features/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const handleLogin = () => {
        dispatch(login({ email, password }));
    };

    const handleGoogleSuccess = (response) => {
        console.log('Google Token:', response.credential);
        // Dispatch user information
        dispatch(login({ token: response.credential }));
    };

    const handleGoogleFailure = (error) => {
        console.error('Google Login Failed:', error);
    };

    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <div className="login p-6 bg-white shadow-md rounded-lg max-w-sm mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 p-2 border rounded-lg"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-4 p-2 border rounded-lg"
                />
                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    Login
                </button>
                <div className="mt-4 text-center">
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleFailure}
                        useOneTap
                    />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
