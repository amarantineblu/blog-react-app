import React, { useEffect, useState } from 'react';
const AddBlogPage = () => {
  return (
    <>
      <div className="py-4">
        <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
          <ol className="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li className="breadcrumb-item"><a href="#"><svg className="icon icon-xxs" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                  </path>
                </svg></a></li>
            <li className="breadcrumb-item"><a href="#">Volt</a></li>
            <li className="breadcrumb-item active" aria-current="page">Forms</li>
          </ol>
        </nav>
        <div className="d-flex justify-content-between w-100 flex-wrap">
          <div className="mb-3 mb-lg-0">
            <h1 className="h4">Forms</h1>
            <p className="mb-0">Dozens of reusable components built to provide buttons, alerts, popovers, and more.</p>
          </div>
          <div><a href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/components/forms/"
              className="btn btn-outline-gray"><i className="far fa-question-circle me-1"></i> Forms Docs</a></div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-4">
          <div className="card border-0 shadow components-section">
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-lg-4 col-sm-6">
                  
                  <div className="mb-4"><label for="email">Email address</label> <input type="email" className="form-control"
                      id="email" aria-describedby="emailHelp"/> <small id="emailHelp" className="form-text text-muted">We'll
                      never share your email with anyone else.</small></div>
                  
                  <div className="mb-3"><label for="exampleInputIconLeft">Icon Left</label>
                    <div className="input-group"><span className="input-group-text" id="basic-addon1"><svg
                          className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                        </svg> </span><input type="text" className="form-control" id="exampleInputIconLeft"
                        placeholder="Search" aria-label="Search" /></div>
                  </div>
                  
                  <div className="mb-3"><label for="exampleInputIconRight">Icon Right</label>
                    <div className="input-group"><input type="text" className="form-control" id="exampleInputIconRight"
                        placeholder="Search" aria-label="Search" /> <span className="input-group-text" id="basic-addon2"><svg
                          className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                        </svg></span></div>
                  </div>
                  
                  <div className="mb-3"><label for="exampleInputIconPassword">Password</label>
                    <div className="input-group"><input type="password" className="form-control" id="exampleInputIconPassword"
                        placeholder="Password" aria-label="Password" /> <span className="input-group-text"
                        id="basic-addon3"><svg className="icon icon-xs text-gray-600" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd"></path>
                        </svg></span></div>
                  </div>
                  
                  <div className="mb-3"><label for="firstName">First name</label> <input type="text"
                      className="form-control is-valid" id="firstName" value="Mark" required />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  
                  <div className="mb-2"><label className="my-1 me-2" for="state">Select state:</label> <select id="state"
                      className="w-100" name="state">
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select></div><label className="my-1 me-2" for="states">Select states:</label> <select id="states"
                    className="w-100" name="states[]" multiple="multiple">
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <div className="my-4"><label for="textarea">Example textarea</label> <textarea className="form-control"
                      placeholder="Enter your message..." id="textarea" rows="4"></textarea></div>
                  
                  <div className="mb-4"><label for="usernameValidate">Username</label> <input type="text"
                      className="form-control is-invalid" id="usernameValidate" required/>
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="mb-3"><label for="birthday">Birthday</label>
                    <div className="input-group"><span className="input-group-text"><svg className="icon icon-xs text-gray-600"
                          fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"></path>
                        </svg> </span><input data-datepicker="" className="form-control" id="birthday" type="text"
                        placeholder="dd/mm/yyyy" required/></div>
                  </div>
                  <div className="mb-3"><label for="disabledTextInput">Name</label> <input type="text"
                      id="disabledTextInput" className="form-control" placeholder="Disabled input" disabled="disabled"/>
                  </div>
                  <div className="mb-3"><label for="disabledSelect">Disabled select menu</label> <select id="disabledSelect"
                      className="form-control" disabled="disabled">
                      <option>Disabled select</option>
                    </select></div>
                  
                  <div className="mb-4"><label className="my-1 me-2" for="country">Country</label> <select className="form-select"
                      id="country" aria-label="Default select example">
                      <option selected="selected">Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select></div>
                  
                  <div className="mb-3"><label for="formFile" className="form-label">Default file input example</label> <input
                      className="form-control" type="file" id="formFile"/></div>
                </div>
              </div>
              <div className="row mb-5 mb-lg-5">
                <div className="col-lg-3 col-md-6">
                  
                  <div className="mb-3"><span className="h6 fw-bold">Checkboxes Round</span></div>
                  <div className="form-check"><input className="form-check-input" type="checkbox" value="" id="defaultCheck10" />
                    <label className="form-check-label" for="defaultCheck10">Default checkbox</label></div>
                  <div className="form-check"><input className="form-check-input" type="checkbox" value="" id="defaultCheck20"
                      disabled="disabled"/> <label className="form-check-label" for="defaultCheck20">Disabled
                      checkbox</label></div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-4 mt-md-0">
                  
                  <fieldset>
                    <legend className="h6">Radios</legend>
                    <div className="form-check"><input className="form-check-input" type="radio" name="exampleRadios"
                        id="exampleRadios1" value="option1" checked="checked"/> <label className="form-check-label"
                        for="exampleRadios1">Default radio</label></div>
                    <div className="form-check"><input className="form-check-input" type="radio" name="exampleRadios"
                        id="exampleRadios2" value="option2"/> <label className="form-check-label" for="exampleRadios2">Second
                        default radio</label></div>
                    <div className="form-check"><input className="form-check-input" type="radio" name="exampleRadios"
                        id="exampleRadios3" value="option3" disabled="disabled"/> <label className="form-check-label"
                        for="exampleRadios3">Disabled radio</label></div>
                  </fieldset>
                </div>
                <div className="col-lg-3 col-sm-6 mt-4 mt-md-0">
                  <div className="mb-3"><span className="h6 fw-bold">Switches</span></div>
                  <div className="form-check form-switch"><input className="form-check-input" type="checkbox"
                      id="flexSwitchCheckDefault"/> <label className="form-check-label" for="flexSwitchCheckDefault">Default
                      switch input</label></div>
                  <div className="form-check form-switch"><input className="form-check-input" type="checkbox"
                      id="flexSwitchCheckChecked" checked="checked"/> <label className="form-check-label"
                      for="flexSwitchCheckChecked">Checked switch input</label></div>
                  <div className="form-check form-switch"><input className="form-check-input" type="checkbox"
                      id="flexSwitchCheckDisabled" disabled="disabled"/> <label className="form-check-label"
                      for="flexSwitchCheckDisabled">Disabled switch input</label></div>
                  <div className="form-check form-switch"><input className="form-check-input" type="checkbox"
                      id="flexSwitchCheckCheckedDisabled" checked="checked" disabled="disabled"/> <label
                      className="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch
                      input</label></div>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-12 col-md-5">
                  <div className="mb-6"><span className="h6 fw-bold">Simple Range Slider</span></div>
                  <div className="input-slider-container">
                    <div id="input-slider-forms" className="input-slider" data-range-value-min="100"
                      data-range-value-max="500"></div>
                    <div className="row mt-3 d-none">
                      <div className="col-6"><span className="range-slider-value" data-range-value-low="200"></span></div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-5">
                  <div className="mb-6"><span className="h6 fw-bold">Range Slider with numbers</span></div>
                  
                  <div id="input-slider-range" data-range-value-min="100" data-range-value-max="500"></div>
                  
                  <div className="row d-none">
                    <div className="col-6"><span className="range-slider-value value-low" data-range-value-low="200"
                        id="input-slider-range-value-low"></span></div>
                    <div className="col-6 text-right"><span className="range-slider-value value-high"
                        data-range-value-high="400" id="input-slider-range-value-high"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlogPage;
