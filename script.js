// Code credits goes to Ratul167



  async function getapi(){

    let manyurl=['https://some-random-api.ml/facts/bird','https://some-random-api.ml/facts/bird','https://some-random-api.ml/facts/dog','https://some-random-api.ml/facts/fox','https://some-random-api.ml/facts/panda']





    var opurl= manyurl[Math.floor(Math.random() * manyurl.length)];
    console.log(opurl)
    const response = await fetch(opurl);
    let  data = await response.json();
    var quoteText =data["fact"]
    // var authorName =data[0]["author"]
    console.log(quoteText)
    document.getElementById("op").innerHTML = quoteText;
    // document.getElementById("name").innerHTML = authorName;
    
  }

