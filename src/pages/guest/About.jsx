import React from 'react';
const About = () => (
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
                            <li className="breadcrumb-item active">About Us</li>
                        </ul>
                        {/* <!-- breadcrumb-list end --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="main-wrapper">
        <div className="site-wrapper-reveal">

            {/* <!-- About Video Area Start --> */}
            <div className="about-video-area section-space--ptb_60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 video-popup">
                            <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link mt-30">
                                <div className="single-popup-wrap">
                                    <img className="img-fluid" src="assets/images/banners/about-video-banner.jpg" alt=""/>
                                    <div className="ht-popup-video video-button">
                                        <div className="video-mark">
                                            <div className="wave-pulse wave-pulse-1"></div>
                                            <div className="wave-pulse wave-pulse-2"></div>
                                        </div>
                                        <div className="video-button__two">
                                            <div className="video-play">
                                                <span className="video-play-icon"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About Video Area End --> */}

            <div className="about-history-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-platform-box" data-aos="fade-up">
                                <div className="platform-icon">
                                    <img src="assets/images/icons/open-platform.png" alt=""/>
                                </div>
                                <div className="platform-content">
                                    <h3 className="title">Open Platform</h3>
                                    <p>Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry has been
                                        the industry's standard dummy text ever
                                        since the 1500s when an unknown printer
                                        took galley type and scrambled.
                                    </p>
                                    <p>Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry has been
                                        the industry's standard.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="single-platform-box platform-d-flex">
                                <div className="platform-content-box" data-aos="fade-up">
                                    <div className="platform-icon">
                                        <img src="assets/images/icons/digital-publishing.png" alt=""/>
                                    </div>
                                    <div className="platform-content">
                                        <h3 className="title">Digital Publishing</h3>
                                        <p>Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry has been
                                            the industry's standard dummy text ever
                                            since the 1500s when an unknown printer
                                            took galley type and scrambled.
                                        </p>
                                        <p>Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry has been
                                            the industry's standard.
                                        </p>
                                    </div>
                                </div>
                                <div className="plateform-image-box" data-aos="fade-up">
                                    <div className="plateforem-image">
                                        <img src="assets/images/banners/about-ex-share.jpg" alt=""/>
                                        <div className="platform-box-button">
                                            <a href="contact-us.html" className="btn-primary btn-large">Share your thinking <i className="icofont-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Bunzo History Area Start --> */}
            <div className="bunzo-history-area section-space--pt_60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bunzo-row">
                                <div className="bunzo-col-6" data-aos="fade-up">
                                    <h2 className="bunzo-history-title">You Can <span className="f-w-bold">Read</span> And <span className="f-w-bold">Write</span> With Bunzo.</h2>
                                </div>
                                <div className="bunzo-col-6">
                                    <div className="single-history-item" data-aos="fade-up">
                                        <h3 className="title mb-20">Mission & Vission</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text eve
                                            since the 1500 when an unknown printer took a galley type scrambled’s
                                            make a type specimen book. It has survived not only five centuries
                                            also the leap into electronic typesetting.
                                        </p>
                                    </div>
                                    <div className="single-history-item" data-aos="fade-up">
                                        <h3 className="title mb-20">Bunzo History</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text eve
                                            since the 1500 when an unknown printer took a galley type scrambled’s
                                            make a type specimen book. It has survived not only five centuries
                                            also the leap into electronic typesetting.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Bunzo History Area End --> */}

            {/* <!-- Team Aare Start --> */}
            <div className="team-area section-space--ptb_100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center" data-aos="fade-up">
                                <h6 className="sub-title-primary mb-20">Meet Our Team Members</h6>
                                <h2 className="title">Leadership & Experienced Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* <!-- Single Team Area Start --> */}
                            <div className="single-team-area" data-aos="fade-up">
                                <div className="team-thum">
                                    <img src="assets/images/team/team-1.jpg" alt=""/>
                                </div>
                                <div className="team-content">
                                    <div className="team-share-top">
                                        <a href="/" className="shate-action-button"><i className="icofont-close"></i></a>
                                        <ul className="team-social-share">
                                            <li><a href="/"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="/"><i className="icofont-skype"></i></a></li>
                                            <li><a href="/"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-member-info">
                                        <h6 className="name-title">Luella Bernstein</h6>
                                        <p className="desination">Founder</p>
                                    </div>
                                </div>
                                </div>
                                {/* <!-- Single Team Area End --> */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                            {/* <!-- Single Team Area Start --> */}
                            <div className="single-team-area">
                                <div className="team-thum">
                                    <img src="assets/images/team/team-2.jpg" alt=""/>
                                </div>
                                <div className="team-content">
                                    <div className="team-share-top">
                                        <a href="/" className="shate-action-button"><i className="icofont-close"></i></a>
                                        <ul className="team-social-share">
                                            <li><a href="/"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="/"><i className="icofont-skype"></i></a></li>
                                            <li><a href="/"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-member-info">
                                        <h6 className="name-title">Luella Bernstein</h6>
                                        <p className="desination">Founder</p>
                                    </div>
                                </div>
                                </div>
                                {/* <!-- Single Team Area End --> */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                            {/* <!-- Single Team Area Start --> */}
                            <div className="single-team-area">
                                <div className="team-thum">
                                    <img src="assets/images/team/team-3.jpg" alt=""/>
                                </div>
                                <div className="team-content">
                                    <div className="team-share-top">
                                        <a href="/" className="shate-action-button"><i className="icofont-close"></i></a>
                                        <ul className="team-social-share">
                                            <li><a href="/"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="/"><i className="icofont-skype"></i></a></li>
                                            <li><a href="/"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-member-info">
                                        <h6 className="name-title">Luella Bernstein</h6>
                                        <p className="desination">Founder</p>
                                    </div>
                                </div>
                                </div>
                                {/* <!-- Single Team Area End --> */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                            {/* <!-- Single Team Area Start --> */}
                            <div className="single-team-area">
                                <div className="team-thum">
                                    <img src="assets/images/team/team-4.jpg" alt=""/>
                                </div>
                                <div className="team-content">
                                    <div className="team-share-top">
                                        <a href="/" className="shate-action-button"><i className="icofont-close"></i></a>
                                        <ul className="team-social-share">
                                            <li><a href="/"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="/"><i className="icofont-skype"></i></a></li>
                                            <li><a href="/"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-member-info">
                                        <h6 className="name-title">Luella Bernstein</h6>
                                        <p className="desination">Founder</p>
                                    </div>
                                </div>
                                </div>
                                {/* <!-- Single Team Area End --> */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                            {/* <!-- Single Team Area Start --> */}
                            <div className="single-team-area">
                                <div className="team-thum">
                                    <img src="assets/images/team/team-5.jpg" alt=""/>
                                </div>
                                <div className="team-content">
                                    <div className="team-share-top">
                                        <a href="/" className="shate-action-button"><i className="icofont-close"></i></a>
                                        <ul className="team-social-share">
                                            <li><a href="/"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="/"><i className="icofont-skype"></i></a></li>
                                            <li><a href="/"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-member-info">
                                        <h6 className="name-title">Luella Bernstein</h6>
                                        <p className="desination">Founder</p>
                                    </div>
                                </div>
                                </div>
                                {/* <!-- Single Team Area End --> */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                            {/* <!-- Single Team Area Start --> */}
                            <div className="single-team-area">
                                <div className="team-thum">
                                    <img src="assets/images/team/team-6.jpg" alt=""/>
                                </div>
                                <div className="team-content">
                                    <div className="team-share-top">
                                        <a href="/" className="shate-action-button"><i className="icofont-close"></i></a>
                                        <ul className="team-social-share">
                                            <li><a href="/"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="/"><i className="icofont-skype"></i></a></li>
                                            <li><a href="/"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-member-info">
                                        <h6 className="name-title">Luella Bernstein</h6>
                                        <p className="desination">Founder</p>
                                    </div>
                                </div>
                                </div>
                                {/* <!-- Single Team Area End --> */}
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                            {/* <!-- Single Team Area Start --> */}
                            <div className="single-team-area">
                                <div className="team-thum">
                                    <img src="assets/images/team/team-7.jpg" alt=""/>
                                </div>
                                <div className="team-content">
                                    <div className="team-share-top">
                                        <a href="/" className="shate-action-button"><i className="icofont-close"></i></a>
                                        <ul className="team-social-share">
                                            <li><a href="/"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="/"><i className="icofont-skype"></i></a></li>
                                            <li><a href="/"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-member-info">
                                        <h6 className="name-title">Luella Bernstein</h6>
                                        <p className="desination">Founder</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Team Area End --> */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                            {/* <!-- Single Team Area Start --> */}
                            <div className="single-team-area">
                                <div className="team-thum">
                                    <img src="assets/images/team/team-8.jpg" alt=""/>
                                </div>
                                <div className="team-content">
                                    <div className="team-share-top">
                                        <a href="/" className="shate-action-button"><i className="icofont-close"></i></a>
                                        <ul className="team-social-share">
                                            <li><a href="/"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="/"><i className="icofont-skype"></i></a></li>
                                            <li><a href="/"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-member-info">
                                        <h6 className="name-title">Luella Bernstein</h6>
                                        <p className="desination">Founder</p>
                                    </div>
                                </div>
                                </div>
                                {/* <!-- Single Team Area End --> */}
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- Team Aare End --> */}


            <div className="bg-gray">
                {/* <!-- Testimonial Area Start --> */}
                <div className="testimonial-area section-space--pt_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h6 className="sub-title-primary mb-20">Some Testimonial</h6>
                                    <h2 className="title">What People Say About Us</h2>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-slider-area">
                            <div className="swiper-container testimonial-slider-active">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="single-testimonial-item-two" data-aos="fade-up">
                                            <div className="testimonial-post-author">
                                                <div className="testimonial-author-image">
                                                    <img src="assets/images/author/testimonial-1.png" alt=""/>
                                                </div>
                                                <div className="testimonial-author-info">
                                                    <h4>Bansten Smith</h4>
                                                    <p>WEB DEVELOPER</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-post-content">
                                                <h5 className="testimonial-post-title">Printer took a galley of type and scrambled to make book.</h5>
                                                <p>Lorem has been them indust standard
                                                    unknown printer took galley text printing
                                                    and typesetting industry been industry
                                                    standard dummy ever.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="single-testimonial-item-two" data-aos="fade-up">
                                            <div className="testimonial-post-author">
                                                <div className="testimonial-author-image">
                                                    <img src="assets/images/author/testimonial-2.png" alt=""/>
                                                </div>
                                                <div className="testimonial-author-info">
                                                    <h4>Rosario Ferraro</h4>
                                                    <p>MARKETER</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-post-content">
                                                <h5 className="testimonial-post-title">Printer took a galley of type and scrambled to make book.</h5>
                                                <p>Lorem has been them indust standard
                                                    unknown printer took galley text printing
                                                    and typesetting industry been industry
                                                    standard dummy ever.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="single-testimonial-item-two" data-aos="fade-up">
                                            <div className="testimonial-post-author">
                                                <div className="testimonial-author-image">
                                                    <img src="assets/images/author/testimonial-3.png" alt=""/>
                                                </div>
                                                <div className="testimonial-author-info">
                                                    <h4>Bansten Smith</h4>
                                                    <p>UI/UX DESIGNER</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-post-content">
                                                <h5 className="testimonial-post-title">Printer took a galley of type and scrambled to make book.</h5>
                                                <p>Lorem has been them indust standard
                                                    unknown printer took galley text printing
                                                    and typesetting industry been industry
                                                    standard dummy ever.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="single-testimonial-item-two" data-aos="fade-up">
                                            <div className="testimonial-post-author">
                                                <div className="testimonial-author-image">
                                                    <img src="assets/images/author/testimonial-1.png" alt=""/>
                                                </div>
                                                <div className="testimonial-author-info">
                                                    <h4>Bansten Smith</h4>
                                                    <p>UI/UX DESIGNER</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-post-content">
                                                <h5 className="testimonial-post-title">Printer took a galley of type and scrambled to make book.</h5>
                                                <p>Lorem has been them indust standard
                                                    unknown printer took galley text printing
                                                    and typesetting industry been industry
                                                    standard dummy ever.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slider-navigation-two">
                                <div className="testimonial-button-next navigation-button"><i className="icofont-long-arrow-left"></i></div>
                                <div className="testimonial-button-prev navigation-button"><i className="icofont-long-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Testimonial Area End --> */}

                {/* <!-- Trending Topic Area Start --> */}
                <div className="trending-topic-area section-space--pb_80">
                    <div className="container">
                        {/* <!-- Newsletter Subscribe Area Start --> */}
                        <div className="newsletter-subscribe-inner section-space--mt_80">
                            <div className="row align-items-center">
                                <div className="col-lg-3">
                                    <div className="section-title mb-4">
                                        <h3>Subscribe For Newsletter</h3>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="newsletter-input-box">
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

        </div>
        </div>
        
  </>
)

export default About;