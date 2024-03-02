import axios from 'axios';
import { showImages } from './render-functions.js';
import { hideNextButton } from '../main.js';
const API_KEY = '42512841-77167630e6162aef67a2d6614';

export async function getRequest(q, current_page) {
  await axios
    .get('https://pixabay.com/api/', {
      params: {
        per_page: 200,
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
      showImages(response.data);
      console.log(response.data.totalHits);
      hideNextButton(response.data.totalHits);
      // return response.data;

      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
    })
    .catch(error => {
      console.log(error);
    });
}
// axios.defaults.baseURL = 'https://pixabay.com/api';
// axios.defaults.headers.common['header-name'] = API_KEY;
// catch (error) {
//   console.error(error);

// }

// try {
//   const response = await axios.get(
//     `/&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`
//   );
//   console.log(response);
// } catch (error) {
//   console.error(error);
// }

// async function (q) {

//   axios
//     .get(
//     '/?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true'
//     )
//     .then(response => {
//       console.log(response.data);
//       console.log(response.status);
//       console.log(response.statusText);
//       console.log(response.headers);
//       console.log(response.config);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
