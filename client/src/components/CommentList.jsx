import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Comment.css';

const CommentList = ({ id }) => {
  const [commentData, setCommentData] = useState('');

  const comments = commentData;

  useEffect(() => {
    axios
      .get(`/api/comments/${id}`)
      .then((response) => {
        setCommentData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [commentData, id]);

  return (
    <div>
      {comments
        ? comments.map((comments) => (
            <div className="commentBox" key={comments._id}>
              <div className="commentName">{comments.name}</div>
              <div className="comment">Says: "{comments.comment}"</div>
            </div>
          ))
        : Error}
    </div>
  );
};

export default CommentList;
