
function getPosts(){
    //make HTTP GET request
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(posts=>console.log(posts))
    .catch(err=>console.log("err in fetching data ",err))
}



//getPosts()



//get users data
function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users?username=Kamren')
    .then(response=>response.json())
    .then(users=>console.log(users))
    .catch(err=>console.log("err in fetching data",err))
}


getUsers()


console.log("hello")
console.log("good evening")