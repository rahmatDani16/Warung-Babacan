import { karyawan,ManajemenKaryawan } from "./karyawan.js";

const manajemen = new ManajemenKaryawan();
const karyawan1 = new karyawan("Dani","Manager",5000000);
const karyawan2 = new karyawan("rahmat","Frontend",3000000);

manajemen.tambahKaryawan(karyawan1);
manajemen.tambahKaryawan(karyawan2);

manajemen.tampilkanSemuaKaryawan();
manajemen.hapusKaryawan("rahmat");

console.log("\nSetelah penghapusan :");
manajemen.tampilkanSemuaKaryawan();
