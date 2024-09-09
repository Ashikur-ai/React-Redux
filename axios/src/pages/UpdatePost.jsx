import axios from 'axios';
import React, { useState } from 'react';

const UpdatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleUpdate = () => {
    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      title: title,
      body: body,
      userId: 1
    },
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }
    
    )
      .then((response) => {
        console.log('Post updated:', response.data);
      })
      .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <form action="" onSubmit={handleUpdate}>
        <input type="text" value={title}
          onChange={(e) => { setTitle(e.target.value) }}
          placeholder='Title'
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder='Post Content'
        />

        <button type='submit'>Create Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;