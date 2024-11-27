var a = {n:1}/*声明并创建一个对象a*/ 
var b = a/*将对象a的引用赋值给变量b,此时b和a指向同一个对象*/ 
a.x = a = {n:2}//将对象a的引用重新赋值为另一个对象,此时a和b指向不同的对象,先执行a.x={n:2},然后b中的值被修改成新的内容,最后执行a={n:2}，将a指向新的对象

console.log(a)
console.log(b)
a.n = 3//修改a的属性n的值，无法改变b的值
console.log(a)
console.log(b)
