import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../img/javascript.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { loading } from '../main.js';
import { nextPage } from '../main.js';
import { scrollByImg } from '../main.js';

export const gallery = document.querySelector('.list-gallery');
let count = 0;

export function showImages(data, totalHits) {
  if (data.hits.length === 0) {
    gallery.innerHTML = null;
    loading.classList.remove('loader');
    nextPage.classList.remove('show-button');

    return iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      iconUrl: icon,
      color: '#E78E8E',
      messageColor: 'white',
      timeout: 3000,
      imageWidth: 50,
      position: 'topRight',
      maxWidth: 420,
    });
  }
  if (data.hits) {
    loading.classList.remove('loader');
    nextPage.classList.add('show-button');
    const markup = data.hits
      .map(element => {
        return `<li class="gallery"><a href="${element.largeImageURL}"><img src="${element.webformatURL}" alt="${element.tags}"></a>
   <div class="deskr-container"> <p>Likes<span>${element.likes}</span></p>
    <p>Views<span>${element.views}</span></p>
    <p>Comments<span>${element.comments}</span></p>
    <p>Downloads<span>${element.downloads}</span></p> </div>
  </li>`;
      })
      .join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    count += data.hits.length;
    scrollByImg();
  }

  if (count >= totalHits) {
    nextPage.classList.remove('show-button');
    return iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      color: 'blue',
      messageColor: 'black',
      timeout: 1000,
      imageWidth: 50,
      position: 'bottomRight',
      maxWidth: 420,
    });
  }
  const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
  });
  lightbox.refresh();
}
