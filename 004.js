const ad =document.getElementById("page")
const hie = document.getElementById("close")
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(json => renderPosts(json))
.catch(error => console.log(error))

function handleShowComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`)
        .then(res => res.json())
        .then(json => {
            const template = json.map(comment => {
                return `    
                    <div id="page" class="page">
                        <div class="pageContent">
                            
                            <div class="comment">
                                ${comment.body}
                            </div>
                        </div>
                    </div>
                        
                    `
            }).join("");
            
            document.getElementById(`${postId}`).innerHTML += template
        })
        .catch(error => console.log(error))
}
function renderPosts(posts) {
    const template = posts.map(post => {
        return `
            <div id="${post.id}" class="post">
                <h1 class="reel">REELS</h1>
                <h2>${post.title}</h2>
                <div class="img"></div>
                <p class="des">${post.body}</p>
                <input class="follow" onclick="change()" type="button" value="follow" id="myButton1"></input>
                <svg onclick="handleShowComments(${post.id})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="comment">
                <path fill="#231F20" d="M25.784 21.017A10.992 10.992 0 0 0 27 16c0-6.065-4.935-11-11-11S5 9.935 5 16s4.935 11 11 11c1.742 0 3.468-.419 5.018-1.215l4.74 1.185a.996.996 0 0 0 .949-.263 1 1 0 0 0 .263-.95l-1.186-4.74zm-2.033.11.874 3.498-3.498-.875a1.006 1.006 0 0 0-.731.098A8.99 8.99 0 0 1 16 25c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9a8.997 8.997 0 0 1-1.151 4.395.995.995 0 0 0-.098.732z"></path>
                <button onclick="handleShowComments(${post.id})">show comments</button></svg>
                <span id="close" onclick="close()"></span>
            </div>
        `
    }).join("");
    
    document.body.innerHTML = template
}
function change() 
{
    let elem = document.getElementById("myButton1");
    if (elem.value=="following") elem.value = "follow";
    else elem.value = "following";
}

