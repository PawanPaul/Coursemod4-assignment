var Narr = ["Jacob", "Paul", "Adam", "John", "Caboose", "Cope", "Jennifer", "Peter"];
function hibye() {
for(var i=0;i<Narr.length;i++){
    if(Narr[i].charAt(0)=="j"||Narr[i].charAt(0)=="J"){
        console.log("Bye " + Narr[i]);
    }
    else{
        console.log("Hi " + Narr[i]);
    }
}
}
hibye();