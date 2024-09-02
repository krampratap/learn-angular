//Typescript is a language built on top of javascript with additional features like adding type.. strongly typed
//Below is js code and the variables are loosely typed.. meaning you dont have to define the type of the variable
//and once you assign a value to the variable, the type is inferred and you cannot assign a different type of value to the same variable
let names = 'shaun'
//names = 1 will give error
//So defining types will help in 
// 1. Better error feedback

function reverse(str: string){
    return str.split('').reverse().join('')
}

const result = reverse('hello')

// 2. Better auto completion and code hints

const reversed = reverse('ninja')
//when you use reversed variable it will give string methods as suggestion

// 3. custom types - interfaces, classes and type alias 

interface MenuItem {
    title: string,
    cost: number
}

function printMenu(item: MenuItem){
    console.log("Title",item.title,"Cost",item.cost)
}

//error example 1
//printMenu()

//error example 2
//printMenu({item: "Tea", cost:'10'})

//error example 3
//printMenu({name: "Tea", cost:10})

//working example 4
printMenu({title: 'Tea', cost:10})

// 4. self documenting
//printMenu()
console.log("Watch working")
