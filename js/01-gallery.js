import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(
            ({ preview, original, description }) => {
            return `
            <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                 <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
        `;       
        })
        .join('');
}

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick (event) {
    event.preventDefault();
    if(!event.target.classList.contains('.gallery__image')) {
        return;
    }
}



// console.log(galleryItems);
