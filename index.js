//fot new york times thing
const baseUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json?';//api-key=yourkey'
const key = '1ImkjMiVW3f6WMAIzdTlOXD7B1fND6CH';
let url = baseUrl + 'api-key=' + key;

fetch(url).then(function(result){
    return result.json();
}).then(function(json){
    displayResults(json)
})

function displayResults(jsonRes){
    const articles = jsonRes.results;
    for(let i = 0; i < articles.length; i++){
        section = document.getElementById("nyt");
        const article = document.createElement('article');
        const heading = document.createElement('h2');
        const link = document.createElement('a');
        //const img = document.createElement('img');
        const para1 = document.createElement('p');
        //const para2 = document.createElement('p');
        const clearfix = document.createElement('div');

        let current = articles[i];
        console.log(current);
        //heading.innerHTML = current.title;
        link.href = current.url;
        link.innerHTML = current.title;
        para1.innerText = current.abstract;
        /*link.href = current.web_url;
        link.textContent = current.headline.main;
        para1.textContent = current.snippet;
        para2.textContent = 'Keywords: ';
        
        for(let j = 0; j < current.keywords.length; j++){
            const span = document.createElement("span");
            span.textContent += current.keywords[j].value + ' ';
            para2.appendChild(span);
        }//j

        if(current.multimedia.length > 0){
            img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
            img.alt = current.headline.main;
        }

        clearfix.setAttribute('class','clearfix');
        */
        article.appendChild(heading);
        heading.appendChild(link);
        //article.appendChild(img);
        article.appendChild(para1);
        //article.appendChild(para2);
        article.appendChild(clearfix);
        section.appendChild(article);
    }  //i
}//function

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

