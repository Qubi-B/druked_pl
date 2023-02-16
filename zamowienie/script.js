const queryString = window.location.search;
n = document.getElementById("n");
cna = document.getElementById("cna");
zbr = document.getElementById("zbr");
szt = document.getElementById("szt");
dst = document.getElementById("dst");
prj = document.getElementById("prj");
mat = document.getElementById("mat");
wag = document.getElementById("wag");

if(queryString.slice(1,2) == 1){
n.innerHTML = ("Nr. " + queryString.slice(1,22)); 

console.log("Wersja: " + queryString.slice(1,2));

cna.innerHTML = ("Cena: " + Number(queryString.slice(2,7))/100 + " PLN");

zbiorcze = "nie";
if(queryString.slice(7,8) == 0){
    zbiorcze = "nie";
}
else{
    zbiorcze = "tak";
}
zbr.innerHTML = ("Zbiorcze: " + zbiorcze);

if(zbiorcze == "tak"){
    szt.innerHTML = ("Sztuk: " + Number(queryString.slice(8,11)));
}


dostawa = "?";
if(queryString.slice(11,12) == 9){
    dostawa = "Wysyłka";
}
if(queryString.slice(11,12) == 8){
    dostawa = "Odbiór osobisty";
}
if(queryString.slice(11,12) == 7){
    dostawa = "Spotkanie w ustalonym miejscu";
}
dst.innerHTML = ("Dostawa: " + dostawa);

project = "?";
if(queryString.slice(12,13) == 1){
    project = "Dostarczony przez klienta";
}
if(queryString.slice(12,13) == 2){
    project = "Usługa projektowania";
}
if(queryString.slice(12,13) == 3){
    project = "Replikacja istn. części";
}
prj.innerHTML = ("Projekt: " + project);

material = "?";
if(queryString.slice(11,12) == 9){
    material = "PLA";
}
if(queryString.slice(11,12) == 8){
    material = "PETG";
}
if(queryString.slice(11,12) == 7){
    material = "ASA";
}
if(queryString.slice(11,12) == 6){
    material = "ABS";
}
mat.innerHTML = ("Materiał: " + material);


wag.innerHTML = ("Waga: " + Number(queryString.slice(14,18)) + " g");

console.log("ID: " + queryString.slice(18,22));

}
else{
    n.innerHTML = "Błędny numer! (0" + queryString.slice(1,2) + ")";
    n.style.color = "red";
    n.style.fontSize = "25px";
    cna.innerHTML = "W razie problemów skontaktuj się z Druked. Informacje kontaktowe znajdziesz na stronie <a href='druked.pl/kontakt'><i>Kontakt</i></a>"
}