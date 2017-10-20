var h_sencilla = 70;
var h_doble = 95;
var h_papas = 80;
var b_sencilla = document.getElementById('sencilla');
var b_doble = document.getElementById('doble');
var b_papas = document.getElementById('conpapas');
var b_clear = document.getElementById('reset');
b_sencilla.addEventListener('click', s1);
b_doble.addEventListener('click', s2);
b_papas.addEventListener('click', s3);
b_clear.addEventListener('click', s4)
var total;

function s1()
{
  var par1 = document.getElementById('p1').innerHTML;
  total = h_sencilla + parseInt(par1);
  document.getElementById('p1').innerHTML= total;
  document.getElementById('ped1').innerHTML=" Hambuerguesa Sencilla";

}

function s2()
{
  var par2 = document.getElementById('p1').innerHTML;
  total = h_doble + parseInt(par2);
  document.getElementById('p1').innerHTML= total;
  document.getElementById('ped2').innerHTML="Hamburguesa Doble";
}

function s3()
{
  var par2 = document.getElementById('p1').innerHTML;
  total = h_papas + parseInt(par2);
  document.getElementById('p1').innerHTML= total;
}

function s4()
{
  var par2 = document.getElementById('p1').innerHTML;
  total = "0.00";
  document.getElementById('p1').innerHTML= total;
}

//Funciones para el cambio de imagenes en los botones
function sobre()
{
  document.getElementById('img1').src = "sencilla1.png";
}
function salir()
{
  document.getElementById('img1').src = "sencilla.png";
}

function sobre1()
{
  document.getElementById('img2').src = "sencilla1.png";
}
function salir1()
{
  document.getElementById('img2').src = "sencilla.png";
}
