const queryString = window.location.search;
n = document.getElementById("n");
cna = document.getElementById("cna");
zbr = document.getElementById("zbr");
szt = document.getElementById("szt");
dst = document.getElementById("dst");
prj = document.getElementById("prj");
mat = document.getElementById("mat");
wag = document.getElementById("wag");
id = document.getElementById("id");
num = "";

function compute(){
    num += "1";
    if(Number(cna.value) >= 10 && Number(cna.value) < 100){
        num += "0"
    }
    if(Number(cna.value) < 10){
        num += "00"
    }
    num += (Number(cna.value)*100).toString();
    num += zbr.value;

    if(Number(szt.value) >= 10 && Number(szt.value) < 100){
        num += "0"
    }
    if(Number(szt.value) < 10){
        num += "00"
    }
    num += (Number(szt.value)).toString();

    num += dst.value;
    num += prj.value;
    num += mat.value;

    
    if(Number(wag.value) >= 100 && Number(wag.value) < 1000){
        num += "0"
    }
    if(Number(wag.value) >= 10 && Number(wag.value) < 100){
        num += "00"
    }
    if(Number(wag.value) < 10){
        num += "000"
    }
    num += (Number(wag.value)).toString();


    num += id.value;

    document.getElementById("result").innerHTML = num;
    num = "";
}