let mahasiswa = {
    nama : "Anti",
    umur : 19,
};

//cara biasa
// let nama = mahasiswa.nama;
// let umur = mahasiswa.umur;

//console.log(mahasiswa.nama, mahasiswa.umur);

//cara destructuring
let {nama, umur} = mahasiswa;

console.log(nama, umur);

