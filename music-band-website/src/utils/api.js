import axios from 'axios';

const BASE_URL = 'https://music-band-api.com';

const api = axios.create({
  baseURL: BASE_URL,
});

const getBandInfo = () => {
  return api.get('/bandInfo');
};

const getMusic = () => {
  return api.get('/music');
};

const getVideos = () => {
  return api.get('/videos');
};

const getTourDates = () => {
  return api.get('/tourDates');
};

const getMerchandise = () => {
  return api.get('/merchandise');
};

const submitContactForm = (formData) => {
  return api.post('/contactForm', formData);
};

const subscribeToNewsletter = (email) => {
  return api.post('/subscribe', { email });
};

const getPhotos = () => {
  return api.get('/photos');
};

export {
  getBandInfo,
  getMusic,
  getVideos,
  getTourDates,
  getMerchandise,
  submitContactForm,
  subscribeToNewsletter,
  getPhotos,
};