import React, { useState } from "react";
import { auth } from "../../firebase.js"; // adjust path as needed
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';




const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    agree: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
    const navigate = useNavigate(); // Hook for navigation

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.agree) {
      setError("You must agree to the terms.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      setSuccess("Registration successful!");
      // Optionally, save username to Firestore here
       const isAuthenticated = true;

        if (isAuthenticated) {
          navigate('/dashboard'); // Redirect to dashboard
        } else {
          alert('Invalid credentials');
        }
    } catch (err) {
      setError(err.message);
    }
    console.log('this is the result:', setForm);
  };

  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_box text-center">
                {/* <!-- <h2 className="breadcrumb-title">@@title</h2> --> */}
                {/* <!-- breadcrumb-list start --> */}
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active">Register</li>
                </ul>
                {/* <!-- breadcrumb-list end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb-area end --> */}

      <div id="main-wrapper">
        <div className="site-wrapper-reveal">
          <div className="login-register-page-area section-space--ptb_80">
            <div className="container">
              <div className="row ">
                <div className="col-lg-6 m-auto">
                  <div className="login-content">
                    <div className="login-header mb-40">
                      <h3 className="mb-2">Register</h3>
                      <h5>Become a member</h5>
                    </div>
                    {error && (
                      <div style={{ color: "red", marginBottom: "1rem" }}>
                        {error}
                      </div>
                    )}
                    {success && (
                      <div style={{ color: "green", marginBottom: "1rem" }}>
                        {success}
                      </div>
                    )}
                    <form onSubmit={handleSubmit}>
                      <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" />
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" />
                      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
                      <div className="remember-forget-wrap">
                        <div className="remember-wrap">
                          <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
                          <p>
                            Agree to the <a href="/">Terms and Conditions</a>
                          </p>
                          <span className="checkmark"></span>
                        </div>
                      </div>
                      <div className="button-box mt-4">
                        <button type="submit" className="btn-primary btn-large">
                          Register Now
                        </button>
                      </div>
                      <div className="member-register mt-5">
                        <p>
                          A member? <a href="login.html"> Log in now</a>
                        </p>
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
  
};

export default Register;