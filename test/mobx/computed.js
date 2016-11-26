var mobx = require('mobx');

const { observable, computed }  = mobx;

// const orderLine = observable({
//     price: 0,
//     amount: 1,
//     get total() {
//     	const newData = this.price * this.amount
//     	console.log(newData);
//         return newData
//     }
// });

// orderLine.price = 2;


var name = observable("John");

var upperCaseName = computed(() =>
    name.get().toUpperCase()
);

var disposer = upperCaseName.observe(name => console.log(name));

name.set("Dave");
// prints: 'DAVE'