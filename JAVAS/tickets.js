const homeLink = document.getElementById("homeLink");
const ticketsLink = document.getElementById("ticketsLink");
const detailsLink = document.getElementById("detailsLink");
const paymentLink = document.getElementById("paymentLink");
const confirmationLink = document.getElementById("confirmationLink");

// Add click event listeners to disable each link separately

homeLink.addEventListener("click", function(event) {
    event.preventDefault();
});

ticketsLink.addEventListener("click", function(event) {
    event.preventDefault();
});

detailsLink.addEventListener("click", function(event) {
    event.preventDefault();
});

paymentLink.addEventListener("click", function(event) {
    event.preventDefault();
});

confirmationLink.addEventListener("click", function(event) {
    event.preventDefault();
});
