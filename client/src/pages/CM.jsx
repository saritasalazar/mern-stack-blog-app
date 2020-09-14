import React from 'react';
import { MDBContainer } from 'mdbreact';
import ArticleForm from '../components/ArticleForm';
import Articles from '../components/Articles';

const CM = () => {
  return (
    <MDBContainer className="d-flex-col">
      <Articles />
      <MDBContainer className="algin-center">
        <ArticleForm />
      </MDBContainer>
    </MDBContainer>
  );
};

export default CM;
