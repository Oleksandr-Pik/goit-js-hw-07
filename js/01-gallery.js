import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallary = document.querySelector('.js-gallary');
const markupGallary = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image js-gallary-target"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </li>
`
  )
  .join('');

gallary.innerHTML = markupGallary;

gallary.addEventListener('click', onClick);

function onClick(evt) {
  if (!evt.target.classList.contains('js-gallary-target')) {
    return;
  }
  evt.preventDefault();

  const instance = basicLightbox.create(
    `
  <img 
  src="${evt.target.dataset.source}" 
  width="800" 
  height="600">
  `, 
  { onShow: (instance) => {
    console.log('Modal is visible');
    document.addEventListener('keydown', onCloseModal);
  } ,
  onClose: (instance) => {
    console.log('Modal is closed');
    document.removeEventListener('keydown', onCloseModal);
  }
  }
  );

  instance.show();

  function onCloseModal (evt) {
    if (evt.code == 'Escape') {
      instance.close(); 
    }
  }
}
