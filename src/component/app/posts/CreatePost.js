import React, { useState } from 'react';
import { createPost } from '../../../services/PostService';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, content };
    await createPost(postData);
    // Reset form fields
    setId('');
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        {/* <label>
          Id:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label> */}
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;