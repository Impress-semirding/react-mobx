const customers = [
{
  id: 1,
  name: 'dingxue',
},
{
  id: 2,
  name: 'xiaoniu',
}
];

const isHas = customers.every((customer) => customer.id > 0 );
console.log(isHas);