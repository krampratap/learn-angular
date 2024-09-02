//Tuples
let person: [number, string, boolean] = [12, 'tuple', true]
person.concat()

//interfaces - are a way to define a certain structure, the datastructures can adhere to, i.e classes, object literals
interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {name:'mario', avatar:'/img/mario.png'}

interface Post {
    title: string,
    body: string,
    tags: string[],
    created_on: Date,
    author: Author
}

const newPost: Post = {
    title: 'First post',
    body: 'text',
    tags: ['gaming','coding'],
    created_on: new Date(),
    author: authorOne
}

//function
function createPost(post: Post){
    console.log(`Created post "${post.title}" by ${post.author.name}`)
}

createPost(newPost)

//arrays
let posts: Post[] = []
posts.push(newPost)