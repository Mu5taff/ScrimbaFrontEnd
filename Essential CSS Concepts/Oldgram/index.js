const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderposts(arr) {
    const mainEl = document.getElementById("main-element");
    let domContent = "";
    for(let i = 0; i < posts.length; i++){
         domContent += 
    `<section>
            <div class="container side-padding">
                <div class="post-header">
                    <img class="avatar" src="${arr[i].avatar}" alt=${arr[i].name} avatar">
                    <div>
                        <h2 class="avatar-name">${arr[i].name}</h2>
                        <p class="avatar-location">${arr[i].location}</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <img src="${arr[i].post}" alt="${arr[i].name} post">
            </div>
            <div class="container side-padding">
                <img class="oldgram-icons" src="images/icon-heart.png" alt="heart icon">
                <img class="oldgram-icons" src="images/icon-comment.png" alt="comment icon">
                <img class="oldgram-icons" src="images/icon-dm.png" alt="dm icon">
                <h2>${arr[i].likes} likes</h2>
                <div class="comment-section">
                    <h2>${arr[i].username}</h2> 
                    <p>${arr[i].comment}</p>
                </div>
            </div>
        </section>`
    }
    mainEl.innerHTML = domContent;
}

renderposts(posts)
