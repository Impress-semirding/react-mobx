var mobx = require('mobx');

const { observable, computed }  = mobx;

const cityName = observable("Vienna");

console.log(cityName.get());
// prints 'Vienna'

cityName.observe(function(newCity, oldCity) {
    console.log(oldCity, "->", newCity);
});

cityName.set("Amsterdam");
// prints 'Vienna -> Amsterdam'