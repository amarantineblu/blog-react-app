import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return `
  < !DOCTYPE html >
    <
    html className = "no-js"
  lang = "zxx" >

    <
    head >
    <
    meta charset = "utf-8" / >
    <
    meta http - equiv = "X-UA-Compatible"
  content = "IE=edge" / >
    <
    title > Bunzo - Blog Bootstrap 5 HTML Template < /title> <
  meta name = "description"
  content = "Bunzo is one of the most popular blog template" / >
    <
    meta name = "viewport"
  content = "width=device-width, initial-scale=1" / >

    <
    meta name = "robots"
  content = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" / >
    <
    link rel = "canonical"
  href = "#" / >
    <
    meta property = "og:locale"
  content = "en_US" / >
    <
    meta property = "og:type"
  content = "article" / >
    <
    meta property = "og:title"
  content = "Bunzo - Blog HTML Template" / >
    <
    meta property = "og:url"
  content = "" / >
    <
    meta property = "og:site_name"
  content = "" / >
    <
    meta property = "og:image"
  content = "" / >

    <
    link rel = "icon"
  href = "assets/images/favicon.png" / >

    {
      /* <
                !--CSS ===
                ===
                === === === === === === === === === === === === == -- >

                <
                !--Bootstrap CSS-- > */
    } {
      /* <!--< link rel="stylesheet" href = "assets/css/vendor/bootstrap.min.css" /> -- > */
    }

    <
    link rel = "preconnect"
  href = "https://fonts.googleapis.com/" / >
    <
    link rel = "preconnect"
  href = "https://fonts.gstatic.com/"
  crossorigin / >
    <
    link href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&amp;display=swap"
  rel = "stylesheet" / >

    {
      /* <
                !--Icofont CSS-- > */
    } {
      /* <
                !-- < link rel = "stylesheet"
                href = "assets/css/vendor/icofont.min.css" / > -- >

                <
                !--Light gallery CSS-- >
                <
                !-- < link rel = "stylesheet"
                href = "assets/css/plugins/lightgallery.min.css" > -- >

                <
                !--Swiper bundle CSS-- >
                <
                !-- < link rel = "stylesheet"
                href = "assets/css/plugins/swiper-bundle.min.css" / > -- >

                <
                !--AOS CSS-- >
                <
                !-- < link rel = "stylesheet"
                href = "assets/css/plugins/aos.css" > -- >


                <
                !--Vendor & Plugins CSS(Please remove the comment from below vendor.min.css & plugins.min.css
                  for better website load performance and remove css files from avobe) -- > */
    }

    <
    link rel = "stylesheet"
  href = "assets/css/vendor/vendor.min.css" / >
    <
    link rel = "stylesheet"
  href = "assets/css/plugins/plugins.min.css" / >

    {
      /* < !--Main Style CSS-- > */
    } <
    link rel = "stylesheet"
  href = "assets/css/style.css" / >

    <
    /head>




    <
    body >

    {
      /* <
              !-- === === == header area === === === -- > */
    } < header className = "header" / >
    <
    div className = "header-top-area" >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-lg-3 col-md-6 col-sm-6 order-1 order-lg-1" >
    <
    ul className = "header-top-menu-list" >
    <
    li > < a href = "#" > Help < /a></li >
    <
    li > < a href = "#" > Status < /a></li >
    <
    li > < a href = "#" > Writers < /a></li >
    <
    /ul>  < /
  div > <
    div className = "col-lg-6 col-md-12 col-sm-12 order-3 order-lg-2" >
    <
    div className = "header-top-contact-info" >
    <
    div className = "header-top-single-contact-item" >
    <
    div className = "header-top-contact-icon" >
    <
    img src = "assets/images/icons/contact-call.png"
  alt = "" / >
    <
    /div> <div className = "header-top-contact-text text-size-small" > <
  a href = "tel:970262-1413" > (970) 262 - 1413 < /a>  < /
  div > < /div > <
  div className = "header-top-single-contact-item" >
    <
    div className = "header-top-contact-icon" >
    <
    img src = "assets/images/icons/contact-emaill.png"
  alt = "" / >
    <
    /div> <div classNameName = "header-top-contact-text" > <
  a href = "mailto:address@gmail.com" > address @gmail.com < /a>  < /
  div > < /div >

    <
    /div> </div > < div className = "col-lg-3 col-md-6 col-sm-6 order-2 order-lg-3" >
    <
    div className = "header-top-right-side" >
    <
    p > Bangladesh < /p> <div className = "wayder" > <
  span className = "wayder-icon" > < img src = "assets/images/icons/wayder.png"
  alt = "" > < /span>  <
  span className = "wayder-text" > 28° C < /span>  < /
  div > < /div > < /div > < /div > < /div > < /div > < div className = "header-mid-area" > <
  div className = "container" >
    <
    div className = "row align-items-center" >
    <
    div className = "col-lg-3 col-md-2 col-5" >
    <
    div className = "logo" >
    <
    a href = "index.html" >
    <
    img src = "assets/images/logo/logo.png"
  alt = "" / >
    <
    /a> < /
  div > <
    /div> <
  div className = "col-lg-6 col-md-6 d-md-block d-none" >
    <
    div className = "header-add-banner text-center" >
    <
    a href = "#" >
    <
    img src = "assets/images/banners/header-add-banner.jpg"
  alt = "" / >
    <
    h6 className = "header-add-text" > All Food Item <
    span > 50 % Off < /span> < /
  h6 > <
    /a> < /
  div > <
    /div> <
  div className = "col-lg-3 col-md-4 col-7" >
    <
    div className = "header-mid-right-side" >
    <
    a href = "javascript:void(0)"
  id = "search-overlay-trigger"
  className = "single-action-item" >
    <
    img src = "assets/images/icons/search.png"
  alt = "" >
    <
    /a> <
  a href = "#"
  className = "single-action-item" >
    <
    img src = "assets/images/icons/notification.png"
  alt = "" >
    <
    /a> <
  a href = "#"
  className = "single-action-item" >
    <
    img src = "assets/images/icons/bookmark.png"
  alt = "" >
    <
    /a> <
  a href = "register.html"
  className = "single-action-item" >
    <
    img src = "assets/images/icons/user.png"
  alt = "" >
    <
    /a> < /
  div > <
    /div> < /
  div > <
    /div> < /
  div > <
    div className = "header-bottom-area" >
    <
    div className = "container" >
    <
    div className = "row align-items-center" >
    <
    div className = "col-lg-4 col-9" >
    <
    ul className = "social-share-area mt-15 mb-15" >
    <
    li > < a href = "#" > < i className = "icofont-facebook" > < /i></a > < /li> <
  li > < a href = "#" > < i className = "icofont-skype" > < /i></a > < /li> <
  li > < a href = "#" > < i className = "icofont-twitter" > < /i></a > < /li> <
  li > < a href = "#" > < i className = "icofont-linkedin" > < /i></a > < /li> < /
  ul > <
    /div> <
  div className = "col-lg-8 col-3" >
    <
    div className = "main-menu-area text-end" >
    <
    nav className = "navigation-menu" >
    <
    ul >
    <
    li className = "has-children" >
    <
    a href = "index.html" > < span > Home < /span></a >
    <
    ul className = "submenu" >
    <
    li > < a href = "index-2.html" > < span > Home Two < /span></a > < /li> <
  li > < a href = "index-3.html" > < span > Home Three < /span></a > < /li> <
  li > < a href = "index-4.html" > < span > Home Four < /span></a > < /li> <
  li > < a href = "index-5.html" > < span > Home Five < /span></a > < /li> <
  li > < a href = "index-6.html" > < span > Home Six < /span></a > < /li> < /
  ul > <
    /li> <
  li >
    <
    a href = "about-us.html" > < span > About < /span></a >
    <
    /li> <
  li className = "has-children" > < a href = "category.html" > < span > Category < /span></a >
    <
    ul className = "submenu" >
    <
    li > < a href = "category.html" > < span > Category List < /span></a > < /li> <
  li > < a href = "category-grid.html" > < span > Category Grid < /span></a > < /li> < /
  ul > <
    /li> <
  li className = "has-children" >
    <
    a href = "#" > < span > Pages < /span></a >
    <
    ul className = "submenu" >
    <
    li > < a href = "blog-details.html" > < span > Blog Details < /span></a > < /li> <
  li > < a href = "blog-details-two.html" > < span > Blog Details Two < /span></a > < /li> <
  li > < a href = "error-404.html" > < span > Error 404 < /span></a > < /li> <
  li > < a href = "faq.html" > < span > FAQ 's</span></a> </li> <
  li > < a href = "author-post.html" > < span > Author post < /span></a > < /li> <
  li > < a href = "register.html" > < span > Register < /span></a > < /li> <
  li > < a href = "write-post.html" > < span > Write Post < /span></a > < /li> < /
  ul > <
    /li> <
  li > < a href = "contact-us.html" > < span > Contact < /span></a > < /li> < /
  ul > <
    /nav> < /
  div > <
    !--mobile menu-- >
    <
    div className = "mobile-menu-right" >
    <
    div className = "mobile-navigation-icon d-block d-lg-none"
  id = "mobile-menu-trigger" >
    <
    i > < /i> < /
  div > <
    /div> < /
  div > <
    /div> < /
  div > <
    /div> < /
  header > <
    !-- === === == End of header area === === === -- >















    <
    div id = "main-wrapper" >
    <
    div className = "site-wrapper-reveal" >
    <
    !--Hero Area Start-- >
    <
    div className = "hero-area" >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-lg-12" >
    <
    div className = "hero-inner-area" >
    <
    !--Hero Category Area Start-- >
    <
    div className = "hero-category-area" >
    <
    a href = "category.html"
  className = "single-hero-category-item"
  data - aos = "fade-up" >
    <
    img src = "assets/images/catagory/technology.jpg"
  alt = "" >
    <
    div className = "hero-category-inner-box" >
    <
    h3 className = "title" > Business < /h3> <
  i className = "icon icofont-long-arrow-right" > < /i> < /
  div > <
    /a> <
  a href = "category.html"
  className = "single-hero-category-item"
  data - aos = "fade-up" >
    <
    img src = "assets/images/catagory/travel.jpg"
  alt = "" >
    <
    div className = "hero-category-inner-box" >
    <
    h3 className = "title" > Travel < /h3> <
  i className = "icon icofont-long-arrow-right" > < /i> < /
  div > <
    /a> <
  a href = "category.html"
  className = "single-hero-category-item"
  data - aos = "fade-up" >
    <
    img src = "assets/images/catagory/medical.jpg"
  alt = "" >
    <
    div className = "hero-category-inner-box" >
    <
    h3 className = "title" > Food < /h3> <
  i className = "icon icofont-long-arrow-right" > < /i> < /
  div > <
    /a> <
  a href = "category.html"
  className = "single-hero-category-item"
  data - aos = "fade-up" >
    <
    img src = "assets/images/catagory/web.jpg"
  alt = "" >
    <
    div className = "hero-category-inner-box" >
    <
    h3 className = "title" > Tech < /h3> <
  i className = "icon icofont-long-arrow-right" > < /i> < /
  div > <
    /a> < /
  div > < !--Hero Category Area End-- >

    <
    !--Hero Banner Area Start-- >
    <
    div className = "hero-banner-area"
  data - aos = "fade-up" >
    <
    a href = "blog-details.html" >
    <
    img src = "assets/images/hero/hero-01.jpg"
  alt = "" >
    <
    /a> < /
  div > < !--Hero Banner Area End-- >

    <
    div className = "hero-blog-post" >
    <
    !--Single - hero - blog - post Start-- >
    <
    div className = "single-hero-blog-post"
  data - aos = "fade-up" >
    <
    div className = "hero-blog-post-top" >
    <
    div className = "hero-blog-post-category" >
    <
    a href = "#"
  className = "tech" > Tech < /a> < /
  div > <
    div className = "hero-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h3 className = "hero-blog-post-title" >
    <
    a href = "blog-details.html" > Make your store stand out from the others...
    <
    /a> < /
  h3 > <
    p className = "post-short-details" >
    Lorem Ipsum has been them industr standard unknown printer took galley. <
    /p> <
  div className = "hero-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > < !--Single - hero - blog - post End-- > <
    !--Single - hero - blog - post Start-- >
    <
    div className = "single-hero-blog-post"
  data - aos = "fade-up" >
    <
    div className = "hero-blog-post-top" >
    <
    div className = "hero-blog-post-category" >
    <
    a href = "#"
  className = "marketing" > Marketing < /a> < /
  div > <
    div className = "hero-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h3 className = "hero-blog-post-title" >
    <
    a href = "blog-details.html" > WooCommerce comes with an intuitive drag - and - drop...
    <
    /a> < /
  h3 > <
    p className = "post-short-details" >
    Lorem Ipsum has been them industr standard unknown printer took galley. <
    /p> <
  div className = "hero-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > < !--Single - hero - blog - post End-- > <
    /div> < /
  div >

    <
    /div> < /
  div > <
    /div> < /
  div > < !--Hero Area End-- >

    <
    !--Trending Article Area Start-- >
    <
    div className = "trending-article-area section-space--ptb_80" >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-lg-8 col-7" >
    <
    div className = "section-title mb-40" >
    <
    h3 > Trending Article < /h3> < /
  div > <
    /div> <
  div className = "col-lg-4 col-5" >
    <
    div className = "trending-slider-navigation text-end" >
    <
    div className = "trending-button-prev navigation-button" > < i className = "icofont-long-arrow-left" > < /i></div >
    <
    div className = "trending-button-next navigation-button" > < i className = "icofont-long-arrow-right" > < /i></div >
    <
    /div> < /
  div > <
    /div> <
  div className = "row" >
    <
    div className = "col-lg-12" >

    <
    !--Swiper-- >
    <
    div className = "swiper-container trending-slider-active" >
    <
    div className = "swiper-wrapper" >
    <
    div className = "swiper-slide" >
    <
    div className = "trending-article-row" >
    <
    !--Trending Article Left Side Start-- >
    <
    div className = "trending-article-left-side" >
    <
    !--Trending Single Item Start-- >
    <
    article className = "trending-single-item"
  data - aos = "fade-up" >
    <
    div className = "trending-post-thum" >
    <
    a href = "blog-details.html" >
    <
    img src = "assets/images/trending/1-trending-img.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "trending-post-content" >
    <
    div className = "trending-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "fashion" > Fashion < /a> < /
  div > <
    div className = "trending-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "trending-blog-post-title" >
    <
    a href = "blog-details.html" > Customize your WooCommerce store with countless design <
    /a> < /
  h5 > <
    div className = "trending-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /article><!-- Trending Single Item End --> <!--Trending Single Item Start-- > <
  article className = "trending-single-item"
  data - aos = "fade-up" >
    <
    div className = "trending-post-thum" >
    <
    a href = "blog-details.html" >
    <
    img src = "assets/images/trending/2-trending-img.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "trending-post-content" >
    <
    div className = "trending-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "tech" > Tech < /a> < /
  div > <
    div className = "trending-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "trending-blog-post-title" >
    <
    a href = "blog-details.html" > All of these amazing features come at an affordable price!
    <
    /a> < /
  h5 > <
    div className = "trending-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /article><!-- Trending Single Item End --> <!--Trending Single Item Start-- > <
  article className = "trending-single-item"
  data - aos = "fade-up" >
    <
    div className = "trending-post-thum" >
    <
    a href = "blog-details.html" >
    <
    img src = "assets/images/trending/3-trending-img.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "trending-post-content" >
    <
    div className = "trending-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "food" > Food < /a> < /
  div > <
    div className = "trending-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "trending-blog-post-title" >
    <
    a href = "blog-details.html" > Make your store stand out from the others by converting.. <
    /a> < /
  h5 > <
    div className = "trending-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /article><!-- Trending Single Item End --> < /
  div > < !--Trending Article Left Side End-- >

    <
    !--Trending Article Right Side Start-- >
    <
    div className = "trending-article-right-side" >
    <
    div className = "large-banner-trending-article"
  data - aos = "fade-up" >
    <
    div className = "trending-large-post-thum" >
    <
    a href = "blog-details.html" >
    <
    img src = "assets/images/trending/4-trending-img.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "trending-large-post-content" >
    <
    !--Trending Single Item Start-- >
    <
    article className = "trending-single-item" >
    <
    div className = "trending-post-content" >
    <
    div className = "trending-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "health" > Health < /a> < /
  div > <
    div className = "trending-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "trending-blog-post-title" >
    <
    a href = "blog-details.html" > With WooLentor 's drag-and-drop
  interface
  for creating custom...
    <
    /a> < /
  h5 > <
    div className = "trending-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /article><!-- Trending Single Item End -->

    <
    !--Trending Single Item Start-- >
    <
    article className = "trending-single-item" >
    <
    div className = "trending-post-content" >
    <
    div className = "trending-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "doctor" > Doctor < /a> < /
  div > <
    div className = "trending-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "trending-blog-post-title" >
    <
    a href = "blog-details.html" > WooCommerce comes with an intuitive drag - and - drop...
    <
    /a> < /
  h5 > <
    div className = "trending-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /article><!-- Trending Single Item End --> < /
  div > <
    /div>

    <
    !--Trending Single Item Start-- >
    <
    article className = "trending-single-item"
  data - aos = "fade-up" >
    <
    div className = "trending-large-post-thum" >
    <
    a href = "blog-details.html" >
    <
    img src = "assets/images/trending/5-trending-img.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "trending-post-content" >
    <
    div className = "trending-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "business" > Business < /a> < /
  div > <
    div className = "trending-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "trending-blog-post-title" >
    <
    a href = "blog-details.html" > Customize your WooCommerce store with countless design <
    /a> < /
  h5 > <
    div className = "trending-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /article><!-- Trending Single Item End --> < /
  div > < !--Trending Article Right Side End-- > <
    /div> < /
  div > <
    div className = "swiper-slide" >
    <
    div className = "trending-article-row" >
    <
    !--Trending Article Left Side Start-- >
    <
    div className = "trending-article-left-side" >
    <
    !--Trending Single Item Start-- >
    <
    article className = "trending-single-item"
  data - aos = "fade-up" >
    <
    div className = "trending-post-thum" >
    <
    a href = "blog-details.html" >
    <
    img src = "assets/images/trending/1-trending-img.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "trending-post-content" >
    <
    div className = "trending-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "fashion" > Fashion < /a> < /
  div > <
    div className = "trending-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "trending-blog-post-title" >
    <
    a href = "blog-details.html" > Customize your WooCommerce store with countless design <
    /a> < /
  h5 > <
    div className = "trending-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /article><!-- Trending Single Item End --> <!--Trending Single Item Start-- > <
  article className = "trending-single-item"
  data - aos = "fade-up" >
    <
    div className = "trending-post-thum" >
    <
    a href = "blog-details.html" >
    <
    img src = "assets/images/trending/2-trending-img.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "trending-post-content" >
    <
    div className = "trending-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "tech" > Tech < /a> < /
  div > <
    div className = "trending-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "trending-blog-post-title" >
    <
    a href = "blog-details.html" > All of these amazing features come at an affordable price!
    <
    /a> < /
  h5 > <
    div className = "trending-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /article><!-- Trending Single Item End --> <!--Trending Single Item Start-- > <
  article className = "trending-single-item"
  data - aos = "fade-up" >
    <
    div className = "trending-post-thum" >
    <
    a href = "blog-details.html" >
    <
    img src = "assets/images/trending/3-trending-img.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "trending-post-content" >
    <
    div className = "trending-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "food" > Food < /a> < /
  div > <
    div className = "trending-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "trending-blog-post-title" >
    <
    a href = "blog-details.html" > Make your store stand out from the others by converting.. <
    /a> < /
  h5 > <
    div className = "trending-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /article><!-- Trending Single Item End --> < /
  div > < !--Trending Article Left Side End-- >

    <
    !--Trending Article Right Side Start-- >
    <
    div className = "trending-article-right-side" >
    <
    div className = "large-banner-trending-article"
  data - aos = "fade-up" >
    <
    div className = "trending-large-post-thum" >
    <
    a href = "blog-details.html" >
    <
    img src = "assets/images/trending/4-trending-img.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "trending-large-post-content" >
    <
    !--Trending Single Item Start-- >
    <
    article className = "trending-single-item" >
    <
    div className = "trending-post-content" >
    <
    div className = "trending-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "health" > Health < /a> < /
  div > <
    div className = "trending-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "trending-blog-post-title" >
    <
    a href = "blog-details.html" > With WooLentor 's drag-and-drop
  interface
  for creating custom...
    <
    /a> < /
  h5 > <
    div className = "trending-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /article><!-- Trending Single Item End -->

    <
    !--Trending Single Item Start-- >
    <
    article className = "trending-single-item" >
    <
    div className = "trending-post-content" >
    <
    div className = "trending-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "doctor" > Doctor < /a> < /
  div > <
    div className = "trending-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "trending-blog-post-title" >
    <
    a href = "blog-details.html" > WooCommerce comes with an intuitive drag - and - drop...
    <
    /a> < /
  h5 > <
    div className = "trending-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /article><!-- Trending Single Item End --> < /
  div > <
    /div>

    <
    !--Trending Single Item Start-- >
    <
    article className = "trending-single-item"
  data - aos = "fade-up" >
    <
    div className = "trending-large-post-thum" >
    <
    a href = "blog-details.html" >
    <
    img src = "assets/images/trending/5-trending-img.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "trending-post-content" >
    <
    div className = "trending-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "business" > Business < /a> < /
  div > <
    div className = "trending-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "trending-blog-post-title" >
    <
    a href = "blog-details.html" > Customize your WooCommerce store with countless design <
    /a> < /
  h5 > <
    div className = "trending-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /article><!-- Trending Single Item End --> < /
  div > < !--Trending Article Right Side End-- > <
    /div> < /
  div > <
    /div> < /
  div > < !--Swiper End-- >


    <
    /div> < /
  div > <
    /div> < /
  div > <
    !--Trending Article Area End-- >

    <
    !--From Following Area Start-- >
    <
    div className = "from-following-area  section-space--ptb_80" >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-lg-12" >
    <
    div className = "from-following-hader-area"
  data - aos = "fade-up" >
    <
    div className = "section-title" >
    <
    h3 > From Following < /h3> < /
  div >

    <
    div className = "following-slider-navigation text-end" >
    <
    div className = "following-button-prev navigation-button" > < i className = "icofont-long-arrow-left" > < /i></div >
    <
    div className = "following-button-next navigation-button" > < i className = "icofont-long-arrow-right" > < /i></div >
    <
    /div> < /
  div > <
    /div> < /
  div > <
    !--Swiper-- >
    <
    div className = "swiper-container following-slider-active" >
    <
    div className = "swiper-wrapper" >
    <
    div className = "swiper-slide" >
    <
    div className = "row row--17" >
    <
    div className = "from-following-left-side col" >
    <
    div className = "row row--17" >
    <
    div className = "col-md-6 col-sm-6" >
    <
    !--Single Following Post Start-- >
    <
    div className = "single-following-post"
  data - aos = "fade-up" >
    <
    div className = "following-post-thum" >
    <
    img src = "assets/images/blog/01.jpg"
  alt = "" >
    <
    /div> <
  div className = "following-post-content" >
    <
    div className = "following-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "health" > Health < /a> < /
  div > <
    div className = "following-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "following-blog-post-title" >
    <
    a href = "blog-details.html" > Customize your WooCommerce store with countless design <
    /a> < /
  h5 > <
    div className = "following-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /div><!-- Single Following Post End --> < /
  div > <
    div className = "col-md-6 col-sm-6" >
    <
    !--Single Following Post Start-- >
    <
    div className = "single-following-post"
  data - aos = "fade-up" >
    <
    div className = "following-post-thum" >
    <
    img src = "assets/images/blog/02.jpg"
  alt = "" >
    <
    /div> <
  div className = "following-post-content" >
    <
    div className = "following-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "lifestyle" > Lifestyle < /a> < /
  div > <
    div className = "following-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "following-blog-post-title" >
    <
    a href = "blog-details.html" > WooCommerce comes with an intuitive drag - and - drop interface. <
    /a> < /
  h5 > <
    div className = "following-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /div><!-- Single Following Post End --> < /
  div > <
    div className = "col-md-6 col-sm-6" >
    <
    !--Single Following Post Start-- >
    <
    div className = "single-following-post"
  data - aos = "fade-up" >
    <
    div className = "following-post-thum" >
    <
    img src = "assets/images/blog/03.jpg"
  alt = "" >
    <
    /div> <
  div className = "following-post-content" >
    <
    div className = "following-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "lifestyle" > Lifestyle < /a> < /
  div > <
    div className = "following-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "following-blog-post-title" >
    <
    a href = "blog-details.html" > All of these amazing features come at an affordable price!
    <
    /a> < /
  h5 > <
    div className = "following-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /div><!-- Single Following Post End --> < /
  div > <
    div className = "col-md-6 col-sm-6" >
    <
    !--Single Following Post Start-- >
    <
    div className = "single-following-post"
  data - aos = "fade-up" >
    <
    div className = "following-post-thum" >
    <
    img src = "assets/images/blog/04.jpg"
  alt = "" >
    <
    /div> <
  div className = "following-post-content" >
    <
    div className = "following-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "health" > Health < /a> < /
  div > <
    div className = "following-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "following-blog-post-title" >
    <
    a href = "blog-details.html" > Make your store stand out from the others by converting more shoppers into buyers!
    <
    /a> < /
  h5 > <
    div className = "following-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /div><!-- Single Following Post End --> < /
  div > <
    /div> < /
  div > <
    div className = "from-following-right-side col" >
    <
    div className = "following-author-area"
  data - aos = "fade-up" >
    <
    div className = "author-image" >
    <
    img src = "assets/images/author/author-01.png"
  alt = "" >
    <
    /div> <
  div className = "author-title" >
    <
    h4 > < a href = "#" > Antonio Lucas < /a></h4 >
    <
    p > Author, Dingcode < /p> < /
  div > <
    div className = "author-details" >
    <
    p > Lorem psum has been industry standard dumy text since the when and scrambled make specimen book has survived. < /p>

    <
    div className = "author-post-share" >
    <
    ul className = "social-share-area" >
    <
    li > < a href = "#" > < i className = "icofont-facebook" > < /i></a > < /li> <
  li > < a href = "#" > < i className = "icofont-skype" > < /i></a > < /li> <
  li > < a href = "#" > < i className = "icofont-twitter" > < /i></a > < /li> <
  li > < a href = "#" > < i className = "icofont-linkedin" > < /i></a > < /li> < /
  ul > <
    /div>

    <
    div className = "button-box" >
    <
    a href = "#"
  className = "btn" > View Profile < i className = "icofont-long-arrow-right" > < /i></a >
    <
    /div> < /
  div > <
    /div> <
  div className = "following-add-banner"
  data - aos = "fade-up" >
    <
    a href = "#" >
    <
    img src = "assets/images/banners/home-following-banner.png"
  alt = "" >
    <
    /a> < /
  div > <
    /div> < /
  div > <
    /div> <
  div className = "swiper-slide" >
    <
    div className = "row row--17" >
    <
    div className = "from-following-left-side col" >
    <
    div className = "row row--17" >
    <
    div className = "col-md-6 col-sm-6" >
    <
    !--Single Following Post Start-- >
    <
    div className = "single-following-post"
  data - aos = "fade-up" >
    <
    div className = "following-post-thum" >
    <
    img src = "assets/images/blog/01.jpg"
  alt = "" >
    <
    /div> <
  div className = "following-post-content" >
    <
    div className = "following-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "health" > Health < /a> < /
  div > <
    div className = "following-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "following-blog-post-title" >
    <
    a href = "blog-details.html" > Customize your WooCommerce store with countless design <
    /a> < /
  h5 > <
    div className = "following-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /div><!-- Single Following Post End --> < /
  div > <
    div className = "col-md-6 col-sm-6" >
    <
    !--Single Following Post Start-- >
    <
    div className = "single-following-post"
  data - aos = "fade-up" >
    <
    div className = "following-post-thum" >
    <
    img src = "assets/images/blog/02.jpg"
  alt = "" >
    <
    /div> <
  div className = "following-post-content" >
    <
    div className = "following-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "lifestyle" > Lifestyle < /a> < /
  div > <
    div className = "following-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "following-blog-post-title" >
    <
    a href = "blog-details.html" > WooCommerce comes with an intuitive drag - and - drop interface. <
    /a> < /
  h5 > <
    div className = "following-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /div><!-- Single Following Post End --> < /
  div > <
    div className = "col-md-6 col-sm-6" >
    <
    !--Single Following Post Start-- >
    <
    div className = "single-following-post"
  data - aos = "fade-up" >
    <
    div className = "following-post-thum" >
    <
    img src = "assets/images/blog/03.jpg"
  alt = "" >
    <
    /div> <
  div className = "following-post-content" >
    <
    div className = "following-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "lifestyle" > Lifestyle < /a> < /
  div > <
    div className = "following-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "following-blog-post-title" >
    <
    a href = "blog-details.html" > All of these amazing features come at an affordable price!
    <
    /a> < /
  h5 > <
    div className = "following-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /div><!-- Single Following Post End --> < /
  div > <
    div className = "col-md-6 col-sm-6" >
    <
    !--Single Following Post Start-- >
    <
    div className = "single-following-post"
  data - aos = "fade-up" >
    <
    div className = "following-post-thum" >
    <
    img src = "assets/images/blog/04.jpg"
  alt = "" >
    <
    /div> <
  div className = "following-post-content" >
    <
    div className = "following-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#"
  className = "health" > Health < /a> < /
  div > <
    div className = "following-blog-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    /div> <
  h5 className = "following-blog-post-title" >
    <
    a href = "blog-details.html" > Make your store stand out from the others by converting more shoppers into buyers!
    <
    /a> < /
  h5 > <
    div className = "following-blog-post-meta" >
    <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" / > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" / > < /a> < /
  div > <
    /div> < /
  div > <
    /div><!-- Single Following Post End --> < /
  div > <
    /div> < /
  div > <
    div className = "from-following-right-side col" >
    <
    div className = "following-author-area"
  data - aos = "fade-up" >
    <
    div className = "author-image" >
    <
    img src = "assets/images/author/author-01.png"
  alt = "" >
    <
    /div> <
  div className = "author-title" >
    <
    h4 > < a href = "#" > Antonio Lucas < /a></h4 >
    <
    p > Author, Dingcode < /p> < /
  div > <
    div className = "author-details" >
    <
    p > Lorem psum has been industry standard dumy text since the when and scrambled make specimen book has survived. < /p>

    <
    div className = "author-post-share" >
    <
    ul className = "social-share-area" >
    <
    li > < a href = "#" > < i className = "icofont-facebook" > < /i></a > < /li> <
  li > < a href = "#" > < i className = "icofont-skype" > < /i></a > < /li> <
  li > < a href = "#" > < i className = "icofont-twitter" > < /i></a > < /li> <
  li > < a href = "#" > < i className = "icofont-linkedin" > < /i></a > < /li> < /
  ul > <
    /div>

    <
    div className = "button-box" >
    <
    a href = "#"
  className = "btn" > View Profile < i className = "icofont-long-arrow-right" > < /i></a >
    <
    /div> < /
  div > <
    /div> <
  div className = "following-add-banner"
  data - aos = "fade-up" >
    <
    a href = "#" >
    <
    img src = "assets/images/banners/home-following-banner.png"
  alt = "" >
    <
    /a> < /
  div > <
    /div> < /
  div > <
    /div> < /
  div > <
    /div> < /
  div > <
    /div> <!-- From Following Area End -->


    <
    div className = "bg-gray-1" >

    <
    !--Trending Topic Area Start-- >
    <
    div className = "trending-topic-area section-space--ptb_80" >
    <
    div className = "container" >
    <
    div className = "row align-items-center" >
    <
    div className = "trending-topic-section-title" >
    <
    h3 > Trending Topic < /h3> <
  div className = "trending-topic-navigation mt-30" >
    <
    div className = "trending-topic-button-prev navigation-button" > < i className = "icofont-long-arrow-left" > < /i></div >
    <
    div className = "trending-topic-button-next navigation-button" > < i className = "icofont-long-arrow-right" > < /i></div >
    <
    /div> < /
  div > <
    div className = "trending-topic-item-wrap" >
    <
    div className = "swiper-container trending-topic-slider-active" >
    <
    div className = "swiper-wrapper" >
    <
    div className = "swiper-slide"
  data - aos = "fade-up" >
    <
    div className = "single-trending-topic-item" >
    <
    a href = "category-grid.html" >
    <
    img src = "assets/images/topic/01_topic.jpg"
  alt = "" >
    <
    h4 className = "title" > Travel < /h4> < /
  a > <
    /div> < /
  div > <
    div className = "swiper-slide"
  data - aos = "fade-up" >
    <
    div className = "single-trending-topic-item" >
    <
    a href = "category-grid.html" >
    <
    img src = "assets/images/topic/02_topic.jpg"
  alt = "" >
    <
    h4 className = "title" > Food < /h4> < /
  a > <
    /div> < /
  div > <
    div className = "swiper-slide"
  data - aos = "fade-up" >
    <
    div className = "single-trending-topic-item" >
    <
    a href = "category-grid.html" >
    <
    img src = "assets/images/topic/03_topic.jpg"
  alt = "" >
    <
    h4 className = "title" > Design < /h4> < /
  a > <
    /div> < /
  div > <
    div className = "swiper-slide"
  data - aos = "fade-up" >
    <
    div className = "single-trending-topic-item" >
    <
    a href = "category-grid.html" >
    <
    img src = "assets/images/topic/04_topic.jpg"
  alt = "" >
    <
    h4 className = "title" > Technology < /h4> < /
  a > <
    /div> < /
  div > <
    div className = "swiper-slide"
  data - aos = "fade-up" >
    <
    div className = "single-trending-topic-item" >
    <
    a href = "category-grid.html" >
    <
    img src = "assets/images/topic/05_topic.jpg"
  alt = "" >
    <
    h4 className = "title" > Marketing < /h4> < /
  a > <
    /div> < /
  div > <
    /div> < /
  div > <
    /div> < /
  div >

    <
    !--Newsletter Subscribe Area Start-- >
    <
    div className = "newsletter-subscribe-inner section-space--mt_80" >
    <
    div className = "row align-items-center" >
    <
    div className = "col-lg-3" >
    <
    div className = "section-title mb-4" >
    <
    h3 > Subscribe For Newsletter < /h3> < /
  div > <
    /div> <
  div className = "col-lg-9" >
    <
    div className = "newsletter-input-box"
  data - aos = "fade-up" >
    <
    input className = "newsletter-input"
  type = "text"
  placeholder = "Enter your email" >
    <
    div className = "button-box" >
    <
    a href = "#"
  className = "btn-primary btn-large" > Subscribe Now < /a> < /
  div > <
    /div> < /
  div > <
    /div> <
  div className = "newsletter-inner-image" >
    <
    img className = "newsletter-image-01"
  src = "assets/images/shap/1-newsletter.png"
  alt = "" >
    <
    img className = "newsletter-image-02"
  src = "assets/images/shap/2-newsletter.png"
  alt = "" >
    <
    /div> < /
  div > <
    !--Newsletter Subscribe Area End-- >

    <
    /div> < /
  div > <
    !--Trending Topic Area End-- >

    <
    /div>

    <
    !--Featured Video Area Start-- >
    <
    div className = "featured-video-area section-space--ptb_80" >
    <
    div className = "container" >
    <
    div className = "row row--17" >
    <
    div className = "featured-video-col-8" >

    <
    div className = "featured-video-haader" >
    <
    div className = "section-title" >
    <
    h3 > Featured Video < /h3> < /
  div > <
    ul className = "featured-video-list nav"
  data - aos = "fade-up" >
    <
    li className = "featured-video-list-item" >
    <
    a href = "#"
  className = "featured-video-link active"
  data - bs - toggle = "tab"
  data - bs - target = "#travel" > Travel < /a> < /
  li > <
    li className = "featured-video-list-item" >
    <
    a href = "#"
  className = "featured-video-link"
  data - bs - toggle = "tab"
  data - bs - target = "#lifestyle" > Lifestyle < /a> < /
  li > <
    li className = "featured-video-list-item" >
    <
    a href = "#"
  className = "featured-video-link"
  data - bs - toggle = "tab"
  data - bs - target = "#food" > Food < /a> < /
  li > <
    li className = "featured-video-list-item" >
    <
    a href = "#"
  className = "featured-video-link"
  data - bs - toggle = "tab"
  data - bs - target = "#health" > Health < /a> < /
  li > <
    /ul> < /
  div >

    <
    div className = "featured-video-wrap" >

    <
    div className = "tab-content" >
    <
    div className = "tab-pane fade show active"
  id = "travel" >
    <
    div className = "row row--17" >
    <
    div className = "col-lg-7" >
    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup"
  data - aos = "fade-up" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/01_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >
    <
    div className = "video-button__two" >
    <
    div className = "video-play" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span className = "read-time" > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h3 > < a href = "blog-details.html" > All of these amazing features come at an affordable price! < /a></h3 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup"
  data - aos = "fade-up" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/02_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >
    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span className = "read-time" > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h3 >
    <
    a href = "blog-details.html" > Create a custom checkout page in
    minutes and Increase your sales...
    <
    /a> < /
  h3 > <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    /div> <
  div className = "col-lg-5" >
    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup"
  data - aos = "fade-up" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/03_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >
    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April < /a> < /
  span > <
    /div> <
  div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h5 > < a href = "blog-details.html" > Customize your WooCommerce store with countless design < /a></h5 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup"
  data - aos = "fade-up" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/04_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >
    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April < /a> < /
  span > <
    /div> <
  div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h5 > < a href = "blog-details.html" > Create a custom checkout page in
    minutes and Increase your sales...
    <
    /a></h5 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup"
  data - aos = "fade-up" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/05_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >
    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April < /a> < /
  span > <
    /div> <
  div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h5 > < a href = "blog-details.html" > With WooLentor 's drag-and-drop
  interface
  for creating custom... < /a></h5 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- > <
    /div> < /
  div > <
    /div> <
  div className = "tab-pane fade"
  id = "lifestyle" >
    <
    div className = "row row--17" >
    <
    div className = "col-lg-7" >
    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/01_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span className = "read-time" > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h3 > < a href = "blog-details.html" > All of these amazing features come at an affordable price! < /a></h3 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/02_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span className = "read-time" > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h3 >
    <
    a href = "blog-details.html" > Create a custom checkout page in
    minutes and Increase your sales...
    <
    /a> < /
  h3 > <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    /div> <
  div className = "col-lg-5" >
    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/03_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    /div> <
  div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h5 > < a href = "blog-details.html" > Customize your WooCommerce store with countless design < /a></h5 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/04_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    /div> <
  div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h5 > < a href = "blog-details.html" > Create a custom checkout page in
    minutes and Increase your sales...
    <
    /a></h5 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/05_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    /div> <
  div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h5 > < a href = "blog-details.html" > With WooLentor 's drag-and-drop
  interface
  for creating custom... < /a></h5 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- > <
    /div> < /
  div > <
    /div> <
  div className = "tab-pane fade"
  id = "food" >
    <
    div className = "row row--17" >
    <
    div className = "col-lg-7" >
    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/01_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span className = "read-time" > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h3 > < a href = "blog-details.html" > All of these amazing features come at an affordable price! < /a></h3 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/02_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span className = "read-time" > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h3 >
    <
    a href = "blog-details.html" > Create a custom checkout page in
    minutes and Increase your sales...
    <
    /a> < /
  h3 > <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    /div> <
  div className = "col-lg-5" >
    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/03_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    /div> <
  div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h5 > < a href = "blog-details.html" > Customize your WooCommerce store with countless design < /a></h5 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/04_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    /div> <
  div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h5 > < a href = "blog-details.html" > Create a custom checkout page in
    minutes and Increase your sales...
    <
    /a></h5 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/05_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    /div> <
  div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h5 > < a href = "blog-details.html" > With WooLentor 's drag-and-drop
  interface
  for creating custom... < /a></h5 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- > <
    /div> < /
  div > <
    /div> <
  div className = "tab-pane fade"
  id = "health" >
    <
    div className = "row row--17" >
    <
    div className = "col-lg-7" >
    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/01_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span className = "read-time" > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h3 > < a href = "blog-details.html" > All of these amazing features come at an affordable price! < /a></h3 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/02_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    span className = "read-time" > 10 min read < /span> < /
  div > <
    div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h3 >
    <
    a href = "blog-details.html" > Create a custom checkout page in
    minutes and Increase your sales...
    <
    /a> < /
  h3 > <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    /div> <
  div className = "col-lg-5" >
    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/03_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    /div> <
  div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h5 > < a href = "blog-details.html" > Customize your WooCommerce store with countless design < /a></h5 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/04_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    /div> <
  div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h5 > < a href = "blog-details.html" > Create a custom checkout page in
    minutes and Increase your sales...
    <
    /a></h5 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- >

    <
    !--Single Featured Video Item Start-- >
    <
    div className = "single-featured-video-item video-popup" >
    <
    a href = "https://www.youtube.com/watch?v=9No-FiEInLA"
  className = "video-link  mt-30" >
    <
    div className = "single-popup-wrap" >
    <
    img src = "assets/images/featured-video/05_featured-video.jpg"
  alt = "" >
    <
    div className = "ht-popup-video video-button" >

    <
    div className = "video-button__two" >
    <
    div className = "video-play-sm" >
    <
    span className = "video-play-icon" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  a > <
    div className = "featured-video-content" >
    <
    div className = "featured-blog-post-top" >
    <
    div className = "trending-blog-post-category" >
    <
    a href = "#" > Business < /a> < /
  div > <
    div className = "post-meta-left-side" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 April, 2023 < /a> < /
  span > <
    /div> <
  div className = "post-meta-right-side" >
    <
    a href = "#" > < img src = "assets/images/icons/small-bookmark.png"
  alt = "" > < /a> <
  a href = "#" > < img src = "assets/images/icons/heart.png"
  alt = "" > < /a> < /
  div > <
    /div> <
  h5 > < a href = "blog-details.html" > With WooLentor 's drag-and-drop
  interface
  for creating custom... < /a></h5 >
    <
    /div> < /
  div > < !--Single Featured Video Item End-- > <
    /div> < /
  div > <
    /div> < /
  div >

    <
    /div> < /
  div > <
    div className = "latest-post-col-4" >
    <
    !--Latest Post Area Start-- >
    <
    div className = "latest-post-inner-wrap" >
    <
    div className = "latest-post-header"
  data - aos = "fade-up" >
    <
    div className = "section-title" >
    <
    h4 > Latest Post < /h4> < /
  div > <
    div className = "latest-post-slider-navigation" >
    <
    div className = "latest-post-button-prev navigation-button" > < i className = "icofont-long-arrow-left" > < /i></div >
    <
    div className = "latest-post-button-next navigation-button" > < i className = "icofont-long-arrow-right" > < /i></div >
    <
    /div> < /
  div > <
    div className = "swiper-container latest-post-slider-active"
  data - aos = "fade-up" >
    <
    div className = "swiper-wrapper" >
    <
    div className = "swiper-slide" >
    <
    div className = "latest-post-box" >
    <
    !--Single Latest Post Start-- >
    <
    div className = "single-latest-post" >
    <
    div className = "latest-post-thum" >
    <
    a href = "#" >
    <
    img src = "assets/images/latest-post/01.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "latest-post-content" >
    <
    h6 className = "title" > < a href = "blog-details.html" > All of these amazing features come at... < /a> < /
  h6 > <
    div className = "latest-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Latest Post End-- > <
    !--Single Latest Post Start-- >
    <
    div className = "single-latest-post" >
    <
    div className = "latest-post-thum" >
    <
    a href = "#" >
    <
    img src = "assets/images/latest-post/02.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "latest-post-content" >
    <
    h6 className = "title" > < a href = "blog-details.html" > Customize your WooCommerce store < /a> < /
  h6 > <
    div className = "latest-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Latest Post End-- > <
    !--Single Latest Post Start-- >
    <
    div className = "single-latest-post" >
    <
    div className = "latest-post-thum" >
    <
    a href = "#" >
    <
    img src = "assets/images/latest-post/03.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "latest-post-content" >
    <
    h6 className = "title" > < a href = "blog-details.html" > With WooLentor 's drag -
  and - drop interface... < /a> < /
  h6 > <
    div className = "latest-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Latest Post End-- > <
    !--Single Latest Post Start-- >
    <
    div className = "single-latest-post" >
    <
    div className = "latest-post-thum" >
    <
    a href = "#" >
    <
    img src = "assets/images/latest-post/04.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "latest-post-content" >
    <
    h6 className = "title" > < a href = "blog-details.html" > All of these amazing features come at... < /a> < /
  h6 > <
    div className = "latest-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Latest Post End-- > <
    !--Single Latest Post Start-- >
    <
    div className = "single-latest-post" >
    <
    div className = "latest-post-thum" >
    <
    a href = "#" >
    <
    img src = "assets/images/latest-post/05.jpg"
  alt = "" >
    <
    /a> < /
  div > <
    div className = "latest-post-content" >
    <
    h6 className = "title" > < a href = "blog-details.html" > WooCommerce comes with an intuitive... < /a> < /
  h6 > <
    div className = "latest-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Latest Post End-- > <
    /div> < /
  div > <
    /div> < /
  div >

    <
    /div> <!-- Latest Post Area End -->

    <
    !--Stay In Touch Area Start-- >
    <
    div className = "stay-in-touch-area" >
    <
    div className = "section-title"
  data - aos = "fade-up" >
    <
    h3 > Stay In Touch < /h3> < /
  div > <
    div className = "stay-in-touch-box"
  data - aos = "fade-up" >
    <
    div className = "single-touch-col" >
    <
    a href = "#!"
  className = "single-touch facebook" >
    <
    div className = "touch-socail-icon" >
    <
    i className = "icofont-facebook" > < /i> < /
  div > <
    p className = "touch-title" > 5, 685 K < /p> < /
  a > <
    /div> <
  div className = "single-touch-col" >
    <
    a href = "#!"
  className = "single-touch twitter" >
    <
    div className = "touch-socail-icon" >
    <
    i className = "icofont-twitter" > < /i> < /
  div > <
    p className = "touch-title" > 6, 97 K + < /p> < /
  a > <
    /div> <
  div className = "single-touch-col" >
    <
    a href = "#!"
  className = "single-touch behance" >
    <
    div className = "touch-socail-icon" >
    <
    i className = "icofont-behance" > < /i> < /
  div > <
    p className = "touch-title" > 6, 97 K + < /p> < /
  a > <
    /div> <
  div className = "single-touch-col" >
    <
    a href = "#!"
  className = "single-touch youtube" >
    <
    div className = "touch-socail-icon" >
    <
    i className = "icofont-youtube-play" > < /i> < /
  div > <
    p className = "touch-title" > 5, 685 K < /p> < /
  a > <
    /div> <
  div className = "single-touch-col" >
    <
    a href = "#!"
  className = "single-touch dribbble" >
    <
    div className = "touch-socail-icon" >
    <
    i className = "icofont-dribbble" > < /i> < /
  div > <
    p className = "touch-title" > 6, 97 K + < /p> < /
  a > <
    /div> <
  div className = "single-touch-col" >
    <
    a href = "#!"
  className = "single-touch linkedin" >
    <
    div className = "touch-socail-icon" >
    <
    i className = "icofont-linkedin" > < /i> < /
  div > <
    p className = "touch-title" > 6, 97 K + < /p> < /
  a > <
    /div> < /
  div > <
    /div> <!-- Stay In Touch Area End -->

    <
    /div> < /
  div > <
    /div> < /
  div > <
    !--Featured Video Area End-- >

    <
    !--Recent Reading List Area Start-- >
    <
    div className = "recent-reading-list-area section-space--pb_80" >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-lg-12" >
    <
    div className = "recent-reading-header" >
    <
    div className = "section-title" >
    <
    h3 > Recent Reading List < /h3> < /
  div > <
    div className = "recent-reading-slider-navigation mt-2 mb-2" >
    <
    div className = "recent-reading-button-prev navigation-button" > < i className = "icofont-long-arrow-left" > < /i></div >
    <
    div className = "recent-reading-button-next navigation-button" > < i className = "icofont-long-arrow-right" > < /i></div >
    <
    /div> <
  div className = "recent-article-date" >
    <
    span > View by Date < /span> <a className="date-button" href="#"><i className="icofont-ui-calendar"></i > < /a> < /
  div > <
    /div> < /
  div > <
    /div> <
  div className = "swiper-container recent-reading-slider-active" >
    <
    div className = "swiper-wrapper" >
    <
    div className = "swiper-slide" >
    <
    !--Single Recent Reading Post Start-- >
    <
    div className = "single-recent-reading-post"
  data - aos = "fade-up" >
    <
    a className = "recent-reading-post-thum"
  href = "blog-details.html" >
    <
    img src = "assets/images/recent-reading-list/01_reading-list.jpg"
  alt = "" >
    <
    /a> <
  div className = "recent-reading-post-content" >
    <
    div className = "recent-reading-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    h6 className = "title" > < a href = "blog-details.html" > Create beautiful designs that will help convert... < /a></h6 >
    <
    div className = "recent-reading-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Recent Reading Post End-- >

    <
    !--Single Recent Reading Post Start-- >
    <
    div className = "single-recent-reading-post"
  data - aos = "fade-up" >
    <
    a className = "recent-reading-post-thum"
  href = "blog-details.html" >
    <
    img src = "assets/images/recent-reading-list/02_reading-list.jpg"
  alt = "" >
    <
    /a> <
  div className = "recent-reading-post-content" >
    <
    div className = "recent-reading-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    h6 className = "title" > < a href = "blog-details.html" > Make your store stand out from the others by... < /a></h6 >
    <
    div className = "recent-reading-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Recent Reading Post End-- >

    <
    !--Single Recent Reading Post Start-- >
    <
    div className = "single-recent-reading-post"
  data - aos = "fade-up" >
    <
    a className = "recent-reading-post-thum"
  href = "blog-details.html" >
    <
    img src = "assets/images/recent-reading-list/03_reading-list.jpg"
  alt = "" >
    <
    /a> <
  div className = "recent-reading-post-content" >
    <
    div className = "recent-reading-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    h6 className = "title" > < a href = "blog-details.html" > With WooLentor 's drag-
  and - drop interface
  for... < /a></h6 >
  <
  div className = "recent-reading-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Recent Reading Post End-- > <
    /div> <
  div className = "swiper-slide" >
    <
    !--Single Recent Reading Post Start-- >
    <
    div className = "single-recent-reading-post"
  data - aos = "fade-up" >
    <
    a className = "recent-reading-post-thum"
  href = "blog-details.html" >
    <
    img src = "assets/images/recent-reading-list/04_reading-list.jpg"
  alt = "" >
    <
    /a> <
  div className = "recent-reading-post-content" >
    <
    div className = "recent-reading-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    h6 className = "title" > < a href = "blog-details.html" > With WooLentor 's drag-
  and - drop interface
  for...
  <
  /a></h6 >
  <
  div className = "recent-reading-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Recent Reading Post End-- >

    <
    !--Single Recent Reading Post Start-- >
    <
    div className = "single-recent-reading-post"
  data - aos = "fade-up" >
    <
    a className = "recent-reading-post-thum"
  href = "blog-details.html" >
    <
    img src = "assets/images/recent-reading-list/05_reading-list.jpg"
  alt = "" >
    <
    /a> <
  div className = "recent-reading-post-content" >
    <
    div className = "recent-reading-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    h6 className = "title" > < a href = "blog-details.html" > WooCommerce comes with an intuitive drag <
    /a></h6 >
    <
    div className = "recent-reading-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Recent Reading Post End-- >

    <
    !--Single Recent Reading Post Start-- >
    <
    div className = "single-recent-reading-post"
  data - aos = "fade-up" >
    <
    a className = "recent-reading-post-thum"
  href = "blog-details.html" >
    <
    img src = "assets/images/recent-reading-list/06_reading-list.jpg"
  alt = "" >
    <
    /a> <
  div className = "recent-reading-post-content" >
    <
    div className = "recent-reading-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    h6 className = "title" > < a href = "blog-details.html" > Create beautiful designs that will help convert... < /a></h6 >
    <
    div className = "recent-reading-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Recent Reading Post End-- > <
    /div> <
  div className = "swiper-slide" >
    <
    !--Single Recent Reading Post Start-- >
    <
    div className = "single-recent-reading-post"
  data - aos = "fade-up" >
    <
    a className = "recent-reading-post-thum"
  href = "blog-details.html" >
    <
    img src = "assets/images/recent-reading-list/07_reading-list.jpg"
  alt = "" >
    <
    /a> <
  div className = "recent-reading-post-content" >
    <
    div className = "recent-reading-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    h6 className = "title" > < a href = "blog-details.html" > WooCommerce comes with an intuitive drag <
    /a></h6 >
    <
    div className = "recent-reading-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Recent Reading Post End-- >

    <
    !--Single Recent Reading Post Start-- >
    <
    div className = "single-recent-reading-post"
  data - aos = "fade-up" >
    <
    a className = "recent-reading-post-thum"
  href = "blog-details.html" >
    <
    img src = "assets/images/recent-reading-list/08_reading-list.jpg"
  alt = "" >
    <
    /a> <
  div className = "recent-reading-post-content" >
    <
    div className = "recent-reading-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    h6 className = "title" > < a href = "blog-details.html" > Create beautiful designs that will help convert... < /a></h6 >
    <
    div className = "recent-reading-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Recent Reading Post End-- >

    <
    !--Single Recent Reading Post Start-- >
    <
    div className = "single-recent-reading-post"
  data - aos = "fade-up" >
    <
    a className = "recent-reading-post-thum"
  href = "blog-details.html" >
    <
    img src = "assets/images/recent-reading-list/09_reading-list.jpg"
  alt = "" >
    <
    /a> <
  div className = "recent-reading-post-content" >
    <
    div className = "recent-reading-post-author" >
    By < a href = "#" > Kathy Ramirez < /a> < /
  div > <
    h6 className = "title" > < a href = "blog-details.html" > Make your store stand out from the others by... < /a></h6 >
    <
    div className = "recent-reading-post-meta" >
    <
    span className = "post-date" >
    <
    i className = "icofont-ui-calendar" > < /i>  <
  a href = "#" > 03 - 04 - 2023 < /a> < /
  span > <
    span > 10 min read < /span> < /
  div > <
    /div> < /
  div > < !--Single Recent Reading Post End-- > <
    /div> < /
  div > <
    /div>

    <
    /div> < /
  div > <
    !--Recent Reading List Area End-- >

    <
    !--Bottom Add Banner Area Start-- >
    <
    div className = "bottom-add-banner-area section-space--pb_80" >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-lg-12" >
    <
    a href = "#"
  className = "bottom-add-banner-box"
  data - aos = "fade-up" >
    <
    img src = "assets/images/banners/bottom-add-banner.jpg"
  alt = "" >
    <
    h6 className = "bottom-add-text" > All Food Item <
    span > 50 % Off < /span> < /
  h6 > <
    /a> < /
  div > <
    /div> < /
  div > <
    /div> <!-- Bottom Add Banner Area End -->

    <
    /div> < /
  div >



    <
    !-- === === footer area === === = -- >
    <
    footer className = "footer-area footer-one" >
    <
    div className = "footer-top-area" >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-lg-3 col-md-6" >
    <
    div className = "footer-widget" >
    <
    div className = "footer-logo" >
    <
    a href = "index.html" >
    <
    img src = "assets/images/logo/logo-white.png"
  alt = "" >
    <
    /a> < /
  div > <
    p > Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry 's standard
  text ever since. <
    /p> <
  ul className = "footer-socail-share" >
    <
    li > < a href = "#" > < i className = "icofont-facebook" > < /i></a > < /li> <
  li > < a href = "#" > < i className = "icofont-skype" > < /i></a > < /li> <
  li > < a href = "#" > < i className = "icofont-twitter" > < /i></a > < /li> <
  li > < a href = "#" > < i className = "icofont-linkedin" > < /i></a > < /li> < /
  ul > <
    /div> < /
  div > <
    div className = "col-lg-4  col-md-6" >
    <
    div className = "footer-widget footer-subscribe-center" >
    <
    div className = "footer-widget-title" >
    <
    h4 className = "title" > Subscribe < /h4> < /
  div > <
    div className = "footer-subscribe-wrap" >
    <
    div className = "single-input" >
    <
    input type = "text"
  placeholder = "Your Name" >
    <
    /div> <
  div className = "single-input" >
    <
    input type = "email"
  placeholder = "Email Address" >
    <
    /div> <
  div className = "button-box" >
    <
    button className = "btn-primary btn-large"
  type = "submit" > Subscribe Now < /button> < /
  div > <
    /div> < /
  div > <
    /div> <
  div className = "col-lg-5" >
    <
    div className = "footer-menu-widget" >
    <
    div className = "single-footer-menu" >
    <
    div className = "footer-widget-title" >
    <
    h4 className = "title" > Company < /h4> < /
  div > <
    ul className = "footer-widget-menu-list" >
    <
    li > < a href = "about-us.html" > About Us < /a></li >
    <
    li > < a href = "contact-us.html" > Contact Us < /a></li >
    <
    li > < a href = "#!" > Local Print Ads < /a></li >
    <
    li > < a href = "faq.html" > FAQ’ s < /a></li >
    <
    li > < a href = "#!" > Careers < /a></li >
    <
    /ul> < /
  div > <
    div className = "single-footer-menu" >
    <
    div className = "footer-widget-title" >
    <
    h4 className = "title" > Quick Links < /h4> < /
  div > <
    ul className = "footer-widget-menu-list" >
    <
    li > < a href = "#!" > Privacy Policy < /a></li >
    <
    li > < a href = "#!" > Discussion < /a></li >
    <
    li > < a href = "#!" > Terms & Conditions < /a></li >
    <
    li > < a href = "#!" > Customer Support < /a></li >
    <
    li > < a href = "#!" > Course FAQ’ s < /a></li >
    <
    /ul> < /
  div > <
    div className = "single-footer-menu" >
    <
    div className = "footer-widget-title" >
    <
    h4 className = "title" > Category < /h4> < /
  div > <
    ul className = "footer-widget-menu-list" >
    <
    li > < a href = "#!" > Lefestyle < /a></li >
    <
    li > < a href = "#!" > Healthy < /a></li >
    <
    li > < a href = "#!" > Restaurent < /a></li >
    <
    li > < a href = "#!" > Travel Tips < /a></li >
    <
    li > < a href = "#!" > Marketing < /a></li >
    <
    /ul> < /
  div > <
    /div> < /
  div > <
    /div> < /
  div > <
    /div> <
  div className = "footer-bottom-area" >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-lg-12" >
    <
    div className = "footer-bottom-inner" >
    <
    div className = "copy-right-text" >
    <
    p > ©2021 < a href = "#" > Bunzo < /a>. Made with ❤️ by <a target="_blank" rel="noopener" href="https:/ / hasthemes.com / ">HasThemes</a></p> < /
  div > <
    div className = "button-right-box" >
    <
    a href = "#!"
  className = "btn-primary btn-large" > Share your thinking < i className = "icofont-long-arrow-right" > < /i></a >
    <
    /div> < /
  div > <
    /div> < /
  div > <
    /div> < /
  div > <
    /footer> <!-- === == End of footer area === === == -- >



















    <
    !-- === === === === === === == scroll top === === === === === === == -- >
    <
    a href = "#"
  className = "scroll-top"
  id = "scroll-top" >
    <
    i className = "arrow-top icofont-swoosh-up" > < /i> <
  i className = "arrow-bottom icofont-swoosh-up" > < /i> < /
  a > <
    !-- === === === === === === == End of scroll top === === === === === === == -- >

    <
    !-- === === === === === === == search overlay === === === === === === == -- >
    <
    div className = "search-overlay"
  id = "search-overlay" >

    <
    div className = "search-overlay__header" >
    <
    div className = "container-fluid" >
    <
    div className = "row align-items-center" >
    <
    div className = "col-md-12" >
    <
    !--search content-- >
    <
    div className = "search-content text-end" >
    <
    span className = "mobile-navigation-close-icon"
  id = "search-close-trigger" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  div > <
    div className = "search-overlay__inner" >
    <
    div className = "search-overlay__body" >
    <
    div className = "search-overlay__form" >
    <
    form action = "#" >
    <
    input type = "text"
  placeholder = "Search" >
    <
    /form> < /
  div > <
    /div> < /
  div > <
    /div> <!-- === === === === === === == End of search overlay === === === === === === == -- >

    <
    !-- === === === === === === == mobile menu overlay === === === === === === == -- >
    <
    div className = "mobile-menu-overlay"
  id = "mobile-menu-overlay" >
    <
    div className = "mobile-menu-overlay__inner" >
    <
    div className = "mobile-menu-overlay__header" >
    <
    div className = "container-fluid" >
    <
    div className = "row align-items-center" >
    <
    div className = "col-md-6 col-8" >
    <
    !--logo-- >
    <
    div className = "logo" >
    <
    a href = "index.html" >
    <
    img src = "assets/images/logo/logo.png"
  className = "img-fluid"
  alt = "" >
    <
    /a> < /
  div > <
    /div> <
  div className = "col-md-6 col-4" >
    <
    !--mobile menu content-- >
    <
    div className = "mobile-menu-content text-end" >
    <
    span className = "mobile-navigation-close-icon"
  id = "mobile-menu-close-trigger" > < /span> < /
  div > <
    /div> < /
  div > <
    /div> < /
  div > <
    div className = "mobile-menu-overlay__body" >
    <
    nav className = "offcanvas-navigation" >
    <
    ul >
    <
    li className = "has-children" >
    <
    a href = "index.html" > Home < /a> <
  ul className = "sub-menu" >
    <
    li > < a href = "index-2.html" > < span > Home Two < /span></a > < /li> <
  li > < a href = "index-3.html" > < span > Home Three < /span></a > < /li> <
  li > < a href = "index-4.html" > < span > Home Four < /span></a > < /li> <
  li > < a href = "index-5.html" > < span > Home Five < /span></a > < /li> <
  li > < a href = "index-6.html" > < span > Home Six < /span></a > < /li> < /
  ul > <
    /li> <
  li > < a href = "about-us.html" > < span > About < /span></a > < /li> <
  li className = "has-children" >
    <
    a href = "#" > Category < /a> <
  ul className = "sub-menu" >
    <
    li > < a href = "category.html" > < span > Category List < /span></a > < /li> <
  li > < a href = "category-grid.html" > < span > Category Grid < /span></a > < /li> < /
  ul > <
    /li> <
  li className = "has-children" >
    <
    a href = "#" > Pages < /a> <
  ul className = "sub-menu" >
    <
    li > < a href = "blog-details.html" > < span > Blog Details < /span></a > < /li> <
  li > < a href = "blog-details-two.html" > < span > Blog Details Two < /span></a > < /li> <
  li > < a href = "error-404.html" > < span > Error 404 < /span></a > < /li> <
  li > < a href = "faq.html" > < span > FAQ 's</span></a> </li> <
  li > < a href = "author-post.html" > < span > Author post < /span></a > < /li> <
  li > < a href = "register.html" > < span > Register < /span></a > < /li> <
  li > < a href = "write-post.html" > < span > Write Post < /span></a > < /li> < /
  ul > <
    /li> <
  li > < a href = "contact-us.html" > < span > Contact < /span></a > < /li> < /
  ul > <
    /nav> < /
  div > <
    /div> < /
  div > <
    !-- === === === === === === == End of mobile menu overlay === === === === === === == -- >








    <
    !--JS ===
    ===
    ===
    ===
    ===
    === === === === === === === === === == -- >
    <
    !--Modernizer JS-- >
    <
    !-- < script src = "assets/js/vendor/modernizr-2.8.3.min.js" > < /script> -->

    <
    !--jQuery JS-- >
    <
    !-- < script src = "assets/js/vendor/jquery-3.5.1.min.js" > < /script> <
  script src = "assets/js/vendor/jquery-migrate-3.3.0.min.js" > < /script> -->

    <
    !--Bootstrap JS-- >
    <
    !-- < script src = "assets/js/vendor/bootstrap.min.js" > < /script> -->

    <
    !--Light gallery JS-- >
    <
    !-- < script src = "assets/js/plugins/lightgallery.min.js" > < /script> -->

    <
    !--Isotope JS-- >
    <
    !-- < script src = "assets/js/plugins/isotope.min.js" > < /script> -->

    <
    !--Masonry JS-- >
    <
    !-- < script src = "assets/js/plugins/masonry.min.js" > < /script> -->

    <
    !--ImagesLoaded JS-- >
    <
    !-- < script src = "assets/js/plugins/images-loaded.min.js" > < /script> -->

    <
    !--Swiper Bundle JS-- >
    <
    !-- < script src = "assets/js/plugins/swiper-bundle.min.js" > < /script> -->

    <
    !--AOS JS-- >
    <
    !-- < script src = "assets/js/plugins/aos.js" > < /script> -->

    <
    !--Ajax JS-- >
    <
    !-- < script src = "assets/js/plugins/ajax.mail.js" > < /script> -->

    <
    !--Plugins JS(Please remove the comment from below plugins.min.js
      for better website load performance and remove plugin js files from avobe) -- >
    <
    script src = "assets/js/vendor/vendor.min.js" > < /script> <
  script src = "assets/js/plugins/plugins.min.js" > < /script>


    <
    !--Main JS-- >
    <
    script src = "assets/js/main.js" > < /script>


    <
    /body>


    <
    !--Mirrored from htmldemo.net / bunzo / bunzo / index.html by HTTrack Website Copier / 3. x[XR & CO '2014], Sun, 13 Jul 2025 16:18:21 GMT --> < /
      html >
  `;
};

export default GuestLayout;
