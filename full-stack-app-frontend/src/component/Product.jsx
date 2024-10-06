import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Axios request to backend API
    axios.get('http://localhost:8080/product')
      .then((response) => {
        setData(response.data.msg);  // Set the fetched data into state
        console.log('Data:', response.data.msg);
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  }, []);

  return (
    <div>Product</div>
  )
}

export default Product