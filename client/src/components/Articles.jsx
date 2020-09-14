import React, { useEffect, useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import Article from './Article';
import { AppContext } from '../context/AppContext';
import Search from './Search';

const Articles = () => {
  const {
    setArticle,
    search,
    filteredArticles,
    setFilteredArticles,
    loading,
    setLoading
  } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/api/articles', {
        withCredentials: true
      })
      .then((response) => {
        setArticle(response.data);
        setFilteredArticles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setArticle, setFilteredArticles, search, loading, setLoading]);

  return (
    <Container>
      <Search />
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          <Article articles={filteredArticles} />
        </tbody>
      </Table>
    </Container>
  );
};

export default Articles;
