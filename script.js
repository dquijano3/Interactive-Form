const nameInput = document.getElementById('name');
nameInput.focus();

const jobRoleSelect = document.getElementById('title');
const otherJobRoleInput = document.getElementById('other-title');

otherJobRoleInput.style.display = 'none';

jobRoleSelect.addEventListener('change', function () {
  if (jobRoleSelect.value === 'other') {
    otherJobRoleInput.style.display = 'block';
  } else {
    otherJobRoleInput.style.display = 'none';
  }
});

const designSelect = document.getElementById('design');
const colorSelect = document.getElementById('color');
const colorOptions = colorSelect.children;

// Disable the color select menu by default
colorSelect.disabled = true;

designSelect.addEventListener('change', function () {
  // Enable the color select menu
  colorSelect.disabled = false;

  // Get the selected design theme and log it
  const selectedTheme = designSelect.value;
  console.log(selectedTheme);

  for (let i = 0; i < colorOptions.length; i++) {
    const option = colorOptions[i];

    const optionTheme = option.getAttribute('data-theme');
    console.log(optionTheme);

    if (selectedTheme === optionTheme) {
        option.hidden = false;
        option.selected = true;
      } else {
        option.hidden = true;
        option.selected = false;
      }
    }
  });

  const activitiesFieldset = document.querySelector('.activities');
const totalCostElement = document.createElement('p');
activitiesFieldset.appendChild(totalCostElement);

let totalCost = 0;

activitiesFieldset.addEventListener('change', function (event) {

  const activityCost = +event.target.getAttribute('data-cost');
  console.log(activityCost);
  
  if (event.target.checked) {
    totalCost += activityCost;
  } else {
    totalCost -= activityCost;
  }

  totalCostElement.innerHTML = `Total: $${totalCost}`;
});

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const activitiesFieldset = document.querySelector('.activities');
const cardNumberInput = document.getElementById('cc-num');
const zipCodeInput = document.getElementById('zip');
const cvvInput = document.getElementById('cvv');
const form = document.querySelector('form');
// Assuming the credit card fields are hidden by default
// if not, add appropriate code to hide them initially


form.addEventListener('submit', function (event) {
  const nameValue = nameInput.value;
  const nameIsValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(nameValue);
  console.log(nameValue);
  console.log(nameIsValid);

  if (!nameIsValid) {
    event.preventDefault();
  }
  // email, activities, cardNumber, zipCode, cvv
});