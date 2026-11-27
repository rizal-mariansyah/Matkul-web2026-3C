<script setup>
// mengambi ref dan computed hitung otomatis
import { ref,computed } from "vue";

// variabel pencarian
const searchQuery = ref("");

// variabel kategori buku
const selectedKategori = ref("");

// variabel selesai baca
const sudahDIbaca = ref(false);

// Input buku baru yang ada
const judulBaru = ref("");
const kategoriBaru = ref("");


// daftar buku
const daftarBuku = ref([
  {
    id: 1,
    judul: "Laskar Pelangi",
    kategori: "Novel",
    dibaca: false,
  },
  {
    id: 2,
    judul: "Naruto",
    kategori: "komik",
    dibaca: false,
  },
  {
    id: 3,
    judul: "Soekarno",
    kategori: "Biografi",
    dibaca: false,
  },
]);

const daftarKategori = computed(() => {
  return [...new Set(
    daftarBuku.value.map((buku) => buku.kategori)
  )];
});

// filter pencarian,kategori dan status

const bukuTerfilter = computed(() => {
  return daftarBuku.value.filter((buku) => {
    const cocokJudul = buku.judul
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
      
      
      const cocokKategori =
      selectedKategori.value === "" ||
      buku.kategori.toLowerCase() === selectedKategori.value.toLowerCase();
      
      const cocokStatus =
      !sudahDIbaca.value || buku.dibaca === true;
      
      return cocokJudul && cocokKategori && cocokStatus;
    });
  });
  
  // Menghitung jumlah buku yang sudah dibaca
  
  // Mengubah status baca buku
  const ubahStatus = (id) => {
    const buku = daftarBuku.value.find((buku) => buku.id === id);
    if(buku){
      buku.dibaca = !buku.dibaca;
    }
  };
const jumlahSelesai = computed(() => {
  return daftarBuku.value.filter((buku) => buku.dibaca === true).length;
});
  
  //  Menambahkan buku baru
const tambahBuku = () => {
  if (
    judulBaru.value.trim() === "" ||
    kategoriBaru.value.trim() === ""
  ) {
    alert("Judul dan kategori harus diisi!");
    return;
  }

  daftarBuku.value.push({
    id: Date.now(),
    judul: judulBaru.value.trim(),
    kategori: kategoriBaru.value.trim(),
    dibaca: false,
  });

  // Mengosongkan form setelah berhasil
  judulBaru.value = "";
  kategoriBaru.value = "";
  

};

    
</script>

<template>
  <div class="container">

      <!-- Judul aplikasi  -->

    <h1>Koleksi Buku Pribadi</h1>


    <!-- Menghitung buku yang sudah selesai dibaca -->
    <p>Jumlah buku selesai dibaca: {{ jumlahSelesai }}</p>


    <!-- FORM TAMBAH BUKU -->
    <div class="form-buku">
      <h2>Tambah Buku</h2>
      

      <input
        type="text"
        placeholder="Masukkan judul buku..."
        v-model="judulBaru"
      />
      
      <input
      type="text"
      placeholder="Masukkan kategori buku..."
      v-model="kategoriBaru"
      />
      

    <!-- Tombol menambahkan buku -->
      <button @click="tambahBuku">
        Tambah Buku
      </button>
    </div>
    <br>  

      <!-- Filter,cari, kategori dan status buku -->

      <div class="filter">

        <input
          type="text"
          placeholder="Cari judul buku..."
          v-model="searchQuery"
        />
        <select v-model="selectedKategori">
          <option value="">Semua Kategori</option>

          <option
            v-for="kategori in daftarKategori"
            :key="kategori"
            :value="kategori"
          >
            {{ kategori }}
          </option>
        </select>

      <div>
        <input type="checkbox" v-model="sudahDIbaca" />
        <label>selesai dibaca</label>
      </div>
    </div>

     <!-- Menampilkan daftar buku hasil filter -->
    <div class="daftar-buku">

      <h2>Daftar Buku:</h2>

      <div v-for="buku in bukuTerfilter" :key="buku.id">
        <h3>{{ buku.judul }}</h3>
        <p>Kategori: {{ buku.kategori }}</p>

        <!-- Menampilkan status baca -->
        <p>
          Status:
          {{ buku.dibaca ? "Sudah dibaca" : "Belum dibaca" }}
        </p>

        <!-- Tombol untuk mengubah status baca -->
        <button @click="ubahStatus(buku.id)">
          {{ buku.dibaca ? "Tandai belum dibaca" : "Tandai sudah dibaca" }}
        </button>
      
      </div>

    </div>
  </div>
</template>

<style scoped>

/*Mengatur tampilan utama aplikasi */
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

}
/* Mengatur judul aplikasi */
h1 {
  text-align: center;
  margin-bottom: 25px;
}
/* Mengatur input pencarian */
input[type="text"] {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  margin-bottom: 15px;
}
/*Mengatur posisi filter */
.filter {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  align-items: center;
}


/*Mengatur daftar buku dan scroll */
.daftar-buku {
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y: auto; 
  gap: 2px;
}
/*Mengatur tampilan setiap buku */
.daftar-buku div {
  padding: 10px;
  margin: 0px 50px;
  border-radius: 8px;
  flex-shrink: 0;
  background-color: #eae8f1;
}
/*Mengatur judul daftar buku */
.daftar-buku h2 {
  text-align: left;
  
}

/* Mengatur jarak judul buku */
.daftar-buku h3{
  margin-bottom: 0;
  
}



</style>
