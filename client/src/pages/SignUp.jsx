import React, { useState, useContext } from 'react';
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
import { Link } from 'react-router-dom';

const SignUp = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      history.push('/');
    } catch (error) {
      console.log('SignUp Error: ', error);
    }
  };

  return (
    <MDBContainer className="justify-content-center fixed-top" fluid>
      <MDBRow className="py-4 mt-5"></MDBRow>
      <MDBRow className="no-gutters">
        <MDBCol></MDBCol>
        <MDBCol>
          <MDBAnimation type="bounceInDown" duration="700ms">
            <MDBCard className="py-2">
              <MDBCardBody>
                <form onSubmit={handleSignUp}>
                  <p className="h1 text-center py-3">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Name"
                      name="name"
                      icon="user"
                      size="sm"
                      group
                      type="text"
                      onChange={handleChange}
                    />
                    <MDBInput
                      label="Email"
                      name="email"
                      icon="envelope"
                      size="sm"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={handleChange}
                    />
                    <MDBInput
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      size="sm"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="New password"
                      name="password"
                      icon="lock"
                      size="sm"
                      group
                      type="password"
                      validate
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center py-2 mt-2">
                    <MDBBtn color="coral" type="submit">
                      <strong>Sign Up</strong>
                    </MDBBtn>
                    <p className="signup">
                      {' '}
                      Not What You're Looking For? <Link to="/"> Go Home</Link>
                    </p>
                    <p className="signup">
                      Already Have an Account? <Link to="/Login"> Login</Link>
                    </p>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUp;
