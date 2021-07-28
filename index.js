//fot new york times api request
const nytBaseUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json?';//api-key=yourkey'
const nytKey = '1ImkjMiVW3f6WMAIzdTlOXD7B1fND6CH';
let nytUrl = nytBaseUrl + 'api-key=' + nytKey;

fetch(nytUrl).then(function(result){
    return result.json();
}).then(function(json){
    displayNytResults(json);
}).catch(function(err){
    console.log("Cannot display NYT articles at this time");
})

function displayNytResults(jsonRes){
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
        //console.log(current);
        //heading.innerHTML = current.title;
        link.href = current.url;
        link.innerHTML = current.title;
        para1.innerText = current.abstract;
       
        article.appendChild(heading);
        heading.appendChild(link);
        //article.appendChild(img);
        article.appendChild(para1);
        //article.appendChild(para2);
        article.appendChild(clearfix);
        section.appendChild(article);
    }  //i
    return;
}//function

//for quote of the day

const qotdBaseUrl = "https://quotes.rest/qod?category=inspire&language=en";

fetch(qotdBaseUrl).then(function(result){
    return result.json();
}).then(function(jsonRes){
    displayQotdResuls(jsonRes);
})/*.catch(function(err){
    console.log("Cannot display quote of the day at this time");
})*/

function displayQotdResuls(jsonRes){
    console.log("inside qotd display");
    //const curQuote = jsonRes.quote;
    //console.log(JSON.stringify(jsonRes));
    cur = jsonRes.contents;
    //console.log(cur.quotes[0].quote);
    //console.log(JSON.stringify(curquotetext));
    section = document.getElementById('qotd');
    quote = document.createElement('h3');
    author = document.createElement('p');


    quote.innerHTML = "\'" + cur.quotes[0].quote + "\'";
    console.log(quote.innerHTML);
    author.innerHTML = "- " + cur.quotes[0].author;
    console.log(author)

    section.appendChild(quote);
    section.appendChild(author);
    return;
}

//for to do list
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

