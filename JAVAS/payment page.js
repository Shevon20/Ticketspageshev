document.addEventListener('DOMContentLoaded', function() {
  const cardNumberInput = document.getElementById('card-number');
  const errorText = document.getElementById('errorText');

  function validateCardNumber() {
      const cardNumber = cardNumberInput.value.trim();
      const cardNumberRegex = /^\d{16}$/;
      if (!cardNumberRegex.test(cardNumber)) {
          errorText.textContent = "Invalid card number (16 digits)";
          cardNumberInput.setCustomValidity("Invalid card number");
      } else {
          errorText.textContent = "";
          cardNumberInput.setCustomValidity("");
      }
  }

  cardNumberInput.addEventListener('input', validateCardNumber);

  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      validateCardNumber();
      if (!form.checkValidity()) {
          event.preventDefault();
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const expiryDateInput = document.getElementById('expiry-date');
  const errorMsg = document.getElementById('errorMsg');

  function validateExpiryDate() {
      const expiryDate = expiryDateInput.value.trim();
      const expiryDateRegex = /^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/;
      if (!expiryDateRegex.test(expiryDate)) {
          errorMsg.textContent = "Invalid expiry date (MM/YY)";
          expiryDateInput.setCustomValidity("Invalid expiry date");
      } else {
          errorMsg.textContent = "";
          expiryDateInput.setCustomValidity("");
      }
  }

  expiryDateInput.addEventListener('input', validateExpiryDate);

  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      validateExpiryDate();
      if (!form.checkValidity()) {
          event.preventDefault();
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const cvvInput = document.getElementById('cvv');
  const errorMsg = document.getElementById('ErrorMsg');

  function validateCVV() {
      const cvv = cvvInput.value.trim();
      const cvvRegex = /^\d{3,4}$/;
      if (!cvvRegex.test(cvv)) {
          errorMsg.textContent = "Invalid CVV (3 or 4 digits)";
          cvvInput.setCustomValidity("Invalid CVV");
      } else {
          errorMsg.textContent = "";
          cvvInput.setCustomValidity("");
      }
  }

  cvvInput.addEventListener('input', validateCVV);

  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      validateCVV();
      if (!form.checkValidity()) {
          event.preventDefault();
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const continueButton = document.getElementById('continue');

  function checkFormValidity() {
      const requiredFields = form.querySelectorAll('[required]');
      let isFormValid = true;
      requiredFields.forEach(field => {
          if (!field.validity.valid) {
              isFormValid = false;
          }
      });
      continueButton.disabled = !isFormValid;
  }

  const formElements = form.elements;
  for (let i = 0; i < formElements.length; i++) {
      const field = formElements[i];
      field.addEventListener('input', checkFormValidity);
  }

  form.addEventListener('submit', function(event) {
      checkFormValidity();
      if (!form.checkValidity()) {
          event.preventDefault();
      }
  });
});

const confirmationLink = document.getElementById("confirmationLink");

confirmationLink.addEventListener("click", function(event) {
  event.preventDefault();
});

function UpdateSummary() {
  const disdate = document.getElementById("displayDate");
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
