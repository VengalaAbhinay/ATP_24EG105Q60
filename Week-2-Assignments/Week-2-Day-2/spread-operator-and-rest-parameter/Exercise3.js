const findSum=(...a)=>{
    return a.reduce((accumulator,element)=>accumulator+element)
}
result=findSum(10,20,30,40,50)
console.log(result)