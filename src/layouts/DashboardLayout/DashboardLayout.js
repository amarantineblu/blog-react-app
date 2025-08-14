import React,{useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

// import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/css/index.css";
import "./assets/css/color_skins.css"


const DashboardLayout = () => {
    console.log("DashboardLayout rendering");

  useEffect(() => {
    const bodyElement = document.getElementById("bodyTag");
    bodyElement.classList.add('theme-purple');

  }, []);
  return (
    <>
      <Helmet>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="RealEstate, Admin, Dashboard, template, UI kit, RealEstate Admin, Bootstrap 4x"/>
        <meta name="author" content="Thememakker"/>

        <title>:: Oreo RealEstate :: Jquery Datatables</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon"/>
        {/* <!-- Favicon--> */}
        <link rel="stylesheet" href="../assets/plugins/bootstrap/css/bootstrap.min.css"/>
        {/* <!-- JQuery DataTable Css --> */}
        <link rel="stylesheet" href="../assets/plugins/jquery-datatable/dataTables.bootstrap4.min.css"/>
        {/* <!-- Custom Css --> */}
        <link rel="stylesheet" href="assets/css/main.css"/>
        <link rel="stylesheet" href="assets/css/color_skins.css"/>
      </Helmet>
      
            {/* <!-- Page Loader --> */}
            <div className="page-loader-wrapper">
                <div className="loader">
                    <div className="m-t-30"><img className="zmdi-hc-spin" src="https://wrraptheme.com/templates/oreo/realestate/html/assets/images/logo.svg" width="48" height="48" alt="Oreo"/></div>
                    <p>Please wait...</p>        
                </div>
            </div>

          {/* <!-- Overlay For Sidebars --> */}
          <div className="overlay"></div>

          {/* <!-- Top Bar --> */}
            <nav className="navbar p-l-5 p-r-5">
                <ul className="nav navbar-nav navbar-left">
                    <li>
                        <div className="navbar-header">
                            {/* <a href="/" className="bars"></a> */}
                            <a className="navbar-brand" href="index.html"><img src="https://wrraptheme.com/templates/oreo/realestate/html/assets/images/logo.svg" width="30" alt="Oreo"/><span className="m-l-10">Oreo</span></a>
                        </div>
                    </li>
                    <li><a href="/" className="ls-toggle-btn" data-close="true"><i className="zmdi zmdi-swap"></i></a></li>
                    <li className="hidden-md-down"><a href="events.html" title="Events"><i className="zmdi zmdi-calendar"></i></a></li>
                    <li className="hidden-md-down"><a href="mail-inbox.html" title="Inbox"><i className="zmdi zmdi-email"></i></a></li>
                    <li><a href="contact.html" title="Contact List"><i className="zmdi zmdi-account-box-phone"></i></a></li>
                    <li className="dropdown"> <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-notifications"></i>
                        <div className="notify"><span className="heartbit"></span><span className="point"></span></div>
                        </a>
                        <ul className="dropdown-menu pullDown">
                            <li className="body">
                                <ul className="menu list-unstyled">
                                    <li>
                                        <a href="/">
                                            <div className="media">
                                                <img className="media-object w60" src="../assets/images/image-gallery/1.jpg" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Sophia <span className="time">For Sale</span></span>
                                                    <span className="message">Relaxing Apartment</span>                                        
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="media">
                                                <img className="media-object w60" src="../assets/images/image-gallery/2.jpg" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Sophia <span className="time">For Rent</span></span>
                                                    <span className="message">Co-op Apartment in Bay Terrace</span>                                        
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="media">
                                                <img className="media-object w60" src="../assets/images/image-gallery/3.jpg" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Isabella <span className="time">For Rent</span></span>
                                                    <span className="message">A must see Villa on Chicago Ave</span>                                        
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="media">
                                                <img className="media-object w60" src="../assets/images/image-gallery/4.jpg" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Alexander <span className="time">For Sale</span></span>
                                                    <span className="message">5 Room Apartment Special Deal</span>                                        
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="media">
                                                <img className="media-object w60" src="../assets/images/image-gallery/5.jpg" alt=""/>
                                                <div className="media-body">
                                                    <span className="name">Grayson <span className="time">For Rent</span></span>
                                                    <span className="message">Real House Luxury Villa</span>                                        
                                                </div>
                                            </div>
                                        </a>
                                    </li>                        
                                </ul>
                            </li>
                            <li className="footer"> <a href="/">View All</a> </li>
                        </ul>
                    </li>        
                    <li className="hidden-sm-down">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..."/>
                            <span className="input-group-addon"><i className="zmdi zmdi-search"></i></span>
                        </div>
                    </li>        
                    <li className="float-right">
                        <a href="sign-in.html" className="mega-menu" data-close="true"><i className="zmdi zmdi-power"></i></a>
                        <a href="/" className="js-right-sidebar" data-close="true"><i className="zmdi zmdi-settings zmdi-hc-spin"></i></a>
                    </li>
                </ul>
            </nav>

          {/* <!-- Left Sidebar --> */}
          <aside id="leftsidebar" className="sidebar">
              <ul className="nav nav-tabs">
                  <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#dashboard"><i className="zmdi zmdi-home m-r-5"></i>Oreo</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#user"><i className="zmdi zmdi-account m-r-5"></i>Agent</a></li>
              </ul>
              <div className="tab-content">
                  <div className="tab-pane stretchRight active" id="dashboard">
                      <div className="menu">
                          <ul className="list">
                              <li>
                                  <div className="user-info">
                                      <div className="image"><a href="profile.html"><img src="../assets/images/profile_av.jpg" alt="User"/></a></div>
                                      <div className="detail">
                                          <h4>Michael</h4>
                                          <small>Agent</small>
                                      </div>
                                      <a title="facebook" href="/"><i className="zmdi zmdi-facebook"></i></a>
                                      <a title="twitter" href="/"><i className="zmdi zmdi-twitter"></i></a>
                                      <a title="instagram" href="/"><i className="zmdi zmdi-instagram"></i></a>                            
                                  </div>
                              </li>
                              <li className="header">MAIN</li>
                              <li><a href="index.html"><i className="zmdi zmdi-home"></i><span>Dashboard</span></a></li>                    
                              <li><a href="/" className="menu-toggle"><i className="zmdi zmdi-city"></i><span>Property</span></a>
                                  <ul className="ml-menu">
                                      <li><a href="property-list.html">Property List</a></li>
                                      <li><a href="property-list3.html">3 Column</a></li>
                                      <li><a href="property-list4.html">4 Column</a></li>
                                      <li><a href="property-add.html">Add Property</a></li>
                                      <li><a href="property-detail.html">Property Detail</a></li>
                                  </ul>
                              </li>
                              <li><a href="/" className="menu-toggle"><i className="zmdi zmdi-city"></i><span>Types</span></a>
                                  <ul className="ml-menu">
                                      <li><a href="apartment.html">Apartment</a></li>
                                      <li><a href="office.html">Office</a></li>
                                      <li><a href="shop.html">Shop</a></li>                        
                                      <li><a href="villa.html">Villa</a></li>
                                  </ul>
                              </li>
                              <li><a href="/" className="menu-toggle"><i className="zmdi zmdi-accounts-outline"></i><span>Agents</span></a>
                                  <ul className="ml-menu">
                                      <li><a href="agent.html">All Agents</a></li>
                                      <li><a href="add-agent.html">Add Agent</a></li>
                                      <li><a href="profile.html">Agent Profile</a></li>
                                      <li><a href="invoices.html">Agent Invoice</a></li>
                                  </ul>
                              </li>
                              <li><a href="/" className="menu-toggle"><i className="zmdi zmdi-case-check"></i><span>Contract</span></a>
                                  <ul className="ml-menu">
                                      <li><a href="contract-add.html">Add New</a></li>
                                      <li><a href="contract-list.html">List</a></li>
                                  </ul>
                              </li>
                              <li><a href="/" className="menu-toggle"><i className="zmdi zmdi-apps"></i><span>App</span></a>
                                  <ul className="ml-menu">
                                      <li><a href="mail-inbox.html">Inbox</a></li>
                                      <li><a href="chat.html">Chat</a></li>
                                      <li><a href="events.html">Calendar</a></li>
                                      <li><a href="contact.html">Contact list</a></li>
                                      <li><a href="blog-dashboard.html">Blog</a></li>
                                  </ul>
                              </li>
                              <li><a href="groups.html"><i className="zmdi zmdi-ungroup"></i><span>Groups</span></a> </li>
                              <li><a href="file-dashboard.html"><i className="zmdi zmdi-file-text"></i><span>File Manager</span></a> </li>
                              <li><a href="jvectormap.html"><i className="zmdi zmdi-map"></i><span>Site Location</span></a></li>
                              <li className="header">EXTRA COMPONENTS</li>
                              <li>
                                  <a href="/" className="menu-toggle"><i className="zmdi zmdi-swap-alt"></i><span>User Interface (UI)</span></a>
                                  <ul className="ml-menu">
                                      <li><a href="ui_kit.html">UI KIT</a></li>                    
                                      <li><a href="alerts.html">Alerts</a></li>                    
                                      <li><a href="collapse.html">Collapse</a></li>
                                      <li><a href="colors.html">Colors</a></li>
                                      <li><a href="dialogs.html">Dialogs</a></li>
                                      <li><a href="icons.html">Icons</a></li>                    
                                      <li><a href="list-group.html">List Group</a></li>
                                      <li><a href="media-object.html">Media Object</a></li>
                                      <li><a href="modals.html">Modals</a></li>
                                      <li><a href="notifications.html">Notifications</a></li>                    
                                      <li><a href="progressbars.html">Progress Bars</a></li>
                                      <li><a href="range-sliders.html">Range Sliders</a></li>
                                      <li><a href="sortable-nestable.html">Sortable & Nestable</a></li>
                                      <li><a href="tabs.html">Tabs</a></li>
                                      <li><a href="waves.html">Waves</a></li>
                                  </ul>
                              </li>                    
                              <li>
                                  <a href="/" className="menu-toggle"><i className="zmdi zmdi-assignment"></i><span>Forms</span></a>
                                  <ul className="ml-menu">
                                      <li><a href="basic-form-elements.html">Basic Elements</a> </li>
                                      <li><a href="advanced-form-elements.html">Advanced Elements</a> </li>
                                      <li><a href="form-examples.html">Form Examples</a> </li>
                                      <li><a href="form-validation.html">Form Validation</a> </li>
                                      <li><a href="form-wizard.html">Form Wizard</a> </li>
                                      <li><a href="form-editors.html">Editors</a> </li>
                                      <li><a href="form-upload.html">File Upload</a></li>
                                  </ul>
                              </li>
                              <li className="active open">
                                  <a href="/" className="menu-toggle"><i className="zmdi zmdi-grid"></i><span>Tables</span></a>
                                  <ul className="ml-menu">                        
                                      <li><a href="normal-tables.html">Normal Tables</a></li>
                                      <li className="active"><a href="jquery-datatable.html">Jquery Datatables</a></li>
                                      <li><a href="editable-table.html">Editable Tables</a></li>
                                      <li><a href="table-color.html">Tables Color</a></li>
                                  </ul>
                              </li>            
                              <li>
                                  <a href="/" className="menu-toggle"><i className="zmdi zmdi-chart"></i><span>Charts</span> </a>
                                  <ul className="ml-menu">
                                      <li><a href="c3chart.html">C3 Chart</a></li>
                                      <li><a href="morris.html">Morris</a></li>
                                      <li><a href="flot.html">Flot</a></li>
                                      <li><a href="chartjs.html">ChartJS</a></li>
                                      <li><a href="sparkline.html">Sparkline</a></li>
                                      <li><a href="jquery-knob.html">Jquery Knob</a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="/" className="menu-toggle"><i className="zmdi zmdi-delicious"></i><span>Widgets</span></a>
                                  <ul className="ml-menu">
                                      <li><a href="widgets-app.html">Apps Widgetse</a></li>
                                      <li><a href="widgets-data.html">Data Widgetse</a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="/" className="menu-toggle"><i className="zmdi zmdi-lock"></i><span>Authentication</span></a>
                                  <ul className="ml-menu">
                                      <li><a href="sign-in.html">Sign In</a></li>
                                      <li><a href="sign-up.html">Sign Up</a></li>
                                      <li><a href="forgot-password.html">Forgot Password</a></li>
                                      <li><a href="404.html">Page 404</a></li>
                                      <li><a href="500.html">Page 500</a></li>
                                      <li><a href="page-offline.html">Page Offline</a></li>
                                      <li><a href="locked.html">Locked Screen</a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="/" className="menu-toggle"><i className="zmdi zmdi-copy"></i><span>Sample Pages</span></a>
                                  <ul className="ml-menu">
                                      <li><a href="blank.html">Blank Page</a></li>
                                      <li><a href="image-gallery.html">Image Gallery</a></li>
                                      <li><a href="timeline.html">Timeline</a></li>
                                      <li><a href="pricing.html">Pricing</a></li>
                                      <li><a href="search-results.html">Search Results</a></li>
                                  </ul>
                              </li>
                              <li className="header">Extra</li>
                              <li>
                                  <div className="progress-container progress-primary m-t-10">
                                      <span className="progress-badge">Traffic this Month</span>
                                      <div className="progress">
                                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{ width: '67%' }}>
                                              <span className="progress-value">67%</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="progress-container progress-info">
                                      <span className="progress-badge">Server Load</span>
                                      <div className="progress">
                                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{ width: '86%'}}>
                                              <span className="progress-value">86%</span>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  <div className="tab-pane stretchLeft" id="user">
                      <div className="menu">
                          <ul className="list">
                              <li>
                                  <div className="user-info m-b-20 p-b-15">
                                      <div className="image"><a href="profile.html"><img src="../assets/images/profile_av.jpg" alt="User"/></a></div>
                                      <div className="detail">
                                          <h4>Michael</h4>
                                          <small>Agent</small>
                                      </div>
                                      <a title="facebook" href="/"><i className="zmdi zmdi-facebook"></i></a>
                                      <a title="twitter" href="/"><i className="zmdi zmdi-twitter"></i></a>
                                      <a title="instagram" href="/"><i className="zmdi zmdi-instagram"></i></a>
                                      <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                      <div className="row">
                                          <div className="col-4">
                                              <h6 className="mb-1">852</h6>
                                              <small>Deals</small>
                                          </div>
                                          <div className="col-4">
                                              <h6 className="mb-1">13k</h6>
                                              <small>Sales</small>
                                          </div>
                                          <div className="col-4">
                                              <h6 className="mb-1">234</h6>
                                              <small>Clients</small>
                                          </div>                            
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <small className="text-muted">Email address: </small>
                                  <p>michael@gmail.com</p>
                                  <hr/>
                                  <small className="text-muted">Phone: </small>
                                  <p>+ 202-555-0191</p>
                                  <hr/>
                                  <ul className="list-unstyled">
                                      <li>
                                          <div>Honesty & Integrity</div>
                                          <div className="progress m-b-20">
                                                  <div className="progress-bar l-blue " role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{ width: '89%'}}> <span className="sr-only">62% Complete</span> </div>
                                          </div>
                                      </li>
                                      <li>
                                          <div>Responsiveness</div>
                                          <div className="progress m-b-20">
                                                  <div className="progress-bar l-green " role="progressbar" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100" style={{ width: '56%' }}> <span className="sr-only">87% Complete</span> </div>
                                          </div>
                                      </li>
                                      <li>
                                          <div>Local Knowledge</div>
                                          <div className="progress m-b-20">
                                                  <div className="progress-bar l-amber" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={{ width: '78%' }} > <span className="sr-only">32% Complete</span> </div>
                                          </div>
                                      </li>
                                  </ul>                        
                              </li>
                          </ul>
                      </div>
                  </div>
                              </div> 
              </div>    
          </aside>

          {/* <!-- Right Sidebar --> */}
          <aside id="rightsidebar" className="right-sidebar">
              <ul className="nav nav-tabs">
                  <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#setting"><i className="zmdi zmdi-settings zmdi-hc-spin"></i></a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#chat"><i className="zmdi zmdi-comments"></i></a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#activity">Activity</a></li>
              </ul>
              <div className="tab-content">
                  <div className="tab-pane slideRight active" id="setting">
                      <div className="slim_scroll">
                          <div className="card">
                              <h6>Skins</h6>
                              <ul className="choose-skin list-unstyled">
                                  <li data-theme="purple" className="active"><div className="purple"></div></li>
                                  <li data-theme="blue"><div className="blue"></div></li>
                                  <li data-theme="cyan"><div className="cyan"></div></li>
                                  <li data-theme="green"><div className="green"></div></li>
                                  <li data-theme="orange"><div className="orange"></div></li>
                                  <li data-theme="blush"><div className="blush"></div></li>
                              </ul>                    
                          </div>
                          <div className="card theme-light-dark">
                              <h6>Left Menu</h6>
                              <button className="t-light btn btn-default btn-simple btn-round btn-block">Light</button>
                              <button className="t-dark btn btn-default btn-round btn-block">Dark</button>
                              <button className="m_img_btn btn btn-primary btn-round btn-block">Sidebar Image</button>
                          </div>
                          <div className="card">
                              <h6>General Settings</h6>
                              <ul className="setting-list list-unstyled">
                                  <li>
                                      <div className="checkbox">
                                          <input id="checkbox1" type="checkbox"/>
                                          <label for="checkbox1">Report Panel Usage</label>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="checkbox">
                                          <input id="checkbox2" type="checkbox" checked=""/>
                                          <label for="checkbox2">Email Redirect</label>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="checkbox">
                                          <input id="checkbox3" type="checkbox" checked=""/>
                                          <label for="checkbox3">Notifications</label>
                                      </div>                        
                                  </li>
                                  <li>
                                      <div className="checkbox">
                                          <input id="checkbox4" type="checkbox" checked=""/>
                                          <label for="checkbox4">Auto Updates</label>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <div className="card">
                              <h6>Account Settings</h6>
                              <ul className="setting-list list-unstyled">
                                  <li>
                                      <div className="checkbox">
                                          <input id="checkbox5" type="checkbox" checked=""/>
                                          <label for="checkbox5">Offline</label>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="checkbox">
                                          <input id="checkbox6" type="checkbox" checked=""/>
                                          <label for="checkbox6">Location Permission</label>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <div className="card">
                              <h6>Information Summary</h6>
                              <div className="row m-b-20">
                                  <div className="col-7">                            
                                      <small className="displayblock">MEMORY USAGE</small>
                                      <h5 className="m-b-0 h6">512</h5>
                                  </div>
                                  <div className="col-5">
                                      <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-Width="5" data-bar-Spacing="3" data-bar-Color="#00ced1">8,7,9,5,6,4,6,8</div>
                                  </div>
                              </div>
                              <div className="row m-b-20">
                                  <div className="col-7">                            
                                      <small className="displayblock">CPU USAGE</small>
                                      <h5 className="m-b-0 h6">90%</h5>
                                  </div>
                                  <div className="col-5">
                                      <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-Width="5" data-bar-Spacing="3" data-bar-Color="#F15F79">6,5,8,2,6,4,6,4</div>
                                  </div>
                              </div>
                              <div className="row m-b-20">
                                  <div className="col-7">                            
                                      <small className="displayblock">DAILY TRAFFIC</small>
                                      <h5 className="m-b-0 h6">25 142</h5>
                                  </div>
                                  <div className="col-5">
                                      <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-Width="5" data-bar-Spacing="3" data-bar-Color="#78b83e">7,5,8,7,4,2,6,5</div>
                                  </div>
                              </div>
                              <div className="row m-b-40">
                                  <div className="col-7">                            
                                      <small className="displayblock">DISK USAGE</small>
                                      <h5 className="m-b-0 h6">60.10%</h5>
                                  </div>
                                  <div className="col-5">
                                      <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-Width="5" data-bar-Spacing="3" data-bar-Color="#457fca">7,5,2,5,6,7,6,4</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>       
                  <div className="tab-pane right_chat stretchLeft" id="chat">
                      <div className="slim_scroll">
                          <div className="card">
                              <div className="search">
                                  <div className="input-group">
                                      <input type="text" className="form-control" placeholder="Search..."/>
                                      <span className="input-group-addon"><i className="zmdi zmdi-search"></i></span>
                                  </div>
                              </div>
                          </div>
                          <div className="card">
                              <h6>Recent</h6>
                              <ul className="list-unstyled">
                                  <li className="online">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar4.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="name">Sophia</span>
                                                  <span className="message">There are many variations of passages of Lorem Ipsum available</span>
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>                            
                                  </li>
                                  <li className="online">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="name">Grayson</span>
                                                  <span className="message">All the Lorem Ipsum generators on the</span>
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>                            
                                  </li>
                                  <li className="offline">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="name">Isabella</span>
                                                  <span className="message">Contrary to popular belief, Lorem Ipsum</span>
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>                            
                                  </li>
                                  <li className="me">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar1.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="name">John</span>
                                                  <span className="message">It is a long established fact that a reader</span>
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>                            
                                  </li>
                                  <li className="online">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="name">Alexander</span>
                                                  <span className="message">Richard McClintock, a Latin professor</span>
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>                            
                                  </li>                        
                              </ul>
                          </div>
                          <div className="card">
                              <h6>Contacts</h6>
                              <ul className="list-unstyled">
                                  <li className="offline inlineblock">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar10.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>
                                  </li>
                                  <li className="offline inlineblock">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar6.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>
                                  </li>
                                  <li className="offline inlineblock">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar7.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>
                                  </li>
                                  <li className="offline inlineblock">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar8.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>
                                  </li>
                                  <li className="offline inlineblock">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar9.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>
                                  </li>
                                  <li className="online inlineblock">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>
                                  </li>
                                  <li className="offline inlineblock">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar4.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>
                                  </li>
                                  <li className="offline inlineblock">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>
                                  </li>
                                  <li className="online inlineblock">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>
                                  </li>
                                  <li className="offline inlineblock">
                                      <a href="/">
                                          <div className="media">
                                              <img className="media-object " src="../assets/images/xs/avatar1.jpg" alt=""/>
                                              <div className="media-body">
                                                  <span className="badge badge-outline status"></span>
                                              </div>
                                          </div>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="tab-pane slideLeft" id="activity">
                      <div className="slim_scroll">
                          <div className="card user_activity">
                              <h6>Recent Activity</h6>
                              <div className="streamline b-accent">
                                  <div className="sl-item">
                                      <img className="user rounded-circle" src="../assets/images/xs/avatar4.jpg" alt=""/>
                                      <div className="sl-content">
                                          <h5 className="m-b-0">Admin Birthday</h5>
                                          <small>Jan 21 <a href="/" className="text-info">Sophia</a>.</small>
                                      </div>
                                  </div>
                                  <div className="sl-item">
                                      <img className="user rounded-circle" src="../assets/images/xs/avatar5.jpg" alt=""/>
                                      <div className="sl-content">
                                          <h5 className="m-b-0">Add New Contact</h5>
                                          <small>30min ago <a href="/">Alexander</a>.</small>
                                          <small><strong>P:</strong> +264-625-2323</small>
                                          <small><strong>E:</strong> maryamamiri@gmail.com</small>
                                      </div>
                                  </div>
                                  <div className="sl-item">
                                      <img className="user rounded-circle" src="../assets/images/xs/avatar6.jpg" alt=""/>
                                      <div className="sl-content">
                                          <h5 className="m-b-0">Code Change</h5>
                                          <small>Today <a href="/">Grayson</a>.</small>
                                          <small>The standard chunk of Lorem Ipsum used since the 1500s is reproduced</small>
                                      </div>
                                  </div>
                                  <div className="sl-item">
                                      <img className="user rounded-circle" src="../assets/images/xs/avatar7.jpg" alt=""/>
                                      <div className="sl-content">
                                          <h5 className="m-b-0">New Email</h5>
                                          <small>45min ago <a href="/" className="text-info">Fidel Tonn</a>.</small>
                                      </div>
                                  </div>                        
                              </div>
                          </div>
                          <div className="card">
                              <h6>Recent Attachments</h6>
                              <ul className="list-unstyled activity">
                                  <li>
                                      <a href="/">
                                          <i className="zmdi zmdi-collection-pdf l-blush"></i>                    
                                          <div className="info">
                                              <h4>info_258.pdf</h4>                    
                                              <small>2MB</small>
                                          </div>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="/">
                                          <i className="zmdi zmdi-collection-text l-amber"></i>                    
                                          <div className="info">
                                              <h4>newdoc_214.doc</h4>                    
                                              <small>900KB</small>
                                          </div>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="/">
                                          <i className="zmdi zmdi-image l-parpl"></i>                    
                                          <div className="info">
                                              <h4>MG_4145.jpg</h4>                    
                                              <small>5.6MB</small>
                                          </div>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="/">
                                          <i className="zmdi zmdi-image l-parpl"></i>                    
                                          <div className="info">
                                              <h4>MG_4100.jpg</h4>                    
                                              <small>5MB</small>
                                          </div>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="/">
                                          <i className="zmdi zmdi-collection-text l-amber"></i>                    
                                          <div className="info">
                                              <h4>Reports_end.doc</h4>                    
                                              <small>780KB</small>
                                          </div>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="/">
                                          <i className="zmdi zmdi-videocam l-turquoise"></i>                    
                                          <div className="info">
                                              <h4>movie2018.MKV</h4>                    
                                              <small>750MB</small>
                                          </div>
                                      </a>
                                  </li>                        
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </aside>

          {/* <!-- Chat-launcher --> */}
          <div className="chat-launcher"></div>
          <div className="chat-wrapper">
              <div className="card">
                  <div className="header">
                      <ul className="list-unstyled team-info margin-0">
                          <li className="m-r-15"><h2>Agent Team</h2></li>
                          <li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar"/></li>
                          <li><img src="../assets/images/xs/avatar3.jpg" alt="Avatar"/></li>
                          <li><img src="../assets/images/xs/avatar4.jpg" alt="Avatar"/></li>
                          <li><img src="../assets/images/xs/avatar6.jpg" alt="Avatar"/></li>
                          <li><a href="/" title="Add Member"><i className="zmdi zmdi-plus-circle"></i></a></li>
                      </ul>                       
                  </div>
                  <div className="body">
                      <div className="chat-widget">
                      <ul className="chat-scroll-list clearfix">
                          <li className="left float-left">
                              <img src="../assets/images/xs/avatar3.jpg" className="rounded-circle" alt=""/>
                              <div className="chat-info">
                                  <a className="name" href="/">Alexander</a>
                                  <span className="datetime">6:12</span>                            
                                  <span className="message">Hello, John </span>
                              </div>
                          </li>
                          <li className="right">
                              <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br/> How are you!</span> </div>
                          </li>
                          <li className="right">
                              <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
                          </li>
                          <li className="left float-left"> <img src="../assets/images/xs/avatar2.jpg" className="rounded-circle" alt=""/>
                              <div className="chat-info"> <a className="name" href="/">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br/> John <br/> What are you doing?</span> </div>
                          </li>
                          <li className="left float-left"> <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt=""/>
                              <div className="chat-info"> <a className="name" href="/">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
                          </li>
                              <li className="right">
                              <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br/>Michael</span> </div>
                          </li>
                      </ul>
                      </div>
                      <div className="input-group p-t-15">
                          <input type="text" className="form-control" placeholder="Enter text here..." />
                          <span className="input-group-addon">
                              <i className="zmdi zmdi-mail-send"></i>
                          </span>
                      </div>
                  </div>
              </div>
          </div>

          <Outlet/>


          {/* <!-- Jquery Core Js -->  */}
          <script src="assets/bundles/libscripts.bundle.js"></script>
          {/* <!-- Lib Scripts Plugin Js -->  */}
          <script src="assets/bundles/vendorscripts.bundle.js"></script> 
         
          <script src="assets/bundles/datatablescripts.bundle.js"></script>
          <script src="../assets/plugins/jquery-datatable/buttons/dataTables.buttons.min.js"></script>
          <script src="../assets/plugins/jquery-datatable/buttons/buttons.bootstrap4.min.js"></script>
          <script src="../assets/plugins/jquery-datatable/buttons/buttons.colVis.min.js"></script>
          <script src="../assets/plugins/jquery-datatable/buttons/buttons.html5.min.js"></script>
          <script src="../assets/plugins/jquery-datatable/buttons/buttons.print.min.js"></script>

          <script src="assets/bundles/mainscripts.bundle.js"></script>
          <script src="assets/js/pages/tables/jquery-datatable.js"></script>
    </>
  );
};

export default DashboardLayout;