document.getElementById('save').addEventListener('click', () => {
    // var settings = {
    //     "url": "http://localhost:3000/compose",
    //     "method": "POST",
    //     "headers": {
    //         "Content-Type": "application/json",
    //         "dataType": 'jsonp'
    //     },
    //     "data": "{'title':'" + document.getElementById('title').value + "','body':'" + document.getElementById('body').value + "'}"
    // };
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    var settings = {
        "async": true,
        "url": "http://localhost:3000/compose/",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
        },
        "data": "{\"title\":\"" + title + " \",\"body\":\"" + body + "\"}"
    }
    $.ajax(settings).done(function (response) {
        if (response.status == "Ok") {
            alert("Post Added Successfully");
        }
    }).fail(function (data) {
        if (data.status != 201) {
            alert("Something went wrong, Please try again later");
        }
    });
});