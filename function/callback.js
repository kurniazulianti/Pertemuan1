// function sapa(nama){
//     console.log("Hai " + nama);
// }

// sapa("Kurnia");

//callback function
//Fungsi yang dijadikan argumen fungsi lain, kemudian dipanggil dari dalam fungsi itu

function fungsi1(callback1, callback2){
    console.log("Hai");
    callback2();
    callback1();
}

function fungsi2(){
    console.log("Hallo");
};

function fungsi3(){
    console.log("Assalamu'alaikum");
};

fungsi1(fungsi2, fungsi3);