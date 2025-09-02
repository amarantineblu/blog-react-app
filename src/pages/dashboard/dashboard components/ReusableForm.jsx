import React, { useState } from 'react';
import InputField from './InputField';
const ReusableForm = ({ formTitle, fields, onSubmit }) => {
  
  // console.log('ReusableForm Rendered');
const [formData, setFormData] = useState((fields || []).reduce((acc, field) => {
acc[field.name] = '';
return acc;
}, {}));
  
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(null);

const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (!files) {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    return;
  }
  // ✅ File type check
    const file = files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setError('Only JPG, PNG, and WEBP files are allowed');
      return;
    }

    // ✅ File size check (2MB limit)
    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
      setError('File size should be less than 2MB');
      return;
    }

    // ✅ Optional: Check dimensions
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width < 200 || img.height < 200) {
        setError('Image must be at least 200x200 pixels');
        return;
      }
      // ✅ If everything is fine
      setError('');
      setPreview(img.src);
    };
    img.onerror = () => {
      setError('Invalid image file');
    };
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
                required={field.required} validator={field.validator} isTextArea={field.isTextArea} isQuillTextEditor={field.isQuillTextEditor} />)
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