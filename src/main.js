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

let current_page;
let currentSearchQuery;

export function scrollByImg() {
  const galleryItem = document.querySelector('.gallery');
  let sizeGallery = galleryItem.getBoundingClientRect();
  if (sizeGallery.height > 0) {
    let heightGallery = sizeGallery.height * 2;
    window.scrollBy({
      top: heightGallery,
      behavior: 'smooth',
    });
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
  gallery.innerHTML = null;
  current_page = 1;
  loading.classList.add('loader');
  let searchValue = event.target.elements.search.value.trim();
  currentSearchQuery = searchValue;

  if (searchValue === '') {
    return;
  } else {
    getRequest(searchValue, current_page);
  }
  form.reset();
});

nextPage.addEventListener('click', event => {
  loading.classList.add('loader');
  boxLoad.appendChild(loading);
  current_page++;
  getRequest(currentSearchQuery, current_page);
});
