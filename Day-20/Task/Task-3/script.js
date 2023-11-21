


// Get the image URL from the API
const url = 'https://api.imgflip.com/get_memes';


// Create an div with 'title' "id";

let div = document.createElement('div');
div.id = 'container';
document.body.appendChild(div);

// Create an h1 tag with for Text content

let title = document.createElement("h1");
title.textContent = "Random Images of Memes";
div.append(title);

let titleName = document.createElement('h3');
titleName.id = 'titleName';
div.append(titleName);

let image = document.createElement('img');
image.id = 'randomMemes';
image.alt = 'Random Images of Memes';
image.src;
div.appendChild(image);


// console.log(title, div);

// Fetch the image from the API using async/await
async function fetchImage() {
    try {
        // const randomIndex = Math.floor(Math.random() * quotes.length);
        const response = await fetch(url);
        const data = await response.json();
        const dataLength = data.data.memes.length;
        let dataMeme = data.data.memes;
        let randomNumber = Math.round(Math.random() * dataLength + 1);
        document.getElementById('titleName').textContent = dataMeme[randomNumber].name;
        document.getElementById('randomMemes').src = dataMeme[randomNumber].url;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

fetchImage();
