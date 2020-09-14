import React, { useContext } from 'react';
import { MDBBtn } from 'mdbreact';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const Delete = ({ id }) => {
  const { setLoading } = useContext(AppContext);

  const handleDelete = async () => {
    setLoading(true);
    const willDelete = await swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this article',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    });

    if (willDelete) {
      axios
        .delete(`/api/articles/${id}`, { withCredentials: true })
        .then(() => {
          setLoading(false);
          swal('Poof', 'your article has been deleted', 'success');
        })
        .catch((error) => console.log(error));
    } else {
      swal('Wow, that was a close one!');
    }
  };

  return (
    <MDBBtn color="red" size="md" onClick={handleDelete}>
      <strong>Delete</strong>
    </MDBBtn>
  );
};

export default Delete;
