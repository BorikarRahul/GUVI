# Getting Images Of Memes With Title

## Using Api DOM and JS

```javascript
async function fetchImage() {
  try {
    // const randomIndex = Math.floor(Math.random() * quotes.length);
    const response = await fetch(url);
    const data = await response.json();
    const dataLength = data.data.memes.length;
    let dataMeme = data.data.memes;
    let randomNumber = Math.round(Math.random() * dataLength + 1);
    document.getElementById("titleName").textContent =
      dataMeme[randomNumber].name;
    document.getElementById("randomMemes").src = dataMeme[randomNumber].url;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}
```
