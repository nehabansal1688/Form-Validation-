import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({});
  return (
    <>
      <form>
        <div className="form-group">
          <label> Name </label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeHolder="name"
          />
        </div>
        <div className="form-group">
          <label>
            Email
            <input
              className="form-control"
              type="email"
              name="email"
              placeHolder="email"
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
              placeHolder="password"
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
