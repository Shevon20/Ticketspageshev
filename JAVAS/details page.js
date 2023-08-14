document.addEventListener('DOMContentLoaded', function() {
    const firstEmailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const errorText = document.getElementById('errorText');
  
    function validateEmails() {
      const firstEmail = firstEmailInput.value;
      const confirmEmail = confirmEmailInput.value;
  
      if (firstEmail !== confirmEmail) {
        confirmEmailInput.setCustomValidity("Emails don't match.");
        errorText.textContent = "Emails don't match.";
      } else {
        confirmEmailInput.setCustomValidity('');
        errorText.textContent = '';
      }
    }
  
    // Add an event listener to the confirm email input to check for validity on input change
    confirmEmailInput.addEventListener('input', validateEmails);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const errortext = document.getElementById('errortext');
  
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    function validateEmail() {
      const email = emailInput.value;
      const isValid = isValidEmail(email);
  
      if (!isValid) {
        errortext.textContent = "Please enter a valid email address.";
        confirmEmailInput.setCustomValidity("Invalid email address.");
      } else {
        errortext.textContent = "";
        confirmEmailInput.setCustomValidity("");
      }
    }
  
    // Add event listeners to email inputs to check for validity on input change
    emailInput.addEventListener('input', validateEmail);
    confirmEmailInput.addEventListener('input', validateEmail);
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Get the full name input field element and the error text element
    const nameInput = document.getElementById('name');
    const ErrorText = document.getElementById('ErrorText');
  
    // Function to check if only one first name is entered
    function checkFullName() {
      const fullName = nameInput.value.trim();
      const names = fullName.split(' ');
      
      if (names.length === 1) {
        ErrorText.textContent = "Please enter full name";
        nameInput.setCustomValidity("Invalid name");
      } else {
        ErrorText.textContent = "";
        nameInput.setCustomValidity("");
      }
    }
  
    // Add event listener to the full name input to validate the input on input change
    nameInput.addEventListener('input', checkFullName);
  
    // Add event listener to the form to validate the input on form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      checkFullName(); // Validate the input before form submission
      if (!form.checkValidity()) {
        event.preventDefault(); // Prevent form submission if the input is invalid
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Get the form and the "Continue to purchase" button elements
    const form = document.querySelector('form');
    const continueButton = document.getElementById('continue');
  
    // Function to check if all required fields are filled
    function checkFormValidity() {
      const requiredFields = form.querySelectorAll('[required]');
      let isFormValid = true;
  
      // Check each required field for its validity
      requiredFields.forEach(field => {
        if (!field.validity.valid) {
          isFormValid = false;
        }
      });
  
      // Enable or disable the "Continue to purchase" button based on form validity
      continueButton.disabled = !isFormValid;
    }
  
    // Add event listeners to form elements to validate the form on input change
    const formElements = form.elements;
    for (let i = 0; i < formElements.length; i++) {
      const field = formElements[i];
      field.addEventListener('input', checkFormValidity);
    }
  
    // Add event listener to the form to validate the form on form submission
    form.addEventListener('submit', function(event) {
      checkFormValidity(); // Validate the form before form submission
      if (!form.checkValidity()) {
        event.preventDefault(); // Prevent form submission if the form is invalid
      }
    });
  });
  const nameInput = document.getElementById('name');
  const sumTable = document.getElementById('sumTable');

  nameInput.addEventListener('input', function() {
      const name = nameInput.value.trim();

      if (name) {
          // Check if the row already exists for the name
          const existingRow = findExistingRow(name);
          
          if (existingRow) {
              // If the row exists, update the value in the existing row
              existingRow.cells[1].innerText = name;
          } else {
              // If the row doesn't exist, add a new row
              const newRow = sumTable.insertRow(1); // Insert as the first row (after the header row)
              const nameCell = newRow.insertCell();
              nameCell.innerText = 'Name';
          
              const valueCell = newRow.insertCell();
              valueCell.innerText = name;
          }
      }
  });

  // Function to find if a row already exists for the given name
  function findExistingRow(name) {
      for (let i = 1; i < sumTable.rows.length; i++) {
          const row = sumTable.rows[i];
          if (row.cells[0].innerText === 'Name') {
              return row;
          }
      }
      return null;
  }
 
  const emailInput = document.getElementById('email');
  const STable = document.getElementById('sumTable');

  emailInput.addEventListener('input', function() {
      const email = emailInput.value.trim();

      if (email) {
          // Check if the row already exists for the email
          const existingrow = findExistingrow('Email');

          if (existingrow) {
              // If the row exists, update the value in the existing row
              existingrow.cells[1].innerText = email;
          } else {
              // If the row doesn't exist, add a new row after the 3rd row
              const newRow = STable.insertRow(6); // Insert after the 3rd row
              const emailCell = newRow.insertCell();
              emailCell.innerText = 'Email';
          
              const valueCell = newRow.insertCell();
              valueCell.innerText = email;
          }
      }
  });

  // Function to find if a row already exists for the given column header
  function findExistingrow(header) {
      for (let i = 1; i < STable.rows.length; i++) {
          const row = STable.rows[i];
          if (row.cells[0].innerText === header) {
              return row;
          }
      }
      return null;
  }
  const phoneInput = document.getElementById('phone');
  const phoneRow = document.getElementById('phoneRow');
  const phoneValueCell = document.getElementById('phoneValue');

  phoneInput.addEventListener('input', function() {
      const phone = phoneInput.value.trim();

      if (phone) {
          // If the row exists, update the value in the existing row
          phoneValueCell.innerText = phone;

          // Display the row if it's hidden
          phoneRow.style.display = 'table-row';
      } else {
          // Hide the row if the phone input is empty
          phoneRow.style.display = 'none';
      }
  });
  const genderSelect = document.getElementById('gender');
  const genderRow = document.getElementById('genderRow');
  const genderValueCell = document.getElementById('genderValue');

  genderSelect.addEventListener('change', function() {
      const selectedGender = genderSelect.value.trim();

      if (selectedGender) {
          // If the row exists, update the value in the existing row
          genderValueCell.innerText = selectedGender;

          // Display the row if it's hidden
          genderRow.style.display = 'table-row';
      } else {
          // Hide the row if the gender input is not selected
          genderRow.style.display = 'none';
      }
  });
  
  
  
const paymentLink = document.getElementById("paymentLink");
const confirmationLink = document.getElementById("confirmationLink");

// Add click event listeners to disable each link separately


paymentLink.addEventListener("click", function(event) {
  event.preventDefault();
});

confirmationLink.addEventListener("click", function(event) {
  event.preventDefault();
});

//update summary table
function UpdateSummary(){
  const disdate = document.getElementById("displayDate");
  const tim = document.getElementById("Time");
  const nhv = document.getElementById("normal-hours-value");
  const phv = document.getElementById("peak-hours-value");
  const slad = document.getElementById('SumSlAd');
  const slch = document.getElementById('SumSlCh');
  const fad = document.getElementById('SumFAd');
  const fch = document.getElementById('SumFCh');
  const inf = document.getElementById('SumInfant');
  const total = document.getElementById('total')

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

}
window.addEventListener("load", UpdateSummary);

//add date
const btncont = document.getElementById("continue");
function SaveData(){
  const name = document.getElementById("fname");
  const phone = document.getElementById("phoneValue");
  const email = document.getElementById("femail");
  const gend = document.getElementById("genderValue");

  localStorage.setItem('name', name.innerText);
  localStorage.setItem('phone', phone.innerText);
  localStorage.setItem('email', email.innerText);
  localStorage.setItem('gend', gend.innerText);
}
btncont.addEventListener('click', SaveData);