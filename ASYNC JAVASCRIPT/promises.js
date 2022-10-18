const posts = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        for (let i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title}</li>`;
        }
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Somehting went wrong!');
            }
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop());
            } else {
                reject('Array is empty now');
            }
        }, 1000);
    });
}

createPost({ title: 'Post three', body: 'This is post three' })
    .then(() => {
        getPosts();
        deletePost().then(() => {
            getPosts();
            deletePost().then(() => {
                getPosts();
                deletePost().then(() => {
                    getPosts();
                    deletePost().then(() => {})
                    .catch(err => {
                        createPost({ title: 'Post four', body: 'This is post four' }).then(() => {
                            getPosts();
                            deletePost().then(() => {
                                getPosts();
                            }).catch(err => console.log(err))
                        })
                    })
                })
            })
        })
    }).catch(err => console.log(err))

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) =>
setTimeout(resolve,2000,'GoodBye'));

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

const user = {
    username: 'Chhavi',
    lastActivityTime: '16th of oct'
}

function updateLastActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date().getTime();
            resolve(user.lastActivityTime);
        },1000);
    });
}

function userUpdatesPost() {
    Promise.all([createPost({ title: 'Post five', body: 'This is post five' }), updateLastActivityTime()])
    .then(([createpost, updtLasstactTime]) => {
        console.log(createpost, updtLasstactTime)
    })
    .catch(err => console.log(err))
}
userUpdatesPost();


// // Async / Await
// async function init() {
//     await createPost({ title: 'Post three', body: 'This is post three' });

//     getPosts();
// }
// init();

// async function getColdrinks() {
//     const getCD = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var husbandGetButter = true;
//             if(husbandGetButter === true)
//             {
//                 resolve('bring Coldrinks');
//             } else {
//                 reject('sorry, no CD!');
//             }
//         },2000);
//     })
//     console.log(getCD);
// }
// getColdrinks();

// async function doingAssignment() {
//     try{
//         getPosts();
//         await deletePost();
//         getPosts();
//         await deletePost();
//         getPosts();
//         await deletePost();
//         getPosts();
//         await deletePost();
//     }catch (err) {
//         console.log(err)
//     }
// }

// doingAssignment();