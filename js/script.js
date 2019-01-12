//data
const countries = new Array(
    { id : 1, name : "Russia" },
    { id : 2, name : "The Netherlands" },
    { id : 3, name : "Italy" },
    { id : 4, name : "Sweden" },
    { id : 5, name : "Germany" },
    { id : 6, name : "France" },
    { id : 7, name : "USA" },
    { id : 8, name : "Belgium" },
);

const cities = new Array(
    { id : 1, name : "Moscow", countryid : 1 },
    { id : 2, name : "Vladivostok", countryid : 1 },
    { id : 3, name : "Utrecht", countryid : 2 },
    { id : 4, name : "Amsterdam", countryid : 2 },
    { id : 5, name : "Groningen", countryid : 2 },
    { id : 6, name : "Leiden", countryid : 2 },
    { id : 7, name : "Rome", countryid : 3 },
    { id : 8, name : "Stockholm", countryid : 4 },
    { id : 9, name : "Berlin", countryid : 5 },
    { id : 10, name : "Frankfurt", countryid : 5 },
    { id : 11, name : "Paris", countryid : 6 },
    { id : 12, name : "Lyon", countryid : 6 },
    { id : 13, name : "Washington", countryid : 7 },
    { id : 14, name : "New York", countryid : 7 },
    { id : 15, name : "San Francisco", countryid : 7 },
    { id : 16, name : "Miami", countryid : 7 },
    { id : 17, name : "Eindhoven", countryid : 2 },
    { id : 18, name : "Maastricht", countryid : 2 },
    { id : 19, name : "Delft", countryid : 2 },
    { id : 20, name : "Rostov", countryid : 1 },
    { id : 21, name : "Smolensk", countryid : 1 },
    { id : 22, name : "IKEA", countryid : 4 },
    { id : 23, name : "Malmo", countryid : 4 },
    { id : 24, name : "Cologne", countryid : 5 },
);

const hotels = new Array(
    { id : 1, name : "hotel1", cityid : 2 },
    { id : 2, name : "hotel2", cityid : 4 },
    { id : 3, name : "hotel3", cityid : 6 },
    { id : 4, name : "hotel4", cityid : 8 },
    { id : 5, name : "hotel5", cityid : 10 },
    { id : 6, name : "hotel6", cityid : 12 },
    { id : 7, name : "hotel7", cityid : 14 },
    { id : 8, name : "hotel8", cityid : 16 },
    { id : 9, name : "hotel9", cityid : 18 },
    { id : 10, name : "hotel10", cityid : 20 },
    { id : 11, name : "hotel11", cityid : 22 },
    { id : 12, name : "hotel12", cityid : 24 }
);
const articles = new Array({ id : 1, name : "Moscow", countryid : 1 },
    { id : 1, name : "hotel1", cityid : 1 },
    { id : 2, name : "hotel2", cityid : 3 },
    { id : 3, name : "hotel3", cityid : 5 },
    { id : 4, name : "hotel4", cityid : 7 },
    { id : 5, name : "hotel5", cityid : 9 },
    { id : 6, name : "hotel6", cityid : 11 },
    { id : 7, name : "hotel7", cityid : 13 },
    { id : 8, name : "hotel8", cityid : 15 },
    { id : 9, name : "hotel9", cityid : 17 },
    { id : 10, name : "hotel10", cityid : 19 },
    { id : 11, name : "hotel11", cityid : 21 },
    { id : 12, name : "hotel12", cityid : 23 }
);

const restaurants = new Array({ id : 1, name : "Moscow", countryid : 1 },
    { id : 1, name : "hotel1", cityid : 25 },
    { id : 2, name : "hotel2", cityid : 26 },
    { id : 3, name : "hotel3", cityid : 27 },
    { id : 4, name : "hotel4", cityid : 28 },
    { id : 5, name : "hotel5", cityid : 1 },
    { id : 6, name : "hotel6", cityid : 2 },
    { id : 7, name : "hotel7", cityid : 3 },
    { id : 8, name : "hotel8", cityid : 4 },
    { id : 9, name : "hotel9", cityid : 5 },
    { id : 10, name : "hotel10", cityid : 6 },
    { id : 11, name : "hotel11", cityid : 7 },
    { id : 12, name : "hotel12", cityid : 8 }
);

//Functions

function init () {
    DisplayField1();
}

function GetAllCitiesOfCountry (countryid) {
    let output = new Array();
    cities.map(x => {
        if(x.countryid === countryid){
            output.push(x);
        } 
    });
    return output;
}

function DisplayField1 () {
    let myNode = document.getElementById("field1");
   while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
    let placeholder = document.createElement("option");
    placeholder.value = 0;
    placeholder.innerHTML = "Select country";
    document.getElementById("field1").appendChild(placeholder);
    
    countries.map(item => {
        console.log(item);
        let opt = document.createElement("option");
        opt.innerHTML = item.name;
        opt.setAttribute("value", item.id);
        document.getElementById("field1").appendChild(opt);
    });
}

function DisplayField2 () {
    let myNode = document.getElementById("field2");
    document.getElementById("lblField2").hidden = false;
    myNode.hidden = false;
   while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  let placeholder = document.createElement("option");
    placeholder.value = 0;
    placeholder.innerHTML = "Select city";
    document.getElementById("field2").appendChild(placeholder);
    let field = document.getElementById("field1");
    let selectedCountry = field.options[field.selectedIndex].value;
    cities.map(city => {
        if (city.countryid == selectedCountry){
            let opt = document.createElement("option");
        opt.innerHTML = city.name;
        opt.setAttribute("value", city.id);
        document.getElementById("field2").appendChild(opt);
        }
    });
}

function DisplayFacilities (){
    let node = document.getElementById("laststep");
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    let field = document.getElementById("field2");
    let selectedCity = field.options[field.selectedIndex].value;
    let results = new Array(
        {type: 'hotels', found : 0},
        {type: 'restaurants', found : 0},
        {type: 'articles', found : 0},
    );
    hotels.map(hotel => {
        if(hotel.cityid == selectedCity){
            results[0].found++;
        }
    });
    restaurants.map(restaurant => {
        if(restaurant.cityid == selectedCity){
            results[1].found++;
        }
    });
    articles.map(article => {
        if(article.cityid == selectedCity){
            results[2].found++;
        }
    });
    console.log(results);
    results.map(result => {
        if(result.found > 0){
            let newElement = document.createElement("button");
            newElement.setAttribute("class","btn-primary");
            newElement.innerHTML = 'Aantal ' + result.type + ' : ' + result.found ;
            node.appendChild(newElement);
        }
    });
    
}