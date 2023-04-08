var date = document.getElementById('date');
var hour = document.getElementById('hour');

function time() {
  var d = new Date();
  var tyg = d.getDay();
  var dd = d.getDate();
  var y = d.getFullYear();
  var mm = d.getMonth();
  var m = d.getMinutes();
  var h = d.getHours();

  var dtyg = "";
  if(tyg == 0){dtyg = "Pon."};
  if(tyg == 1){dtyg = "Wt."};
  if(tyg == 2){dtyg = "Śr."};
  if(tyg == 3){dtyg = "Czw."};
  if(tyg == 4){dtyg = "Pt."};
  if(tyg == 5){dtyg = "Sob."};
  if(tyg == 6){dtyg = "Nd."};

  var nmies = "";
  if(tyg == 0){nmies = "stycznia"};
  if(tyg == 1){nmies = "lutego"};
  if(tyg == 2){nmies = "marca"};
  if(tyg == 3){nmies = "kwietnia"};
  if(tyg == 4){nmies = "maja"};
  if(tyg == 5){nmies = "czerwca"};
  if(tyg == 6){nmies = "lipca"};
  if(tyg == 7){nmies = "sierpnia"};
  if(tyg == 8){nmies = "września"};
  if(tyg == 9){nmies = "października"};
  if(tyg == 10){nmies = "listopada"};
  if(tyg == 11){nmies = "grudnia"};

  date.innerHTML = dtyg + ", " + ("0" + dd).substr(-2) + " " + nmies + " " + y + "r.";
  hour.innerHTML = ("0" + h).substr(-2) + " : " + ("0" + m).substr(-2);
}

var myInterval = setInterval(time() , 2000);