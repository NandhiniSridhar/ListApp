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