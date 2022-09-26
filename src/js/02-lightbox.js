import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//получаем ссылку на галерею
const gallery = document.querySelector('.gallery');

//делаем массив разметки галерии
const markup = galleryItems
  //масив
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>`;
  })
  //рядок
  .join(``);

//добавляем массив в HTML
gallery.insertAdjacentHTML('afterbegin', markup);

//добавляем SimpleLightbox
new SimpleLightbox('.gallery__link', { captionsData: 'alt', captionDelay: 250 });
