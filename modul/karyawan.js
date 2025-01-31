class karyawan {
    constructor(nama,jabatan,gaji){
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }
    tampilKanInfo(){
        console.log(`Nama : ${this.nama} Jabatan : ${this.jabatan} Gaji : ${this.gaji}`);
        
    }
}

class ManajemenKaryawan {
    constructor(){
        this.karyawanList = [];
    }
    tambahKaryawan(karyawan){
        this.karyawanList.push(karyawan);
    }
    hapusKaryawan(nama){
        this.karyawanList = this.karyawanList.filter(karyawan => karyawan.nama !== nama);
    }
    tampilkanSemuaKaryawan(){
        this.karyawanList.forEach(karyawan => karyawan.tampilKanInfo());

    }
}

export{karyawan,ManajemenKaryawan};