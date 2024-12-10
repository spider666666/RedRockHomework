//实现浅拷贝
let obj={ action:"study"}
let obj2={}
Object.assign(obj2,obj)
console.log(obj2)
obj2.name= "TOM"
console.log(obj.name)//undefined,说明对浅拷贝得到的对象进行添加新的属性，并没有改变原对象的属性
//注意：如果使用的浅拷贝，修改的是引用类型的属性，那么会影响原对象，但是如果是基本数据类型的属性，那么原对象不会受到影响
//因此，浅拷贝对原对象的影响取决于原对象的属性类型



