//实现深拷贝
let obj3=structuredClone(obj)//调用了深拷贝的方法
obj3.action="play"
console.log(obj.action)
//注意：深拷贝的新对象是完全独立的，开辟了一块新的内存空间，递归对原对象中嵌套的对象进行赋值，因此对新对象进行修改不会影响原对象