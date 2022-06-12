function fungsi1(callback1, callback2){
    console.log("Hai");
    callback2();
    callback1();
}

//Anonimous Arrow function

fungsi1(
    () => console.log("Assalamu'alaikum"),
    () => console.log("Anti")
);