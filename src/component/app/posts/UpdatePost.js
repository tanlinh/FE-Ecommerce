import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost, updatePost } from '../../../services/PostService';

const UpdatePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPost(id);
      setPost(response);
      setTitle(response.title);
      setContent(response.content);
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { id, title, content };
    await updatePost(updatedPost);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Post</h2>
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

export default UpdatePost;