//arrays
let nas:  string[] = ['maroi','hamilton']
let ages: number[] =[12,34]
ages.push(12)

//type inferences with arrrays
let fruits = ['apples','mangoes','watermelon']
fruits.push('peaches')

const fruit =fruits[3] //infering

let things = [1,true,'hello'] //union of types
const thing= things[0] //t type can be any one of the type 
//object literals
//have specific structure
let user: {
    firstName: string,
    age: number,
    id:number
} = {
    firstName: 'Captain',
    age: 10,
    id: 1
}

user.firstName = 'Tony'

//type inference with object literals

let persion : {
    name: 'Raj',
    score: 35
}