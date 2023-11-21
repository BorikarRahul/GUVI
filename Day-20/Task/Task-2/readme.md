# Quotes and Author

## Lucifer Quotes and Authors Names

```javascript
async function fetchQuotes() {
  try {
    const response = await fetch(url);
    const link = await response.json();
    // console.log(link);
    // console.log(link[0].author);
    document.getElementById("quote").textContent = link[0].quote;
    document.getElementById("author").textContent =
      "Author :- " + link[0].author;
  } catch (e) {
    console.error("Error fetching Quotes", e);
  }
}
```
