import React, { useState, useContext } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdbreact';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Edit = ({ id }) => {
  const [articleData, setArticleData] = useState(null);
  const { setLoading } = useContext(AppContext);

  const handleChange = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await axios({
        method: 'PATCH',
        url: `/api/articles/${id}`,
        withCredentials: true,
        data: articleData
      });
      setArticleData(null);
      setLoading(false);
      console.log(articleData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MDBContainer className="d-flex-row justify-content-center">
      <MDBRow>
        <MDBCol>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <label htmlFor="title" className="grey-text">
              Update Title
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
              Update Article
            </label>
            <textarea
              rows="7"
              type="text"
              id="text"
              name="text"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="dateCreated" className="grey-text">
              Update Date Created
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
                UPDATE
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Edit;
