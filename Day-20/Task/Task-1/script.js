// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
//     if (this.readyState === this.DONE) {
//         console.log(this.responseText);
//     }
// });

// xhr.open('GET', 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/');
// xhr.setRequestHeader('X-RapidAPI-Key', 'c336b72177mshd3d8d55e0026b0dp129f1bjsn3958507df195');
// xhr.setRequestHeader('X-RapidAPI-Host', 'bhagavad-gita3.p.rapidapi.com');
// xhr.send(data);

// function makeFetchRequest(url) {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json(); // or response.text(), response.blob(), etc.
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             throw error; // You can handle the error or rethrow it for the caller to handle
//         });
// }


let url = 'https://dog.ceo/api/breeds/image/random';

var image;

let data = async function go() {
    let res = await fetch(url);
    let data = res.json();
    return data;
}

async function fetchData() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP error! Status");
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

async function fetchDataStore() {
    const apiData = await fetchData();

    if (apiData !== null) {
        console.log(apiData);
    } else {
        console.error('Failed to fetch data from API');
    }


}

fetchDataStore();







