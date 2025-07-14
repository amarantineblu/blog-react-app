import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import React from "react";
// import Home from "../../pages/guest/Home";

const GuestLayout = () => {
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
        <link rel="canonical" href="#" />
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
      <body>
        {/* Header */}
        <header className="header">
          {/* ...header content... */}
            <div className="header-inner">
                {/* Logo */}
                <div className="logo">
                  <button>
                    <img src="assets/images/logo.png" alt="Bunzo Blog Logo" />
                  </button>
                </div>
                {/* Navigation */}
                <nav className="main-nav">
                  <ul>
                    <li><button>Home</button></li>
                    <li><button>About</button></li>
                    <li><button>Blog</button></li>
                    <li><button>Contact</button></li>
                  </ul>
                </nav>
                {/* Search & Mobile Menu Icons */}
                <div className="header-actions">
                  <button className="search-btn" aria-label="Search">
                    <i className="icofont-search"></i>
                  </button>
                  <button className="mobile-menu-btn" aria-label="Open Menu">
                    <i className="icofont-navigation-menu"></i>
                  </button>
                </div>
              </div>
        </header>

        {/* Main Wrapper */}
        <div id="main-wrapper">
          <div className="site-wrapper-reveal">
            {/* ...main content... */}
            <Outlet />
          </div>
        </div>

        {/* Footer */}
        <footer className="footer-area footer-one">
          {/* ...footer content... */}
          <div className="container">
            <div className="footer-widgets">
              <div className="footer-logo">
                <button>
                  <img src="assets/images/logo-footer.png" alt="Bunzo Blog Footer Logo" />
                </button>
              </div>
              <div className="footer-menu">
                <ul>
                  <li><button>Home</button></li>
                  <li><button>About</button></li>
                  <li><button>Blog</button></li>
                  <li><button>Contact</button></li>
                </ul>
              </div>
              <div className="footer-social">
                <button><i className="icofont-facebook"></i></button>
                <button><i className="icofont-twitter"></i></button>
                <button><i className="icofont-instagram"></i></button>
                <button><i className="icofont-youtube"></i></button>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Bunzo Blog. All Rights Reserved.</p>
            </div>
          </div>
        </footer>

        {/* Scroll Top */}
        <button className="scroll-top" id="scroll-top">
          <i className="arrow-top icofont-swoosh-up"></i>
          <i className="arrow-bottom icofont-swoosh-up"></i>
        </button>

        {/* Search Overlay */}
        <div className="search-overlay" id="search-overlay">
          {/* ...search overlay content... */}
        </div>

        {/* Mobile Menu Overlay */}
        <div className="mobile-menu-overlay" id="mobile-menu-overlay">
          {/* ...mobile menu overlay content... */}
        </div>

        {/* Scripts */}
        <script src="assets/js/vendor/vendor.min.js"></script>
        <script src="assets/js/plugins/plugins.min.js"></script>
        <script src="assets/js/main.js"></script>
      </body>
    </>
  );
};

export default GuestLayout;