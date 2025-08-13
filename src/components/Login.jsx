import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

// import axios from 'axios';
const Login = ({onLogin}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    // remember: false,
  });

 const handleChange = (e) => {
    const { name, value} = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
      // details: console.log(form),
    }));
   
  };

    const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const userCredential =
        await signInWithEmailAndPassword(auth, form.email, form.password);
      // onLogin(userCredential.user)
      // const token = res.data.token;
      // localStorage.setItem('token', token);
      // onLogi
        const isAuthenticated = true;

      if (isAuthenticated) {
          console.log('User Authenticated');
          navigate('/dashboard/'); // Redirect to dashboard
        } else {
          alert('Invalid credentials');
        }
    } catch (error) {
      console.trace(error.message);
      
      alert('Authentication Failed');
    };
  };
  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_box text-center">
                {/* <!-- <h2 className="breadcrumb-title">@@title</h2> --> */}
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active">Log In</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="main-wrapper">
        <div className="site-wrapper-reveal">

          <div className="login-register-page-area section-space--ptb_80">
            <div className="container">
              <div className="row ">
                <div className="col-lg-6 m-auto">
                  <div className="login-content">

                    <div className="login-header mb-40">
                      <h5>LOG IN YOUR ACCOUNT</h5>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <input type="email" onChange={handleChange} name='email' placeholder="Email" />
                      <input type="password" onChange={handleChange} name='password' placeholder="Password" />
                      <div className="remember-forget-wrap mb-30">
                        <div className="remember-wrap">
                          <input name="remember" onChange={handleChange} type="checkbox" />
                          <p>Remember</p>
                          <span className="checkmark"></span>
                        </div>
                        <div className="forget-wrap">
                          <a href="/">Forgot your password?</a>
                        </div>
                      </div>
                      <button type="submit" className="btn-primary btn-large">Log in</button>
                      <div className="member-register mt-5">
                        <p> Not a member? <a href="register.html"> Register now</a></p>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;