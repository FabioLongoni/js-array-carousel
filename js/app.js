
const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

const slideElement = [];

let currentIndex = 0;

const slidesWrapper = document.querySelector('.slides-wrapper');
slidesWrapper.innerHTML = '';
console.dir(slidesWrapper);

//contenuto ul
for(let i = 0; i < slides.length; i++) {
    const srcImg = slides[i];
    
    //creare li
    const li = document.createElement('li');
    li.className = 'slide';
    
    //creare condizione in cui si manifesta la classe active
    if (i === 0) {
        li.classList.add('active');
    }

    //creare img
    const img = document.createElement('img');
    img.src = srcImg;

    //inserire immagine nell'li
    li.append(img);

    //inserire contenuto ul dentro ul
    slidesWrapper.append(li);

    //creare un secondo array
    slideElement.push(li);
}

console.log(slideElement);

//creare elemento da ascoltare -arrow-

const arrowNext = document.querySelector('.arrow-next');
console.log(arrowNext);

const arrowPrew

arrowNext.addEventListener('click', function () {
    
    //creare una classe attiva con l'indice dell'array
    const slideAttiva = slideElement[currentIndex];
    
    //rimuovere la classe attiva
    slideAttiva.classList.remove('active');
    console.log(slideAttiva);

    //passare la classe attiva alla prossima immagine
    const slideSuccessiva = slideElement[++currentIndex];
    slideSuccessiva.classList.add('active');
  
})