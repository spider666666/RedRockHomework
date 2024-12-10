let a=[1,[2,[3,4]]];
let ret = (a) =>{
    return a.reduce((pre,cur)=>{
        console.log((pre,cur))
        if(Array.isArray(cur)){
            return [...pre,...ret(cur)]
        }
        else{
            return [...pre,cur]
        }
        
    },[])
}
console.log(ret(a))