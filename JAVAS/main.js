let peekhr =0;
let normhr =0;
let toSLad  =0;
let toSLch =0;
let toFOad =0;
let toFOch =0;

const SLadult = document.getElementById("adultTickets");
const SLchild = document.getElementById("childTickets")

const Fadult = document.getElementById("FAdultTickets")
const Fchild = document.getElementById("FChildTickets");

const infant = document.getElementById("Infant")

const minus1 = document.getElementById("deduct1");
const number1 = document.getElementById("num1");
const addition1 = document.getElementById("add1");

const minus2 = document.getElementById("deduct2");
const number2 = document.getElementById("num2");
const addition2 = document.getElementById("add2");

const minus3 = document.getElementById("deduct3");
const number3 = document.getElementById("num3");
const addition3 = document.getElementById("add3");

const minus4 = document.getElementById("deduct4");
const number4 = document.getElementById("num4");
const addition4 = document.getElementById("add4");

const minus5 = document.getElementById("deduct5");
const number5 = document.getElementById("num5");
const addition5 = document.getElementById("add5");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");


const time = document.getElementById("time");
const duration  = document.getElementById("timeSlots");


const SumTable= document.getElementsByClassName("SumTable");
const Stable = document.getElementById("Stable");
let dte = document.getElementById("date");
const next = document.getElementById("nxt");

const deleteall = document.getElementById("delete");
const contbtn = document.getElementById("continue");

//Current Date to display on the load of page..
// Event listeners for buttons to add and subtract the number of adults
document.addEventListener('DOMContentLoaded', function() {
  // Function to get the current date and format it as "YYYY-MM-DD"
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Update the element with the current date
  const currentDateElement = document.getElementById('displayDate');
  currentDateElement.textContent = getCurrentDate();
});
function displaySelectedDate() {
  const selectedDate = document.getElementById("dateInput").value;
  document.getElementById("displayDate").textContent = selectedDate;
}

// Add an event listener to the date input to call the function whenever the date is changed
document.getElementById("dateInput").addEventListener("change", displaySelectedDate);

//increment value
function AddSLad(){
    let value = parseInt(number1.value);
    value++;
    number1.value = value;
}
function AddSLch(){
    let value = parseInt(number2.value);
    value++;
    number2.value = value;
}
function AddFad(){
    let value = parseInt(number3.value);
    value++;
    number3.value = value;
}
function AddFch(){
    let value = parseInt(number4.value);
    value++;
    number4.value = value;
}
function Addinfant(){
    let value = parseInt(number5.value);
    value++;
    number5.value = value;
}

addition1.addEventListener("click", AddSLad);
addition2.addEventListener("click", AddSLch);
addition3.addEventListener("click", AddFad);
addition4.addEventListener("click", AddFch);
addition5.addEventListener("click", Addinfant);

//decrement value
function DedSLad(){
    let value = parseInt(number1.value);
    if(value>0){
    value--;
    number1.value = value;
    }
}
function DedSLch(){
    let value = parseInt(number2.value);
    if(value>0){
    value--;
    number2.value = value;
    }
}
function DedFad(){
    let value = parseInt(number3.value);
    if(value>0){
    value--;
    number3.value = value;
    }
}
function DedFch(){
    let value = parseInt(number4.value);
    if(value>0){
    value--;
    number4.value = value;
    }
}
function Dedinfant(){
    let value = parseInt(number5.value);
    if(value>0){
    value--;
    number5.value = value;
    }
}

minus1.addEventListener("click", DedSLad);
minus2.addEventListener("click", DedSLch);
minus3.addEventListener("click", DedFad);
minus4.addEventListener("click", DedFch);
minus5.addEventListener("click", Dedinfant);

//timeslots of the stay
function dur(){
    let durval = duration.value;
    if(durval == "timeslot1"){
        document.getElementById("slot1").innerHTML = `7.00 AM - 8.00 AM`;
        normhr += 1;
    }
    else if(durval == "timeslot2"){
        document.getElementById("slot2").innerHTML = `8.00 AM - 9.00 AM`;
        normhr += 1;
    }else if(durval == "timeslot3"){
        document.getElementById("slot3").innerHTML = `9.00 AM - 10.00 AM`;
        peekhr += 1;
    }else if(durval == "timeslot4"){
        document.getElementById("slot4").innerHTML = `10.00 AM - 11.00 AM`;
        peekhr += 1;}
    else if(durval == "timeslot5"){
        document.getElementById("slot5").innerHTML = `11.00 AM - 12.00 PM`;
        peekhr += 1;}
    else if(durval == "timeslot6"){
        document.getElementById("slot6").innerHTML = `12.00 PM - 1.00 PM`;
        peekhr += 1;}
    else if(durval == "timeslot7"){
        document.getElementById("slot7").innerHTML = `1.00 PM - 2.00 PM`;
        normhr += 1;}
    else if(durval == "timeslot8"){
        document.getElementById("slot8").innerHTML = `2.00 PM - 3.00 PM`;
        normhr += 1;} 
    else if(durval == "timeslot9"){
        document.getElementById("slot9").innerHTML = `3.00 PM - 4.00 PM`;
        peekhr += 1;}
    else if(durval == "timeslot10"){
        document.getElementById("slot10").innerHTML = `4.00 PM - 5.00 PM`;
        peekhr += 1;}
    else if(durval == "timeslot11"){
        document.getElementById("slot11").innerHTML = `5.00 PM - 6.00 PM`;
        peekhr += 1;}
}
duration.addEventListener("change", dur);

//total duration
function ToDura(){
    if(normhr>0){
    document.getElementById("normal-hours-value").innerHTML = `${normhr} Normal Hours`;}
    if(peekhr>0){
    document.getElementById("peak-hours-value").innerHTML = `${peekhr} Peak Hours`;}
}
duration.addEventListener("change", ToDura);

