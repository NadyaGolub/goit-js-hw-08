// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(SimpleLightbox);

console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);
const markupGalleryContainer = galleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, markupGalleryContainer);


function galleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` 
  <a class="gallery__item" href="${original}";>
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
    })
    .join(``);
}


    let gallery = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250});