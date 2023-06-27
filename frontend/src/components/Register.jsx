import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        image: ''

    });

    const [loadImage, setLoadImage] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData({
            ...formData,

            [name]: value
        })
    }


    const fileHandle = (e) => {
        console.log(e);
        if (e.target.files.length !== 0) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0]
            })
        }

        const reader = new FileReader()
        reader.onload = () => {
            setLoadImage(reader.result)
        }

        reader.readAsDataURL(e.target.files[0])
    }



    const register = (e) => {
        e.preventDefault()

        console.log(formData);
    }


    return (
        <div className='Register'>
            <div className="card">
                <div className="card-header">
                    <h3>Register</h3>
                </div>
                <div className="card-body">
                    <form className='register-form' onSubmit={(e) => register(e)}>
                        <div className="form-group">
                            <label htmlFor="username">User name</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username} className='form-control' placeholder='User name' id='username'
                                onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                name="email" className='form-control' placeholder='Email'
                                id='email'
                                onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password} className='form-control' placeholder='Password' id='password'
                                onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                className='form-control' placeholder='Confirm password' id='confirmPassword'
                                onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div className="form-group">
                            <div className="file-image">
                                <div className="image">
                                    {loadImage && <img src={loadImage} id='image-register' alt="image" />}
                                </div>

                                <div className="file">
                                    <label htmlFor="image" id='image-label'>
                                        Select image
                                    </label>
                                    <input type="file" className='form-control'
                                        name='image'
                                        // value={formData.image}
                                        id="image"
                                        onChange={(e) => fileHandle(e)} />
                                </div>
                            </div>
                        </div>


                        <div className="form-group">
                            <input type="submit" value="register" className='btn' />

                        </div>


                        <div className="form-group">
                            <Link to="/messenger/login">  <span>Login your account</span></Link>
                        </div>
                    </form>
                </div>

            </div>

        </div>);
}

export default Register;