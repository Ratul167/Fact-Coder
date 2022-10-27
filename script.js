// Code credits goes to Ratul167


  async function getapi(){
    const url ="https://zenquotes.io/api/random";
    const response = await fetch(url);
    let  data = await response.json();
    var quoteText =data[0]["q"]
    var authorName =data[0]["a"]
    console.log(quoteText)
    document.getElementById("op").innerHTML = quoteText;
    document.getElementById("name").innerHTML = authorName;
    
  }

