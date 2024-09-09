import axios from 'axios';
import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  console.log(title);
  console.log(body);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: title,
      body: body,
      userId: 1
    })
      .then((response) => {
        console.log('New post created:', response.data);
      })
      .catch((err) => {
        console.log('Error creating post:', err);
    })
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={title}
          onChange={(e) => { setTitle(e.target.value) }}
          placeholder='Title'
        />

        <textarea
          value={body}
          onChange={(e)=>setBody(e.target.value)}
          placeholder='Post Content'
        />

        <button type='submit'>Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;