//SL adult ammount
function PSLad(){
    let np = normhr * 4;
    let pp = peekhr * 6;
    let total = np + pp;
    let slad = parseInt(number1.value);
    toSLad = total * slad;
    document.getElementById("SumSlAd").innerHTML = `${toSLad} USD`;
}
duration.addEventListener("change", PSLad);
addition1.addEventListener("click", PSLad);
minus1.addEventListener("click", PSLad);

//sl child ammount
function PSLch(){
    let np = normhr * 2;
    let pp = peekhr * 3;
    let total = np + pp;
    let slch = parseInt(number2.value);
    toSLch = total * slch;
    document.getElementById("SumSlCh").innerHTML = `${toSLch} USD`;
}
duration.addEventListener("change", PSLch);
addition2.addEventListener("click", PSLch);
minus2.addEventListener("click", PSLch);

//foreigner adult ammount
function PFOad(){
    let np = normhr * 10;
    let pp = peekhr * 13;
    let total = np + pp;
    let foad = parseInt(number3.value);
    toFOad = total * foad;
    document.getElementById("SumFAd").innerHTML = `${toFOad} USD`;
}
duration.addEventListener("change", PFOad);
addition3.addEventListener("click", PFOad);
minus3.addEventListener("click", PFOad);

//foreigner child ammount
function PFOch(){
    let np = normhr * 5;
    let pp = peekhr * 8;
    let total = np + pp;
    let foch = parseInt(number4.value);
    toFOch = total * foch;
    document.getElementById("SumFCh").innerHTML = `${toFOch} USD`;
}
duration.addEventListener("change", PFOch);
addition4.addEventListener("click", PFOch);
minus4.addEventListener("click", PFOch);

//infant ammount
function Pinf(){
    document.getElementById("SumInfant").innerHTML = `Free`;
}
duration.addEventListener("change", Pinf);
addition5.addEventListener("click", Pinf);
minus5.addEventListener("click", Pinf);

//total ammount
function Ptotal(){
    total = toSLad + toSLch + toFOad + toFOch;
    document.getElementById("total").innerHTML = `${total} USD`;
}
duration.addEventListener("change", Ptotal);
addition1.addEventListener("click", Ptotal);
addition2.addEventListener("click", Ptotal);
addition3.addEventListener("click", Ptotal);
addition4.addEventListener("click", Ptotal);
addition5.addEventListener("click", Ptotal);
minus1.addEventListener("click", Ptotal);
minus2.addEventListener("click", Ptotal);
minus3.addEventListener("click", Ptotal);
minus4.addEventListener("click", Ptotal);
minus5.addEventListener("click", Ptotal);

//clear duration button
function Clearall(){
  document.getElementById("slot1").innerHTML = ``;
  document.getElementById("slot2").innerHTML = ``;
  document.getElementById("slot3").innerHTML = ``;
  document.getElementById("slot4").innerHTML = ``;
  document.getElementById("slot5").innerHTML = ``;
  document.getElementById("slot6").innerHTML = ``;
  document.getElementById("slot7").innerHTML = ``;
  document.getElementById("slot8").innerHTML = ``;
  document.getElementById("slot9").innerHTML = ``;
  document.getElementById("slot10").innerHTML = ``;
  document.getElementById("slot11").innerHTML = ``;
  document.getElementById("normal-hours-value").innerHTML = ``;
  document.getElementById("peak-hours-value").innerHTML = ``;
  normhr = 0;
  peekhr = 0;
  document.getElementById("SumSlAd").innerHTML = ``;
  document.getElementById("SumSlCh").innerHTML = ``;
  document.getElementById("SumFAd").innerHTML = ``;
  document.getElementById("SumFCh").innerHTML = ``;
  document.getElementById("SumInfant").innerHTML = ``;
  document.getElementById("total").innerHTML = ``;
  
}
deleteall.addEventListener("click", Clearall);


    document.addEventListener('DOMContentLoaded', function() {
        const dateInput = document.getElementById('dateInput');
        const timeSlots = document.getElementById('timeSlots');
        const continueButton = document.getElementById('nxt');

        // Function to check if the form is filled
        function isFormFilled() {
            return dateInput.value !== '' && timeSlots.value !== '';
        }

        // Function to enable or disable the button based on form filled status
        function updateButtonState() {
            continueButton.disabled = !isFormFilled();
        }

        // Call updateButtonState initially
        updateButtonState();

        // Add event listeners to dateInput and timeSlots to check for changes
        dateInput.addEventListener('change', updateButtonState);
        timeSlots.addEventListener('change', updateButtonState);
    });

    //local storage
function StoreData(){
  const currentDateElement = document.getElementById('displayDate');
  const tme = document.getElementById("Time")
  const ndura = document.getElementById("normal-hours-value");
  const pdura = document.getElementById("peak-hours-value");
  const slad = document.getElementById("SumSlAd");
  const slch = document.getElementById("SumSlCh");
  const foad = document.getElementById("SumFAd");
  const foch = document.getElementById("SumFCh");
  const inf = document.getElementById("SumInfant");
  const total = document.getElementById("total");

 
 localStorage.setItem('date', currentDateElement.innerText);
 localStorage.setItem('Time',tme.innerText);
 localStorage.setItem('ndura',ndura.innerText);
 localStorage.setItem('pdura',pdura.innerText);
 localStorage.setItem('slAD', slad.innerText);
 localStorage.setItem('SlCH',slch.innerText);
 localStorage.setItem('FAd',foad.innerText);
 localStorage.setItem('FCh',foch.innerText);
 localStorage.setItem('Inf',inf.innerText);
 localStorage.setItem('total',total.innerText);
}
next.addEventListener("click",StoreData);  