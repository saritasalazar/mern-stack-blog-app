import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBAnimation
} from 'mdbreact';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Login = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', formData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', response.data);
      history.push('/');
    } catch (error) {
      console.log('Login Error: ', error);
    }
  };

  return (
    <MDBContainer className="d-flex justify-content-center fixed-top">
      <MDBCol md="5">
        <MDBRow className="py-4 mt-5"></MDBRow>
        <MDBAnimation type="bounceInUp" duration="700ms">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={handleLogin}>
                <p className="h1 text-center py-4 gray-text">Login</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    name="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    name="password"
                    validate
                    onChange={handleChange}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="mb-3" color="coral" type="submit">
                    Login
                  </MDBBtn>
                  <div>
                    <p>
                      {' '}
                      Don't have an account? <Link to="/Signup">Sign up.</Link>
                    </p>
                    <p>
                      {' '}
                      <Link to="/">Home</Link>
                    </p>
                  </div>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBAnimation>
      </MDBCol>
    </MDBContainer>
  );
};

export default Login;
