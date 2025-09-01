import React, { useEffect, useState } from 'react';
import ReusableForm from './dashboard components/ReusableForm';
import { type } from '@testing-library/user-event/dist/type';
const AddBlogPage = () => {
  console.log('AddBlogPage Rendered');
  const fields = [
    {
      label: 'Blog Title', name:'blog_title', placeholder: 'Input Blog Title Here ', inputDescription: 'input for blog title ', required:true, type: 'text'
    },
    {
      label: 'Blog Main Image', name:'blog_image', inputDescription: 'input for blog details ', type:'file'
    },
    {
      label: 'Blog Contents', name:'content', placeholder: 'Input Blog Content Here ', inputDescription: 'input for blog content ',  isQuillTextEditor:true
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
            <li className="breadcrumb-item"><a href="/"><svg className="icon icon-xxs" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                  </path>
                </svg></a></li>
            <li className="breadcrumb-item"><a href="/">Volt</a></li>
            <li className="breadcrumb-item active" aria-current="page">Forms</li>
          </ol>
        </nav>
      </div>
      <ReusableForm formTitle={'Add Blog'} fields={fields} onSubmit={handleFormSubmit}/>
    </>
  );
};

export default AddBlogPage;
