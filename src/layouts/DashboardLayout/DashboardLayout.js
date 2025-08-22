import React,{useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

import "./dashboard assets/css/volt.css";
import "./dashboard assets/css/main.min.css";
import {
	getAuth,
	signOut
} from 'firebase/auth';




const DashboardLayout = () => {
	  const auth = getAuth();

	  const handleLogout = () => {
	  	signOut(auth)
	  		.then(() => {
	  			console.log('User signed out');
	  			// Redirect or update UI here
	  		})
	  		.catch((error) => {
	  			console.error('Sign-out error:', error);
	  		});
	  };

	useEffect(
		() => {
			const loadScript = (src) => {
					const script = document.createElement("script");
					script.src = src;
					script.async = false;
					document.body.appendChild(script);
			};
			loadScript("./dashboard assets/vendor/%40popperjs/core/dist/umd/popper.min.js");
			loadScript("./dashboard assets/assets/js/volt.js");
			loadScript("./dasboard assets/vendor/%40popperjs/core/dist/umd/popper.min.js");
			loadScript("./dasboard assets/vendor/bootstrap/dist/js/bootstrap.min.js");
			loadScript("./dasboard assets/vendor/onscreen/dist/on-screen.umd.min.js");
			loadScript("./dasboard assets/vendor/nouislider/distribute/nouislider.min.js");
			loadScript("./dasboard assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
			loadScript("./dasboard assets/vendor/countup.js/dist/countUp.umd.js");
			loadScript("./dasboard assets/vendor/apexcharts/dist/apexcharts.min.js");
			loadScript("./dasboard assets/vendor/vanillajs-datepicker/dist/js/datepicker.min.js");
			loadScript("./dasboard assets/vendor/simple-datatables/dist/umd/simple-datatables.js");
			loadScript("./dasboard assets/vendor/sweetalert2/dist/sweetalert2.min.js");
		},
		[]
	);
	return (
		<>
			<Helmet>
				<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
					<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
					<title>Volt - Premium Bootstrap 5 Dashboard</title>
					<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
					<meta name="title" content="Volt - Premium Bootstrap 5 Dashboard"/>
					<meta name="author" content="Themesberg"/>
					<meta name="description"
						content="Volt Pro is a Premium Bootstrap 5 Admin Dashboard featuring over 800 components, 10+ plugins and 20 example pages using Vanilla JS."/>
					<meta name="keywords"
						content="bootstrap 5, bootstrap, bootstrap 5 admin dashboard, bootstrap 5 dashboard, bootstrap 5 charts, bootstrap 5 calendar, bootstrap 5 datepicker, bootstrap 5 tables, bootstrap 5 datatable, vanilla js datatable, themesberg, themesberg dashboard, themesberg admin dashboard"/>
					<link rel="canonical" href="https://themesberg.com/product/admin-dashboard/volt-premium-bootstrap-5-dashboard"/>
					<meta property="og:type" content="website"/>
					<meta property="og:url" content="https://demo.themesberg.com/volt-pro"/>
					<meta property="og:title" content="Volt - Premium Bootstrap 5 Dashboard"/>
					<meta property="og:description"
						content="Volt Pro is a Premium Bootstrap 5 Admin Dashboard featuring over 800 components, 10+ plugins and 20 example pages using Vanilla JS."/>
					<meta property="og:image"
						content="./dasboard assets/../../themesberg.s3.us-east-2.amazonaws.com/public/products/volt-pro-bootstrap-5-dashboard/volt-pro-preview.jpg"/>
					<meta property="twitter:card" content="summary_large_image"/>
					<meta property="twitter:url" content="https://demo.themesberg.com/volt-pro"/>
					<meta property="twitter:title" content="Volt - Premium Bootstrap 5 Dashboard"/>
					<meta property="twitter:description"
						content="Volt Pro is a Premium Bootstrap 5 Admin Dashboard featuring over 800 components, 10+ plugins and 20 example pages using Vanilla JS."/>
					<meta property="twitter:image"
						content="./dasboard assets/../../themesberg.s3.us-east-2.amazonaws.com/public/products/volt-pro-bootstrap-5-dashboard/volt-pro-preview.jpg"/>
					<link rel="apple-touch-icon" sizes="120x120" href="./dasboard assets/assets/img/favicon/apple-touch-icon.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="./dasboard assets/assets/img/favicon/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="./dasboard assets/assets/img/favicon/favicon-16x16.png"/>
					<link rel="manifest" href="./dasboard assets/assets/img/favicon/site.webmanifest"/>
					<link rel="mask-icon" href="./dasboard assets/assets/img/favicon/safari-pinned-tab.svg" color="#ffffff"/>
					<meta name="msapplication-TileColor" content="#ffffff"/>
					<meta name="theme-color" content="#ffffff"/>
					<link type="text/css" href="./dasboard assets/vendor/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet"/>
					<link type="text/css" href="./dasboard assets/vendor/notyf/notyf.min.css" rel="stylesheet"/>
					<link type="text/css" href="./dasboard assets/vendor/fullcalendar/main.min.css" rel="stylesheet"/>
					<link type="text/css" href="./dasboard assets/vendor/apexcharts/dist/apexcharts.css" rel="stylesheet"/>
					<link type="text/css" href="./dasboard assets/vendor/dropzone/dist/min/dropzone.min.css" rel="stylesheet"/>
					<link type="text/css" href="./dasboard assets/vendor/choices.js/public/assets/styles/choices.min.css" rel="stylesheet"/>
				<link type="text/css" href="./dasboard assets/vendor/leaflet/dist/leaflet.css" rel="stylesheet" />
				<link type="text/css" href="./dasboard assets/css/volt.css" rel="stylesheet" />
			</Helmet>
					
			<nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
				<a className="navbar-brand me-lg-5"
					href="./dasboard assets/index-2.html"/><img className="navbar-brand-dark" src="./dasboard assets/assets/img/brand/light.svg" alt="Volt logo"/>
				<img className="navbar-brand-light" src="./dasboard assets/assets/img/brand/dark.svg" alt="Volt logo"/>
				<div className="d-flex align-items-center"><button className="navbar-toggler d-lg-none collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
				aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button></div>
			</nav>
			<nav id="sidebarMenu" className="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
				<div className="sidebar-inner px-4 pt-3">
					<div className="user-card d-flex d-md-none justify-content-between justify-content-md-center pb-4">
						<div className="d-flex align-items-center">
							<div className="avatar-lg me-4"><img src="./dasboard assets/assets/img/team/profile-picture-3.jpg"
									className="card-img-top rounded-circle border-white" alt="Bonnie Green"/></div>
							<div className="d-block">
								<h2 className="h5 mb-3">Hi, Jane</h2>
								<button onClick={handleLogout}
									className="btn btn-secondary btn-sm d-inline-flex align-items-center"><svg className="icon icon-xxs me-1"
										fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
										</path>
									</svg> Sign Out</button>
							</div>
						</div>
						<div className="collapse-close d-md-none"><a href="#sidebarMenu" data-bs-toggle="collapse"
								data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true"
								aria-label="Toggle navigation"><svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"></path>
								</svg></a></div>
					</div>
					<ul className="nav flex-column pt-3 pt-md-0">
						<li className="nav-item"><a href="./dasboard assets/index-2.html" className="nav-link d-flex align-items-center"><span
									className="sidebar-icon"><img src="./dasboard assets/assets/img/brand/light.svg" height="20" width="20" alt="Volt Logo"/>
								</span><span className="mt-1 sidebar-text">Volt Overview</span></a></li>
						<li className="nav-item"><span className="nav-link d-flex justify-content-between align-items-center"
								data-bs-toggle="collapse" data-bs-target="#submenu-dashboard"><span><span className="sidebar-icon"><svg
											className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
											<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
										</svg> </span><span className="sidebar-text">Dashboard</span> </span><span className="link-arrow"><svg
										className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"></path>
									</svg></span></span>
							<div className="multi-level collapse show" role="list" id="submenu-dashboard" aria-expanded="false">
								<ul className="flex-column nav">
									<li className="nav-item active"><a href="dashboard.html" className="nav-link"><span
												className="sidebar-text-contracted">O</span> <span className="sidebar-text">Overview</span></a></li>
									<li className="nav-item"><a href="traffic-sources.html" className="nav-link"><span
												className="sidebar-text-contracted">T</span> <span className="sidebar-text">All Traffic</span></a></li>
									<li className="nav-item"><a href="app-analysis.html" className="nav-link"><span
												className="sidebar-text-contracted">P</span> <span className="sidebar-text">Product Analysis</span></a>
									</li>
								</ul>
							</div>
						</li>
						<li className="nav-item"><a href="../kanban.html"
								className="nav-link d-flex align-items-center justify-content-between"><span><span className="sidebar-icon"><svg
											className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
											</path>
										</svg> </span><span className="sidebar-text">Kanban</span></span></a></li>
						<li className="nav-item"><a href="../messages.html"
								className="nav-link d-flex align-items-center justify-content-between"><span><span className="sidebar-icon"><svg
											className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
											</path>
											<path
												d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
											</path>
										</svg> </span><span className="sidebar-text">Messages</span> </span><span
									className="badge badge-sm bg-danger badge-pill notification-count">4</span></a></li>
						<li className="nav-item"><a href="../users.html" className="nav-link"><span className="sidebar-icon"><svg
										className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z">
										</path>
									</svg> </span><span className="sidebar-text">Users List</span></a></li>
						<li className="nav-item"><a href="../transactions.html" className="nav-link"><span className="sidebar-icon"><svg
										className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
										<path fillRule="evenodd"
											d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
											clipRule="evenodd"></path>
									</svg> </span><span className="sidebar-text">Transactions</span></a></li>
						<li className="nav-item"><a href="../tasks.html" className="nav-link"><span className="sidebar-icon"><svg
										className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
										<path fillRule="evenodd"
											d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
											clipRule="evenodd"></path>
									</svg> </span><span className="sidebar-text">Task List</span></a></li>
						<li className="nav-item"><a href="../settings.html" className="nav-link"><span className="sidebar-icon"><svg
										className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd"
											d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
											clipRule="evenodd"></path>
									</svg> </span><span className="sidebar-text">Settings</span></a></li>
						<li className="nav-item"><a href="../calendar.html" className="nav-link"><span className="sidebar-icon"><svg
										className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd"
											d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
											clipRule="evenodd"></path>
									</svg> </span><span className="sidebar-text">Calendar</span></a></li>
						<li className="nav-item"><a href="../map.html" className="nav-link"><span className="sidebar-icon"><svg
										className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"></path>
									</svg> </span><span className="sidebar-text">Map</span></a></li>
						<li className="nav-item"><span className="nav-link collapsed d-flex justify-content-between align-items-center"
								data-bs-toggle="collapse" data-bs-target="#submenu-app"><span><span className="sidebar-icon"><svg
											className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd"
												d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
												clipRule="evenodd"></path>
										</svg> </span><span className="sidebar-text">Tables</span> </span><span className="link-arrow"><svg
										className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"></path>
									</svg></span></span>
							<div className="multi-level collapse" role="list" id="submenu-app" aria-expanded="false">
								<ul className="flex-column nav">
									<li className="nav-item"><a className="nav-link" href="../tables/datatables.html"><span
												className="sidebar-text-contracted">D</span> <span className="sidebar-text">DataTables</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../tables/bootstrap-tables.html"><span
												className="sidebar-text-contracted">B</span> <span className="sidebar-text">Bootstrap Tables</span></a>
									</li>
								</ul>
							</div>
						</li>
						<li className="nav-item"><span className="nav-link collapsed d-flex justify-content-between align-items-center"
								data-bs-toggle="collapse" data-bs-target="#submenu-pages"><span><span className="sidebar-icon"><svg
											className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd"
												d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
												clipRule="evenodd"></path>
											<path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
										</svg> </span><span className="sidebar-text">Page examples</span> </span><span className="link-arrow"><svg
										className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"></path>
									</svg></span></span>
							<div className="multi-level collapse" role="list" id="submenu-pages" aria-expanded="false">
								<ul className="flex-column nav">
									<li className="nav-item"><a className="nav-link" href="../examples/pricing.html"><span
												className="sidebar-text-contracted">P</span> <span className="sidebar-text">Pricing</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../examples/billing.html"><span
												className="sidebar-text-contracted">B</span> <span className="sidebar-text">Billing</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../examples/invoice.html"><span
												className="sidebar-text-contracted">I</span> <span className="sidebar-text">Invoice</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../examples/sign-in.html"><span
												className="sidebar-text-contracted">S</span> <span className="sidebar-text">Sign In</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../examples/sign-up.html"><span
												className="sidebar-text-contracted">S</span> <span className="sidebar-text">Sign Up</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../examples/forgot-password.html"><span
												className="sidebar-text-contracted">F</span> <span className="sidebar-text">Forgot password</span></a>
									</li>
									<li className="nav-item"><a className="nav-link" href="../examples/reset-password.html"><span
												className="sidebar-text-contracted">R</span> <span className="sidebar-text">Reset password</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../examples/lock.html"><span
												className="sidebar-text-contracted">L</span> <span className="sidebar-text">Lock</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../examples/404.html"><span
												className="sidebar-text-contracted">4</span> <span className="sidebar-text">404 Not Found</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../examples/500.html"><span
												className="sidebar-text-contracted">5</span> <span className="sidebar-text">500 Not Found</span></a></li>
								</ul>
							</div>
						</li>
						<li className="nav-item"><span className="nav-link collapsed d-flex justify-content-between align-items-center"
								data-bs-toggle="collapse" data-bs-target="#submenu-components"><span><span className="sidebar-icon"><svg
											className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
											<path fillRule="evenodd"
												d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
												clipRule="evenodd"></path>
										</svg> </span><span className="sidebar-text">Components</span> </span><span className="link-arrow"><svg
										className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"></path>
									</svg></span></span>
							<div className="multi-level collapse" role="list" id="submenu-components" aria-expanded="false">
								<ul className="flex-column nav">
									<li className="nav-item"><a className="nav-link" target="_blank"
											href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/components/accordions/"><span
												className="sidebar-text-contracted">A</span> <span className="sidebar-text">All Components</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../components/buttons.html"><span
												className="sidebar-text-contracted">B</span> <span className="sidebar-text">Buttons</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../components/notifications.html"><span
												className="sidebar-text-contracted">N</span> <span className="sidebar-text">Notifications</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../components/forms.html"><span
												className="sidebar-text-contracted">F</span> <span className="sidebar-text">Forms</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../components/modals.html"><span
												className="sidebar-text-contracted">M</span> <span className="sidebar-text">Modals</span></a></li>
									<li className="nav-item"><a className="nav-link" href="../components/typography.html"><span
												className="sidebar-text-contracted">T</span> <span className="sidebar-text">Typography</span></a></li>
								</ul>
							</div>
						</li>
						<li className="nav-item"><a href="../widgets.html" className="nav-link"><span className="sidebar-icon"><svg
										className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z">
										</path>
									</svg> </span><span className="sidebar-text">Widgets</span></a></li>
						<li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
						<li className="nav-item"><a
								href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/getting-started/quick-start/" target="_blank"
								className="nav-link d-flex align-items-center"><span className="sidebar-icon"><svg className="icon icon-xs me-2"
										fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd"
											d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
											clipRule="evenodd"></path>
									</svg> </span><span className="sidebar-text">Documentation <span
										className="badge bg-secondary ms-1 text-gray-800 badge-sm">v1.4</span></span></a></li>
						<li className="nav-item"><a
								href="https://themesberg.com/product/admin-dashboard/volt-premium-bootstrap-5-dashboard" target="_blank"
								className="nav-link d-flex align-items-center"><span className="sidebar-icon"><svg className="icon icon-xs me-2"
										fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
										</path>
									</svg> </span><span className="sidebar-text">Buy now</span></a></li>
						<li className="nav-item"><a href="https://themesberg.com/" target="_blank"
								className="nav-link d-flex align-items-center"><span className="sidebar-icon"><img
										src="./dasboard assets/assets/img/themesberg.svg" height="20" width="28" alt="Themesberg Logo"/></span><span
									className="sidebar-text">Themesberg</span></a></li>
					</ul>
				</div>
			</nav>
			<main className="content">
				<nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
					<div className="container-fluid px-0">
						<div className="d-flex justify-content-between w-100" id="navbarSupportedContent">
							<div className="d-flex align-items-center"><button id="sidebar-toggle"
									className="sidebar-toggle me-3 btn btn-icon-only d-none d-lg-inline-block align-items-center justify-content-center"><svg
										className="toggle-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd"
											d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
											clipRule="evenodd"></path>
									</svg></button>
								<form className="navbar-search form-inline" id="navbar-search-main">
									<div className="input-group input-group-merge search-bar"><span className="input-group-text"
											id="topbar-addon"><svg className="icon icon-xs" x-description="Heroicon name: solid/search"
												xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
												<path fillRule="evenodd"
													d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
													clipRule="evenodd"></path>
											</svg> </span><input type="text" className="form-control" id="topbarInputIconLeft" placeholder="Search"
											aria-label="Search" aria-describedby="topbar-addon"/></div>
								</form>
							</div>
							<ul className="navbar-nav align-items-center">
								<li className="nav-item dropdown"><a className="nav-link text-dark notification-bell unread dropdown-toggle"
										data-unread-notifications="true" href="#" role="button" data-bs-toggle="dropdown"
										data-bs-display="static" aria-expanded="false"><svg className="icon icon-sm text-gray-900"
											fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
											</path>
										</svg></a>
									<div className="dropdown-menu dropdown-menu-lg dropdown-menu-center mt-2 py-0">
										<div className="list-group list-group-flush"><a href="#"
												className="text-center text-primary fw-bold border-bottom border-light py-3">Notifications</a> <a
												href="../calendar.html" className="list-group-item list-group-item-action border-bottom">
												<div className="row align-items-center">
													<div className="col-auto">
														<img alt="Image placeholder" src="./dasboard assets/assets/img/team/profile-picture-1.jpg"
															className="avatar-md rounded"/></div>
													<div className="col ps-0 ms-2">
														<div className="d-flex justify-content-between align-items-center">
															<div>
																<h4 className="h6 mb-0 text-small">Jose Leos</h4>
															</div>
															<div className="text-end"><small className="text-danger">a few moments ago</small></div>
														</div>
														<p className="font-small mt-1 mb-0">Added you to an event "Project stand-up" tomorrow at 12:30 AM.
														</p>
													</div>
												</div>
											</a><a href="../tasks.html" className="list-group-item list-group-item-action border-bottom">
												<div className="row align-items-center">
													<div className="col-auto">
														<img alt="Image placeholder" src="./dasboard assets/assets/img/team/profile-picture-2.jpg"
															className="avatar-md rounded"/></div>
													<div className="col ps-0 ms-2">
														<div className="d-flex justify-content-between align-items-center">
															<div>
																<h4 className="h6 mb-0 text-small">Neil Sims</h4>
															</div>
															<div className="text-end"><small className="text-danger">2 hrs ago</small></div>
														</div>
														<p className="font-small mt-1 mb-0">You've been assigned a task for "Awesome new project".</p>
													</div>
												</div>
											</a><a href="../tasks.html" className="list-group-item list-group-item-action border-bottom">
												<div className="row align-items-center">
													<div className="col-auto">
														<img alt="Image placeholder" src="./dasboard assets/assets/img/team/profile-picture-3.jpg"
															className="avatar-md rounded"/></div>
													<div className="col ps-0 m-2">
														<div className="d-flex justify-content-between align-items-center">
															<div>
																<h4 className="h6 mb-0 text-small">Roberta Casas</h4>
															</div>
															<div className="text-end"><small>5 hrs ago</small></div>
														</div>
														<p className="font-small mt-1 mb-0">Tagged you in a document called "Financial plans",</p>
													</div>
												</div>
											</a><a href="../single-message.html" className="list-group-item list-group-item-action border-bottom">
												<div className="row align-items-center">
													<div className="col-auto">
													<img alt="Image placeholder" src="./dasboard assets/assets/img/team/profile-picture-4.jpg"
															className="avatar-md rounded"/></div>
													<div className="col ps-0 ms-2">
														<div className="d-flex justify-content-between align-items-center">
															<div>
																<h4 className="h6 mb-0 text-small">Joseph Garth</h4>
															</div>
															<div className="text-end"><small>1 d ago</small></div>
														</div>
														<p className="font-small mt-1 mb-0">New message: "Hey, what's up? All set for the presentation?"
														</p>
													</div>
												</div>
											</a><a href="../single-message.html" className="list-group-item list-group-item-action border-bottom">
												<div className="row align-items-center">
													<div className="col-auto">
														<img alt="Image placeholder" src="./dasboard assets/assets/img/team/profile-picture-5.jpg"
															className="avatar-md rounded"/></div>
													<div className="col ps-0 ms-2">
														<div className="d-flex justify-content-between align-items-center">
															<div>
																<h4 className="h6 mb-0 text-small">Bonnie Green</h4>
															</div>
															<div className="text-end"><small>2 hrs ago</small></div>
														</div>
														<p className="font-small mt-1 mb-0">New message: "We need to improve the UI/UX for the landing
															page."</p>
													</div>
												</div>
											</a><a href="#" className="dropdown-item text-center fw-bold rounded-bottom py-3"><svg
													className="icon icon-xxs text-gray-400 me-1" fill="currentColor" viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
													<path fillRule="evenodd"
														d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
														clipRule="evenodd"></path>
												</svg> View all</a></div>
									</div>
								</li>
								<li className="nav-item dropdown ms-lg-3"><a className="nav-link dropdown-toggle pt-1 px-0" href="#" role="button"
										data-bs-toggle="dropdown" aria-expanded="false">
										<div className="media d-flex align-items-center"><img className="avatar rounded-circle"
												alt="Image placeholder" src="./dasboard assets/assets/img/team/profile-picture-3.jpg"/>
											<div className="media-body ms-2 text-dark align-items-center d-none d-lg-block"><span
													className="mb-0 font-small fw-bold text-gray-900">Bonnie Green</span></div>
										</div>
									</a>
									<div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1"><a
											className="dropdown-item d-flex align-items-center" href="#"><svg
												className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd"
													d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
													clipRule="evenodd"></path>
											</svg> My Profile </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
												className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd"
													d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
													clipRule="evenodd"></path>
											</svg> Settings </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
												className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd"
													d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
													clipRule="evenodd"></path>
											</svg> Messages </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
												className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd"
													d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
													clipRule="evenodd"></path>
											</svg> Support</a>
										<div role="separator" className="dropdown-divider my-1"></div><a
											className="dropdown-item d-flex align-items-center" href="#"><svg className="dropdown-icon text-danger me-2"
												fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
													d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
												</path>
											</svg> Logout</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div className="py-4">
					<div className="dropdown"><button className="btn btn-gray-800 d-inline-flex align-items-center me-2 dropdown-toggle"
							data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg className="icon icon-xs me-2"
								fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
								</path>
							</svg> New Task</button>
						<div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
								className="dropdown-item d-flex align-items-center" href="#"><svg className="dropdown-icon text-gray-400 me-2"
									fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
									</path>
								</svg> Add User </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
									className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z">
									</path>
								</svg> Add Widget </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
									className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z">
									</path>
									<path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
								</svg> Upload Files </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
									className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd"
										d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"></path>
								</svg> Preview Security</a>
							<div role="separator" className="dropdown-divider my-1"></div><a className="dropdown-item d-flex align-items-center"
								href="#"><svg className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd"
										d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
										clipRule="evenodd"></path>
								</svg> Upgrade to Pro</a>
						</div>
					</div>
				</div>
				<Outlet/>
				<div className="row">
					<div className="col-12 col-sm-6 col-xl-4 mb-4">
						<div className="card border-0 shadow">
							<div className="card-body">
								<div className="row d-block d-xxl-flex align-items-center">
									<div className="col-12 col-xxl-6 px-xxl-0 mb-3 mb-xxl-0">
										<div id="chart-customers"></div>
									</div>
									<div className="col-12 col-xxl-6 ps-xxl-4 pe-xxl-0">
										<h2 className="fs-6 fw-normal mb-1 text-gray-400">Customers</h2>
										<h3 className="fw-extrabold mb-1">345k</h3><small className="d-flex align-items-center"><svg
												className="icon icon-xxs text-gray-400 me-1" fill="currentColor" viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd"
													d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
													clipRule="evenodd"></path>
											</svg> Apr 1 - May 1</small>
										<div className="small d-flex mt-1">
											<div><svg className="icon icon-xs text-success" fill="currentColor" viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd"
														d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
														clipRule="evenodd"></path>
												</svg><span className="text-success fw-bolder">18,2%</span> Since last month</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-xl-4 mb-4">
						<div className="card border-0 shadow">
							<div className="card-body">
								<div className="row d-block d-xxl-flex align-items-center">
									<div className="col-12 col-xxl-6 px-xxl-0 mb-3 mb-xxl-0">
										<div id="chart-revenue"></div>
									</div>
									<div className="col-12 col-xxl-6 ps-xxl-4 pe-xl-0">
										<h2 className="fs-6 fw-normal mb-1 text-gray-400">Revenue</h2>
										<h3 className="fw-extrabold mb-1">$253,594</h3><small className="d-flex align-items-center"><svg
												className="icon icon-xxs text-gray-400 me-1" fill="currentColor" viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd"
													d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
													clipRule="evenodd"></path>
											</svg> Apr 1 - May 1</small>
										<div className="small d-flex mt-1">
											<div><svg className="icon icon-xs text-danger" fill="currentColor" viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd"
														d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
														clipRule="evenodd"></path>
												</svg><span className="text-danger fw-bolder">4,6%</span> Since last month</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-12 col-xl-4 mb-4">
						<div className="card border-0 shadow">
							<div className="card-body">
								<div className="row d-block d-sm-flex d-xl-block d-xxl-flex align-items-center">
									<div className="col-12 col-sm-6 col-xl-12 col-xxl-6 px-xxl-0 mb-3 mb-sm-0 mb-xl-3 mb-xxl-0">
										<div id="chart-users"></div>
									</div>
									<div className="col-12 col-sm-6 col-xl-12 col-xxl-6 ps-xxl-4 pe-xxl-0">
										<h2 className="fs-6 fw-normal mb-1 text-gray-400">Users</h2>
										<h3 className="fw-extrabold mb-1">15.3k</h3><small className="d-flex align-items-center"><svg
												className="icon icon-xxs text-gray-400 me-1" fill="currentColor" viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd"
													d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
													clipRule="evenodd"></path>
											</svg> Apr 1 - May 1</small>
										<div className="small d-flex mt-1">
											<div><svg className="icon icon-xs text-success" fill="currentColor" viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd"
														d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
														clipRule="evenodd"></path>
												</svg><span className="text-success fw-bolder">20%</span> Since last month</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-xxl-4 mb-4">
						<div className="card border-0 shadow">
							<div className="card-header border-bottom">
								<h2 className="fs-5 fw-bold mb-1">Weekly Sales</h2><small>28 Daily Avg.</small>
							</div>
							<div className="card-body text-center py-4 py-xl-5">
								<h3 className="display-3 fw-extrabold mb-0">$456,678</h3>
								<p>Total Themesberg Sales</p><a href="#" className="btn btn-primary d-inline-flex align-items-center"><svg
										className="icon icon-xxs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd"
											d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
											clipRule="evenodd"></path>
									</svg> Generate Report</a>
							</div>
							<div className="card-footer border-0 px-3 py-4">
								<div id="chart-weekly-sales"></div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-xxl-4 mb-4">
						<div className="card border-0 shadow">
							<div className="card-header border-bottom">
								<h2 className="fs-5 fw-bold mb-0">Top Author Earnings</h2>
							</div>
							<div className="card-body py-0">
								<ul className="list-group list-group-flush">
									<li className="list-group-item bg-transparent border-bottom py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="#" className="avatar-md"><img className="rounded" alt="Image placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-1.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="#">Chris Wood</a></h4><span className="small">Graphic
													Designer</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$1,834</span></div>
										</div>
									</li>
									<li className="list-group-item bg-transparent border-bottom py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="#" className="avatar-md"><img className="rounded" alt="Image placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-3.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="#">Bonnie Green</a></h4><span className="small">Web
													Developer</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$1,355</span></div>
										</div>
									</li>
									<li className="list-group-item bg-transparent border-bottom py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="#" className="avatar-md"><img className="rounded" alt="Image placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-2.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="#">Chris Wood</a></h4><span className="small">React
													Developer</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$1,297</span></div>
										</div>
									</li>
									<li className="list-group-item bg-transparent border-bottom py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="#" className="avatar-md"><img className="rounded" alt="Image placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-4.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="#">Neil Sims</a></h4><span className="small">Python
													Developer</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$875</span></div>
										</div>
									</li>
									<li className="list-group-item bg-transparent border-bottom py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="#" className="avatar-md"><img className="rounded" alt="Image placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-5.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="#">Rebbeca Sas</a></h4><span className="small">UI/UX, Art
													Directo</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$872</span></div>
										</div>
									</li>
									<li className="list-group-item bg-transparent border-bottom py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="#" className="avatar-md"><img className="rounded" alt="Image placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-6.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="#">Jacklyn Brown</a></h4><span className="small">UI/UX, Art
													Directo</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$605</span></div>
										</div>
									</li>
									<li className="list-group-item bg-transparent py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="#" className="avatar-md"><img className="rounded" alt="Image placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-7.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="#">Melinda Norrow</a></h4><span className="small">UI/UX, Art
													Directo</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$305</span></div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-xxl-4 mb-4">
						<div className="card notification-card border-0 shadow">
							<div className="card-header d-flex align-items-center">
								<h2 className="fs-5 fw-bold mb-0">Notifications</h2>
								<div className="ms-auto"><a className="fw-normal d-inline-flex align-items-center" href="#"><svg
											className="icon icon-xxs me-2" fill="currentColor" viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
											<path fillRule="evenodd"
												d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
												clipRule="evenodd"></path>
										</svg> View all</a></div>
							</div>
							<div className="card-body">
								<div className="list-group list-group-flush list-group-timeline">
																	<div className="list-group-item border-0">
										<div className="row ps-lg-1">
											<div className="col-auto">
												<div className="icon-shape icon-xs icon-shape-purple rounded"><svg fill="currentColor"
														viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path
															d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
														</path>
													</svg></div>
											</div>
											<div className="col ms-n2 mb-3">
												<h3 className="fs-6 fw-bold mb-1">You sold an item</h3>
												<p className="mb-1">Bonnie Green just purchased "Volt - Admin Dashboard"!</p>
												<div className="d-flex align-items-center"><svg className="icon icon-xxs text-gray-400 me-1"
														fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
															clipRule="evenodd"></path>
													</svg> <span className="small">1 minute ago</span></div>
											</div>
										</div>
									</div>                <div className="list-group-item border-0">
										<div className="row ps-lg-1">
											<div className="col-auto">
												<div className="icon-shape icon-xs icon-shape-primary rounded"><svg fill="currentColor"
														viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd"
															d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
															clipRule="evenodd"></path>
													</svg></div>
											</div>
											<div className="col ms-n2 mb-3">
												<h3 className="fs-6 fw-bold mb-1">New message</h3>
												<p className="mb-1">Let's meet at Starbucks at 11:30. Wdyt?</p>
												<div className="d-flex align-items-center"><svg className="icon icon-xxs text-gray-400 me-1"
														fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
															clipRule="evenodd"></path>
													</svg> <span className="small">8 minutes ago</span></div>
											</div>
										</div>
									</div>                <div className="list-group-item border-0">
										<div className="row ps-lg-1">
											<div className="col-auto">
												<div className="icon-shape icon-xs icon-shape-warning rounded"><svg fill="currentColor"
														viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd"
															d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
															clipRule="evenodd"></path>
													</svg></div>
											</div>
											<div className="col ms-n2 mb-3">
												<h3 className="fs-6 fw-bold mb-1">Product issue</h3>
												<p className="mb-0">A new issue has been reported for Pixel Pro.</p>
												<div className="d-flex align-items-center"><svg className="icon icon-xxs text-gray-400 me-1"
														fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
															clipRule="evenodd"></path>
													</svg> <span className="small">10 minutes ago</span></div>
											</div>
										</div>
									</div>                <div className="list-group-item border-0">
										<div className="row ps-lg-1">
											<div className="col-auto">
												<div className="icon-shape icon-xs icon-shape-success rounded"><svg fill="currentColor"
														viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd"
															d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
															clipRule="evenodd"></path>
													</svg></div>
											</div>
											<div className="col ms-n2 mb-3">
												<h3 className="fs-6 fw-bold mb-1">Product update</h3>
												<p className="mb-0">Spaces - Listings Template has been updated</p>
												<div className="d-flex align-items-center"><svg className="icon icon-xxs text-gray-400 me-1"
														fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
															clipRule="evenodd"></path>
													</svg> <span className="small">4 hours ago</span></div>
											</div>
										</div>
									</div>                <div className="list-group-item border-0">
										<div className="row ps-lg-1">
											<div className="col-auto">
												<div className="icon-shape icon-xs icon-shape-success rounded"><svg fill="currentColor"
														viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd"
															d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
															clipRule="evenodd"></path>
													</svg></div>
											</div>
											<div className="col ms-n2">
												<h3 className="fs-6 fw-bold mb-1">Product update</h3>
												<p className="mb-0">Volt - Admin Dashboard has been updated</p>
												<div className="d-flex align-items-center"><svg className="icon icon-xxs text-gray-400 me-1"
														fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
															clipRule="evenodd"></path>
													</svg> <span className="small">8 hours ago</span></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-xl-7 col-xxl-8 mb-4">
						<div className="row">
													<div className="col-12 mb-4">
								<div className="card border-0 shadow">
									<div className="card-header">
										<div className="row align-items-center">
											<div className="col">
												<h2 className="fs-5 fw-bold mb-0">Page visits</h2>
											</div>
											<div className="col text-end"><a href="traffic-sources.html" className="btn btn-sm btn-primary">See all</a>
											</div>
										</div>
									</div>
									<div className="table-responsive">
										<table className="table align-items-center table-flush">
											<thead className="thead-light">
												<tr>
													<th className="border-bottom" scope="col">Page name</th>
													<th className="border-bottom" scope="col">Page Views</th>
													<th className="border-bottom" scope="col">Page Value</th>
													<th className="border-bottom" scope="col">Bounce rate</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th className="text-gray-900" scope="row">/demo/admin/index.html</th>
													<td className="fw-bolder text-gray-500">3,225</td>
													<td className="fw-bolder text-gray-500">$20</td>
													<td className="fw-bolder text-gray-500">
														<div className="d-flex"><svg className="icon icon-xs text-danger me-2" fill="currentColor"
																viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd"
																	d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
																	clipRule="evenodd"></path>
															</svg> 42,55%</div>
													</td>
												</tr>
												<tr>
													<th className="text-gray-900" scope="row">/demo/admin/forms.html</th>
													<td className="fw-bolder text-gray-500">2,987</td>
													<td className="fw-bolder text-gray-500">0</td>
													<td className="fw-bolder text-gray-500">
														<div className="d-flex"><svg className="icon icon-xs text-success me-2" fill="currentColor"
																viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd"
																	d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
																	clipRule="evenodd"></path>
															</svg> 43,24%</div>
													</td>
												</tr>
												<tr>
													<th className="text-gray-900" scope="row">/demo/admin/util.html</th>
													<td className="fw-bolder text-gray-500">2,844</td>
													<td className="fw-bolder text-gray-500">294</td>
													<td className="fw-bolder text-gray-500">
														<div className="d-flex"><svg className="icon icon-xs text-success me-2" fill="currentColor"
																viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd"
																	d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
																	clipRule="evenodd"></path>
															</svg> 32,35%</div>
													</td>
												</tr>
												<tr>
													<th className="text-gray-900" scope="row">/demo/admin/validation.html</th>
													<td className="fw-bolder text-gray-500">2,050</td>
													<td className="fw-bolder text-gray-500">$147</td>
													<td className="fw-bolder text-gray-500">
														<div className="d-flex"><svg className="icon icon-xs text-danger me-2" fill="currentColor"
																viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd"
																	d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
																	clipRule="evenodd"></path>
															</svg> 50,87%</div>
													</td>
												</tr>
												<tr>
													<th className="text-gray-900" scope="row">/demo/admin/modals.html</th>
													<td className="fw-bolder text-gray-500">1,483</td>
													<td className="fw-bolder text-gray-500">$19</td>
													<td className="fw-bolder text-gray-500">
														<div className="d-flex"><svg className="icon icon-xs text-success me-2" fill="currentColor"
																viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd"
																	d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
																	clipRule="evenodd"></path>
															</svg> 26,12%</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="col-12 col-xxl-6 mb-4">
								<div className="card border-0 shadow">
									<div className="card-header border-bottom d-flex align-items-center justify-content-between">
										<h2 className="fs-5 fw-bold mb-0">Team members</h2><a href="../users.html"
											className="btn btn-sm btn-primary">See all</a>
									</div>
									<div className="card-body">
										<ul className="list-group list-group-flush list my--3">
											<li className="list-group-item px-0">
												<div className="row align-items-center">
													<div className="col-auto">
														<a href="#" className="avatar"><img className="rounded" alt="Image placeholder"
																src="./dasboard assets/assets/img/team/profile-picture-1.jpg"/></a></div>
													<div className="col-auto ms--2">
														<h4 className="h6 mb-0"><a href="#">Chris Wood</a></h4>
														<div className="d-flex align-items-center">
															<div className="bg-success dot rounded-circle me-1"></div><small>Online</small>
														</div>
													</div>
													<div className="col text-end"><a href="#"
															className="btn btn-sm btn-secondary d-inline-flex align-items-center"><svg
																className="icon icon-xxs me-2" fill="currentColor" viewBox="0 0 20 20"
																xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd"
																	d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
																	clipRule="evenodd"></path>
															</svg> Invite</a></div>
												</div>
											</li>
											<li className="list-group-item px-0">
												<div className="row align-items-center">
													<div className="col-auto">
														<a href="../users.html" className="avatar"><img className="rounded-circle"
																alt="Image placeholder" src="./dasboard assets/assets/img/team/profile-picture-2.jpg"/></a></div>
													<div className="col-auto ms--2">
														<h4 className="h6 mb-0"><a href="#">Jose Leos</a></h4>
														<div className="d-flex align-items-center">
															<div className="bg-warning dot rounded-circle me-1"></div><small>In a meeting</small>
														</div>
													</div>
													<div className="col text-end"><a href="#"
															className="btn btn-sm btn-secondary d-inline-flex align-items-center"><svg
																className="icon icon-xxs me-2" fill="currentColor" viewBox="0 0 20 20"
																xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd"
																	d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
																	clipRule="evenodd"></path>
															</svg> Message</a></div>
												</div>
											</li>
											<li className="list-group-item px-0">
												<div className="row align-items-center">
													<div className="col-auto">
													<a href="#" className="avatar"><img className="rounded-circle" alt="Image placeholder"
																src="./dasboard assets/assets/img/team/profile-picture-3.jpg"/></a></div>
													<div className="col-auto ms--2">
														<h4 className="h6 mb-0"><a href="#">Bonnie Green</a></h4>
														<div className="d-flex align-items-center">
															<div className="bg-danger dot rounded-circle me-1"></div><small>Offline</small>
														</div>
													</div>
													<div className="col text-end"><a href="#"
															className="btn btn-sm btn-secondary d-inline-flex align-items-center"><svg
																className="icon icon-xxs me-2" fill="currentColor" viewBox="0 0 20 20"
																xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd"
																	d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
																	clipRule="evenodd"></path>
															</svg> Message</a></div>
												</div>
											</li>
											<li className="list-group-item px-0">
												<div className="row align-items-center">
													<div className="col-auto">
														<a href="#" className="avatar"><img className="rounded-circle" alt="Image placeholder"
																src="./dasboard assets/assets/img/team/profile-picture-4.jpg"/></a></div>
													<div className="col-auto ms--2">
														<h4 className="h6 mb-0"><a href="#">Neil Sims</a></h4>
														<div className="d-flex align-items-center">
															<div className="bg-danger dot rounded-circle me-1"></div><small>Offline</small>
														</div>
													</div>
													<div className="col text-end"><a href="#"
															className="btn btn-sm btn-secondary d-inline-flex align-items-center"><svg
																className="icon icon-xxs me-2" fill="currentColor" viewBox="0 0 20 20"
																xmlns="http://www.w3.org/2000/svg">
																<path fillRule="evenodd"
																	d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
																	clipRule="evenodd"></path>
															</svg> Message</a></div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-12 col-xxl-6 mb-4">
								<div className="card border-0 shadow">
									<div className="card-header border-bottom d-flex align-items-center justify-content-between">
										<h2 className="fs-5 fw-bold mb-0">Progress track</h2><a href="../users.html"
											className="btn btn-sm btn-primary">See tasks</a>
									</div>
									<div className="card-body">
																			<div className="row mb-4">
											<div className="col-auto"><svg className="icon icon-sm text-gray-500" fill="currentColor"
													viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
													<path fillRule="evenodd"
														d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
														clipRule="evenodd"></path>
												</svg></div>
											<div className="col">
												<div className="progress-wrapper">
													<div className="progress-info">
														<div className="h6 mb-0">Rocket - SaaS Template</div>
														<div className="small fw-bold text-gray-500"><span>75 %</span></div>
													</div>
													<div className="progress mb-0">
														<div className="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"
															aria-valuemax="100" style={{ width: '75%' }}></div>
													</div>
												</div>
											</div>
										</div>                  <div className="row align-items-center mb-4">
											<div className="col-auto"><svg className="icon icon-sm text-gray-500" fill="currentColor"
													viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
													<path fillRule="evenodd"
														d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
														clipRule="evenodd"></path>
												</svg></div>
											<div className="col">
												<div className="progress-wrapper">
													<div className="progress-info">
														<div className="h6 mb-0">Themesberg - Design System</div>
														<div className="small fw-bold text-gray-500"><span>60 %</span></div>
													</div>
													<div className="progress mb-0">
														<div className="progress-bar bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0"
															aria-valuemax="100" style={{ width: '60%' }}>
														</div>
													</div>
												</div>
											</div>
										</div>                  <div className="row align-items-center mb-4">
											<div className="col-auto"><svg className="icon icon-sm text-gray-500" fill="currentColor"
													viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
													<path fillRule="evenodd"
														d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
														clipRule="evenodd"></path>
												</svg></div>
											<div className="col">
												<div className="progress-wrapper">
													<div className="progress-info">
														<div className="h6 mb-0">Homepage Design in Figma</div>
														<div className="small fw-bold text-gray-500"><span>45 %</span></div>
													</div>
													<div className="progress mb-0">
														<div className="progress-bar bg-warning" role="progressbar" aria-valuenow="45" aria-valuemin="0"
															aria-valuemax="100" style={{ width: '45 %'}}></div>
													</div>
												</div>
											</div>
										</div>                  <div className="row align-items-center mb-3">
											<div className="col-auto"><svg className="icon icon-sm text-gray-500" fill="currentColor"
													viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
													<path fillRule="evenodd"
														d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
														clipRule="evenodd"></path>
												</svg></div>
											<div className="col">
												<div className="progress-wrapper">
													<div className="progress-info">
														<div className="h6 mb-0">Backend for Themesberg v2</div>
														<div className="small fw-bold text-gray-500"><span>34 %</span></div>
													</div>
													<div className="progress mb-0">
														<div className="progress-bar bg-danger" role="progressbar" aria-valuenow="34" aria-valuemin="0"
															aria-valuemax="100" style={{ width: '34%'}}></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="card border-0 shadow">
									<div className="card-header border-bottom">
										<h2 className="fs-5 fw-bold mb-1">Events</h2>
									</div>
									<div className="card-body">
																			<div className="row align-items-center d-block d-sm-flex border-bottom pb-4 mb-4">
											<div className="col-auto mb-3 mb-sm-0">
												<div className="calendar d-flex"><span className="calendar-month">Aug</span><span
														className="calendar-day py-2">10</span></div>
											</div>
											<div className="col"><a href="../calendar.html">
													<h3 className="h5 mb-1">Newmarket Nights</h3>
												</a><span>Organized by <a href="#">University of Oxford</a></span>
												<div className="small fw-bold">Time: 6:00AM</div><span className="small fw-bold">Place: Cambridge Boat
													Club, Cambridge</span>
											</div>
										</div>                  <div className="row align-items-center d-block d-sm-flex border-bottom pb-4 mb-4">
											<div className="col-auto mb-3 mb-sm-0">
												<div className="calendar d-flex"><span className="calendar-month">Sep</span><span
														className="calendar-day py-2">12</span></div>
											</div>
											<div className="col"><a href="../calendar.html">
													<h3 className="h5 mb-1">Noco Hemp Expo</h3>
												</a><span>Organized by <a href="#">University of Oxford</a></span>
												<div className="small fw-bold">Thu, 12 Sep - Sat, 18 Sep 2020</div><span className="small fw-bold">Place:
													Denver Expo Club, USA</span>
											</div>
										</div>                  <div className="row align-items-center d-block d-sm-flex border-bottom pb-4 mb-4">
											<div className="col-auto mb-3 mb-sm-0">
												<div className="calendar d-flex"><span className="calendar-month">Sep</span><span
														className="calendar-day py-2">15</span></div>
											</div>
											<div className="col"><a href="../calendar.html">
													<h3 className="h5 mb-1">EmTech MIT Conference</h3>
												</a><span>Organized by <a href="#">MIT</a></span>
												<div className="small fw-bold">Thu, 12 Sep - Sat, 18 Sep 2020</div><span className="small fw-bold">Place:
													California, USA</span>
											</div>
										</div>                  <div className="row d-block d-sm-flex align-items-center">
											<div className="col-auto mb-3 mb-sm-0">
												<div className="calendar d-flex"><span className="calendar-month">Sep</span><span
														className="calendar-day py-2">28</span></div>
											</div>
											<div className="col"><a href="../calendar.html">
													<h3 className="h5 mb-1">Canadian National Exhibition (CNE)</h3>
												</a><span>Organized by <a href="#">University of Oxford</a></span>
												<div className="small fw-bold">Fri, 20 Sep - Mon, 07 Oct 2020</div><span className="small fw-bold">Place:
													Toronto , Canada</span>
											</div>
										</div>
									</div>
									<div className="card-footer border-top bg-gray-50"><a
											className="fw-bold d-flex align-items-center justify-content-center" href="../calendar.html"><svg
												className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg">
												<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
												<path fillRule="evenodd"
													d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
													clipRule="evenodd"></path>
											</svg> See all</a></div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-xl-5 col-xxl-4 mb-4">
						<div className="col-12 px-0 mb-4">
							<div className="card border-0 shadow">
								<div className="card-body">
									<div className="d-flex align-items-center justify-content-between border-bottom pb-3">
										<div>
											<div className="h6 mb-0 d-flex align-items-center"><svg className="icon icon-xs text-gray-500 me-2"
													fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
														clipRule="evenodd"></path>
												</svg> Global Rank</div>
										</div>
										<div><a href="#" className="d-flex align-items-center fw-bold">#755 <svg
													className="icon icon-xs text-gray-500 ms-1" fill="currentColor" viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd"
														d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
														clipRule="evenodd"></path>
												</svg></a></div>
									</div>
									<div className="d-flex align-items-center justify-content-between border-bottom py-3">
										<div>
											<div className="h6 mb-0 d-flex align-items-center"><svg className="icon icon-xs text-gray-500 me-2"
													fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd"
														d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
														clipRule="evenodd"></path>
												</svg> Country Rank</div>
											<div className="small card-stats">United States <svg className="icon icon-xs text-success"
													fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd"
														d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
														clipRule="evenodd"></path>
												</svg></div>
										</div>
										<div><a href="#" className="d-flex align-items-center fw-bold">#32 <svg
													className="icon icon-xs text-gray-500 ms-1" fill="currentColor" viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd"
														d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
														clipRule="evenodd"></path>
												</svg></a></div>
									</div>
									<div className="d-flex align-items-center justify-content-between pt-3">
										<div>
											<div className="h6 mb-0 d-flex align-items-center"><svg className="icon icon-xs text-gray-500 me-2"
													fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd"
														d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
														clipRule="evenodd"></path>
													<path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"></path>
												</svg> Category Rank</div>
											<div className="small card-stats">Computers Electronics '&gt;' Technology <svg
													className="icon icon-xs text-success" fill="currentColor" viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd"
														d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
														clipRule="evenodd"></path>
												</svg></div>
										</div>
										<div><a href="#" className="d-flex align-items-center fw-bold">#11 <svg
													className="icon icon-xs text-gray-500 ms-1" fill="currentColor" viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd"
														d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
														clipRule="evenodd"></path>
												</svg></a></div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 px-0 mb-4">
							<div className="card border-0 shadow">
								<div className="card-body">
									<h2 className="fs-5 fw-bold mb-1">Acquisition</h2>
									<p>Tells you where your visitors originated from, such as search engines, social networks or website
										referrals.</p>
									<div className="d-block">
										<div className="d-flex align-items-center me-5">
											<div className="icon-shape icon-sm icon-shape-danger rounded me-3"><svg fill="currentColor"
													viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd"
														d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
														clipRule="evenodd"></path>
												</svg></div>
											<div className="d-block"><label className="mb-0">Bounce Rate</label>
												<h4 className="mb-0">33.50%</h4>
											</div>
										</div>
										<div className="d-flex align-items-center pt-3">
											<div className="icon-shape icon-sm icon-shape-purple rounded me-3"><svg fill="currentColor"
													viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z">
													</path>
												</svg></div>
											<div className="d-block"><label className="mb-0">Sessions</label>
												<h4 className="mb-0">9,567</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 px-0">
							<div className="card border-0 shadow">
								<div className="card-header pb-5">
									<h2 className="fs-5 fw-bold mb-1">Visits past 30 days by country</h2>
									<div id="map"></div>
								</div>
								<div className="card-body py-4">
									<div className="row align-items-center mb-4">
										<div className="col-auto">
											<a href="#" className="image image-xs rounded-circle"><img alt="Image placeholder"
													src="./dasboard assets/assets/img/flags/united-states-of-america.svg"/></a></div>
										<div className="col">
											<div className="progress-wrapper">
												<div className="progress-info">
													<div className="h6 mb-0">United States <span className="text-gray-500 font-small">(272.109)</span></div>
													<div className="small fw-bold"><span>34 %</span></div>
												</div>
												<div className="progress mb-0">
													<div className="progress-bar bg-dark" role="progressbar" aria-valuenow="34" aria-valuemin="0"
														aria-valuemax="100" style={{ width: '34 %'}}></div>
												</div>
											</div>
										</div>
									</div>
									<div className="row align-items-center mb-4">
										<div className="col-auto">
											<a href="#" className="image image-xs rounded-circle"><img alt="Image placeholder"
													src="./dasboard assets/assets/img/flags/canada.svg"/></a></div>
										<div className="col">
											<div className="progress-wrapper">
												<div className="progress-info">
													<div className="h6 mb-0">Canada <span className="text-gray-500 font-small">(160.064)</span></div>
													<div className="small fw-bold"><span>20 %</span></div>
												</div>
												<div className="progress mb-0">
													<div className="progress-bar bg-primary" role="progressbar" aria-valuenow="20" aria-valuemin="0"
														aria-valuemax="100" style={{ width: '24%' }}></div>
												</div>
											</div>
										</div>
									</div>
									<div className="row align-items-center mb-4">
										<div className="col-auto">
											<a href="#" className="image image-xs rounded-circle"><img alt="Image placeholder"
													src="./dasboard assets/assets/img/flags/germany.svg"/></a></div>
										<div className="col">
											<div className="progress-wrapper">
												<div className="progress-info">
													<div className="h6 mb-0">Germany <span className="text-gray-500 font-small">(120.048)</span></div>
													<div className="small fw-bold"><span>15 %</span></div>
												</div>
												<div className="progress mb-0">
													<div className="progress-bar bg-tertiary" role="progressbar" aria-valuenow="15" aria-valuemin="0"
														aria-valuemax="100" style={{ width: '15%' }}></div>
												</div>
											</div>
										</div>
									</div>
									<div className="row align-items-center mb-4">
										<div className="col-auto">
											<a href="#" className="image image-xs rounded-circle"><img alt="Image placeholder"
													src="./dasboard assets/assets/img/flags/france.svg"/></a></div>
										<div className="col">
											<div className="progress-wrapper">
												<div className="progress-info">
													<div className="h6 mb-0">France <span className="text-gray-500 font-small">(100.048)</span></div>
													<div className="small fw-bold"><span>8 %</span></div>
												</div>
												<div className="progress mb-0">
													<div className="progress-bar" role="progressbar" aria-valuenow="8" aria-valuemin="0"
														aria-valuemax="100" style={{ width: '8%' }}></div>
												</div>
											</div>
										</div>
									</div>
									<div className="row align-items-center mb-4">
										<div className="col-auto">
											<a href="#" className="image image-xs rounded-circle"><img alt="Image placeholder"
													src="./dasboard assets/assets/img/flags/japan.svg"/></a></div>
										<div className="col">
											<div className="progress-wrapper">
												<div className="progress-info">
													<div className="h6 mb-0">Japan <span className="text-gray-500 font-small">(56.022)</span></div>
													<div className="small fw-bold"><span>7 %</span></div>
												</div>
												<div className="progress mb-0">
													<div className="progress-bar" role="progressbar" aria-valuenow="7" aria-valuemin="0"
														aria-valuemax="100" style={{ width: '7%' }}></div>
												</div>
											</div>
										</div>
									</div>
									<div className="row align-items-center mb-4">
										<div className="col-auto">
											<a href="#" className="image image-xs rounded-circle"><img alt="Image placeholder"
													src="./dasboard assets/assets/img/flags/italy.svg"/></a></div>
										<div className="col">
											<div className="progress-wrapper">
												<div className="progress-info">
													<div className="h6 mb-0">Italy <span className="text-gray-500 font-small">(48.019)</span></div>
													<div className="small fw-bold"><span>6 %</span></div>
												</div>
												<div className="progress mb-0">
													<div className="progress-bar" role="progressbar" aria-valuenow="6" aria-valuemin="0"
														aria-valuemax="100" style={{ width: '6%' }}></div>
												</div>
											</div>
										</div>
									</div>
									<div className="row align-items-center mb-4">
										<div className="col-auto">
											<a href="#" className="image image-xs rounded-circle"><img alt="Image placeholder"
													src="./dasboard assets/assets/img/flags/netherlands.svg"/></a></div>
										<div className="col">
											<div className="progress-wrapper">
												<div className="progress-info">
													<div className="h6 mb-0">Netherlands <span className="text-gray-500 font-small">(40.016)</span></div>
													<div className="small fw-bold"><span>5 %</span></div>
												</div>
												<div className="progress mb-0">
													<div className="progress-bar" role="progressbar" aria-valuenow="5" aria-valuemin="0"
														aria-valuemax="100" style={{ width: '5%' }}></div>
												</div>
											</div>
										</div>
									</div>
									<div className="row align-items-center">
										<div className="col-auto">
											<a href="#" className="image image-xs rounded-circle"><img alt="Image placeholder"
													src="./dasboard assets/assets/img/flags/sweden.svg"/></a></div>
										<div className="col">
											<div className="progress-wrapper">
												<div className="progress-info">
													<div className="h6 mb-0">Sweden <span className="text-gray-500 font-small">(26.016)</span></div>
													<div className="small fw-bold"><span>3 %</span></div>
												</div>
												<div className="progress mb-0">
													<div className="progress-bar" role="progressbar" aria-valuenow="3" aria-valuemin="0"
														aria-valuemax="100" style={{ width: '3%' }}></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="card-footer bg-gray-50 border-top text-center"><a
										className="fw-bold d-flex align-items-center justify-content-center" href="../calendar.html"><svg
											className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
											<path fillRule="evenodd"
												d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
												clipRule="evenodd"></path>
										</svg> See all</a></div>
							</div>
						</div>
					</div>
				</div>
				<footer className="bg-white rounded shadow p-5 mb-4 mt-4">
					<div className="row">
						<div className="col-12 col-md-4 col-xl-6 mb-4 mb-md-0">
							<p className="mb-0 text-center text-lg-start">© 2019-<span className="current-year"></span> <a
									className="text-primary fw-normal" href="https://themesberg.com/" target="_blank">Themesberg</a></p>
						</div>
						<div className="col-12 col-md-8 col-xl-6 text-center text-lg-start">
													<ul className="list-inline list-group-flush list-group-borderless text-md-end mb-0">
								<li className="list-inline-item px-0 px-sm-2"><a href="https://themesberg.com/about">About</a></li>
								<li className="list-inline-item px-0 px-sm-2"><a href="https://themesberg.com/themes">Themes</a></li>
								<li className="list-inline-item px-0 px-sm-2"><a href="https://themesberg.com/blog">Blog</a></li>
								<li className="list-inline-item px-0 px-sm-2"><a href="https://themesberg.com/contact">Contact</a></li>
							</ul>
						</div>
					</div>
				</footer>
			</main>
			{/* <script src="./dasboard assets/vendor/%40popperjs/core/dist/umd/popper.min.js");
			<script src="./dasboard assets/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
			<script src="./dasboard assets/vendor/onscreen/dist/on-screen.umd.min.js"></script>
			<script src="./dasboard assets/vendor/nouislider/distribute/nouislider.min.js"></script>
			<script src="./dasboard assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
			<script src="./dasboard assets/vendor/countup.js/dist/countUp.umd.js"></script>
			<script src="./dasboard assets/vendor/apexcharts/dist/apexcharts.min.js"></script>
			<script src="./dasboard assets/vendor/vanillajs-datepicker/dist/js/datepicker.min.js"></script>
			<script src="./dasboard assets/vendor/simple-datatables/dist/umd/simple-datatables.js"></script>
			<script src="./dasboard assets/vendor/sweetalert2/dist/sweetalert2.min.js"></script> */}
			<script src="./dasboard assets/../../cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
			<script src="./dasboard assets/vendor/vanillajs-datepicker/dist/js/datepicker.min.js"></script>
			<script src="./dasboard assets/vendor/fullcalendar/main.min.js"></script>
			<script src="./dasboard assets/vendor/dropzone/dist/min/dropzone.min.js"></script>
			<script src="./dasboard assets/vendor/choices.js/public/assets/scripts/choices.min.js"></script>
			<script src="./dasboard assets/vendor/notyf/notyf.min.js"></script>
			<script src="./dasboard assets/vendor/leaflet/dist/leaflet.js"></script>
			<script src="./dasboard assets/vendor/svg-pan-zoom/dist/svg-pan-zoom.min.js"></script>
			<script src="./dasboard assets/vendor/svgmap/dist/svgMap.min.js"></script>
			<script src="./dasboard assets/vendor/simplebar/dist/simplebar.min.js"></script>    
			<script src="./dasboard assets/vendor/sortablejs/Sortable.min.js"></script>
			<script async defer="defer" src="./dasboard assets/../../buttons.github.io/buttons.js"></script>
			<script src="./dasboard assets/assets/js/volt.js"></script>
			<script defer
				src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"
				integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ=="
				data-cf-beacon='{"version":"2024.11.0","token":"3a2c60bab7654724a0f7e5946db4ea5a","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}'
				crossorigin="anonymous"></script>

    </>
  );
};

export default DashboardLayout;