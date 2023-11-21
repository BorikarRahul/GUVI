// Get the image URL from the API
const url = 'https://lucifer-quotes.vercel.app/api/quotes';


// Create an div with 'title' "id";

let div = document.createElement('div');
div.id = 'container';
document.body.appendChild(div);

// Create an h1 tag with for Text content

let image = document.createElement('img');
image.id = 'image';
image.alt = 'Quotes of Lucifer';
image.src = './images/banner.png';
div.appendChild(image);

let title = document.createElement("p");
let author = document.createElement('h4');

title.id = 'quote';
author.id = 'author';

div.append(author);
div.append(title);




async function fetchQuotes() {
    try {
        const response = await fetch(url);
        const link = await response.json();
        // console.log(link);
        // console.log(link[0].author);
        document.getElementById('quote').textContent = link[0].quote;
        document.getElementById('author').textContent = 'Author :- ' + link[0].author;
    } catch (e) {
        console.error('Error fetching Quotes', e);
    }
}

fetchQuotes();



// console.log(title, div);

