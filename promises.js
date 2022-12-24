const posts = [
    {title:'Post One', body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two', body:'This is Post two', createdAt:new Date().getTime()}
];
let intervalId = 0;

function getPost() {
    setTimeout(() => {
        clearInterval(intervalId);
        intervalid = setInterval(() => {
            let output = '';
            posts.forEach((post) => {
                output += `<li>${post.title} Updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`
            });
            document.body.innerHTML = output;
        },1000);
       
    },1000)
}


function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push({...post,createdAt:new Date().getTime()});
            let error = false;

            if(!error) {
                resolve();
            }
            else{
                reject('Something went wrong');
            }
         },1000)
    });
   
}

function deletePost() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(posts.length > 0){
                resolve(posts.pop());
            }
            else{
                reject('Array is Empty Now');
            }
        },1000)
        
    });
}



// createPost({title:'Post Three', body:'This is post three'})
// .then(() => {
//     getPost();
//     deletePost().then(() => {
//         getPost();
//         deletePost().then(() => {
//             getPost()
//             deletePost().then(() => {
//                 getPost()
//                 deletePost()
//             }).catch(err => console.log(err))
//         })
//     })
// })

createPost({title:'Post Three', body:'This is post three'})
 .then(() => {
    getPost()
    deletePost(                         )
 })



// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve,2000, 'GoodBye')
// });

// const updateLastUserActivity = 

// Promise.all([promise1,promise2,promise3]).then((values) => console.log(values));
