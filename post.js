function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer = document.getElementById('post-container')
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        console.log(post);
        div.innerHTML = `
        <h4>user-${post.userId}</h4>
        <h5>post: ${post.title}</h5>
        <p>post description: ${post.body}</p>
        `;
        postContainer.appendChild(div)
    }
}

loadpost();