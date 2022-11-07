const imagesArray = ["0.jpg", '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];

const randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];

const imageElement = document.createElement("img");
imageElement.src = `img/${randomImage}`;
// console.log(imageElement);
document.body.appendChild(imageElement);