let xhr = new XMLHttpRequest();

// xhr is an object which have various properties which are onload 
xhr.open('GET', 'http://fakestoreapi.com/products', true);

xhr.onload = function(){
    if(xhr.status === 200){       // Checking if server has send proper request
        let response = JSON.parse(xhr.responseText);        // parse the JSON
        console.log(response);      //formatted Array data
        let filteredArray = [];
        for(let i = 0; i < response.length; i++){
            let element = response[i]; // element
            if(element.category === "women's clothing"){
                // console.log(element);
                // Array.push is a menthod to push data into array
                filteredArray.push(element);
            }
            console.log("index and arrray",i,filteredArray);
        }
    }else{
        console.log("Error");       //thrown the Error if server is not responding
    }
}
// send the request
xhr.send();


///     Sending the HTTP request




