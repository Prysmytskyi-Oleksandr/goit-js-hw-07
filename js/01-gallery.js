import { galleryItems } from "./gallery-items.js";


const galleryEl = document.querySelector('.gallery');


const makeGalleryItems = (items) => {
  
    return items
        .map(({ preview, original, description }) => {
           return   `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      loading = "lazy"
      class="gallery__image lazyload"
      data-src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;  })
        .join("");}
galleryEl.insertAdjacentHTML("beforeend", makeGalleryItems(galleryItems));


const onClick = (event) => {  
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')
  ) { return; }
  // if (event.target.nodeName !== 'IMG') { return; }
  console.log(event.target.dataset.source);
 
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" >`)
instance.show()
  }
galleryEl.addEventListener('click', onClick);



// lazysizez

if ('loading' in HTMLImageElement.prototype) {
  console.log('Підтримує loading');
  // const lazyimgs = document.querySelectorAll('img[loading = "lazy"]');
  // lazyimgs.forEach(img => {
  //   img.src = img.dataset.src;
  // }); 
}
else{
  console.log('Не підтримує loading');
  const script = document.createElement('script');
   script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
   script.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
   script.crossorigin = "anonymous";
  
  document.body.appendChild(script);

}


