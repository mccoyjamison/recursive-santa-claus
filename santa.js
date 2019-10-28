function deliverPresents(houses) {
  if(houses.length === 0) return  
  var first = houses[0];
  var rest = houses.slice(1, houses.length)
  console.log('Delivering presents to ' + first)
  deliverPresents(rest)
}
//var houses = ['Rich', 'Peggy', 'David', 'Kevin', 'Will', 'Andrew', 'Christina']
module.exports = deliverPresents
