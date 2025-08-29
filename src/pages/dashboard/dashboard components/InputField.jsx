import React from 'react';

const InputField = ({  label, type, name, value, onChange, placeholder, inputDescription, required, validator, widthByCol = 6, isTextArea }) => {
  return (
    <div className={`col-lg-${isTextArea ? 12 : widthByCol} col-sm-12`}>
      <div className="mb-4">
        <label htmlFor={name}>{ label }</label>
        {isTextArea === true ? (<textarea className="form-control" placeholder={placeholder} aria-describedby={inputDescription} onChange={onChange} id={name} rows="4"/>)
        : type === 'select' && isTextArea === false ?
          (<select id={name} className="w-100" name={name} multiple="multiple">
            <option value="AL">Alabama</option>
            <option value="KS">Kansas</option>
          </select>) : (<input type={type} required={required} placeholder={placeholder} className={type ==='checkbox' || type === 'radio' ? "form-check-input" : "form-control"} id={name} onChange={onChange} aria-describedby={inputDescription}/>)}

        {validator && !validator(value) && <small id="emailHelp" className="form-text text-muted">Invalid Input </small>}
      </div>
    </div>
  );
}

export default InputField;