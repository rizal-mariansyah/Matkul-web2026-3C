const form = document.getElementById("formCari");
const Input = document.getElementById("username");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = Input.value.trim();
    console.log(username);
});