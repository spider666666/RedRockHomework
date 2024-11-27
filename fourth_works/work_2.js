let arr = [1,[2,3],[4,5,[6,7,8]],9];

function flatten(arr) {//递归实现数组扁平化
    let result = [];
    for(let i = 0;i<arr.length;i++){
        if (Array.isArray(arr[i])){
            result = result.concat(flatten(arr[i]));
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}
let ret= new Array();
ret=flatten(arr);
console.log(ret);
/* //对数组进行遍历
//法一
ret.forEach(function(item,index,ret){
    console.log(item);
})
//法二
ret.map((item,index,ret)=>{console.log(item)}) */

let flattened = arr.flat(Infinity);
console.log(flattened);
