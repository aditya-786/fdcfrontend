const showData = document.getElementById('allPosts');
const save = document.getElementById('save');

const createElement = (doc) => {
    const outerDiv = document.createElement('div');
    const title = document.createElement('h1');
    const body = document.createElement('p');

    outerDiv.className = doc.id;

    title.innerHTML = doc.title;
    body.innerHTML = doc.body.substring(0, 100) + ` ...<a href="readmore.html?id=${doc.id}">Read More</a>`;

    outerDiv.appendChild(title);
    outerDiv.appendChild(body);
    showData.appendChild(outerDiv);
};

var settings = {
    "url": "http://localhost:3000/posts",
    "method": "GET",
    "headers": {
        "Content-Type": "application/json",
    },
};
$.ajax(settings).done(function (docs) {
    console.log(docs);
    docs.forEach(doc => {
        createElement(doc);
    });
}).fail(function (data) {
    if (data.status == 400) {
        showData.innerHTML = "We Can't Connect to server right now, Try to refresh page";
    }
});