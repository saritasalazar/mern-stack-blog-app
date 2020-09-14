import React, { useState, useContext } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdbreact';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const ArticleForm = () => {
  const [articleData, setArticleData] = useState(null);
  const { setLoading } = useContext(AppContext);
  const handleChange = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const form = e.target;
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        url: '/api/articles',
        withCredentials: true,
        data: articleData
      });
      setArticleData(null);
      setLoading(false);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MDBContainer className="d-flex-row justify-content-center">
      <MDBRow>
        <MDBCol>
          <form
            onSubmit={handleSubmit}
            style={{ width: '80%', marginLeft: '10%' }}
          >
            <p className="h4 text-center mb-4">Write a New Post</p>
            <label htmlFor="title" className="grey-text">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="text" className="grey-text">
              Article
            </label>
            <textarea
              rows="10"
              type="text"
              id="text"
              name="text"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="dateCreated" className="grey-text">
              Date Created
            </label>
            <input
              type="date"
              id="dateCreated"
              name="dateCreated"
              className="form-control"
              onChange={handleChange}
            />
            <div className="text-center mt-4">
              <MDBBtn color="coral" type="submit" size="md">
                Submit
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default ArticleForm;
