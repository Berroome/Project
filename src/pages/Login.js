// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:5001/api/verify-secret', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ secret: password }),
            });

            // If the server itself can't be reached or has an error (like 404)
            if (!response.ok) {
                 if(response.status === 401) {
                    throw new Error('Incorrect password. Please try again.');
                 }
                 throw new Error(`Server responded with an error: ${response.statusText}`);
            }

            const data = await response.json();

            if (data.isValid) {
                localStorage.setItem('adminSecret', password);
                navigate('/dashboard');
            } else {
                // This case handles if the server says isValid is false
                setError('Incorrect password. Please try again.');
            }
        } catch (err) {
            // This catches network errors or the errors we threw above
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Enter Admin Password</h2>
                <div className="mb-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>
                
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300 transition"
                    disabled={isLoading}
                >
                    {isLoading ? 'Verifying...' : 'Access Dashboard'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;