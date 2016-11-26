var mobx = require('mobx');
const list = mobx.observable([1, 2, 4]);


const person = mobx.observable({
    firstName: "Clive Staples",
    lastName: "Lewis"
});


mobx.autorun(function() {
    console.log(list[2]);
    console.log(person.firstName)
}); 

function test() {
	list[2] = 3;
	person.firstName = "C.S.";
}

test();