// filepath: c:\Users\LEBANON\Desktop\Js Frameworks\blog-react-app\src\pages\guest\Home.jsx
import React from "react";
// import "./Home.css"; // Assuming you have a CSS file for styling

// import "../../layouts/GuestLayout/assets/css/style.css";
// import "../../layouts/GuestLayout/assets/css/vendor/vendor.min.css";
// import "../../layouts/GuestLayout/assets/css/plugins/plugins.min.css";
// import "../../layouts/GuestLayout/assets/css/style";


import Blog_01 from "../../layouts/GuestLayout/assets/images/blog/01.jpg"
import technology from "../../layouts/GuestLayout/assets/images/catagory/technology.jpg"

const Home = () => (
    <div className="site-wrapper-reveal">
        {/* <!-- Hero Area Start --> */}
        <div className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-inner-area">
                            {/* <!-- Hero Category Area Start --> */}
                            <div className="hero-category-area">
                                <a href="category.html" className="single-hero-category-item" data-aos="fade-up">
                                    <img src={technology} alt="" />
                                    <div className="hero-category-inner-box">
                                        <h3 className="title">Business</h3>
                                        <i className="icon icofont-long-arrow-right"></i>
                                    </div>
                                </a>
                                <a href="category.html" className="single-hero-category-item" data-aos="fade-up">
                                    <img src="assets/images/catagory/travel.jpg" alt=""/>
                                    <div className="hero-category-inner-box">
                                        <h3 className="title">Travel</h3>
                                        <i className="icon icofont-long-arrow-right"></i>
                                    </div>
                                </a>
                                <a href="category.html" className="single-hero-category-item" data-aos="fade-up">
                                    <img src="assets/images/catagory/medical.jpg" alt=""/>
                                    <div className="hero-category-inner-box">
                                        <h3 className="title">Food</h3>
                                        <i className="icon icofont-long-arrow-right"></i>
                                    </div>
                                </a>
                                <a href="category.html" className="single-hero-category-item" data-aos="fade-up">
                                    <img src="assets/images/catagory/web.jpg" alt=""/>
                                    <div className="hero-category-inner-box">
                                        <h3 className="title">Tech</h3>
                                        <i className="icon icofont-long-arrow-right"></i>
                                    </div>
                                </a>
                            </div>{/* <!-- Hero Category Area End --> */}

                            {/* <!-- Hero Banner Area Start --> */}
                            <div className="hero-banner-area" data-aos="fade-up">
                                <a href="/">
                                    <img src={Blog_01} alt=""/>
                                    {/* <img src="assets/images/hero/hero-01.jpg" alt=""/> */}

                                </a>
                            </div>{/* <!-- Hero Banner Area End --> */}

                            <div className="hero-blog-post">
                                {/* <!-- Single-hero-blog-post Start --> */}
                                <div className="single-hero-blog-post" data-aos="fade-up">
                                    <div className="hero-blog-post-top">
                                        <div className="hero-blog-post-category">
                                            <a href="/" className="tech">Tech</a>
                                        </div>
                                        <div className="hero-blog-post-author">
                                            By <a href="/">Kathy Ramirez</a>
                                        </div>
                                    </div>
                                    <h3 className="hero-blog-post-title">
                                        <a href="/">Make your store stand out
                                            from the others...
                                        </a>
                                    </h3>
                                    <p className="post-short-details">
                                        Lorem Ipsum has been them industr standard
                                        unknown printer took galley.
                                    </p>
                                    <div className="hero-blog-post-meta">
                                        <div className="post-meta-left-side">
                                            <span className="post-date">
                                            <i className="icofont-ui-calendar"></i> 
                                            <a href="/">03 April, 2023</a>
                                        </span>
                                            <span>10 min read</span>
                                        </div>
                                        <div className="post-meta-right-side">
                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>{/* <!-- Single-hero-blog-post End --> */}
                                {/* <!-- Single-hero-blog-post Start --> */}
                                <div className="single-hero-blog-post" data-aos="fade-up">
                                    <div className="hero-blog-post-top">
                                        <div className="hero-blog-post-category">
                                            <a href="/" className="marketing">Marketing</a>
                                        </div>
                                        <div className="hero-blog-post-author">
                                            By <a href="/">Kathy Ramirez</a>
                                        </div>
                                    </div>
                                    <h3 className="hero-blog-post-title">
                                        <a href="/">WooCommerce comes with
                                            an intuitive drag-and-drop...
                                        </a>
                                    </h3>
                                    <p className="post-short-details">
                                        Lorem Ipsum has been them industr standard
                                        unknown printer took galley.
                                    </p>
                                    <div className="hero-blog-post-meta">
                                        <div className="post-meta-left-side">
                                            <span className="post-date">
                                            <i className="icofont-ui-calendar"></i> 
                                            <a href="/">03 April, 2023</a>
                                        </span>
                                            <span>10 min read</span>
                                        </div>
                                        <div className="post-meta-right-side">
                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>{/* <!-- Single-hero-blog-post End --> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div> {/* <!-- Hero Area End --> */}

        {/* <!-- Trending Article Area Start --> */}
        <div className="trending-article-area section-space--ptb_80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-7">
                        <div className="section-title mb-40">
                            <h3>Trending Article</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-5">
                        <div className="trending-slider-navigation text-end">
                            <div className="trending-button-prev navigation-button"><i className="icofont-long-arrow-left"></i></div>
                            <div className="trending-button-next navigation-button"><i className="icofont-long-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">

                        {/* <!-- Swiper --> */}
                        <div className="swiper-container trending-slider-active">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="trending-article-row">
                                        {/* <!-- Trending Article Left Side Start --> */}
                                        <div className="trending-article-left-side">
                                            {/* <!-- Trending Single Item Start --> */}
                                            <article className="trending-single-item" data-aos="fade-up">
                                                <div className="trending-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/trending/1-trending-img.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="trending-post-content">
                                                    <div className="trending-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="fashion">Fashion</a>
                                                        </div>
                                                        <div className="trending-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="trending-blog-post-title">
                                                        <a href="/">Customize your WooCommerce
                                                            store with countless design
                                                        </a>
                                                    </h5>
                                                    <div className="trending-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>{/* <!-- Trending Single Item End --> */}
                                            {/* <!-- Trending Single Item Start --> */}
                                            <article className="trending-single-item" data-aos="fade-up">
                                                <div className="trending-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/trending/2-trending-img.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="trending-post-content">
                                                    <div className="trending-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="tech">Tech</a>
                                                        </div>
                                                        <div className="trending-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="trending-blog-post-title">
                                                        <a href="/">All of these amazing features
                                                            come at an affordable price!
                                                        </a>
                                                    </h5>
                                                    <div className="trending-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>{/* <!-- Trending Single Item End --> */}
                                            {/* <!-- Trending Single Item Start --> */}
                                            <article className="trending-single-item" data-aos="fade-up">
                                                <div className="trending-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/trending/3-trending-img.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="trending-post-content">
                                                    <div className="trending-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="food">Food</a>
                                                        </div>
                                                        <div className="trending-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="trending-blog-post-title">
                                                        <a href="/">Make your store stand out from
                                                            the others by converting..
                                                        </a>
                                                    </h5>
                                                    <div className="trending-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>{/* <!-- Trending Single Item End --> */}
                                        </div>{/* <!-- Trending Article Left Side End --> */}

                                        {/* <!-- Trending Article Right Side Start --> */}
                                        <div className="trending-article-right-side">
                                            <div className="large-banner-trending-article" data-aos="fade-up">
                                                <div className="trending-large-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/trending/4-trending-img.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="trending-large-post-content">
                                                    {/* <!-- Trending Single Item Start --> */}
                                                    <article className="trending-single-item">
                                                        <div className="trending-post-content">
                                                            <div className="trending-blog-post-top">
                                                                <div className="trending-blog-post-category">
                                                                    <a href="/" className="health">Health</a>
                                                                </div>
                                                                <div className="trending-blog-post-author">
                                                                    By <a href="/">Kathy Ramirez</a>
                                                                </div>
                                                            </div>
                                                            <h5 className="trending-blog-post-title">
                                                                <a href="/">With WooLentor's drag-and-drop
                                                                    interface for creating custom...
                                                                </a>
                                                            </h5>
                                                            <div className="trending-blog-post-meta">
                                                                <div className="post-meta-left-side">
                                                                    <span className="post-date">
                                                                    <i className="icofont-ui-calendar"></i> 
                                                                    <a href="/">03 April, 2023</a>
                                                                </span>
                                                                    <span>10 min read</span>
                                                                </div>
                                                                <div className="post-meta-right-side">
                                                                    <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                                    <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>{/* <!-- Trending Single Item End --> */}

                                                    {/* <!-- Trending Single Item Start --> */}
                                                    <article className="trending-single-item">
                                                        <div className="trending-post-content">
                                                            <div className="trending-blog-post-top">
                                                                <div className="trending-blog-post-category">
                                                                    <a href="/" className="doctor">Doctor</a>
                                                                </div>
                                                                <div className="trending-blog-post-author">
                                                                    By <a href="/">Kathy Ramirez</a>
                                                                </div>
                                                            </div>
                                                            <h5 className="trending-blog-post-title">
                                                                <a href="/">WooCommerce comes with an
                                                                    intuitive drag-and-drop...
                                                                </a>
                                                            </h5>
                                                            <div className="trending-blog-post-meta">
                                                                <div className="post-meta-left-side">
                                                                    <span className="post-date">
                                                                    <i className="icofont-ui-calendar"></i> 
                                                                    <a href="/">03 April, 2023</a>
                                                                </span>
                                                                    <span>10 min read</span>
                                                                </div>
                                                                <div className="post-meta-right-side">
                                                                    <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                                    <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>{/* <!-- Trending Single Item End --> */}
                                                </div>
                                            </div>

                                            {/* <!-- Trending Single Item Start --> */}
                                            <article className="trending-single-item" data-aos="fade-up">
                                                <div className="trending-large-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/trending/5-trending-img.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="trending-post-content">
                                                    <div className="trending-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="business">Business</a>
                                                        </div>
                                                        <div className="trending-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="trending-blog-post-title">
                                                        <a href="/">Customize your WooCommerce
                                                            store with countless design
                                                        </a>
                                                    </h5>
                                                    <div className="trending-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>{/* <!-- Trending Single Item End --> */}
                                        </div>{/* <!-- Trending Article Right Side End --> */}
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="trending-article-row">
                                        {/* <!-- Trending Article Left Side Start --> */}
                                        <div className="trending-article-left-side">
                                            {/* <!-- Trending Single Item Start --> */}
                                            <article className="trending-single-item" data-aos="fade-up">
                                                <div className="trending-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/trending/1-trending-img.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="trending-post-content">
                                                    <div className="trending-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="fashion">Fashion</a>
                                                        </div>
                                                        <div className="trending-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="trending-blog-post-title">
                                                        <a href="/">Customize your WooCommerce
                                                            store with countless design
                                                        </a>
                                                    </h5>
                                                    <div className="trending-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>{/* <!-- Trending Single Item End --> */}
                                            {/* <!-- Trending Single Item Start --> */}
                                            <article className="trending-single-item" data-aos="fade-up">
                                                <div className="trending-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/trending/2-trending-img.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="trending-post-content">
                                                    <div className="trending-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="tech">Tech</a>
                                                        </div>
                                                        <div className="trending-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="trending-blog-post-title">
                                                        <a href="/">All of these amazing features
                                                            come at an affordable price!
                                                        </a>
                                                    </h5>
                                                    <div className="trending-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>{/* <!-- Trending Single Item End --> */}
                                            {/* <!-- Trending Single Item Start --> */}
                                            <article className="trending-single-item" data-aos="fade-up">
                                                <div className="trending-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/trending/3-trending-img.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="trending-post-content">
                                                    <div className="trending-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="food">Food</a>
                                                        </div>
                                                        <div className="trending-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="trending-blog-post-title">
                                                        <a href="/">Make your store stand out from
                                                            the others by converting..
                                                        </a>
                                                    </h5>
                                                    <div className="trending-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>{/* <!-- Trending Single Item End --> */}
                                        </div>{/* <!-- Trending Article Left Side End --> */}

                                        {/* <!-- Trending Article Right Side Start --> */}
                                        <div className="trending-article-right-side">
                                            <div className="large-banner-trending-article" data-aos="fade-up">
                                                <div className="trending-large-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/trending/4-trending-img.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="trending-large-post-content">
                                                    {/* <!-- Trending Single Item Start --> */}
                                                    <article className="trending-single-item">
                                                        <div className="trending-post-content">
                                                            <div className="trending-blog-post-top">
                                                                <div className="trending-blog-post-category">
                                                                    <a href="/" className="health">Health</a>
                                                                </div>
                                                                <div className="trending-blog-post-author">
                                                                    By <a href="/">Kathy Ramirez</a>
                                                                </div>
                                                            </div>
                                                            <h5 className="trending-blog-post-title">
                                                                <a href="/">With WooLentor's drag-and-drop
                                                                    interface for creating custom...
                                                                </a>
                                                            </h5>
                                                            <div className="trending-blog-post-meta">
                                                                <div className="post-meta-left-side">
                                                                    <span className="post-date">
                                                                    <i className="icofont-ui-calendar"></i> 
                                                                    <a href="/">03 April, 2023</a>
                                                                </span>
                                                                    <span>10 min read</span>
                                                                </div>
                                                                <div className="post-meta-right-side">
                                                                    <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                                    <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>{/* <!-- Trending Single Item End --> */}

                                                    {/* <!-- Trending Single Item Start --> */}
                                                    <article className="trending-single-item">
                                                        <div className="trending-post-content">
                                                            <div className="trending-blog-post-top">
                                                                <div className="trending-blog-post-category">
                                                                    <a href="/" className="doctor">Doctor</a>
                                                                </div>
                                                                <div className="trending-blog-post-author">
                                                                    By <a href="/">Kathy Ramirez</a>
                                                                </div>
                                                            </div>
                                                            <h5 className="trending-blog-post-title">
                                                                <a href="/">WooCommerce comes with an
                                                                    intuitive drag-and-drop...
                                                                </a>
                                                            </h5>
                                                            <div className="trending-blog-post-meta">
                                                                <div className="post-meta-left-side">
                                                                    <span className="post-date">
                                                                    <i className="icofont-ui-calendar"></i> 
                                                                    <a href="/">03 April, 2023</a>
                                                                </span>
                                                                    <span>10 min read</span>
                                                                </div>
                                                                <div className="post-meta-right-side">
                                                                    <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                                    <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>{/* <!-- Trending Single Item End --> */}
                                                </div>
                                            </div>

                                            {/* <!-- Trending Single Item Start --> */}
                                            <article className="trending-single-item" data-aos="fade-up">
                                                <div className="trending-large-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/trending/5-trending-img.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="trending-post-content">
                                                    <div className="trending-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="business">Business</a>
                                                        </div>
                                                        <div className="trending-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="trending-blog-post-title">
                                                        <a href="/">Customize your WooCommerce
                                                            store with countless design
                                                        </a>
                                                    </h5>
                                                    <div className="trending-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>{/* <!-- Trending Single Item End --> */}
                                        </div>{/* <!-- Trending Article Right Side End --> */}
                                    </div>
                                </div>
                            </div>
                        </div>{/* <!-- Swiper End --> */}


                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Trending Article Area End --> */}

        {/* <!-- From Following Area Start --> */}
        <div className="from-following-area  section-space--ptb_80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="from-following-hader-area" data-aos="fade-up">
                            <div className="section-title">
                                <h3>From Following</h3>
                            </div>

                            <div className="following-slider-navigation text-end">
                                <div className="following-button-prev navigation-button"><i className="icofont-long-arrow-left"></i></div>
                                <div className="following-button-next navigation-button"><i className="icofont-long-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Swiper --> */}
                <div className="swiper-container following-slider-active">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="row row--17">
                                <div className="from-following-left-side col">
                                    <div className="row row--17">
                                        <div className="col-md-6 col-sm-6">
                                            {/* <!-- Single Following Post Start --> */}
                                            <div className="single-following-post" data-aos="fade-up">
                                                <div className="following-post-thum">
                                                    <img src="assets/images/blog/01.jpg" alt=""/>
                                                </div>
                                                <div className="following-post-content">
                                                    <div className="following-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="health">Health</a>
                                                        </div>
                                                        <div className="following-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="following-blog-post-title">
                                                        <a href="/">Customize your WooCommerce
                                                            store with countless design
                                                        </a>
                                                    </h5>
                                                    <div className="following-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Following Post End --> */}
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            {/* <!-- Single Following Post Start --> */}
                                            <div className="single-following-post" data-aos="fade-up">
                                                <div className="following-post-thum">
                                                    <img src="assets/images/blog/02.jpg" alt=""/>
                                                </div>
                                                <div className="following-post-content">
                                                    <div className="following-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="lifestyle">Lifestyle</a>
                                                        </div>
                                                        <div className="following-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="following-blog-post-title">
                                                        <a href="/">WooCommerce comes with an intuitive
                                                            drag-and-drop interface.
                                                        </a>
                                                    </h5>
                                                    <div className="following-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Following Post End --> */}
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            {/* <!-- Single Following Post Start --> */}
                                            <div className="single-following-post" data-aos="fade-up">
                                                <div className="following-post-thum">
                                                    <img src="assets/images/blog/03.jpg" alt=""/>
                                                </div>
                                                <div className="following-post-content">
                                                    <div className="following-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="lifestyle">Lifestyle</a>
                                                        </div>
                                                        <div className="following-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="following-blog-post-title">
                                                        <a href="/">All of these amazing features come at an
                                                            affordable price!
                                                        </a>
                                                    </h5>
                                                    <div className="following-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Following Post End --> */}
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            {/* <!-- Single Following Post Start --> */}
                                            <div className="single-following-post" data-aos="fade-up">
                                                <div className="following-post-thum">
                                                    <img src="assets/images/blog/04.jpg" alt=""/>
                                                </div>
                                                <div className="following-post-content">
                                                    <div className="following-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="health">Health</a>
                                                        </div>
                                                        <div className="following-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="following-blog-post-title">
                                                        <a href="/">Make your store stand out from the others
                                                            by converting more shoppers into buyers!
                                                        </a>
                                                    </h5>
                                                    <div className="following-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Following Post End --> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="from-following-right-side col">
                                    <div className="following-author-area" data-aos="fade-up">
                                        <div className="author-image">
                                            <img src="assets/images/author/author-01.png" alt=""/>
                                        </div>
                                        <div className="author-title">
                                            <h4><a href="/">Antonio Lucas</a></h4>
                                            <p>Author, Dingcode</p>
                                        </div>
                                        <div className="author-details">
                                            <p>Lorem psum has been industry
                                                standard dumy text since the when
                                                and scrambled make specimen
                                                book has survived.</p>

                                            <div className="author-post-share">
                                                <ul className="social-share-area">
                                                    <li><a href="/"><i className="icofont-facebook"></i></a></li>
                                                    <li><a href="/"><i className="icofont-skype"></i></a></li>
                                                    <li><a href="/"><i className="icofont-twitter"></i></a></li>
                                                    <li><a href="/"><i className="icofont-linkedin"></i></a></li>
                                                </ul>
                                            </div>

                                            <div className="button-box">
                                                <a href="/" className="btn">View Profile <i className="icofont-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="following-add-banner" data-aos="fade-up">
                                        <a href="/">
                                            <img src="assets/images/banners/home-following-banner.png" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="row row--17">
                                <div className="from-following-left-side col">
                                    <div className="row row--17">
                                        <div className="col-md-6 col-sm-6">
                                            {/* <!-- Single Following Post Start --> */}
                                            <div className="single-following-post" data-aos="fade-up">
                                                <div className="following-post-thum">
                                                    <img src="assets/images/blog/01.jpg" alt=""/>
                                                </div>
                                                <div className="following-post-content">
                                                    <div className="following-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="health">Health</a>
                                                        </div>
                                                        <div className="following-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="following-blog-post-title">
                                                        <a href="/">Customize your WooCommerce
                                                            store with countless design
                                                        </a>
                                                    </h5>
                                                    <div className="following-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Following Post End --> */}
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            {/* <!-- Single Following Post Start --> */}
                                            <div className="single-following-post" data-aos="fade-up">
                                                <div className="following-post-thum">
                                                    <img src="assets/images/blog/02.jpg" alt=""/>
                                                </div>
                                                <div className="following-post-content">
                                                    <div className="following-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="lifestyle">Lifestyle</a>
                                                        </div>
                                                        <div className="following-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="following-blog-post-title">
                                                        <a href="/">WooCommerce comes with an intuitive
                                                            drag-and-drop interface.
                                                        </a>
                                                    </h5>
                                                    <div className="following-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Following Post End --> */}
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            {/* <!-- Single Following Post Start --> */}
                                            <div className="single-following-post" data-aos="fade-up">
                                                <div className="following-post-thum">
                                                    <img src="assets/images/blog/03.jpg" alt=""/>
                                                </div>
                                                <div className="following-post-content">
                                                    <div className="following-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="lifestyle">Lifestyle</a>
                                                        </div>
                                                        <div className="following-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="following-blog-post-title">
                                                        <a href="/">All of these amazing features come at an
                                                            affordable price!
                                                        </a>
                                                    </h5>
                                                    <div className="following-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Following Post End --> */}
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            {/* <!-- Single Following Post Start --> */}
                                            <div className="single-following-post" data-aos="fade-up">
                                                <div className="following-post-thum">
                                                    <img src="assets/images/blog/04.jpg" alt=""/>
                                                </div>
                                                <div className="following-post-content">
                                                    <div className="following-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/" className="health">Health</a>
                                                        </div>
                                                        <div className="following-blog-post-author">
                                                            By <a href="/">Kathy Ramirez</a>
                                                        </div>
                                                    </div>
                                                    <h5 className="following-blog-post-title">
                                                        <a href="/">Make your store stand out from the others
                                                            by converting more shoppers into buyers!
                                                        </a>
                                                    </h5>
                                                    <div className="following-blog-post-meta">
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span>10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt="" /></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Following Post End --> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="from-following-right-side col">
                                    <div className="following-author-area" data-aos="fade-up">
                                        <div className="author-image">
                                            <img src="assets/images/author/author-01.png" alt=""/>
                                        </div>
                                        <div className="author-title">
                                            <h4><a href="/">Antonio Lucas</a></h4>
                                            <p>Author, Dingcode</p>
                                        </div>
                                        <div className="author-details">
                                            <p>Lorem psum has been industry
                                                standard dumy text since the when
                                                and scrambled make specimen
                                                book has survived.</p>

                                            <div className="author-post-share">
                                                <ul className="social-share-area">
                                                    <li><a href="/"><i className="icofont-facebook"></i></a></li>
                                                    <li><a href="/"><i className="icofont-skype"></i></a></li>
                                                    <li><a href="/"><i className="icofont-twitter"></i></a></li>
                                                    <li><a href="/"><i className="icofont-linkedin"></i></a></li>
                                                </ul>
                                            </div>

                                            <div className="button-box">
                                                <a href="/" className="btn">View Profile <i className="icofont-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="following-add-banner" data-aos="fade-up">
                                        <a href="/">
                                            <img src="assets/images/banners/home-following-banner.png" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> {/* <!-- From Following Area End --> */}


        <div className="bg-gray-1">

            {/* <!-- Trending Topic Area Start --> */}
            <div className="trending-topic-area section-space--ptb_80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="trending-topic-section-title">
                            <h3>Trending Topic</h3>
                            <div className="trending-topic-navigation mt-30">
                                <div className="trending-topic-button-prev navigation-button"><i className="icofont-long-arrow-left"></i></div>
                                <div className="trending-topic-button-next navigation-button"><i className="icofont-long-arrow-right"></i></div>
                            </div>
                        </div>
                        <div className="trending-topic-item-wrap">
                            <div className="swiper-container trending-topic-slider-active">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide" data-aos="fade-up">
                                        <div className="single-trending-topic-item">
                                            <a href="category-grid.html">
                                                <img src="assets/images/topic/01_topic.jpg" alt=""/>
                                                <h4 className="title">Travel</h4>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-aos="fade-up">
                                        <div className="single-trending-topic-item">
                                            <a href="category-grid.html">
                                                <img src="assets/images/topic/02_topic.jpg" alt=""/>
                                                <h4 className="title">Food</h4>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-aos="fade-up">
                                        <div className="single-trending-topic-item">
                                            <a href="category-grid.html">
                                                <img src="assets/images/topic/03_topic.jpg" alt=""/>
                                                <h4 className="title">Design</h4>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-aos="fade-up">
                                        <div className="single-trending-topic-item">
                                            <a href="category-grid.html">
                                                <img src="assets/images/topic/04_topic.jpg" alt=""/>
                                                <h4 className="title">Technology</h4>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-aos="fade-up">
                                        <div className="single-trending-topic-item">
                                            <a href="category-grid.html">
                                                <img src="assets/images/topic/05_topic.jpg" alt=""/>
                                                <h4 className="title">Marketing</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Newsletter Subscribe Area Start --> */}
                    <div className="newsletter-subscribe-inner section-space--mt_80">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="section-title mb-4">
                                    <h3>Subscribe For Newsletter</h3>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="newsletter-input-box" data-aos="fade-up">
                                    <input className="newsletter-input" type="text" placeholder="Enter your email" />
                                    <div className="button-box">
                                        <a href="/" className="btn-primary btn-large">Subscribe Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newsletter-inner-image">
                            <img className="newsletter-image-01" src="assets/images/shap/1-newsletter.png" alt=""/>
                            <img className="newsletter-image-02" src="assets/images/shap/2-newsletter.png" alt=""/>
                        </div>
                    </div>
                    {/* <!-- Newsletter Subscribe Area End --> */}

                </div>
            </div>
            {/* <!-- Trending Topic Area End --> */}

        </div>

        {/* <!-- Featured Video Area Start --> */}
        <div className="featured-video-area section-space--ptb_80">
            <div className="container">
                <div className="row row--17">
                    <div className="featured-video-col-8">

                        <div className="featured-video-haader">
                            <div className="section-title">
                                <h3>Featured Video</h3>
                            </div>
                            <ul className="featured-video-list nav" data-aos="fade-up">
                                <li className="featured-video-list-item">
                                    <a href="/" className="featured-video-link active" data-bs-toggle="tab" data-bs-target="#travel">Travel</a>
                                </li>
                                <li className="featured-video-list-item">
                                    <a href="/" className="featured-video-link" data-bs-toggle="tab" data-bs-target="#lifestyle">Lifestyle</a>
                                </li>
                                <li className="featured-video-list-item">
                                    <a href="/" className="featured-video-link" data-bs-toggle="tab" data-bs-target="#food">Food</a>
                                </li>
                                <li className="featured-video-list-item">
                                    <a href="/" className="featured-video-link" data-bs-toggle="tab" data-bs-target="#health">Health</a>
                                </li>
                            </ul>
                        </div>

                        <div className="featured-video-wrap">

                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="travel">
                                    <div className="row row--17">
                                        <div className="col-lg-7">
                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup" data-aos="fade-up">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/01_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">
                                                            <div className="video-button__two">
                                                                <div className="video-play">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span className="read-time">10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h3><a href="/">All of these amazing features come
                                                            at an affordable price!</a></h3>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup" data-aos="fade-up">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/02_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">
                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span className="read-time">10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h3>
                                                        <a href="/">Create a custom checkout page in
                                                            minutes and Increase your sales...
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                        </div>
                                        <div className="col-lg-5">
                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup" data-aos="fade-up">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/03_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">
                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April</a>
                                                        </span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h5><a href="/">Customize your WooCommerce
                                                            store with countless design</a></h5>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup" data-aos="fade-up">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/04_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">
                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April</a>
                                                        </span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h5><a href="/">Create a custom checkout page in
                                                            minutes and Increase your sales...
                                                        </a></h5>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup" data-aos="fade-up">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/05_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">
                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April</a>
                                                        </span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h5><a href="/">With WooLentor's drag-and-drop
                                                            interface for creating custom...</a></h5>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="lifestyle">
                                    <div className="row row--17">
                                        <div className="col-lg-7">
                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/01_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span className="read-time">10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h3><a href="/">All of these amazing features come
                                                            at an affordable price!</a></h3>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/02_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span className="read-time">10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h3>
                                                        <a href="/">Create a custom checkout page in
                                                            minutes and Increase your sales...
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                        </div>
                                        <div className="col-lg-5">
                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/03_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h5><a href="/">Customize your WooCommerce
                                                            store with countless design</a></h5>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/04_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h5><a href="/">Create a custom checkout page in
                                                            minutes and Increase your sales...
                                                        </a></h5>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/05_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h5><a href="/">With WooLentor's drag-and-drop
                                                            interface for creating custom...</a></h5>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="food">
                                    <div className="row row--17">
                                        <div className="col-lg-7">
                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/01_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span className="read-time">10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h3><a href="/">All of these amazing features come
                                                            at an affordable price!</a></h3>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/02_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span className="read-time">10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h3>
                                                        <a href="/">Create a custom checkout page in
                                                            minutes and Increase your sales...
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                        </div>
                                        <div className="col-lg-5">
                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/03_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h5><a href="/">Customize your WooCommerce
                                                            store with countless design</a></h5>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/04_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h5><a href="/">Create a custom checkout page in
                                                            minutes and Increase your sales...
                                                        </a></h5>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/05_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h5><a href="/">With WooLentor's drag-and-drop
                                                            interface for creating custom...</a></h5>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="health">
                                    <div className="row row--17">
                                        <div className="col-lg-7">
                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/01_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span className="read-time">10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h3><a href="/">All of these amazing features come
                                                            at an affordable price!</a></h3>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/02_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                            <span className="read-time">10 min read</span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h3>
                                                        <a href="/">Create a custom checkout page in
                                                            minutes and Increase your sales...
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                        </div>
                                        <div className="col-lg-5">
                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/03_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h5><a href="/">Customize your WooCommerce
                                                            store with countless design</a></h5>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/04_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h5><a href="/">Create a custom checkout page in
                                                            minutes and Increase your sales...
                                                        </a></h5>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}

                                            {/* <!-- Single Featured Video Item Start --> */}
                                            <div className="single-featured-video-item video-popup">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                                    <div className="single-popup-wrap">
                                                        <img src="assets/images/featured-video/05_featured-video.jpg" alt=""/>
                                                        <div className="ht-popup-video video-button">

                                                            <div className="video-button__two">
                                                                <div className="video-play-sm">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="featured-video-content">
                                                    <div className="featured-blog-post-top">
                                                        <div className="trending-blog-post-category">
                                                            <a href="/">Business</a>
                                                        </div>
                                                        <div className="post-meta-left-side">
                                                            <span className="post-date">
                                                            <i className="icofont-ui-calendar"></i> 
                                                            <a href="/">03 April, 2023</a>
                                                        </span>
                                                        </div>
                                                        <div className="post-meta-right-side">
                                                            <a href="/"><img src="assets/images/icons/small-bookmark.png" alt=""/></a>
                                                            <a href="/"><img src="assets/images/icons/heart.png" alt=""/></a>
                                                        </div>
                                                    </div>
                                                    <h5><a href="/">With WooLentor's drag-and-drop
                                                            interface for creating custom...</a></h5>
                                                </div>
                                            </div>{/* <!-- Single Featured Video Item End --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="latest-post-col-4">
                        {/* <!-- Latest Post Area Start --> */}
                        <div className="latest-post-inner-wrap">
                            <div className="latest-post-header" data-aos="fade-up">
                                <div className="section-title">
                                    <h4>Latest Post</h4>
                                </div>
                                <div className="latest-post-slider-navigation">
                                    <div className="latest-post-button-prev navigation-button"><i className="icofont-long-arrow-left"></i></div>
                                    <div className="latest-post-button-next navigation-button"><i className="icofont-long-arrow-right"></i></div>
                                </div>
                            </div>
                            <div className="swiper-container latest-post-slider-active" data-aos="fade-up">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="latest-post-box">
                                            {/* <!-- Single Latest Post Start --> */}
                                            <div className="single-latest-post">
                                                <div className="latest-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/latest-post/01.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="latest-post-content">
                                                    <h6 className="title"><a href="/">All of these amazing
                                                            features come at...</a>
                                                    </h6>
                                                    <div className="latest-post-meta">
                                                        <span className="post-date">
                                                        <i className="icofont-ui-calendar"></i> 
                                                        <a href="/">03-04-2023</a>
                                                    </span>
                                                        <span>10 min read</span>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Latest Post End --> */}
                                            {/* <!-- Single Latest Post Start --> */}
                                            <div className="single-latest-post">
                                                <div className="latest-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/latest-post/02.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="latest-post-content">
                                                    <h6 className="title"><a href="/">Customize your
                                                            WooCommerce store</a>
                                                    </h6>
                                                    <div className="latest-post-meta">
                                                        <span className="post-date">
                                                        <i className="icofont-ui-calendar"></i> 
                                                        <a href="/">03-04-2023</a>
                                                    </span>
                                                        <span>10 min read</span>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Latest Post End --> */}
                                            {/* <!-- Single Latest Post Start --> */}
                                            <div className="single-latest-post">
                                                <div className="latest-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/latest-post/03.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="latest-post-content">
                                                    <h6 className="title"><a href="/">With WooLentor's drag
                                                            -and-drop interface...</a>
                                                    </h6>
                                                    <div className="latest-post-meta">
                                                        <span className="post-date">
                                                        <i className="icofont-ui-calendar"></i> 
                                                        <a href="/">03-04-2023</a>
                                                    </span>
                                                        <span>10 min read</span>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Latest Post End --> */}
                                            {/* <!-- Single Latest Post Start --> */}
                                            <div className="single-latest-post">
                                                <div className="latest-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/latest-post/04.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="latest-post-content">
                                                    <h6 className="title"><a href="/">All of these amazing
                                                            features come at...</a>
                                                    </h6>
                                                    <div className="latest-post-meta">
                                                        <span className="post-date">
                                                        <i className="icofont-ui-calendar"></i> 
                                                        <a href="/">03-04-2023</a>
                                                    </span>
                                                        <span>10 min read</span>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Latest Post End --> */}
                                            {/* <!-- Single Latest Post Start --> */}
                                            <div className="single-latest-post">
                                                <div className="latest-post-thum">
                                                    <a href="/">
                                                        <img src="assets/images/latest-post/05.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="latest-post-content">
                                                    <h6 className="title"><a href="/">WooCommerce comes
                                                            with an intuitive...</a>
                                                    </h6>
                                                    <div className="latest-post-meta">
                                                        <span className="post-date">
                                                        <i className="icofont-ui-calendar"></i> 
                                                        <a href="/">03-04-2023</a>
                                                    </span>
                                                        <span>10 min read</span>
                                                    </div>
                                                </div>
                                            </div>{/* <!-- Single Latest Post End --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> {/* <!-- Latest Post Area End --> */}

                        {/* <!-- Stay In Touch Area Start --> */}
                        <div className="stay-in-touch-area">
                            <div className="section-title" data-aos="fade-up">
                                <h3>Stay In Touch</h3>
                            </div>
                            <div className="stay-in-touch-box" data-aos="fade-up">
                                <div className="single-touch-col">
                                    <a href="/!" className="single-touch facebook">
                                        <div className="touch-socail-icon">
                                            <i className="icofont-facebook"></i>
                                        </div>
                                        <p className="touch-title">5,685K</p>
                                    </a>
                                </div>
                                <div className="single-touch-col">
                                    <a href="/!" className="single-touch twitter">
                                        <div className="touch-socail-icon">
                                            <i className="icofont-twitter"></i>
                                        </div>
                                        <p className="touch-title">6,97K+</p>
                                    </a>
                                </div>
                                <div className="single-touch-col">
                                    <a href="/!" className="single-touch behance">
                                        <div className="touch-socail-icon">
                                            <i className="icofont-behance"></i>
                                        </div>
                                        <p className="touch-title">6,97K+</p>
                                    </a>
                                </div>
                                <div className="single-touch-col">
                                    <a href="/!" className="single-touch youtube">
                                        <div className="touch-socail-icon">
                                            <i className="icofont-youtube-play"></i>
                                        </div>
                                        <p className="touch-title">5,685K</p>
                                    </a>
                                </div>
                                <div className="single-touch-col">
                                    <a href="/!" className="single-touch dribbble">
                                        <div className="touch-socail-icon">
                                            <i className="icofont-dribbble"></i>
                                        </div>
                                        <p className="touch-title">6,97K+</p>
                                    </a>
                                </div>
                                <div className="single-touch-col">
                                    <a href="/!" className="single-touch linkedin">
                                        <div className="touch-socail-icon">
                                            <i className="icofont-linkedin"></i>
                                        </div>
                                        <p className="touch-title">6,97K+</p>
                                    </a>
                                </div>
                            </div>
                        </div> {/* <!-- Stay In Touch Area End --> */}

                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Featured Video Area End --> */}

        {/* <!-- Recent Reading List Area Start --> */}
        <div className="recent-reading-list-area section-space--pb_80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="recent-reading-header">
                            <div className="section-title">
                                <h3>Recent Reading List</h3>
                            </div>
                            <div className="recent-reading-slider-navigation mt-2 mb-2">
                                <div className="recent-reading-button-prev navigation-button"><i className="icofont-long-arrow-left"></i></div>
                                <div className="recent-reading-button-next navigation-button"><i className="icofont-long-arrow-right"></i></div>
                            </div>
                            <div className="recent-article-date">
                                <span>View by Date</span> <a className="date-button" href="/"><i className="icofont-ui-calendar"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-container recent-reading-slider-active">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            {/* <!-- Single Recent Reading Post Start --> */}
                            <div className="single-recent-reading-post" data-aos="fade-up">
                                <a className="recent-reading-post-thum" href="/">
                                    <img src="assets/images/recent-reading-list/01_reading-list.jpg" alt=""/>
                                </a>
                                <div className="recent-reading-post-content">
                                    <div className="recent-reading-post-author">
                                        By <a href="/">Kathy Ramirez</a>
                                    </div>
                                    <h6 className="title"><a href="/">Create beautiful designs that will help convert...</a></h6>
                                    <div className="recent-reading-post-meta">
                                        <span className="post-date">
                                        <i className="icofont-ui-calendar"></i> 
                                        <a href="/">03-04-2023</a>
                                    </span>
                                        <span>10 min read</span>
                                    </div>
                                </div>
                            </div>{/* <!-- Single Recent Reading Post End --> */}

                            {/* <!-- Single Recent Reading Post Start --> */}
                            <div className="single-recent-reading-post" data-aos="fade-up">
                                <a className="recent-reading-post-thum" href="/">
                                    <img src="assets/images/recent-reading-list/02_reading-list.jpg" alt=""/>
                                </a>
                                <div className="recent-reading-post-content">
                                    <div className="recent-reading-post-author">
                                        By <a href="/">Kathy Ramirez</a>
                                    </div>
                                    <h6 className="title"><a href="/">Make your store stand out
                                            from the others by...</a></h6>
                                    <div className="recent-reading-post-meta">
                                        <span className="post-date">
                                        <i className="icofont-ui-calendar"></i> 
                                        <a href="/">03-04-2023</a>
                                    </span>
                                        <span>10 min read</span>
                                    </div>
                                </div>
                            </div>{/* <!-- Single Recent Reading Post End --> */}

                            {/* <!-- Single Recent Reading Post Start --> */}
                            <div className="single-recent-reading-post" data-aos="fade-up">
                                <a className="recent-reading-post-thum" href="/">
                                    <img src="assets/images/recent-reading-list/03_reading-list.jpg" alt=""/>
                                </a>
                                <div className="recent-reading-post-content">
                                    <div className="recent-reading-post-author">
                                        By <a href="/">Kathy Ramirez</a>
                                    </div>
                                    <h6 className="title"><a href="/">With WooLentor's drag-
                                            and-drop interface for...</a></h6>
                                    <div className="recent-reading-post-meta">
                                        <span className="post-date">
                                        <i className="icofont-ui-calendar"></i> 
                                        <a href="/">03-04-2023</a>
                                    </span>
                                        <span>10 min read</span>
                                    </div>
                                </div>
                            </div>{/* <!-- Single Recent Reading Post End --> */}
                        </div>
                        <div className="swiper-slide">
                            {/* <!-- Single Recent Reading Post Start --> */}
                            <div className="single-recent-reading-post" data-aos="fade-up">
                                <a className="recent-reading-post-thum" href="/">
                                    <img src="assets/images/recent-reading-list/04_reading-list.jpg" alt=""/>
                                </a>
                                <div className="recent-reading-post-content">
                                    <div className="recent-reading-post-author">
                                        By <a href="/">Kathy Ramirez</a>
                                    </div>
                                    <h6 className="title"><a href="/">With WooLentor's drag-
                                            and-drop interface for...
                                        </a></h6>
                                    <div className="recent-reading-post-meta">
                                        <span className="post-date">
                                        <i className="icofont-ui-calendar"></i> 
                                        <a href="/">03-04-2023</a>
                                    </span>
                                        <span>10 min read</span>
                                    </div>
                                </div>
                            </div>{/* <!-- Single Recent Reading Post End --> */}

                            {/* <!-- Single Recent Reading Post Start --> */}
                            <div className="single-recent-reading-post" data-aos="fade-up">
                                <a className="recent-reading-post-thum" href="/">
                                    <img src="assets/images/recent-reading-list/05_reading-list.jpg" alt=""/>
                                </a>
                                <div className="recent-reading-post-content">
                                    <div className="recent-reading-post-author">
                                        By <a href="/">Kathy Ramirez</a>
                                    </div>
                                    <h6 className="title"><a href="/">WooCommerce comes
                                            with an intuitive drag
                                        </a></h6>
                                    <div className="recent-reading-post-meta">
                                        <span className="post-date">
                                        <i className="icofont-ui-calendar"></i> 
                                        <a href="/">03-04-2023</a>
                                    </span>
                                        <span>10 min read</span>
                                    </div>
                                </div>
                            </div>{/* <!-- Single Recent Reading Post End --> */}

                            {/* <!-- Single Recent Reading Post Start --> */}
                            <div className="single-recent-reading-post" data-aos="fade-up">
                                <a className="recent-reading-post-thum" href="/">
                                    <img src="assets/images/recent-reading-list/06_reading-list.jpg" alt=""/>
                                </a>
                                <div className="recent-reading-post-content">
                                    <div className="recent-reading-post-author">
                                        By <a href="/">Kathy Ramirez</a>
                                    </div>
                                    <h6 className="title"><a href="/">Create beautiful designs
                                            that will help convert...</a></h6>
                                    <div className="recent-reading-post-meta">
                                        <span className="post-date">
                                        <i className="icofont-ui-calendar"></i> 
                                        <a href="/">03-04-2023</a>
                                    </span>
                                        <span>10 min read</span>
                                    </div>
                                </div>
                            </div>{/* <!-- Single Recent Reading Post End --> */}
                        </div>
                        <div className="swiper-slide">
                            {/* <!-- Single Recent Reading Post Start --> */}
                            <div className="single-recent-reading-post" data-aos="fade-up">
                                <a className="recent-reading-post-thum" href="/">
                                    <img src="assets/images/recent-reading-list/07_reading-list.jpg" alt=""/>
                                </a>
                                <div className="recent-reading-post-content">
                                    <div className="recent-reading-post-author">
                                        By <a href="/">Kathy Ramirez</a>
                                    </div>
                                    <h6 className="title"><a href="/">WooCommerce comes
                                            with an intuitive drag
                                        </a></h6>
                                    <div className="recent-reading-post-meta">
                                        <span className="post-date">
                                        <i className="icofont-ui-calendar"></i> 
                                        <a href="/">03-04-2023</a>
                                    </span>
                                        <span>10 min read</span>
                                    </div>
                                </div>
                            </div>{/* <!-- Single Recent Reading Post End --> */}

                            {/* <!-- Single Recent Reading Post Start --> */}
                            <div className="single-recent-reading-post" data-aos="fade-up">
                                <a className="recent-reading-post-thum" href="/">
                                    <img src="assets/images/recent-reading-list/08_reading-list.jpg" alt=""/>
                                </a>
                                <div className="recent-reading-post-content">
                                    <div className="recent-reading-post-author">
                                        By <a href="/">Kathy Ramirez</a>
                                    </div>
                                    <h6 className="title"><a href="/">Create beautiful designs
                                            that will help convert...</a></h6>
                                    <div className="recent-reading-post-meta">
                                        <span className="post-date">
                                        <i className="icofont-ui-calendar"></i> 
                                        <a href="/">03-04-2023</a>
                                    </span>
                                        <span>10 min read</span>
                                    </div>
                                </div>
                            </div>{/* <!-- Single Recent Reading Post End --> */}

                            {/* <!-- Single Recent Reading Post Start --> */}
                            <div className="single-recent-reading-post" data-aos="fade-up">
                                <a className="recent-reading-post-thum" href="/">
                                    <img src="assets/images/recent-reading-list/09_reading-list.jpg" alt=""/>
                                </a>
                                <div className="recent-reading-post-content">
                                    <div className="recent-reading-post-author">
                                        By <a href="/">Kathy Ramirez</a>
                                    </div>
                                    <h6 className="title"><a href="/">Make your store stand out
                                            from the others by...</a></h6>
                                    <div className="recent-reading-post-meta">
                                        <span className="post-date">
                                        <i className="icofont-ui-calendar"></i> 
                                        <a href="/">03-04-2023</a>
                                    </span>
                                        <span>10 min read</span>
                                    </div>
                                </div>
                            </div>{/* <!-- Single Recent Reading Post End --> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* <!-- Recent Reading List Area End --> */}

        {/* <!-- Bottom Add Banner Area Start --> */}
        <div className="bottom-add-banner-area section-space--pb_80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <a href="/" className="bottom-add-banner-box" data-aos="fade-up">
                            <img src="assets/images/banners/bottom-add-banner.jpg" alt="" />
                            <h6 className="bottom-add-text">All Food Item
                                <span>50% Off</span>
                            </h6>
                        </a>
                    </div>
                </div>
            </div>
        </div>
          {/* <!-- Bottom Add Banner Area End --> */}
        </div>


);

export default Home;