import React, { useState, useEffect } from 'react';
import './Registration.css';
import { Navigate } from 'react-router-dom';


function Registration() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToShare: false,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleEvent = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormValues({ ...formValues, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;

    if (!values.name) {
      errors.name = 'Username is required!';
    } else if (values.name.length < 3) {
      errors.name = 'Username must be more than 3 characters!';
    } else if (values.name.length > 30) {
      errors.name = 'Username must be less than 30 characters!';
    }

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }

    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 10) {
      errors.password = 'Password must be more than 10 characters!';
    } else if (!regexSpecial.test(values.password)) {
      errors.password = 'Password must contain at least 1 special character!';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required!';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Confirm Password does not match!';
    }

    if (!values.agreeToShare) {
      errors.agreeToShare = 'You must agree to share your information!';
    }

    return errors;
  };

  return (
    <div className='login-box'>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className='success'>Form submitted successfully!</div>
      ) : (
        <div></div>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className={`input-box ${formErrors.name ? 'error' : ''}`}>
          <input
            type='text'
            name='name'
            value={formValues.name}
            onChange={handleEvent}
            className='input-field'
            id='name'
          />
          <label htmlFor='name'>Name</label>
          <p className='error-message'>{formErrors.name}</p>
        </div>
       

        <div className={`input-box ${formErrors.email ? 'error' : ''}`}>
          <input
            type='text'
            name='email'
            value={formValues.email}
            onChange={handleEvent}
            className='input-field'
            id='email'
          />
          <label htmlFor='email'>Email</label>
          <p className='error-message'>{formErrors.email}</p>
        </div>
       

        <div className={`input-box ${formErrors.password ? 'error' : ''}`}>
          <input
            type='password'
            name='password'
            value={formValues.password}
            onChange={handleEvent}
            className='input-field'
            id='password'
          />
          <label htmlFor='password'>Password</label>
          <p className='error-message'>{formErrors.password}</p>
        </div>
       

        <div className={`input-box ${formErrors.confirmPassword ? 'error' : ''}`}>
          <input
            type='password'
            value={formValues.confirmPassword}
            name='confirmPassword'
            onChange={handleEvent}
            className='input-field'
            id='confirmPassword'
          />
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <p className='error-message'>{formErrors.confirmPassword}</p>
        </div>

        <div className='checkbox-container'>
          <input
            type='checkbox'
            name='agreeToShare'
            checked={formValues.agreeToShare}
            onChange={handleEvent}
            className='checkbox-input'
          />
          <label htmlFor='agreeToShare' className='checkbox-label'>
            I agree to share my information
          </label>
        </div>
        <p className='error-message'>{formErrors.agreeToShare}</p>

        <button className='input-submit' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
