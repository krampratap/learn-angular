// One way to make custom types is interfaces
//Also another way is type alias    

//example 1: tuple
type Rgb = [number, number, number]

function getColor() : Rgb {
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    return [r, g, b]
}

const ColorOne = getColor()
const ColorTwo = getColor()

console.log(ColorOne, ColorTwo)

//example 2 : object literal
type Users = {
    name: string
    score: number
}

const userOne : Users = {name: 'Player one',score:54}

function formatUser(u: Users){
    console.log(`${u.name} has a score of ${u.score}`)
}

formatUser(userOne)
formatUser({name: 'Player Two', score: 24})