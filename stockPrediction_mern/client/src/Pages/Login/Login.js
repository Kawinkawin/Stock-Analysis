import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function Login() {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/Login", {
                email,
                password
            });

            if (response.data === "Login success") {
               
                                Toastify({
                                    text: "Login Successful!",
                                    duration: 3000,
                                    close: true,
                                    gravity: "top",
                                    position: "center",
                                    backgroundColor: "#4CAF50",
                                }).showToast();
                                navigate("/LiveGraph");
            } else if (response.data === "Invalid password") {
                 
                     Toastify({
                            text: "Invalid password!",
                            duration: 3000,
                            close: true,
                            gravity: "top",
                            position: "center",
                            backgroundColor: "#ff0000",
                        }).showToast();
                                    
            } else if (response.data === "User not found") {
                Toastify({
                    text: "User not found!",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "center",
                    backgroundColor: "#ff0000",
                }).showToast();
            } else {
                alert("Error occurred");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <div className="log_form">
            <form onSubmit={handleSubmit}>
                <div className="log_det">
                    <h1><u>Login</u></h1>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        id="email"
                        name="email"
                    />
                    <br />
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        id="password"
                        name="password"
                    />
                    <br />
                    <button type="submit">Login</button>
                    <h5>Don't have an account?<Link to="/Signup"> Signup </Link></h5>
                </div>
            </form>
        </div>
    );
}

export default Login;
