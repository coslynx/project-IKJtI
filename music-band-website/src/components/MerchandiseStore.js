import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MerchandiseStore = () => {
  const [merchandise, setMerchandise] = useState([]);

  useEffect(() => {
    axios.get('api/merchandise')
      .then(response => {
        setMerchandise(response.data);
      })
      .catch(error => {
        console.error('Error fetching merchandise:', error);
      });
  }, []);

  const handleAddToCart = (item) => {
    // Add item to cart logic
  };

  return (
    <div>
      <h2>Merchandise Store</h2>
      {merchandise.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default MerchandiseStore;