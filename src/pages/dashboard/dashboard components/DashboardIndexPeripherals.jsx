import React, { useEffect, useState } from 'react';
const DashboardIndexPeripherals = () => {
  return (
    <>
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
								<p>Total Themesberg Sales</p><a href="/" className="btn btn-primary d-inline-flex align-items-center"><svg
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
												<a href="/" className="avatar-md"><img className="rounded" alt="pic placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-1.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="/">Chris Wood</a></h4><span className="small">Graphic
													Designer</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$1,834</span></div>
										</div>
									</li>
									<li className="list-group-item bg-transparent border-bottom py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="/" className="avatar-md"><img className="rounded" alt="pic placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-3.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="/">Bonnie Green</a></h4><span className="small">Web
													Developer</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$1,355</span></div>
										</div>
									</li>
									<li className="list-group-item bg-transparent border-bottom py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="/" className="avatar-md"><img className="rounded" alt="pic placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-2.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="/">Chris Wood</a></h4><span className="small">React
													Developer</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$1,297</span></div>
										</div>
									</li>
									<li className="list-group-item bg-transparent border-bottom py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="/" className="avatar-md"><img className="rounded" alt="pic placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-4.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="/">Neil Sims</a></h4><span className="small">Python
													Developer</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$875</span></div>
										</div>
									</li>
									<li className="list-group-item bg-transparent border-bottom py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="/" className="avatar-md"><img className="rounded" alt="pic placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-5.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="/">Rebbeca Sas</a></h4><span className="small">UI/UX, Art
													Directo</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$872</span></div>
										</div>
									</li>
									<li className="list-group-item bg-transparent border-bottom py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="/" className="avatar-md"><img className="rounded" alt="pic placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-6.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="/">Jacklyn Brown</a></h4><span className="small">UI/UX, Art
													Directo</span>
											</div>
											<div className="col text-end"><span className="fs-6 fw-bolder text-dark">$605</span></div>
										</div>
									</li>
									<li className="list-group-item bg-transparent py-3 px-0">
										<div className="row align-items-center">
											<div className="col-auto">
												<a href="/" className="avatar-md"><img className="rounded" alt="pic placeholder"
														src="./dasboard assets/assets/img/team/profile-picture-7.jpg"/></a></div>
											<div className="col-auto px-0">
												<h4 className="fs-6 text-dark mb-0"><a href="/">Melinda Norrow</a></h4><span className="small">UI/UX, Art
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
								<div className="ms-auto"><a className="fw-normal d-inline-flex align-items-center" href="/"><svg
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
														<a href="/" className="avatar"><img className="rounded" alt="pic placeholder"
																src="./dasboard assets/assets/img/team/profile-picture-1.jpg"/></a></div>
													<div className="col-auto ms--2">
														<h4 className="h6 mb-0"><a href="/">Chris Wood</a></h4>
														<div className="d-flex align-items-center">
															<div className="bg-success dot rounded-circle me-1"></div><small>Online</small>
														</div>
													</div>
													<div className="col text-end"><a href="/"
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
																alt="pic placeholder" src="./dasboard assets/assets/img/team/profile-picture-2.jpg"/></a></div>
													<div className="col-auto ms--2">
														<h4 className="h6 mb-0"><a href="/">Jose Leos</a></h4>
														<div className="d-flex align-items-center">
															<div className="bg-warning dot rounded-circle me-1"></div><small>In a meeting</small>
														</div>
													</div>
													<div className="col text-end"><a href="/"
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
													<a href="/" className="avatar"><img className="rounded-circle" alt="pic placeholder"
																src="./dasboard assets/assets/img/team/profile-picture-3.jpg"/></a></div>
													<div className="col-auto ms--2">
														<h4 className="h6 mb-0"><a href="/">Bonnie Green</a></h4>
														<div className="d-flex align-items-center">
															<div className="bg-danger dot rounded-circle me-1"></div><small>Offline</small>
														</div>
													</div>
													<div className="col text-end"><a href="/"
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
														<a href="/" className="avatar"><img className="rounded-circle" alt="pic placeholder"
																src="./dasboard assets/assets/img/team/profile-picture-4.jpg"/></a></div>
													<div className="col-auto ms--2">
														<h4 className="h6 mb-0"><a href="/">Neil Sims</a></h4>
														<div className="d-flex align-items-center">
															<div className="bg-danger dot rounded-circle me-1"></div><small>Offline</small>
														</div>
													</div>
													<div className="col text-end"><a href="/"
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
												</a><span>Organized by <a href="/">University of Oxford</a></span>
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
												</a><span>Organized by <a href="/">University of Oxford</a></span>
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
												</a><span>Organized by <a href="/">MIT</a></span>
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
												</a><span>Organized by <a href="/">University of Oxford</a></span>
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
										<div><a href="/" className="d-flex align-items-center fw-bold">#755 <svg
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
										<div><a href="/" className="d-flex align-items-center fw-bold">#32 <svg
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
										<div><a href="/" className="d-flex align-items-center fw-bold">#11 <svg
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
											<a href="/" className="image image-xs rounded-circle"><img alt="pic placeholder"
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
											<a href="/" className="image image-xs rounded-circle"><img alt="pic placeholder"
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
											<a href="/" className="image image-xs rounded-circle"><img alt="pic placeholder"
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
											<a href="/" className="image image-xs rounded-circle"><img alt="pic placeholder"
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
											<a href="/" className="image image-xs rounded-circle"><img alt="pic placeholder"
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
											<a href="/" className="image image-xs rounded-circle"><img alt="pic placeholder"
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
											<a href="/" className="image image-xs rounded-circle"><img alt="pic placeholder"
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
											<a href="/" className="image image-xs rounded-circle"><img alt="pic placeholder"
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
    </>
  );
}

export default DashboardIndexPeripherals;