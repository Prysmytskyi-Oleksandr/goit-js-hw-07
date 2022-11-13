import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const makeGalleryItems = (items) => {
    return items.map(({ preview, original, description }) => {
        return ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" loading="lazy" src="${preview}" alt="${description}" />
</a>`;
    })
        .join("");
} 

galleryEl.insertAdjacentHTML("beforeend", makeGalleryItems(galleryItems));
console.log(galleryItems);


const onClickImage = (event) => {
event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(event.target);

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
        scrollZoom: false,
    });
}

galleryEl.addEventListener('click', onClickImage);


