const people = [{
  name: 'Alex',
  age: 27,
}, {
  name: 'Bob',
  age: 35,
}, {
  name: 'Carl',
  age: 17,
}, {
  name: 'Dave',
  age: 20,
}, {
  name: 'Emily',
  age: 22,
}, {
  name: 'Fred',
  age: 19,
}];

const greet = (people, minAge)=>{
  const sortByAge = people.sort((a,b)=> a.age-b.age);
  const filteredByAge = sortByAge.filter(person => person.age>= minAge);
  const filteredNames = filteredByAge.map(person => person.name);
  const joined = formatNames(filteredNames);

  return `Hello ${joined}!`
}

const formatNames = (arr)=>{
  if(arr.length === 0){
    return ''
  }
  else if(arr.length === 1){
    return arr[0]
  }
  else if(arr.length === 2){
    return arr.join(' and ')
  }
  else if(arr.length > 2){
    return arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1);
  }
}
console.log(greet(people, 36));
