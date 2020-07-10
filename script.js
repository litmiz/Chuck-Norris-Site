// Create Menu
fetch('https://api.chucknorris.io/jokes/categories').then(response =>
response.json().then(data => {
    data.forEach(category => {
        document.getElementById("menuArea").innerHTML += `
        <li><a onclick="jokesByCategory('${category}')">${category}</a> | </li>
        `
    });
}));

function jokesByCategory(category) {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then(response =>
    response.json().then(data => {
        document.getElementById("jokeArea").innerHTML = `
        <p>${data.value}</p>
        `
    }));
}

function search() {
    const searchText = document.getElementById("searchArea").value;
    if (searchText.length >= 3) {
        fetch(`https://api.chucknorris.io/jokes/search?query=${searchText}`).then(response =>
        response.json().then(data => {
            document.getElementById("jokeArea").innerHTML = ``
            data.result.forEach(element => {
                document.getElementById("jokeArea").innerHTML += `
                <p>${element.value}</p>
                <br>
                `
            });
        }))
    }
}