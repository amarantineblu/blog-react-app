import React, { useState } from 'react';

const InputField = ({  label, type = 'text', name, value, onChange, placeholder, inputDescription, required, validator, widthByCol = 6, isTextArea = false }) => {
  return (
    <div className={`col-lg-${isTextArea ? 12 : widthByCol} col-sm-12`}>
      <div className="mb-4">
        <label htmlFor={name}>{ label }</label>
        {isTextArea
          ? (<textarea className="form-control" placeholder="Enter your message..." aria-describedby={inputDescription} onChange={onChange} id={name} rows="4"></textarea>)
          : type == select ?
            (<select id={name} className="w-100" name={name} multiple="multiple">
              <option value="AL">Alabama</option>
              <option value="KS">Kansas</option>                                      
            </select>)
          : (<input type={type} required={required} value={value} placeholder={placeholder} className={type==checkbox || radio ? "form-check-input" : "form-control"} id={name} onChange={onChange} aria-describedby={inputDescription}/>)
        }
        {validator && !validator(value) && <small id="emailHelp" className="form-text text-muted">Invalid Input </small>}
      </div>
    </div>
  );
}

export default InputField;