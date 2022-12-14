import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryRef = document.querySelector('.gallery')


const markup = galleryItems.map(({ preview, original, description }) =>
 `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</div>`).join('');

galleryRef.insertAdjacentHTML('beforeend', markup);


new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionDelay: 250 });



