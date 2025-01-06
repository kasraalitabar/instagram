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
                    <div class="comment">
                        ${comment.body}
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
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <button onclick="handleShowComments(${post.id})">show comments</button>
            </div>
        `
    }).join("");

    document.body.innerHTML = template
}