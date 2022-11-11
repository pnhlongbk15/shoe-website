import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { register } from "~/Redux/Slice/userSlice";

import './Register.css'

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user)

  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { displayName, email, password, passwordConfirm } = state;


  useEffect(() => {
    console.log(currentUser)

    if (currentUser) {
      navigate('/')
    }
  }, [currentUser, navigate])

  // function for handle
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(register({ email, password, displayName }));
    setState({
      displayName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    })
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  };

  return (
    <div className="my-16 md:my-20">
      <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign up
          </h1>
          <input
            type="text"
            id="displayName"
            name="displayName"
            placeholder="Full Name"
            className="form-control"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input
            type="email"
            id="user-email"
            name="email"
            placeholder="Email Address"
            className="form-control"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputPassword"
            name="password"
            placeholder="Password"
            className="form-control"
            onChange={handleChange}
            value={password}
            required
          />
          <input
            type="password"
            id="inputRePassword"
            name="passwordConfirm"
            placeholder="Repeat Password"
            className="form-control"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />
          <button className="btn btn-primary btn-block" type="submit">
            <i className="fas fa-user"></i>
            {' '}Sign Up
          </button>
          <Link to="/login">
            <i className="fas fa-angle-left"></i>
            {' '}Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
