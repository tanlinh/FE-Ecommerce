import React, { useEffect, useState } from 'react';

const ItemList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;