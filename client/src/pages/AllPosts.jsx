import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Comments from '../components/Comments';
import CommentList from '../components/CommentList';
import { MDBContainer } from 'mdbreact';
import '../components/Comment.css';
import './Article.css';

const AllPosts = () => {
  const { filteredArticles, setFilteredArticles, setLoading } = useContext(
    AppContext
  );

  useEffect(() => {
    setLoading(true);
    axios
      .get('/articles', { withCredentials: false })
      .then((response) => {
        setFilteredArticles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setLoading, setFilteredArticles]);

  return (
    <MDBContainer className="d-flex justify-content-center">
      <div>
        {filteredArticles
          ? filteredArticles.map((articles) => {
              return (
                <article className="article-wrap" key={articles._id}>
                  <div>
                    <div className="title">
                      <p>{articles.title}</p>
                    </div>
                    <div className="author">
                      <div className="avatar">
                        <img
                          alt="avatar"
                          src="https://www.iconfinder.com/data/icons/communication-232/384/Account_circle-512.png"
                        ></img>
                      </div>
                      <div className="name">
                        {' '}
                        <p>Written By: Sara Salazar</p>
                      </div>
                    </div>
                    <div className="line">
                      <hr></hr>
                    </div>
                    <div className="article">
                      <p>{articles.text}</p>
                    </div>
                  </div>

                  <CommentList id={articles._id} />

                  <Comments id={articles._id} />
                </article>
              );
            })
          : 'Error'}
      </div>
    </MDBContainer>
  );
};
export default AllPosts;
