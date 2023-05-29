import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiComponent = ({ url, render }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return <>{render(data)}</>;
};

export default ApiComponent;