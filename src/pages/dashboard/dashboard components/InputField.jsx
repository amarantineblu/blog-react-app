import React from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Include Quill styles
import TiptapEditor from './../../../components/TipTapEditor';

const InputField = ({ label, type, name, value, onChange, placeholder, isQuillTextEditor, inputDescription, required, validator, widthByCol = 6, isTextArea }) => {
  // const [accept, setAccept] = useState('image/*');
    // const [quillValue, setQuillValue] = useState('');
  return (
    <div className={`col-lg-${isTextArea || isQuillTextEditor ? 12 : widthByCol} col-sm-12`}>
      <div className="mb-4">
        <label htmlFor={name}>{ label }</label>
        {isTextArea ? (<textarea className="form-control" value={value} name={name} placeholder={placeholder} aria-describedby={inputDescription} onChange={onChange} id={name} rows="4"/>)
        : type === 'select' && !isTextArea ?
        (<select id={name} className="w-100" onChange={onChange} value={value} name={name} multiple="multiple">
        <option value="AL">Alabama</option>
        <option value="KS">Kansas</option>
        </select>)
        : isQuillTextEditor ?
        (
        <TiptapEditor name={name} value={value} onChange={onChange} />
        )
        : (<input type={type} {...(type !== 'file' &&  (value={value}) )} name={name} {...(type === 'file' && { accept: 'images/*' })} required={required} placeholder={placeholder} className={type === 'checkbox' || type === 'radio' ? "form-check-input" : "form-control"} id={name} onChange={onChange} aria-describedby={inputDescription} />)}
        {validator && !validator(value) && <small id="emailHelp" className="form-text text-muted">Invalid Input </small>}
      </div>
    </div>
  );
}

export default InputField;