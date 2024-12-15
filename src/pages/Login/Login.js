import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === "user@example.com" && password === "password123") {
            dispatch(login({ email }));
            navigate('/home');
        } else {
            alert('Invalid email or password');
        }
    };

    const handleGoogleSuccess = (response) => {
        console.log('Google Token:', response.credential);
        dispatch(login({ token: response.credential }));
        navigate('/home');
    };

    const handleGoogleFailure = () => {
        console.error('Google Login Failed');
    };

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
                <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full text-center">
                    <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to Zollege News</h1>
                    <p className="text-lg text-gray-600 italic mb-8">
                        "Stay ahead of the game—where football stories take the lead."
                    </p>
                    <div className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button
                            onClick={handleLogin}
                            className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-bold hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Login
                        </button>
                    </div>
                    <div className="mt-6">
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={handleGoogleFailure}
                            className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                        />
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
