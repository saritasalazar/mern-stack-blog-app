import React, { useState, useContext } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdbreact';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Comments = ({ id }) => {
  const [commentData, setCommentData] = useState(null);
  const { setLoading } = useContext(AppContext);

  const articleId = id;

  const handleChange = (e) => {
    setCommentData({
      ...commentData,
      articleId,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    const form = e.target;
    setLoading(true);
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        url: '/api/comments',
        data: commentData
      });
      setCommentData(null);
      setLoading(false);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form onSubmit={handleSubmit} style={{ width: '80%' }}>
            <label htmlFor="title" className="grey-text">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="text" className="grey-text">
              Comment
            </label>
            <textarea
              rows="3"
              type="text"
              id="comment"
              name="comment"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <div className="text-center mt-4">
              <MDBBtn color="gray" type="submit" size="md">
                Submit
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Comments;
