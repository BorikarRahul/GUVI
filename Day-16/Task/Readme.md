# Callback Hell

## Create a new HTML file with script tag to execute the callback function

### Callback Hell, also known as the "pyramid of doom", refers to the situatuion where multiple nested callbacks are used, leading to complex and hard to read code. to print number from 10 to 1 using callback function in JavaScript, Here is a simple example of Callback Hell.

### This Example print the output in console

```javascript
function printNumbers(num, callback) {
  setTimeout(() => {
    console.log(num);
    callback();
  }, 1000);
}

printNumbers(10, function () {
  printNumbers(9, function () {
    printNumbers(8, function () {
      printNumbers(7, function () {
        printNumbers(6, function () {
          printNumbers(5, function () {
            printNumbers(4, function () {
              printNumbers(3, function () {
                printNumbers(2, function () {
                  printNumbers(1, function () {
                    let print = document.createElement("h2");
                    let body = document.querySelector("body");
                    print.innerText = "Happy Independence Day";
                    body.append(print);
                    console.log("Happy Independence Day");
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
```
