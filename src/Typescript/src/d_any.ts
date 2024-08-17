//useful for migrating from js to ts as it wont cause any errors
function addTogether(value: any){
    return value+value
}

console.log(addTogether(3))
console.log(addTogether('hello'))