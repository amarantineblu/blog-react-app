import React, { useState } from 'react';
import InputField from './InputField';
const ReusableForm = ({formTitle, fields, onSubmit }) => {
const [formData, setFormData] = useState(fields.reduce((acc, field) => {
acc[field.name] = '';
return acc;
}, {}));

const handleChange = (e) => {
const { name, value } = e.target;
setFormData(prevData => ({
...prevData,
[name]: value
}))
};

const handleSubmit = (e) => {
e.preventDefault();
onSubmit(formData);
};
return (
<>
  <div className="row">
    <div className="col-12 mb-4">
      <div className="card border-0 shadow components-section">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">{formTitle}</h1>
            </div>
            <div className="row mb-4">

              {fields.map((field, index) => {
              return (
              <InputField key={index} label={field.label} type={field.type} name={field.name}
                value={formData[field.name]} onChange={handleChange} placeholder={field.placeholder}
                required={field.required} validator={field.validator} isTextArea={field.isTextArea} />)
              })}
            </div>

            <button type="submit" className="btn btn-primary d-inline-flex align-items-center"> Submit </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</>
);
};

export default ReusableForm;