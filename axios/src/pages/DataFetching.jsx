import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataFetching = () => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => {
        console.error(error);
      })
      }, [])


  return (
    <div>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default DataFetching;