"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter(); 
    
    const handleLogin = async (e) => {
        e.preventDefault(); 
        setErrorMessage(''); 
        
        if (!username || !password) {
            setErrorMessage('Username và mật khẩu không được bỏ trống.');
            return;
        }

        try {
            const response = await axios.post('https://api-pro.teklearner.com/auth/v1/login', {
                username,  
                password
            });
            
            console.log(response.data); 
            if (response.data) {
                alert('Đăng nhập thành công');
                localStorage.setItem('user', JSON.stringify(response.data));  
                router.push('/');  
            } else {
                setErrorMessage('Sai username hoặc mật khẩu');
            }
            
        } catch (error) {
            console.error('Lỗi phản hồi:', error.response);
            setErrorMessage('Có lỗi xảy ra: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <form onSubmit={handleLogin}>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            <div className="form-group">
                <label className="sr-only">Username</label>
                <input 
                    type="text"
                    className="form-control mb-2" 
                    placeholder="Enter Username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <label className="sr-only">Password</label>
                <input 
                    type="password" 
                    className="form-control mb-2" 
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-dark btn-block mb-2">Sign In</button>
            
            <div className="text-center mb-2">
                <Link href="#" className="small">Forgot Password?</Link>
            </div>
            
            <button type="button" className="btn btn-primary btn-block mb-2">
                Login with Facebook
            </button>
            <button type="button" className="btn btn-danger btn-block mb-2">
                Login with Google
            </button>
            
            <div className="text-center mt-3">
                <small>New Member? <Link href="/register">Register Now</Link></small>
            </div>
        </form>
    );
};

export default Login;
