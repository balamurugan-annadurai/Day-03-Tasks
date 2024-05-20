function reqListener() {
    let countryObjs=JSON.parse(this.responseText);
    for(let countryobj of countryObjs){
        console.log("Name:",countryobj.name.common);
        console.log("Region:",countryobj.region);
        console.log("Sub-region:",countryobj.subregion);
        console.log("Population:",countryobj.population);
        console.log("\n");
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  