class Produk {
    constructor(nama ,harga){
        this.nama = nama;
        this.harga = harga;
    }

    tampilkanInfo(){
        console.log(`${this.nama}: Rp ${this.harga}`);
    }
}

class Keranjang {
    constructor(){
        this.items = [];
    }
    tambahProduk(produk){
        this.items.push(produk);
    }
    hitungTotal(){
        return this.items.reduce((total,produk) => total + produk.harga,0);
    }
    tampilkanKeranjang(){
        this.items.forEach(item => item.tampilkanInfo());
    }
}

export{Produk,Keranjang}