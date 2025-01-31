function hitungPajak (penghasilan){
    if(penghasilan <= 5000000){
        return penghasilan * 0.05
    }else if(penghasilan <= 10000000){
        return penghasilan * 0.1;
    }else {
        return penghasilan * 0.15;
    }
}
export{hitungPajak};