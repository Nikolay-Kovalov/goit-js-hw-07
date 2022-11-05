import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) =>
 `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image description"
    />
  </a>
</div>`).join('');

galleryRef.insertAdjacentHTML('beforeend', markup);

galleryRef.addEventListener('click', showBigImage);

function showBigImage(evt) {
  evt.preventDefault();
  const instance = basicLightbox.create(
    `<img
      class="gallery__image"
      src="${evt.target.dataset.source}" 
      alt="Image description"
    />`);
  instance.show()

  document.addEventListener('keydown', (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    };
  });
}





