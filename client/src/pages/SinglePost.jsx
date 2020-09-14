import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';
import Edit from '../components/Edit';
import axios from 'axios';

const Article = () => {
  const [articleData, setArticleData] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/articles/${id}`, {
        withCredentials: true
      })
      .then((response) => {
        setArticleData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <MDBContainer className="d-flex justify-content-center">
        <div className="post">
          <article>
            <h1>{articleData.title}</h1>
            <p>{articleData.text}</p>
            <Edit id={articleData._id} />
          </article>
        </div>
      </MDBContainer>
    </>
  );
};

export default Article;
