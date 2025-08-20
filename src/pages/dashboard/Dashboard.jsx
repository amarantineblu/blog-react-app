import React from 'react';
const DashboardPage = () => {
    console.log('Dashboard Page');
  return (
		<div className="row justify-content-lg-center">
			<div className="col-12 mb-4">
				<div className="card border-0 bg-yellow-100 shadow">
					<div className="card-header d-sm-flex flex-row align-items-center border-yellow-200 flex-0">
						<div className="d-block mb-3 mb-sm-0">
							<div className="fs-5 fw-normal mb-2">Sales Value</div>
							<h2 className="fs-3 fw-extrabold">$10,567</h2>
							<div className="small mt-2"><span className="fw-normal me-2">Yesterday</span> <span
									className="fas fa-angle-up text-success"></span> <span className="text-success fw-bold">10.57%</span></div>
						</div>
						<div className="btn-group ms-auto" role="group" aria-label="Basic example"><button type="button"
								className="btn btn-secondary active">Day</button> <button type="button"
								className="btn btn-secondary">Month</button> <button type="button" className="btn btn-secondary">Year</button>
						</div>
					</div>
					<div className="card-body p-2">
						<div id="chart"></div>
					</div>
				</div>
			</div>
		</div>
  )
};
export default DashboardPage;