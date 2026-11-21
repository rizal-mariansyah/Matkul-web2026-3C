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

    try {
        const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);

        if (response.status === 404) {
            hasil.innerHTML = '<p class="error">user tidak ditemukan..</p>';
            return;
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        tampilkanProfil(data);
        } catch (error) {
        console.error("Error", error);
        hasil.innerHTML = '<p class="error">Koneksi eror. Anda gagal memuat data.</p>';
    }
   
}

function tampilkanProfil(data) {
    hasil.innerHTML = `
        <article class="profil">
            <img alt="Avatar" />
            <h2></h2>
            <p></p>
            <p>Jumlah Repositori: <strong></strong></p>
            <a target="_blank" rel="noopener noreferrer"></a>
        </article>
    `;
    hasil.querySelector("img").src = data.avatar_url;
    hasil.querySelector("h2").textContent = data.name || data.login;
    hasil.querySelector("p").textContent = data.bio || "Tidak ada bio.";
    hasil.querySelector("strong").textContent = data.public_repos;
    hasil.querySelector("a").href = data.html_url;
    hasil.querySelector("a").textContent = "Lihat Profil GitHub";
    }