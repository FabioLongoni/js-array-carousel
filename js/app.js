
const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

const slidesWrapper = document.querySelector('.slides-wrapper');
slidesWrapper.innerHTML = '';
console.dir(slidesWrapper);

//contenuto ul
for(let i = 0; i < slides.length; i++) {
    const srcImg = slides[i];
    // console.log(srcImg);

    //creare li
    const li = document.createElement('li');
    li.className = 'slide';
    
    //creare img
    const img = document.createElement('img');
    img.src = srcImg;

    //inserire immagine nell'li
    li.append(img);
    console.log(li,img);
}