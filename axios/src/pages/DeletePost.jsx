import axios from 'axios';
import React from 'react';

const DeletePost = () => {

  const handleDelete = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        console.log(res.data);
        console.log('Post deleted successfully');
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
};

export default DeletePost;