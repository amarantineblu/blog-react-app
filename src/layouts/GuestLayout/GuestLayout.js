import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import React, { useEffect } from "react";

import $ from "jquery";

import 'masonry-layout';
import imagesLoaded from 'imagesloaded';
// import Home from "../../pages/guest/Home";
import "./assets/css/style.css";
import "./assets/css/vendor/vendor.min.css";
import "./assets/css/plugins/plugins.min.css";
import "./assets/images/favicon.png";
// import "./assets/css/plugins/swiper-bundle.min.css"

import Logo from "./assets/images/logo/logo.png";
import HeaderBanner from "./assets/images/banners/header-add-banner.jpg";
import "./assets/images/blog/01.jpg"


import CallIcon from "./assets/images/icons/contact-call.png";

import search from "./assets/images/icons/search.png";
import bookmark from "./assets/images/icons/bookmark.png";
import notification from "./assets/images/icons/notification.png";
import user from "./assets/images/icons/user.png";

const icons = {
    search,
    bookmark,
    notification,
    user,
};




const GuestLayout = () => {
    const location = useLocation();
  useEffect(() => {     
      
          
          const loadScript = (src) => {
              const script = document.createElement("script");
              script.src = src;
              script.async = false;
              document.body.appendChild(script);
          };
          loadScript("/js/plugins/plugins.min.js");
      loadScript("/js/vendor/vendor.min.js");
        loadScript("/js/main.js");
		// Optional: cleanup scripts on unmount
		
      //Using jquery

      const $grid = $('.grid');

      imagesLoaded($grid.get(0), function () {
          $grid.masonry({
              itemSelector: '.grid-item',
              columnWidth: '.grid-sizer',
              percentPosition: true
          });
      });
      
		
    return () => {
        // You can remove scripts if needed
            // document.body.removeChild(loadScript);
    };
  }, []);
  return (
    <>
      {/* Document Head */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Bunzo - Blog Bootstrap 5 HTML Template</title>
        <meta name="description" content="Bunzo is one of the most popular blog template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Bunzo - Blog HTML Template" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:image" content="" />
        <link rel="icon" href="assets/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="assets/css/vendor/vendor.min.css" />
        <link rel="stylesheet" href="assets/css/plugins/plugins.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
      </Helmet>

      {/* Main Body */}
      {/* Header */}
     <header className="header">
        <div className="header-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 order-1 order-lg-1">
                        <ul className="header-top-menu-list">
                            <li><a href="/">Help</a></li>
                            <li><a href="/">Status</a></li>
                            <li><a href="/">Writers</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 order-3 order-lg-2">
                        <div className="header-top-contact-info">
                            <div className="header-top-single-contact-item">
                                <div className="header-top-contact-icon">
                                    <img src={CallIcon} alt=""/>
                                </div>
                                <div className="header-top-contact-text text-size-small">
                                    <a href="tel:970262-1413">(970) 262-1413</a>
                                </div>
                            </div>

                            <div className="header-top-single-contact-item">
                                <div className="header-top-contact-icon">
                                    <img src="assets/images/icons/contact-emaill.png" alt=""/>
                                </div>
                                <div className="header-top-contact-text">
                                    <a href="mailto:address@gmail.com">address@gmail.com</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 order-2 order-lg-3">
                        <div className="header-top-right-side">
                            <p>Bangladesh</p>
                            <div className="wayder">
                                <span className="wayder-icon"><img src="assets/images/icons/wayder.png" alt=""/></span>
                                <span className="wayder-text">28° C</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-mid-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-2 col-5">
                        <div className="logo">
                            <a href="/">
                                <img src={Logo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-md-block d-none">
                        <div className="header-add-banner text-center">
                            <a href="/">
                                <img src={HeaderBanner} alt="" />
                                <h6 className="header-add-text">All Food Item
                                    <span>50% Off</span>
                                </h6>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-7">
                        <div className="header-mid-right-side">
                            <a href="/" id="search-overlay-trigger" className="single-action-item">
                                <img src={icons.search} alt=""/>
                            </a>
                            <a href="/" className="single-action-item">
                                <img src={icons.notification} alt=""/>
                            </a>
                            <a href="/" className="single-action-item">
                                <img src={icons.bookmark} alt=""/>
                            </a>
                            <a href="/" className="single-action-item">
                                <img src={icons.user} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-bottom-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-9">
                        <ul className="social-share-area mt-15 mb-15">
                            <li><a href="/"><i className="icofont-facebook"></i></a></li>
                            <li><a href="/"><i className="icofont-skype"></i></a></li>
                            <li><a href="/"><i className="icofont-twitter"></i></a></li>
                            <li><a href="/"><i className="icofont-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-8 col-3">
                        <div className="main-menu-area text-end">
                            <nav className="navigation-menu">
                                <ul>
                                    <li className="has-children">
                                        <a href="/"><span>Home</span></a>
                                        <ul className="submenu">
                                            <li><a href="/"><span>Home Two</span></a></li>
                                            <li><a href="/"><span>Home Three</span></a></li>
                                            <li><a href="/"><span>Home Four</span></a></li>
                                            <li><a href="/"><span>Home Five</span></a></li>
                                            <li><a href="/"><span>Home Six</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about-us.html"><span>About</span></a>
                                    </li>
                                    <li className="has-children"><a href="/"><span>Category</span></a>
                                        <ul className="submenu">
                                            <li><a href="/"><span>Category List</span></a> </li>
                                            <li><a href="/"><span>Category Grid</span></a> </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="/"><span>Pages</span></a>
                                        <ul className="submenu">
                                            <li><a href="/"><span>Blog Details</span></a> </li>
                                            <li><a href="/"><span>Blog Details Two</span></a> </li>
                                            <li><a href="/"><span>Error 404</span></a> </li>
                                            <li><a href="/"><span>FAQ's</span></a> </li>
                                            <li><a href="/"><span>Author post</span></a> </li>
                                            <li><a href="/"><span>Register</span></a> </li>
                                            <li><a href="/"><span>Write Post</span></a> </li>
                                        </ul>
                                    </li>
                                    <li><a href="/"><span>Contact </span></a></li>
                                </ul>
                            </nav>
                        </div>
                        {/* <!-- mobile menu --> */}
                        <div className="mobile-menu-right">
                            <div className="mobile-navigation-icon d-block d-lg-none" id="mobile-menu-trigger">
                                <i></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
        {location.pathname === "/" && (
            <div id="main-wrapper">
                <Outlet />
            </div>
        )}
      {/* Main Wrapper */}
        {/* ...main content... */}
        <Outlet />
          

      {/* Footer */}
     <footer className="footer-area footer-one">
        <div className="footer-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo-white.png" alt=""/>
                                </a>
                            </div>
                            <p>Lorem Ipsum is simply dummy text
                                the printing and typesetting industry
                                has been the industry's standard
                                text ever since.
                            </p>
                            <ul className="footer-socail-share">
                                <li><a href="/"><i className="icofont-facebook"></i></a></li>
                                <li><a href="/"><i className="icofont-skype"></i></a></li>
                                <li><a href="/"><i className="icofont-twitter"></i></a></li>
                                <li><a href="/"><i className="icofont-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className="footer-widget footer-subscribe-center">
                            <div className="footer-widget-title">
                                <h4 className="title">Subscribe</h4>
                            </div>
                            <div className="footer-subscribe-wrap">
                                <div className="single-input">
                                    <input type="text" placeholder="Your Name"/>
                                </div>
                                <div className="single-input">
                                    <input type="email" placeholder="Email Address"/>
                                </div>
                                <div className="button-box">
                                    <button className="btn-primary btn-large" type="submit">Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="footer-menu-widget">
                            <div className="single-footer-menu">
                                <div className="footer-widget-title">
                                    <h4 className="title">Company</h4>
                                </div>
                                <ul className="footer-widget-menu-list">
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                    <li><a href="/">Local Print Ads</a></li>
                                    <li><a href="/">FAQ’s</a></li>
                                    <li><a href="/">Careers</a></li>
                                </ul>
                            </div>
                            <div className="single-footer-menu">
                                <div className="footer-widget-title">
                                    <h4 className="title">Quick Links</h4>
                                </div>
                                <ul className="footer-widget-menu-list">
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Discussion</a></li>
                                    <li><a href="/">Terms & Conditions</a></li>
                                    <li><a href="/">Customer Support</a></li>
                                    <li><a href="/">Course FAQ’s</a></li>
                                </ul>
                            </div>
                            <div className="single-footer-menu">
                                <div className="footer-widget-title">
                                    <h4 className="title">Category</h4>
                                </div>
                                <ul className="footer-widget-menu-list">
                                    <li><a href="/">Lefestyle</a></li>
                                    <li><a href="/">Healthy</a></li>
                                    <li><a href="/">Restaurent</a></li>
                                    <li><a href="/">Travel Tips</a></li>
                                    <li><a href="/">Marketing</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-bottom-inner">
                            <div className="copy-right-text">
                                <p>© 2021 <a href="/">Bunzo</a>. Made with ❤️ by <a  rel="noopener" href="https://hasthemes.com/">HasThemes</a></p>
                            </div>
                            <div className="button-right-box">
                                <a href="/" className="btn-primary btn-large">Share your thinking <i className="icofont-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

      {/* Scroll Top */}
      {/* <!--====================  scroll top ====================--> */}
    <a href="/" className="scroll-top" id="scroll-top">
        <i className="arrow-top icofont-swoosh-up"></i>
        <i className="arrow-bottom icofont-swoosh-up"></i>
    </a>
    {/* <!--====================  End of scroll top  ====================--> */}

    {/* <!--====================  search overlay ====================--> */}
    <div className="search-overlay" id="search-overlay">

        <div className="search-overlay__header">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        {/* <!-- search content --> */}
                        <div className="search-content text-end">
                            <span className="mobile-navigation-close-icon" id="search-close-trigger"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="search-overlay__inner">
            <div className="search-overlay__body">
                <div className="search-overlay__form">
                    <form action="#">
                        <input type="text" placeholder="Search" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!--====================  End of search overlay  ====================--> */}

    {/* <!--====================  mobile menu overlay ====================--> */}
    <div className="mobile-menu-overlay" id="mobile-menu-overlay">
        <div className="mobile-menu-overlay__inner">
            <div className="mobile-menu-overlay__header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-8">
                            {/* <!-- logo --> */}
                            <div className="logo">
                                <a href="/">
                                    <img src="assets/images/logo/logo.png" className="img-fluid" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-4">
                            {/* <!-- mobile menu content --> */}
                            <div className="mobile-menu-content text-end">
                                <span className="mobile-navigation-close-icon" id="mobile-menu-close-trigger"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-overlay__body">
                <nav className="offcanvas-navigation">
                    <ul>
                        <li className="has-children">
                            <a href="/">Home</a>
                            <ul className="sub-menu">
                                <li><a href="/"><span>Home Two</span></a></li>
                                <li><a href="/"><span>Home Three</span></a></li>
                                <li><a href="/"><span>Home Four</span></a></li>
                                <li><a href="/"><span>Home Five</span></a></li>
                                <li><a href="/"><span>Home Six</span></a></li>
                            </ul>
                        </li>
                        <li><a href="about-us.html"><span>About</span></a></li>
                        <li className="has-children">
                            <a href="/">Category</a>
                            <ul className="sub-menu">
                                <li><a href="/"><span>Category List</span></a> </li>
                                <li><a href="/"><span>Category Grid</span></a> </li>
                            </ul>
                        </li>
                        <li className="has-children">
                            <a href="/">Pages</a>
                            <ul className="sub-menu">
                                <li><a href="/"><span>Blog Details</span></a> </li>
                                <li><a href="/"><span>Blog Details Two</span></a> </li>
                                <li><a href="/"><span>Error 404</span></a> </li>
                                <li><a href="/"><span>FAQ's</span></a> </li>
                                <li><a href="/"><span>Author post</span></a> </li>
                                <li><a href="/"><span>Register</span></a> </li>
                                <li><a href="/"><span>Write Post</span></a> </li>
                            </ul>
                        </li>
                        <li><a href="contact-us.html"><span>Contact </span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    {/* <!--====================  End of mobile menu overlay  ====================--> */}
      {/* Scripts */}

    </>
  );
};

export default GuestLayout;