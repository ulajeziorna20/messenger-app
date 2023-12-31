import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { useDispatch } from 'react-redux';
import { userRegister } from '../store/actions/authAction';

const Register = (props) => {


  const dispatch = useDispatch()

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
    // console.log(e);


    const reader = new FileReader()
    reader.onload = () => {
      setLoadImage(reader.result)
    }

    reader.readAsDataURL(e.target.files[0])


    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0]
    })



    // let b = new Blob([JSON.stringify(loadImage)], { type: "application/json" }),
    //   fr = new FileReader();

    // console.log(b);

    // fr.onload = function (result) {
    //   // console.log(fr.result)

    //   // const filesData = reader.readAsArrayBuffer(b)
    //   // console.log(filesData);

    //   setFormData({
    //     ...formData,
    //     [e.target.name]: result
    //   })

    // };

    // fr.readAsText(b);

  }



  const register = async (e) => {
    e.preventDefault()


    // Convert a base64 string into a binary Uint8 Array to stare it in a database
    //     var BASE64_MARKER = ';base64,';

    //     function convertDataURIToBinary(dataURI) {
    //       var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    //       var base64 = dataURI.substring(base64Index);
    //       var raw = window.atob(base64);
    //       var rawLength = raw.length;
    //       var array = new Uint8Array(new ArrayBuffer(rawLength));

    //       for (let i = 0; i < rawLength; i++) {
    //         array[i] = raw.charCodeAt(i);
    //       }
    //       return array;
    //     }


    // let imageBinaryToStore =  convertDataURIToBinary(loadImage);

    // destrukturyzacja stanu formData
    const { username, email, password, confirmPassword, image } = formData



    // console.log(myFile);

    const usersRegisterData = new FormData()

    console.log('drugi');

    usersRegisterData.append('username', username)
    usersRegisterData.append('email', email)
    usersRegisterData.append('password', password)
    usersRegisterData.append('confirmPassword', confirmPassword)
    usersRegisterData.append('image', image)


    dispatch(userRegister(usersRegisterData))
  }



  return (
    <div className='Register'>
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>
        <div className="card-body">
          <form className='register-form' onSubmit={(e) => register(e)} encType='multipart/form-data'>
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