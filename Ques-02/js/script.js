function reqListener() {
    let conObjs=JSON.parse(this.responseText);
    for(let countryObj of conObjs){
        console.log(countryObj.name.common);
        console.log(countryObj.flags.png);
        console.log("\n");
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
