//Functions
function addTwoNumbers(a:number, b:number): number{
    return a+b
}

const subtractNumber = (a:number,b:number): number => a-b

const res = addTwoNumbers(2,3)
const res1 = subtractNumber(2,3)
console.log(res)
console.log(res1)

function addAllNumbers(arr: number[]){
    const total= arr.reduce((a,b)=> a+b,0)
    console.log(total)
}
const nums:number[] = [1,2,34]
addAllNumbers(nums)