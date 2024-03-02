import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';
import { getRequest } from './js/pixabay-api.js';
import { gallery } from './js/render-functions.js';

export const loading = document.querySelector('.loading');
export const nextPage = document.querySelector('.loading-more-img');
const boxLoad = document.querySelector('.btn-load-box');
const form = document.querySelector('.form');

let current_page = 1;
let searchValue;

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = null;
  loading.classList.add('loader');
  searchValue = event.target.elements.search.value.trim();

  if (searchValue === '') {
    return;
  } else {
    getRequest(searchValue);
  }
  form.reset();
});

nextPage.addEventListener('click', event => {
  loading.classList.add('loader');
  boxLoad.appendChild(loading);
  current_page++;
  getRequest(searchValue, current_page);
});

export function hideNextButton(totalHits) {
  console.log(totalHits);
  console.log(current_page);
  let a = current_page * 200;
  console.log(a);
  if (a > totalHits) {
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
}
