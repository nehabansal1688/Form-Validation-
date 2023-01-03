import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMsgs, setErrorMsg] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleInputChange = (event) => {
    event.preventDefault();
    debugger;
    //const isFormValid = validateFormFields(event);
    setFormData((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const validateFormFields = (event) => {
    const { name, value } = event.target;
    let errorMsg = '';
    switch (name) {
      case 'name':
        errorMsg =
          value.length < 3 || value.trim().length < 1
            ? 'name should be min 4 chars'
            : '';
        setErrorMsg({ ...errorMsgs, name: errorMsg });
        break;
      case 'email':
        errorMsg =
          value.length < 6 || value.trim().length < 1
            ? 'enter valid email address'
            : '';
        setErrorMsg({ ...errorMsgs, email: errorMsg });
        break;
      case 'password':
        errorMsg =
          value.length < 5 || value.trim().length < 1
            ? 'password should be min 5 chars'
            : '';
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
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
