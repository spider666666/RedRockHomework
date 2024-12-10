const person = {
    name: '佐科姐姐',
    age: 1000000,
    address: {
      city: 'ChongQing',
      area: 'NanShan'
    },
    title: ['student',{year:2022, title:'GoodStudent'}]
  }
const {name}=person;
console.log(name);
const {title:[stu,{year1,title:title2}]}=person;
const {age:year}=person;
console.log(year)
const {address:{city,area}} = person;
console.log(city);
console.log(area);
console.log(stu);
console.log(title2);
