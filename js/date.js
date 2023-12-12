// Get the current year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

// Find the element with the id "currentYear"
let currentYearElement = document.getElementById("currentYear");

// Update the content of the element with the current year
currentYearElement.textContent = currentYear;