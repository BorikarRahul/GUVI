# Random Images of Dog

```javascript
async function fetchImage() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    document.getElementById("randomImage").src = data.message;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}
```
