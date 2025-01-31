// Mengimpor Produk dan keranjang dari produk.js
import { Produk,Keranjang } from "./produk.js";

//Membuat keranjang belanja
const keranjang = new Keranjang();

//Membuat produk 
const laptop = new Produk("Laptob",15000000)
const mouse = new Produk("Mouse",250000);

//Menambahkan prosuk ke dalan keranjang 
keranjang.tambahProduk(laptop);
keranjang.tambahProduk(mouse);

// Manempilkan isi keranjang 
keranjang.tampilkanKeranjang();

console.log(`Total belanja : RP ${keranjang.hitungTotal()}`);
