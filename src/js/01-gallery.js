// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);



const galleryRef = document.querySelector(".gallery"); // выбираем елемент галереи
galleryRef.innerHTML = createMarkup(galleryItems); // созданиу html разметки  которая принимает массив объектов galleryItems и возвращает строку с HTML-разметкой для каждого изображения в массиве.

function createMarkup(items) {
  return items
    .map((e) => {
      //перебирает массив, генерируя HTML-строку для каждого объекта.
      return `<div><a class="gallery__item" href="${e.original}">  
  <img class="gallery__image" src="${e.preview}" alt="${e.description}"/>
</a></div>`;
    })
    .join(""); // обеденяеться в одну строку
}

let gallery = new SimpleLightbox(".gallery a", { //создаем екземпляр библиотеки SimpleLightbox
  //селектор для ссылок галереи (".gallery a")
  captionsData: "alt", //объект с параметрами , подпись
  captionDelay: 200, // дилей для появления подписи
});
gallery.on("show.simplelightbox"); //прослушивание слбытия, которое срабатывает при отображении изображения в галерее
