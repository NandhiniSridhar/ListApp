//fot new york times thing
const baseUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json?';//api-key=yourkey'
const key = '1ImkjMiVW3f6WMAIzdTlOXD7B1fND6CH';
let url = baseUrl + 'api-key=' + key;

fetch(url).then(function(result){
    return result.json();
}).then(function(json){
    displayResults(json)
})

function displayResults(){
    const articles = json.response.docs;
      
}

function displayMessage(){
    //alert("hello!");
    console.log("entered function");
    let listItem = document.createElement("li");
    let listItemText = (document.getElementById("inputText")).value;
    //alert("hello");
    console.log(listItemText);
    listItem.innerHTML = listItemText;
    document.getElementById("list").appendChild(listItem);
    //alert(listItemText);
    //listItem.innerHTML
}

