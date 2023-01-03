import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleInputChange = (event) => {
    event.preventDefault();
    setFormData((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label> Name </label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            placeHolder="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>
            Email
            <input
              className="form-control"
              type="email"
              name="email"
              value={formData.email}
              placeHolder="email"
              onChange={handleInputChange}
            />
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
              placeHolder="password"
              onChange={handleInputChange}
            />
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
