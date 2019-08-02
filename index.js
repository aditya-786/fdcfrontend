const allposts = document.getElementById('allPosts');

function showData(doc) {
    const heading = document.createElement('h1');
    const body = document.createElement('p');

    heading.className = doc.id;
    body.className = doc.id;

    heading.innerHTML = doc.title;
    body.innerHTML = doc.body;

    allposts.appendChild(heading);
    allposts.appendChild(body);

}

var settings = {
    "url": "https://jsonplaceholder.typicode.com/posts",
    "method": "GET",
    "headers": {
        "Content-Type": "application/json",
    },
}

$.ajax(settings).done(function (response) {
    // response.forEach(doc => {
    //     showData(doc)
    // });
    for (var i = 0; i < 100; i++) {
        showData(response[i]);
    }
});