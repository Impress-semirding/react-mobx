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

const isHas = customers.some((customer) => customer.id > 1 );
console.log(isHas);