// filepath: c:\Users\LEBANON\Desktop\Js Frameworks\blog-react-app\src\pages\guest\Home.jsx
import React from "react";
// import "./Home.css"; // Assuming you have a CSS file for styling

const Home = () => (
  <div className="site-wrapper-reveal">
    {/* Banner Section */}
    <section className="banner-section">
      <div className="container">
        <h1>Welcome to Bunzo Blog</h1>
        <p>Your source for the latest articles and news.</p>
      </div>
    </section>
    {/* Featured Posts */}
    <section className="featured-posts">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="post-card">
              <img src="assets/images/post1.jpg" alt="Post 1" />
              <h2>How to Start a Blog</h2>
              <p>Learn the basics of blogging and how to get started.</p>
              <a href="/post/1" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Additional Sections */}
  </div>
);

export default Home;