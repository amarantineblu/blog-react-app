import React from 'react';

const AllBlogsPage = () => {
  const render = () => { console.log('All Blogs Page Rendering') }
  return (
    <>
       <div className="container-fluid kanban-container py-4 px-0">
        <div className="row d-flex flex-nowrap">
          <div className="col-12 col-lg-6 col-xl-4 col-xxl-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fs-6 fw-bold mb-0">To do</h5>
              <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg className="icon icon-xs"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                    </path>
                  </svg></button>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                    className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z">
                      </path>
                    </svg> Add Card </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                      <path
                        d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                      </path>
                    </svg> Copy List </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg> Move List </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"></path>
                    </svg> Watch</a>
                  <div role="separator" className="dropdown-divider my-1"></div><a
                    className="dropdown-item d-flex align-items-center" href="#"><svg className="dropdown-icon text-danger me-2"
                      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                    </svg> Remove</a>
                </div>
              </div>
            </div>
            <div id="kanbanColumn1" className="list-group kanban-list">
              <div className="card border-0 shadow p-4">
                <div className="card-header d-flex align-items-center justify-content-between border-0 p-0 mb-3">
                  <h3 className="h5 mb-0">variables.scss problems</h3>
                  <div>
                    
                    <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg
                          className="icon icon-xs text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg></button>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                          className="dropdown-item d-flex align-items-center" href="#" data-bs-toggle="modal"
                          data-bs-target="#editTaskModal"><svg className="dropdown-icon text-gray-400 me-2"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                            </path>
                          </svg> Edit Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                            <path
                              d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                            </path>
                          </svg> Copy Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                          </svg> Add to favorites</a>
                        <div role="separator" className="dropdown-divider my-1"></div><a
                          className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"></path>
                          </svg> Remove</a>
                      </div>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start py-0"
                        aria-labelledby="dropdownMenuLink"><a className="dropdown-item fw-normal rounded-top" href="#"
                          data-bs-toggle="modal" data-bs-target="#editTaskModal"><span className="fas fa-edit"></span>Edit
                          task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-clone"></span>Copy
                          Task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-star"></span> Add to
                          favorites</a>
                        <div role="separator" className="dropdown-divider my-0"></div><a
                          className="dropdown-item fw-normal text-danger rounded-bottom" href="#"><span
                            className="fas fa-trash-alt"></span>Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <p>On line 672 you define $table_variants. Each instance of "color-level" needs to be changed to
                    "shift-color".</p>
                  <h5 className="fs-6 fw-normal mt-4">3 Assignees</h5>
                  <div className="avatar-group"><a href="#" className="avatar" data-bs-toggle="tooltip"
                      data-original-title="Ryan Tompson" data-bs-original-title="Ryan Tompson" title="Ryan Tompson"><img
                        className="rounded" alt="Image placeholder" src="../assets/img/team/profile-picture-1.jpg"/> </a><a
                      href="#" className="avatar" data-bs-toggle="tooltip" data-original-title="Bonnie Green"
                      data-bs-original-title="Bonnie Green" title="Bonnie Green"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-3.jpg"/> </a><a href="#"
                      className="avatar" data-bs-toggle="tooltip" data-original-title="Alexander Smith"
                      data-bs-original-title="Alexander Smith" title="Alexander Smith"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-2.jpg"/></a></div>
                </div>
              </div>
              <div className="card border-0 shadow p-4">
                <div className="card-header d-flex align-items-center justify-content-between border-0 p-0 mb-3">
                  <h3 className="h5 mb-0">Redesign homepage</h3>
                  <div>
                    
                    <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg
                          className="icon icon-xs text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg></button>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                          className="dropdown-item d-flex align-items-center" href="#" data-bs-toggle="modal"
                          data-bs-target="#editTaskModal"><svg className="dropdown-icon text-gray-400 me-2"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                            </path>
                          </svg> Edit Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                            <path
                              d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                            </path>
                          </svg> Copy Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                          </svg> Add to favorites</a>
                        <div role="separator" className="dropdown-divider my-1"></div><a
                          className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"></path>
                          </svg> Remove</a>
                      </div>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start py-0"
                        aria-labelledby="dropdownMenuLink"><a className="dropdown-item fw-normal rounded-top" href="#"
                          data-bs-toggle="modal" data-bs-target="#editTaskModal"><span className="fas fa-edit"></span>Edit
                          task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-clone"></span>Copy
                          Task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-star"></span> Add to
                          favorites</a>
                        <div role="separator" className="dropdown-divider my-0"></div><a
                          className="dropdown-item fw-normal text-danger rounded-bottom" href="#"><span
                            className="fas fa-trash-alt"></span>Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0"><img src="../assets/img/themesberg-mockup.jpg"
                    className="card-img-top mb-2 mb-lg-3" alt="themesberg marketplace"/>
                  <p>On line 672 you define $table_variants. Each instance of "color-level" needs to be changed to
                    "shift-color".</p>
                  <h5 className="fs-6 fw-normal mt-4">2 Assignees</h5>
                  <div className="avatar-group"><a href="#" className="avatar" data-bs-toggle="tooltip"
                      data-original-title="Ryan Tompson" data-bs-original-title="Ryan Tompson" title="Ryan Tompson"><img
                        className="rounded" alt="Image placeholder" src="../assets/img/team/profile-picture-1.jpg"/> </a><a
                      href="#" className="avatar" data-bs-toggle="tooltip" data-original-title="Bonnie Green"
                      data-bs-original-title="Bonnie Green" title="Bonnie Green"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-3.jpg"/></a></div>
                </div>
              </div>
              <div className="card border-0 shadow p-4">
                <div className="card-header d-flex align-items-center justify-content-between border-0 p-0 mb-2">
                  <h3 className="h5 mb-0">variables.scss problems</h3>
                  <div>
                    
                    <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg
                          className="icon icon-xs text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg></button>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                          className="dropdown-item d-flex align-items-center" href="#" data-bs-toggle="modal"
                          data-bs-target="#editTaskModal"><svg className="dropdown-icon text-gray-400 me-2"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                            </path>
                          </svg> Edit Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                            <path
                              d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                            </path>
                          </svg> Copy Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                          </svg> Add to favorites</a>
                        <div role="separator" className="dropdown-divider my-1"></div><a
                          className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"></path>
                          </svg> Remove</a>
                      </div>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start py-0"
                        aria-labelledby="dropdownMenuLink"><a className="dropdown-item fw-normal rounded-top" href="#"
                          data-bs-toggle="modal" data-bs-target="#editTaskModal"><span className="fas fa-edit"></span>Edit
                          task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-clone"></span>Copy
                          Task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-star"></span> Add to
                          favorites</a>
                        <div role="separator" className="dropdown-divider my-0"></div><a
                          className="dropdown-item fw-normal text-danger rounded-bottom" href="#"><span
                            className="fas fa-trash-alt"></span>Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <p>On line 672 you define $table_variants. Each instance of "color-level" needs to be changed to
                    "shift-color".</p>
                  <h5 className="fs-6 fw-normal mt-4">3 Assignees</h5>
                  <div className="avatar-group"><a href="#" className="avatar" data-bs-toggle="tooltip"
                      data-original-title="Ryan Tompson" data-bs-original-title="Ryan Tompson" title="Ryan Tompson"><img
                        className="rounded" alt="Image placeholder" src="../assets/img/team/profile-picture-1.jpg"/> </a><a
                      href="#" className="avatar" data-bs-toggle="tooltip" data-original-title="Bonnie Green"
                      data-bs-original-title="Bonnie Green" title="Bonnie Green"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-3.jpg"/> </a><a href="#"
                      className="avatar" data-bs-toggle="tooltip" data-original-title="Alexander Smith"
                      data-bs-original-title="Alexander Smith" title="Alexander Smith"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-2.jpg"/></a></div>
                </div>
              </div> <button type="button"
                className="btn btn-outline-gray-500 d-inline-flex align-items-center justify-content-center dashed-outline new-card w-100"
                data-bs-toggle="modal" data-bs-target="#KanbanAddCard"><svg className="icon icon-xs me-2" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                  </path>
                </svg> Add another card</button>
            </div>
            <div className="d-grid">
              
              <div className="modal fade" id="KanbanAddCard" tabindex="-1" aria-labelledby="KanbanAddCardLabel4"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content p-3">
                    <div className="modal-header pb-0 border-0">
                      <h5 className="modal-title fw-normal" id="KanbanAddCardLabel4">Add a new task</h5><button
                        type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body pb-0">
                      <div className="mb-3"><input type="email" className="form-control" id="exampleFormControlInput1"
                          placeholder="Enter a title for this card…"/></div>
                      <div className="mb-3"><textarea className="form-control" id="exampleFormControlTextarea1"
                          placeholder="Enter a description for this card…" rows="3"></textarea></div>
                    </div>
                    <div className="modal-footer border-0 pt-0 justify-content-start"><button type="button"
                        className="btn btn-outline-gray-500" data-bs-dismiss="modal">Close</button> <button type="button"
                        className="btn btn-secondary d-inline-flex align-items-center"><svg className="icon icon-xs me-2"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg> Add card</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 col-xxl-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fs-6 fw-bold mb-0">In progress</h5>
              <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg className="icon icon-xs"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                    </path>
                  </svg></button>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                    className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z">
                      </path>
                    </svg> Add Card </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                      <path
                        d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                      </path>
                    </svg> Copy List </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg> Move List </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"></path>
                    </svg> Watch</a>
                  <div role="separator" className="dropdown-divider my-1"></div><a
                    className="dropdown-item d-flex align-items-center" href="#"><svg className="dropdown-icon text-danger me-2"
                      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                    </svg> Remove</a>
                </div>
              </div>
            </div>
            <div id="kanbanColumn2" className="list-group kanban-list">
              <div className="card border-0 shadow p-4">
                <div className="card-header d-flex align-items-center justify-content-between border-0 p-0 mb-3">
                  <h3 className="h5 mb-0">Redesign homepage</h3>
                  <div>
                    
                    <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg
                          className="icon icon-xs text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg></button>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                          className="dropdown-item d-flex align-items-center" href="#" data-bs-toggle="modal"
                          data-bs-target="#editTaskModal"><svg className="dropdown-icon text-gray-400 me-2"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                            </path>
                          </svg> Edit Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                            <path
                              d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                            </path>
                          </svg> Copy Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                          </svg> Add to favorites</a>
                        <div role="separator" className="dropdown-divider my-1"></div><a
                          className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"></path>
                          </svg> Remove</a>
                      </div>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start py-0"
                        aria-labelledby="dropdownMenuLink"><a className="dropdown-item fw-normal rounded-top" href="#"
                          data-bs-toggle="modal" data-bs-target="#editTaskModal"><span className="fas fa-edit"></span>Edit
                          task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-clone"></span>Copy
                          Task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-star"></span> Add to
                          favorites</a>
                        <div role="separator" className="dropdown-divider my-0"></div><a
                          className="dropdown-item fw-normal text-danger rounded-bottom" href="#"><span
                            className="fas fa-trash-alt"></span>Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0"><img src="../assets/img/themesberg-mockup.jpg"
                    className="card-img-top mb-2 mb-lg-3" alt="themesberg marketplace"/>
                  <p>On line 672 you define $table_variants. Each instance of "color-level" needs to be changed to
                    "shift-color".</p>
                  <h5 className="fs-6 fw-normal mt-4">2 Assignees</h5>
                  <div className="avatar-group"><a href="#" className="avatar" data-bs-toggle="tooltip"
                      data-original-title="Ryan Tompson" data-bs-original-title="Ryan Tompson" title="Ryan Tompson"><img
                        className="rounded" alt="Image placeholder" src="../assets/img/team/profile-picture-1.jpg"/> </a><a
                      href="#" className="avatar" data-bs-toggle="tooltip" data-original-title="Bonnie Green"
                      data-bs-original-title="Bonnie Green" title="Bonnie Green"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-3.jpg"/></a></div>
                </div>
              </div>
              <div className="card border-0 shadow p-4">
                <div className="card-header d-flex align-items-center justify-content-between border-0 p-0 mb-3">
                  <h3 className="h5 mb-0">Design banner</h3>
                  <div>
                    
                    <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg
                          className="icon icon-xs text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg></button>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                          className="dropdown-item d-flex align-items-center" href="#" data-bs-toggle="modal"
                          data-bs-target="#editTaskModal"><svg className="dropdown-icon text-gray-400 me-2"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                            </path>
                          </svg> Edit Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                            <path
                              d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                            </path>
                          </svg> Copy Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                          </svg> Add to favorites</a>
                        <div role="separator" className="dropdown-divider my-1"></div><a
                          className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"></path>
                          </svg> Remove</a>
                      </div>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start py-0"
                        aria-labelledby="dropdownMenuLink"><a className="dropdown-item fw-normal rounded-top" href="#"
                          data-bs-toggle="modal" data-bs-target="#editTaskModal"><span className="fas fa-edit"></span>Edit
                          task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-clone"></span>Copy
                          Task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-star"></span> Add to
                          favorites</a>
                        <div role="separator" className="dropdown-divider my-0"></div><a
                          className="dropdown-item fw-normal text-danger rounded-bottom" href="#"><span
                            className="fas fa-trash-alt"></span>Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <p>On line 672 you define $table_variants. Each instance of "color-level" needs to be changed to
                    "shift-color".</p>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h5 className="h6 mb-0">Progress</h5>
                    <div className="fw-bold small"><span>40%</span></div>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h5 className="fs-6 fw-normal mt-4">2 Assignees</h5>
                  <div className="avatar-group"><a href="#" className="avatar" data-bs-toggle="tooltip"
                      data-original-title="Ryan Tompson" data-bs-original-title="Ryan Tompson" title="Ryan Tompson"><img
                        className="rounded" alt="Image placeholder" src="../assets/img/team/profile-picture-1.jpg"/> </a><a
                      href="#" className="avatar" data-bs-toggle="tooltip" data-original-title="Bonnie Green"
                      data-bs-original-title="Bonnie Green" title="Bonnie Green"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-3.jpg"/></a></div>
                </div>
              </div> <button type="button"
                className="btn btn-outline-gray-500 d-inline-flex align-items-center justify-content-center dashed-outline new-card w-100"
                data-bs-toggle="modal" data-bs-target="#KanbanAddCard"><svg className="icon icon-xs me-2" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                  </path>
                </svg> Add another card</button>
            </div>
            <div className="d-grid">
              
              <div className="modal fade" id="KanbanAddCard2" tabindex="-1" aria-labelledby="KanbanAddCardLabel2"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content p-4">
                    <div className="modal-header pb-0 border-0">
                      <h5 className="modal-title fw-normal" id="KanbanAddCardLabel2">Add a new task</h5><button
                        type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body pb-0">
                      <div className="mb-3"><input type="email" className="form-control" id="exampleFormControlInput2"
                          placeholder="Enter a title for this card…"/></div>
                      <div className="mb-3"><textarea className="form-control" id="exampleFormControlTextarea2"
                          placeholder="Enter a description for this card…" rows="3"></textarea></div>
                    </div>
                    <div className="modal-footer border-0 pt-0 justify-content-start"><button type="button"
                        className="btn btn-outline-gray-500" data-bs-dismiss="modal">Close</button> <button type="button"
                        className="btn btn-secondary d-inline-flex align-items-center"><svg className="icon icon-xs me-2"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg> Add card</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 col-xxl-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fs-6 fw-bold mb-0">Done</h5>
              <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg className="icon icon-xs"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                    </path>
                  </svg></button>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                    className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z">
                      </path>
                    </svg> Add Card </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                      <path
                        d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                      </path>
                    </svg> Copy List </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg> Move List </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"></path>
                    </svg> Watch</a>
                  <div role="separator" className="dropdown-divider my-1"></div><a
                    className="dropdown-item d-flex align-items-center" href="#"><svg className="dropdown-icon text-danger me-2"
                      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                    </svg> Remove</a>
                </div>
              </div>
            </div>
            <div id="kanbanColumn3" className="list-group kanban-list">
              <div className="card border-0 shadow p-4">
                <div className="card-header d-flex align-items-center justify-content-between border-0 p-0 mb-2">
                  <h3 className="h5 mb-0">variables.scss problems</h3>
                  <div>
                    
                    <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg
                          className="icon icon-xs text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg></button>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                          className="dropdown-item d-flex align-items-center" href="#" data-bs-toggle="modal"
                          data-bs-target="#editTaskModal"><svg className="dropdown-icon text-gray-400 me-2"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                            </path>
                          </svg> Edit Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                            <path
                              d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                            </path>
                          </svg> Copy Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                          </svg> Add to favorites</a>
                        <div role="separator" className="dropdown-divider my-1"></div><a
                          className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"></path>
                          </svg> Remove</a>
                      </div>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start py-0"
                        aria-labelledby="dropdownMenuLink"><a className="dropdown-item fw-normal rounded-top" href="#"
                          data-bs-toggle="modal" data-bs-target="#editTaskModal"><span className="fas fa-edit"></span>Edit
                          task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-clone"></span>Copy
                          Task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-star"></span> Add to
                          favorites</a>
                        <div role="separator" className="dropdown-divider my-0"></div><a
                          className="dropdown-item fw-normal text-danger rounded-bottom" href="#"><span
                            className="fas fa-trash-alt"></span>Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <p>On line 672 you define $table_variants. Each instance of "color-level" needs to be changed to
                    "shift-color".</p>
                  <h5 className="fs-6 fw-normal mt-4">3 Assignees</h5>
                  <div className="avatar-group"><a href="#" className="avatar" data-bs-toggle="tooltip"
                      data-original-title="Ryan Tompson" data-bs-original-title="Ryan Tompson" title="Ryan Tompson"><img
                        className="rounded" alt="Image placeholder" src="../assets/img/team/profile-picture-1.jpg"/> </a><a
                      href="#" className="avatar" data-bs-toggle="tooltip" data-original-title="Bonnie Green"
                      data-bs-original-title="Bonnie Green" title="Bonnie Green"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-3.jpg"/> </a><a href="#"
                      className="avatar" data-bs-toggle="tooltip" data-original-title="Alexander Smith"
                      data-bs-original-title="Alexander Smith" title="Alexander Smith"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-2.jpg"/></a></div>
                </div>
              </div>
              <div className="card border-0 shadow p-4">
                <div className="card-header d-flex align-items-center justify-content-between border-0 p-0 mb-3">
                  <h3 className="h5 mb-0">Redesign homepage</h3>
                  <div>
                    
                    <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg
                          className="icon icon-xs text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg></button>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                          className="dropdown-item d-flex align-items-center" href="#" data-bs-toggle="modal"
                          data-bs-target="#editTaskModal"><svg className="dropdown-icon text-gray-400 me-2"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                            </path>
                          </svg> Edit Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                            <path
                              d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                            </path>
                          </svg> Copy Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                          </svg> Add to favorites</a>
                        <div role="separator" className="dropdown-divider my-1"></div><a
                          className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"></path>
                          </svg> Remove</a>
                      </div>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start py-0"
                        aria-labelledby="dropdownMenuLink"><a className="dropdown-item fw-normal rounded-top" href="#"
                          data-bs-toggle="modal" data-bs-target="#editTaskModal"><span className="fas fa-edit"></span>Edit
                          task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-clone"></span>Copy
                          Task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-star"></span> Add to
                          favorites</a>
                        <div role="separator" className="dropdown-divider my-0"></div><a
                          className="dropdown-item fw-normal text-danger rounded-bottom" href="#"><span
                            className="fas fa-trash-alt"></span>Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0"><img src="../assets/img/themesberg-mockup.jpg"
                    className="card-img-top mb-2 mb-lg-3" alt="themesberg marketplace"/>
                  <p>On line 672 you define $table_variants. Each instance of "color-level" needs to be changed to
                    "shift-color".</p>
                  <h5 className="fs-6 fw-normal mt-4">2 Assignees</h5>
                  <div className="avatar-group"><a href="#" className="avatar" data-bs-toggle="tooltip"
                      data-original-title="Ryan Tompson" data-bs-original-title="Ryan Tompson" title="Ryan Tompson"><img
                        className="rounded" alt="Image placeholder" src="../assets/img/team/profile-picture-1.jpg"/> </a><a
                      href="#" className="avatar" data-bs-toggle="tooltip" data-original-title="Bonnie Green"
                      data-bs-original-title="Bonnie Green" title="Bonnie Green"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-3.jpg"/></a></div>
                </div>
              </div> <button type="button"
                className="btn btn-outline-gray-500 d-inline-flex align-items-center justify-content-center dashed-outline new-card w-100"
                data-bs-toggle="modal" data-bs-target="#KanbanAddCard"><svg className="icon icon-xs me-2" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                  </path>
                </svg> Add another card</button>
            </div>
            <div className="d-grid">
              
              <div className="modal fade" id="KanbanAddCard3" tabindex="-1" aria-labelledby="KanbanAddCardLabel3"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content p-4">
                    <div className="modal-header pb-0 border-0">
                      <h5 className="modal-title fw-normal" id="KanbanAddCardLabel3">Add a new task</h5><button
                        type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body pb-0">
                      <div className="mb-3"><input type="email" className="form-control" id="exampleFormControlInput3"
                          placeholder="Enter a title for this card…"/></div>
                      <div className="mb-3"><textarea className="form-control" id="exampleFormControlTextarea3"
                          placeholder="Enter a description for this card…" rows="3"></textarea></div>
                    </div>
                    <div className="modal-footer border-0 pt-0 justify-content-start"><button type="button"
                        className="btn btn-outline-gray-500" data-bs-dismiss="modal">Close</button> <button type="button"
                        className="btn btn-secondary d-inline-flex align-items-center"><svg className="icon icon-xs me-2"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg> Add card</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 col-xxl-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fs-6 fw-bold mb-0">Deployed</h5>
              <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg className="icon icon-xs"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                    </path>
                  </svg></button>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                    className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z">
                      </path>
                    </svg> Add Card </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                      <path
                        d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                      </path>
                    </svg> Copy List </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg> Move List </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                      className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"></path>
                    </svg> Watch</a>
                  <div role="separator" className="dropdown-divider my-1"></div><a
                    className="dropdown-item d-flex align-items-center" href="#"><svg className="dropdown-icon text-danger me-2"
                      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                    </svg> Remove</a>
                </div>
              </div>
            </div>
            <div id="kanbanColumn4" className="list-group kanban-list">
              <div className="card border-0 shadow p-4">
                <div className="card-header d-flex align-items-center justify-content-between border-0 p-0 mb-2">
                  <h3 className="h5 mb-0">variables.scss problems</h3>
                  <div>
                    
                    <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg
                          className="icon icon-xs text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg></button>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                          className="dropdown-item d-flex align-items-center" href="#" data-bs-toggle="modal"
                          data-bs-target="#editTaskModal"><svg className="dropdown-icon text-gray-400 me-2"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                            </path>
                          </svg> Edit Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                            <path
                              d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                            </path>
                          </svg> Copy Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                          </svg> Add to favorites</a>
                        <div role="separator" className="dropdown-divider my-1"></div><a
                          className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"></path>
                          </svg> Remove</a>
                      </div>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start py-0"
                        aria-labelledby="dropdownMenuLink"><a className="dropdown-item fw-normal rounded-top" href="#"
                          data-bs-toggle="modal" data-bs-target="#editTaskModal"><span className="fas fa-edit"></span>Edit
                          task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-clone"></span>Copy
                          Task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-star"></span> Add to
                          favorites</a>
                        <div role="separator" className="dropdown-divider my-0"></div><a
                          className="dropdown-item fw-normal text-danger rounded-bottom" href="#"><span
                            className="fas fa-trash-alt"></span>Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <p>On line 672 you define $table_variants. Each instance of "color-level" needs to be changed to
                    "shift-color".</p>
                  <h5 className="fs-6 fw-normal mt-4">3 Assignees</h5>
                  <div className="avatar-group"><a href="#" className="avatar" data-bs-toggle="tooltip"
                      data-original-title="Ryan Tompson" data-bs-original-title="Ryan Tompson" title="Ryan Tompson"><img
                        className="rounded" alt="Image placeholder" src="../assets/img/team/profile-picture-1.jpg"/> </a><a
                      href="#" className="avatar" data-bs-toggle="tooltip" data-original-title="Bonnie Green"
                      data-bs-original-title="Bonnie Green" title="Bonnie Green"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-3.jpg"/> </a><a href="#"
                      className="avatar" data-bs-toggle="tooltip" data-original-title="Alexander Smith"
                      data-bs-original-title="Alexander Smith" title="Alexander Smith"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-2.jpg"/></a></div>
                </div>
              </div>
              <div className="card border-0 shadow p-4">
                <div className="card-header d-flex align-items-center justify-content-between border-0 p-0 mb-3">
                  <h3 className="h5 mb-0">Redesign homepage</h3>
                  <div>
                    
                    <div className="dropdown"><button type="button" className="btn btn-sm fs-6 px-1 py-0 dropdown-toggle"
                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><svg
                          className="icon icon-xs text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg></button>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                          className="dropdown-item d-flex align-items-center" href="#" data-bs-toggle="modal"
                          data-bs-target="#editTaskModal"><svg className="dropdown-icon text-gray-400 me-2"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                            </path>
                          </svg> Edit Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                            <path
                              d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                            </path>
                          </svg> Copy Task </a><a className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                          </svg> Add to favorites</a>
                        <div role="separator" className="dropdown-divider my-1"></div><a
                          className="dropdown-item d-flex align-items-center" href="#"><svg
                            className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"></path>
                          </svg> Remove</a>
                      </div>
                      <div className="dropdown-menu dashboard-dropdown dropdown-menu-start py-0"
                        aria-labelledby="dropdownMenuLink"><a className="dropdown-item fw-normal rounded-top" href="#"
                          data-bs-toggle="modal" data-bs-target="#editTaskModal"><span className="fas fa-edit"></span>Edit
                          task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-clone"></span>Copy
                          Task</a> <a className="dropdown-item fw-normal" href="#"><span className="far fa-star"></span> Add to
                          favorites</a>
                        <div role="separator" className="dropdown-divider my-0"></div><a
                          className="dropdown-item fw-normal text-danger rounded-bottom" href="#"><span
                            className="fas fa-trash-alt"></span>Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0"><img src="../assets/img/themesberg-mockup.jpg"
                    className="card-img-top mb-2 mb-lg-3" alt="themesberg marketplace"/>
                  <p>On line 672 you define $table_variants. Each instance of "color-level" needs to be changed to
                    "shift-color".</p>
                  <h5 className="fs-6 fw-normal mt-4">2 Assignees</h5>
                  <div className="avatar-group"><a href="#" className="avatar" data-bs-toggle="tooltip"
                      data-original-title="Ryan Tompson" data-bs-original-title="Ryan Tompson" title="Ryan Tompson"><img
                        className="rounded" alt="Image placeholder" src="../assets/img/team/profile-picture-1.jpg"/> </a><a
                      href="#" className="avatar" data-bs-toggle="tooltip" data-original-title="Bonnie Green"
                      data-bs-original-title="Bonnie Green" title="Bonnie Green"><img className="rounded"
                        alt="Image placeholder" src="../assets/img/team/profile-picture-3.jpg"/></a></div>
                </div>
              </div> <button type="button"
                className="btn btn-outline-gray-500 d-inline-flex align-items-center justify-content-center dashed-outline new-card w-100"
                data-bs-toggle="modal" data-bs-target="#KanbanAddCard"><svg className="icon icon-xs me-2" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                  </path>
                </svg> Add another card</button>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 col-xxl-3">
            <div id="kanbanColumn5" className="list-group"></div>
            <div className="d-grid">
               <button type="button"
                className="btn btn-outline-gray-500 d-inline-flex align-items-center justify-content-center dashed-outline new-card w-100"
                data-bs-toggle="modal" data-bs-target="#KanbanAddCard"><svg className="icon icon-xs me-2" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                  </path>
                </svg> Add another card</button>
              <div className="modal fade" id="KanbanAddGroup5" tabindex="-1" aria-labelledby="KanbanAddGroupLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content p-4">
                    <div className="modal-header pb-0 border-0">
                      <h5 className="modal-title fw-normal" id="KanbanAddGroupLabel">Add a new group</h5><button
                        type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body pb-0">
                      <div className="mb-3"><input type="email" className="form-control" id="exampleFormControlInput4"
                          placeholder="Enter a title for this group"/></div>
                      <div className="mb-3"><textarea className="form-control" id="exampleFormControlTextarea4"
                          placeholder="Enter a description for this group" rows="3"></textarea></div>
                    </div>
                    <div className="modal-footer border-0 pt-0 justify-content-start"><button type="button"
                        className="btn btn-outline-primary" data-bs-dismiss="modal">Close</button> <button type="button"
                        className="btn btn-success"><span className="fas fa-plus me-2"></span>Add group</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal fade" id="editTaskModal" tabindex="-1" aria-labelledby="editTaskModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-lg-3">
              <div className="modal-header align-items-start border-bottom">
                <div className="d-block">
                  <h2 className="h5 mb-3">variables.scss problems</h2>
                  <div className="d-flex">
                    <div className="d-block me-3 me-sm-4">
                      <h5 className="fs-6 fw-bold text-gray-500" id="editTaskModalLabel">Members</h5>
                      <div className="d-flex align-items-center"><a href="#" className="avatar" data-bs-toggle="tooltip"
                          data-original-title="Ryan Tompson" data-bs-original-title="" title=""><img className="rounded"
                            alt="Image placeholder" src="../assets/img/team/profile-picture-1.jpg"/> </a><a href="#"
                          className="avatar me-1" data-bs-toggle="tooltip" data-original-title="Romina Hadid"
                          data-bs-original-title="" title=""><img className="rounded" alt="Image placeholder"
                            src="../assets/img/team/profile-picture-2.jpg"/> </a><button
                          className="btn btn-icon btn-sm btn-gray-200 d-inline-flex align-items-center"><svg
                            className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"></path>
                          </svg></button></div>
                    </div>
                    <div className="d-block me-3">
                      <h5 className="fs-6 fw-bold text-gray-500">Labels</h5>
                      <div className="d-flex align-items-center"><a href="#"
                          className="badge bg-success text-white rounded py-2 px-3 me-1">Design </a><button
                          className="btn btn-sm btn-gray-200 d-inline-flex align-items-center"><svg className="icon icon-xs"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"></path>
                          </svg></button></div>
                    </div>
                  </div>
                </div><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body py-4">
                <div className="row">
                  <div className="col-12 col-lg-9">
                    <div className="row mb-4">
                      <div className="col-auto">
                        <div className="border border-3 rounded mb-2"><img className="image-sm rounded"
                            src="../assets/img/team/profile-picture-1.jpg" alt="profile picture"/></div>
                        <div className="text-center"><a href="#" className="me-2"><svg className="icon icon-xs" fill="none"
                              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13">
                              </path>
                            </svg> </a><a href="#"><svg className="icon icon-xs" fill="none" stroke="currentColor"
                              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z">
                              </path>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg></a></div>
                      </div>
                      <div className="col">
                        
                        <form><textarea className="form-control" id="exampleFormControlTextarea5"
                            placeholder="Leave a comment" rows="3"></textarea></form>
                      </div>
                    </div>
                    <div className="row mb-4 mb-lg-0">
                      <div className="col-12 mb-4">
                        <div className="bg-gray-50 border border-gray-100 rounded p-3">
                          <div className="d-flex align-items-center mb-2">
                            <h3 className="fs-6 mb-0 me-3">Bonnie Green</h3><small>32 minutes ago</small>
                          </div>
                          <p className="text-dark mb-1">Pixel Pro is a premium Bootstrap 5 UI Kit without jQuery featuring
                            over 1000 components, 50+ sections and 35 example pages including a fully fledged user
                            dashboard.</p><a className="text-gray-700 hover:underline small" href="#">Edit</a> &middot; <a
                            className="text-gray-700 hover:underline small" href="#">Delete</a>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="bg-gray-50 border border-gray-100 rounded p-3">
                          <div className="d-flex align-items-center mb-2">
                            <h3 className="fs-6 mb-0 me-3">Roy Fendley</h3><small>1 hour ago</small>
                          </div>
                          <p className="text-dark mb-1">Pixel Pro is a premium Bootstrap 5 UI Kit without jQuery featuring
                            over 1000 components, 50+ sections and 35 example pages including a fully fledged user
                            dashboard.</p><a className="text-gray-700 hover:underline small" href="#">Edit</a> &middot; <a
                            className="text-gray-700 hover:underline small" href="#">Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="d-grid gap-2"><a href="#"
                        className="btn btn-sm btn-gray-200 d-inline-flex align-items-center rounded py-1 ps-3 text-start"><svg
                          className="icon icon-xxs text-gray-500 me-2" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                          </path>
                        </svg> Members </a><a href="#"
                        className="btn btn-sm btn-gray-200 d-inline-flex align-items-center rounded py-1 ps-3 text-start"><svg
                          className="icon icon-xxs text-gray-500 me-2" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"></path>
                        </svg> Labels </a><a href="#"
                        className="btn btn-sm btn-gray-200 d-inline-flex align-items-center rounded py-1 ps-3 text-start"><svg
                          className="icon icon-xxs text-gray-500 me-2" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                          <path fill-rule="evenodd"
                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                            clip-rule="evenodd"></path>
                        </svg> Checklist </a><a href="#"
                        className="btn btn-sm btn-gray-200 d-inline-flex align-items-center rounded py-1 ps-3 text-start"><svg
                          className="icon icon-xxs text-gray-500 me-2" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clip-rule="evenodd"></path>
                        </svg> Attachment </a><a href="#"
                        className="btn btn-sm btn-gray-200 d-inline-flex align-items-center rounded py-1 ps-3 text-start"><svg
                          className="icon icon-xxs text-gray-500 me-2" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"></path>
                        </svg> Due Date</a></div>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-start border-top">
                <div className="d-none d-sm-flex"><a href="#"
                    className="btn btn-gray-800 d-inline-flex align-items-center me-2"><svg
                      className="icon icon-xs text-gray-300 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg> Move </a><a href="#" className="btn btn-gray-800 d-inline-flex align-items-center me-2"><svg
                      className="icon icon-xs text-gray-300 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                      <path fill-rule="evenodd"
                        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                    </svg> Archive </a><a href="#" className="btn btn-gray-800 d-inline-flex align-items-center me-2"><svg
                      className="icon icon-xs text-gray-300 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"></path>
                    </svg> Watch <svg className="icon icon-xxs text-success ms-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                    </svg> </a><a href="#" className="btn btn-gray-800 d-inline-flex align-items-center me-2"><svg
                      className="icon icon-xxs text-gray-300 me-2" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z">
                      </path>
                    </svg> Share</a></div>
                <div className="col-12 d-grid gap-2 d-sm-none"><a href="#" className="btn btn-gray-800 me-2 text-start"><span
                      className="fas fa-arrow-right me-2"></span>Move</a> <a href="#"
                    className="btn btn-gray-800 me-2 text-start"><span className="fas fa-archive me-2"></span>Archive</a> <a
                    href="#" className="btn btn-gray-800 me-2 text-start"><span className="fas fa-eye me-2"></span>Watch<span
                      className="fas fa-check-circle ms-3 text-success"></span></a> <a href="#"
                    className="btn btn-gray-800 me-2 text-start"><span className="fas fa-share-alt me-2"></span>Share</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AllBlogsPage;