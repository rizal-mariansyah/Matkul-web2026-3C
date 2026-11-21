// ambil elemen dari html
const form = document.getElementById("formCari");
const input = document.getElementById("username");
const hasil = document.getElementById("hasil");


// saat form di submit
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = input.value.trim();
    console.log(username);
    cariUser(username);
});




async function cariUser(username) {
    hasil.innerHTML = '<p class="loading">Memuat data..</p>';
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(response.status);
}