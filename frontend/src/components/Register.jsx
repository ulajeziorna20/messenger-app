import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='Register'>
            <div className="card">
                <div className="card-header">
                    <h3>Register</h3>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="username">User name</label>
                            <input type="text" className='form-control' placeholder='User name' id='username' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className='form-control' placeholder='Email' id='email' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className='form-control' placeholder='Password' id='password' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <input type="text" className='form-control' placeholder='Confirm password' id='confirmPassword' />
                        </div>

                        <div className="form-group">
                            <div className="file-image">
                                <div className="image">

                                </div>

                                <div className="file">
                                    <label htmlFor="image">
                                        Select image
                                    </label>
                                    <input type="file" className='form-control' id="image" />
                                </div>
                            </div>
                        </div>


                        <div className="form-group">
                            <input type="submit" value="register" className='btn'/>

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