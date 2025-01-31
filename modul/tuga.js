class Todo{
    constructor(){
        this.list = [];
    }
    //Menambahkan tugas ke daftar 
    tambahTugas(tugas){
        this.list.push(tugas);
    }
    //Menghapus tugas berdasarkan indax
    hapusTugas(index){
        this.list.splice(index,1);
    }
    //manampilkan daftar tugas
    tampilTugas(){
        console.log("Daftar Tugas : ");
        this.list.forEach((tugas,index) => console.log(`${index + 1}.${tugas}`))
        
    }
}