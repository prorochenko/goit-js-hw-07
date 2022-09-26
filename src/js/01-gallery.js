import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//получаем ссылку на галерею
const gallery = document.querySelector('.gallery');

//делаем массив разметки галерии
function addGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join(``);
}

//добавляем массив в HTML
gallery.insertAdjacentHTML('afterbegin', addGalleryItems(galleryItems));

// создаем модалку

gallery.addEventListener(`click`, handleClock);

//переменная для того, чтобы была в глобале
let currentTarget = null;

function handleClock(event) {
  //чтобы не срабатывало, когда нажимаем на пустое место между картинками
  if (event.target === event.currentTarget) {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      //слушатель клавиатуры, чтобы только слушало когда модалка открыта
      onShow: () => window.addEventListener(`keydown`, escapeClose),
      // убираем когда закрываем модалку
      onclose: () => window.removeEventListener(`keydown`, escapeClose),
    }
  );

  currentTarget = instance;

  instance.show();
}

//закрыть модалку с помощью Esc
function escapeClose(event) {
  if (event.code === 'Escape') {
    currentTarget.close();
  }
}
