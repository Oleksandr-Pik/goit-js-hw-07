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
      class="gallery__image" 
      src="${preview}" 
      alt="${description}"
      title="${description}"
      />
   </a>
</li>
`
  )
  .join('');

gallary.innerHTML = markupGallary;

gallary.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  
  let lightbox  = new SimpleLightbox('.gallery a');

}


