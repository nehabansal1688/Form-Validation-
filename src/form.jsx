import React, { useState, useEffect } from 'react';
import * as validation from './validations';
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMsgs, setErrorMsg] = useState({
    name: null,
    email: null,
    password: null,
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setFormValidity();
  }, [JSON.stringify(errorMsgs)]);

  // useEffect(() => {
  //   setFormValidity();
  // }, [...Object.values(errorMsgs)]);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const setFormValidity = () => {
    let isValid = true;
    Object.keys(errorMsgs).forEach((key) => {
      if (errorMsgs[key] !== '') {
        isValid = false;
      }
    });
    setIsValid(isValid);
  };

  const validateFormFields = (event) => {
    const { name, value } = event.target;
    let errorMsg = '';
    switch (name) {
      case 'name':
        const isValid =
          validation.isNotNullAndUndefined(value) &&
          validation.hasMinChars(value, 4);
        errorMsg = isValid ? '' : 'name should be min 4 chars';
        setErrorMsg({ ...errorMsgs, name: errorMsg });
        break;
      case 'email':
        errorMsg = validation.hasMinChars(value, 6)
          ? ''
          : 'enter valid email address';
        setErrorMsg({ ...errorMsgs, email: errorMsg });
        break;
      case 'password':
        errorMsg = validation.hasMinChars(value, 5)
          ? ''
          : 'password should be min 5 chars';
        setErrorMsg({ ...errorMsgs, password: errorMsg });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label>
            {' '}
            Name
            <input
              className="form-control"
              type="text"
              name="name"
              value={formData.name}
              placeHolder="name"
              onKeyUp={validateFormFields}
              onChange={handleInputChange}
            />
            {<span className="text-danger">{errorMsgs.name}</span>}
          </label>
        </div>
        <div className="form-group">
          <label>
            Email
            <input
              className="form-control"
              type="email"
              name="email"
              onKeyUp={validateFormFields}
              value={formData.email}
              placeHolder="email"
              onChange={handleInputChange}
            />
            {<span className="text-danger">{errorMsgs.email}</span>}
          </label>
        </div>
        <div className="form-group">
          <label>
            password
            <input
              className="form-control"
              type="password"
              name="password"
              value={formData.password}
              onKeyUp={validateFormFields}
              placeHolder="password"
              onChange={handleInputChange}
            />
            {<span className="text-danger">{errorMsgs.password}</span>}
          </label>
        </div>
        <button type="submit" disabled={!isValid} class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
