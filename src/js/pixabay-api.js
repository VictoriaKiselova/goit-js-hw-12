import axios from 'axios';
import { showImages } from './render-functions.js';
const API_KEY = '42512841-77167630e6162aef67a2d6614';

export async function getRequest(q, current_page) {
  await axios
    .get('https://pixabay.com/api/', {
      params: {
        per_page: 15,
        page: current_page,
        key: API_KEY,
        q: q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      console.log(response.data);
      showImages(response.data, response.data.totalHits);
    })
    .catch(error => {
      console.log(error);
    });
}
