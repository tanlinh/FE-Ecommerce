import React, { useState } from 'react';
import { createPost } from '../../../services/PostService';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, content };
    await createPost(postData);
    // Reset form fields
    setTitle('');
    setContent('');
    navigate('/');
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
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