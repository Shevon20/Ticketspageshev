function UpdateSummary(){
  const disdate = document.getElementById ("displayDate");
  const tim = document.getElementById("Time");
  const nhv = document.getElementById("normal-hours-value");
  const phv = document.getElementById("peak-hours-value");
  const slad = document.getElementById('SumSlAd');
  const slch = document.getElementById('SumSlCh');
  const fad = document.getElementById('SumFAd');
  const fch = document.getElementById('SumFCh');
  const inf = document.getElementById('SumInfant');
  const total = document.getElementById('total');
  const fname = document.getElementById('fnamel');
  const pho = document.getElementById('phone1');
  const emai = document.getElementById('email1');
  const gend = document.getElementById('gend1');

  disdate.innerText = localStorage.getItem('date');
  tim.innerText = localStorage.getItem('Time');
  nhv.innerText = localStorage.getItem('ndura');
  phv.innerText = localStorage.getItem('pdura');
  slad.innerText = localStorage.getItem('slAD');
  slch.innerText = localStorage.getItem('SlCH');
  fad.innerText = localStorage.getItem('FAd');
  fch.innerText = localStorage.getItem('FCh');
  inf.innerText = localStorage.getItem('Inf');
  total.innerText = localStorage.getItem('total');
  fname.innerText = localStorage.getItem('name');
  pho.innerText = localStorage.getItem('phone');
  emai.innerText = localStorage.getItem('email');
  gend.innerText = localStorage.getItem('gend');
}
window.addEventListener("load", UpdateSummary);
