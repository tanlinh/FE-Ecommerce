import './App.css';
import React from 'react';
import ListPosts from './posts/ListPost';
import CreatePost from './posts/CreatePost';
import UpdatePost from './posts/UpdatePost';
import Post from './posts/post/Post';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const  App = () => {

  return (
    <Router>
      <div>
        <h1>My Blog App</h1>
        <Routes>
          <Route path="/" element={<ListPosts />} />
          <Route exact path="/posts/create" element={<CreatePost />} />
          <Route exact path="/posts/:id" element={<Post />} />
          <Route exact path="/posts/:id/update" element={UpdatePost} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
