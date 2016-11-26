var mobx = require('mobx');

const { observable, observe }  = mobx;

const person = observable({
    firstName: "Maarten",
    lastName: "Luther"
});

const disposer = observe(person, (change) => {
    console.log(change.type, change.name, "from", change.oldValue, "to", change.object[change.name]);
});

person.firstName =  "Martin";
// Prints: 'update firstName from Maarten to Martin'

//	注销监听的意思
disposer();
// Ignore any future updates

// observe a single field
const disposer2 = observe(person, "lastName", (newValue, oldValue) => {
    console.log("LastName changed to ", newValue);
});