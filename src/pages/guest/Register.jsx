import React, {useState} from "react";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
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