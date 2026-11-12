const transaksiBelanja = [{ 
    id: 1, barang: "kulkas", harga: 2700000, qty: 1, kategori: "Elektronik" },
    { id: 2, barang: "Ac", harga: 3000000, qty: 2, kategori: "Elektronik" },
    { id: 3, barang: "televisi", harga: 2500000, qty: 3, kategori: "Elektronik" },
    { id: 4, barang: "rice cooker", harga: 200000, qty: 2, kategori: "Elektronik" },
    { id: 5, barang: "kipas angin", harga: 500000, qty: 2, kategori: "Elektronik" },
    { id: 6, barang: "mesin cuci", harga: 4500000, qty: 1, kategori: "Elektronik" }
];


// 1. filter = menyaring barang dengan harga dibawah 200.000


console.log("\n========== filter(< 3000000) ==========\n")
const getBarang = () =>
    transaksiBelanja.filter((item) => item.harga < 3000000);

console.table(getBarang());

//  2. map = mengehitung subtotal barang

console.log("\n========== map(subtotal tiap barang) ==========\n")

const getSubtotalBarang = () =>transaksiBelanja.map(({id,barang,harga,qty,kategori})=>
    ({
        id,
        barang,
        harga,
        qty,
    kategori,
    subtotal: harga*qty}));

console.table(getSubtotalBarang());

console.log("\n========== reduce (menghitung total) ==========\n")

const getTotalkeseluruhan = () =>
    getSubtotalBarang().reduce((total, {subtotal}) => {return total + subtotal},0);

console.log("total keseluruhan: Rp." + getTotalkeseluruhan())






