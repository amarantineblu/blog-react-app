import React, { useEffect, useState } from 'react';
import ReusableForm from './dashboard components/ReusableForm';
const AddBlogPage = () => {
  const fields = [
    {
      label: 'Blog Title', name:'blog title', placeholder: 'Input Blog Title Here ', inputDescription: 'input for blog title ', required:true,
    }
  ];

  const handleFormSubmit = (data) => {
    console.log('Form Submitted:', data);
    
  }
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
      </div>
      <ReusableForm formTitle={'Add Blog'} fields={fields} onSubmit={handleFormSubmit}/>
    </>
  );
};

export default AddBlogPage;
