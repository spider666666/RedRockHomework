/* ECMAScript 脚本语言标准
 创建对象的三种方法

 1.1. 使用new操作符进行创建对象 */
let obj1 = new Object();
obj1.name = 'BBH';
console.log(obj1.name);

/* 1.2字面对象字面量的方式创建对象 */

let obj2={
    name:"BBH",
    age:25,
    greet:function(){
        console.log("你好");
    }
    
};
obj2.greet();

/* 1.3构造函数方式创建对象 */
function person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log("你好");
    }
}
let obj3=new person("xiaoming",25)
console.log(obj3.name);

console.log(obj3 instanceof person) //判断obj3是否是Person的实例

/*1.4使用工厂模式 */
function person2(name,age){
    ob={};
    obj1.name=name;
    obj1.age=age;
    return ob; 
}
obj4=person2("xiaohong",26);
console.log(obj4.name);//undefined,工厂模式无法创建实例对象
console.log(obj4 instanceof person)


/* 普通对象是用花括号 {} 创建的对象，而构造函数是用 new 操作符调用的函数，构造函数可以用来创建多个实例对象，且拥有prototype属性， */