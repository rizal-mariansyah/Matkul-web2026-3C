<script setup>
import { ref } from "vue";

const searchQuery = ref("");
const selectedKategori = ref("");
const sudahDIbaca = ref(false);
const daftarBuku = ref([
  {
    id: 1,
    judul: "Laskar Pelangi",
    kategori: "Novel",
    dibaca: true,
  },
  {
    id: 2,
    judul: "Naruto",
    kategori: "komik",
    dibaca: true,
  },
  {
    id: 3,
    judul: "Soekarno",
    kategori: "Biografi",
    dibaca: true,
  },
]);
</script>

<template>
  <div class="container">
    <h1>Koleksi Buku Pribadi</h1>

    <input type="text" placeholder="Cari judul buku..." v-model="searchQuery" />

    <div class="filter">
      <select v-model="selectedKategori">
        <option value="">Kategori</option>
        <option value="komik">komik</option>
        <option value="Novel">Novel</option>
        <option value="Biografi">Biografi</option>
      </select>

      <input type="checkbox" v-model="sudahDIbaca" />
      <label>selesai dibaca</label>
    </div>
    <div class="daftar-buku">

  <h2>Daftar Buku:</h2>

  <div v-for="buku in daftarBuku" :key="buku.id">
    <h3>{{ buku.judul }}</h3>
    <p>Kategori: {{ buku.kategori }}</p>
  </div>

</div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

}

h1 {
  text-align: center;
  margin-bottom: 25px;
}

input[type="text"] {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  margin-bottom: 15px;
}

.filter {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  align-items: center;
}


.daftar-buku {
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y: auto; 
  gap: 2px;
}

.daftar-buku div {
  padding: 10px;
  margin: 0px 50px;
  border-radius: 8px;
  flex-shrink: 0;
  background-color: #eae8f1;
}

.daftar-buku h2 {
  text-align: left;
  
}

.daftar-buku h3{
  margin-bottom: 0;
  
}



</style>
