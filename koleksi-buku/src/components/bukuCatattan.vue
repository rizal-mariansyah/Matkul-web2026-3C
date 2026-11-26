<script setup>
import { ref } from "vue";

const searchQuery = ref("");
const selectedKategori = ref("");
const sudahDIbaca = ref(false);
const daftarBuku = ref([{
  id: 1,
  judul: 'Laskar Pelangi',
  kategori: 'Novel',
  dibaca: true
},
{
  id: 2,
  judul: 'Naruto',
  kategori: 'komik',
  dibaca: true
},{
  id: 1,
  judul: 'Soekarno',
  kategori: 'Biografi',
  dibaca: true
}]);

</script>

<template>
  <div class="container">
    <h1>Koleksi Buku Pribadi</h1>
    <input type="text" placeholder="Cari judul buku..." v-model="searchQuery" />
    <br>
    <select v-model="selectedKategori">
      <option value="">Kategori</option>
      <option value="komik">komik</option>
      <option value="Novel">Novel</option>
      <option value="Biografi">Biografi</option>
    </select>
  
    <input type="checkbox" v-model="sudahDIbaca" />
    <label>selesai dibaca</label>
  </div>
</template>

<style scoped></style>
