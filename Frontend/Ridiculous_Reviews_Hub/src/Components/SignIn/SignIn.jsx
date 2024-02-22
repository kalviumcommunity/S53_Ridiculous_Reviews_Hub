import React, { useState } from 'react';
import axios from 'axios'
import './SiginIn.css';

function SignIn() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
           const response = await axios.post(`https://s53-ridiculous-reviews-hub.onrender.com/auth/register`, formData)
           alert("Registration completed! Now login")
            console.log('User Registered Successfully', response.data);
            setFormData({
                username: "",
                password: ""
            })
            // window.location.reload();
        } catch (error) {
            console.log('Error:', error);
        }
        
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <div className="SignInContainer">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className='btn' type="submit">Sign Up</button>
                </form>
            </div>
        </>
    );
}

export default SignIn;
