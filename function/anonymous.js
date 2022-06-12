function fungsi1(callback1, callback2){
    console.log("Hai");
    callback2();
    callback1();
}

//Anonymous function = fungsi tak bernama

fungsi1(
    function(){
        console.log("Assalamu'alaikum");
    },
    function(){
        console.log("Anti");
    }
);