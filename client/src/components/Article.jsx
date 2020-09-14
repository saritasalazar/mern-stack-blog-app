import React, { useContext } from 'react';
import Delete from './Delete';
import { MDBBtn } from 'mdbreact';
import { AppContext } from '../context/AppContext';

const Article = ({ articles }) => {
  const { search } = useContext(AppContext);
  const filteredArticles = articles?.filter((article) => {
    return article.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      {filteredArticles.map((article) => (
        <tr key={article._id}>
          <td>{article.title}</td>
          <td>{article.dateCreated}</td>
          <td>
            <a href={`/article/${article._id}`}>
              <MDBBtn color="coral" type="submit" size="md">
                EDIT
              </MDBBtn>
            </a>
            <Delete id={article._id} />
          </td>
          <td></td>
        </tr>
      ))}
    </>
  );
};

export default Article;
