const transaksiBelanja = [{ 
    id: 1, barang: "Laptop", harga: 7000000, qty: 1, kategori: "Elektronik" },
    { id: 2, barang: "Mouse", harga: 150000, qty: 2, kategori: "Elektronik" },
    { id: 3, barang: "Keyboard", harga: 250000, qty: 1, kategori: "Elektronik" },
    { id: 4, barang: "Buku", harga: 20000, qty: 3, kategori: "Alat Tulis" },
    { id: 5, barang: "Pensil", harga: 5000, qty: 5, kategori: "Alat Tulis" },
    { id: 6, barang: "Tas", harga: 150000, qty: 1, kategori: "Fashion" }
];


// 1. filter = menyaring barang dengan harga dibawag 200.000


console.log("========== filter() ==========")
const getBarang = () =>
    transaksiBelanja.filter((item) => item.harga < 200000);

console.table(getBarang());

//  2. map = mengehitung subtotal barang

console.log("========== map() ==========")

const getSubtotalBarang = () =>transaksiBelanja.map(({id,barang,harga,qty,kategori})=>
    ({
        id,
        barang,
        harga,
        qty,
    kategori,
    subtotal: harga*qty}));

console.table(getSubtotalBarang());






