


// Get the image URL from the API
const url = 'https://dog.ceo/api/breeds/image/random';


// Create an div with 'title' "id";

let div = document.createElement('div');
div.id = 'container';
document.body.appendChild(div);

// Create an h1 tag with for Text content

let title = document.createElement("h1");
title.textContent = "Random Images of DOG";
div.append(title);

let image = document.createElement('img');
image.id = 'randomImage';
image.alt = 'Random Images of DOG';
image.src;
div.appendChild(image);


console.log(title, div);

// Fetch the image from the API using async/await
async function fetchImage() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        document.getElementById('randomImage').src = data.message;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

fetchImage();
