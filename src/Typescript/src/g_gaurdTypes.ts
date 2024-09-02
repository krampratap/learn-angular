type Id = number | string
function swapIdType (id : Id){
    if(typeof id === 'string'){
        //you can use string methods
        return parseInt(id)
    }
    else{
        //can use number functions
        return id.toString()
    }
}

const idOne = swapIdType(1)
const idTwo = swapIdType('2')

//Tagged interfaces
interface User{
    type: 'user'
    username: string,
    email: string,
    id: Id
}

interface Person {
    type: 'person'
    firstName: string
    age: number,
    id: Id
}

function logDetails(value: User | Person): void{
    //We cannot use type of to check interface types
    //we have to use tagged interfaces
    if(value.type==='user'){
        console.log(value.email) //only user related fields will be visible
    }
    else{
        console.log(value.firstName) //only user related fields will be visible
    }
}
