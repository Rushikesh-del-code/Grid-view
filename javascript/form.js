function checknumber(){
    let n =document.getElementById("num-1").value;
    if(n>0){
        console.log("positive number")
    }else if(n<0){
        console.log("negative number")
    }else{
        console.log("zero")
    }
}