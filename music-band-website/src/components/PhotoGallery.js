import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('api/photos')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos: ', error);
      });
  }, []);

  return (
    <div className="photo-gallery">
      {photos.map(photo => (
        <img key={photo.id} src={photo.url} alt={photo.title} />
      ))}
    </div>
  );
};

export default PhotoGallery;