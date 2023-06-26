// Set the focus property and highlight the input element under the Name label
let nameInput = document.getElementById("name");
nameInput.focus();
/* 
 The "Other job role" field should be hidden by default and only be displayed 
 if the user selects the "Other" option from the "Job Role" drop-down, and 
 if the user selects any other option, the "Other job role" field should be hidden from view.
 */
// Create variable for the "Job Role" select element and the "Other job role" input
let jobRoleSelect = document.getElementById("title");
let otherJobInput = document.getElementById("other-job-role");
// Hide "Other job role by default"
otherJobInput.style.display = "none";
/* When the "Other" option is selected/deselected from "Job Role" menu, the 
"Other job role" field should be visible/hidden on the page.   */
jobRoleSelect.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherJobInput.style.display = "block";
  } else {
    otherJobInput.style.display = "none";
  }
});
/* To prevent users from selecting an invalid color for a particular theme, the "Color" menu should be disabled by default. Once a theme is selected, the "Color" menu should be enabled, and 
the color options need to be displayed/hidden based on which theme the user has selected. 
*/
let designSelect = document.getElementById("design");
let designThemes = designSelect.children;
let colorSelect = document.getElementById("color");
let colorOptions = colorSelect.children;
// Color menu is disabled by default
colorSelect.disabled = true;
// Once theme is selected "Color" menu is enabled
designSelect.addEventListener("change", (e) => {
  if (e.target.value === "js puns" || e.target.value === "heart js") {
    colorSelect.removeAttribute("disabled");
  } else {
    colorSelect.setAttribute("disabled");
  }
  /* The color options in the "Color" menu matches with the theme selected in the previous menu 
  also hides the other options that do not match with theme 
  */
  for (let i = 0; i < colorOptions.length; i++) {
    let themePicked = e.target.value;
    let colorOption = colorOptions[i];
    let dataTheme = colorOption.getAttribute("data-theme");
    if (themePicked === dataTheme) {
      colorOption.hidden = false;
      colorOption.selected = true;
    } else {
      colorOption.hidden = true;
      colorOption.selected = false;
    }
  }
});
/* 
The total cost of the selected activities in the "Register for Activities" section 
should be totaled and displayed for the user. 
*/
let activitiesFieldset = document.getElementById("activities");
let activitiesCost = document.getElementById("activities-cost");
let totalCost = 0;
let activitiesInputs = document.querySelectorAll("input[type=checkbox]");

/*  
When an activity or activities are checked/selected the total cost will be shown
if an activity/activities are unchecked/ unselected the cost will be updated to show new total cost
*/
activitiesFieldset.addEventListener("change", (e) => {
  let dataCost = e.target.getAttribute("data-cost");
  if (e.target.checked === true) {
    // use the + unary plus operator to change data-cost to a number to do the addition
    totalCost += +dataCost;
    console.log(totalCost);
    console.log(e.target.checked);
  } else {
    totalCost -= +dataCost;
    console.log(totalCost);
    console.log(e.target.checked);
  }
  activitiesCost.innerHTML = `Total : $ ${totalCost}`;
  // extra credit. Prevent selecting events that are on the same day and time
  let dataDateTime = e.target.getAttribute("data-day-and-time");
  let selected = e.target;
  if (selected.checked) {
    for (let i = 0; i < activitiesInputs.length; i++) {
      if (
        dataDateTime ===
          activitiesInputs[i].getAttribute("data-day-and-time") &&
        selected !== activitiesInputs[i]
      ) {
        activitiesInputs[i].disabled = true;
        activitiesInputs[i].parentElement.classList.add("disabled");
      }
    }
  } else {
    for (let i = 0; i < activitiesInputs.length; i++) {
      if (
        dataDateTime ===
          activitiesInputs[i].getAttribute("data-day-and-time") &&
        selected !== activitiesInputs[i]
      ) {
        activitiesInputs[i].disabled = false;
        activitiesInputs[i].parentElement.classList.remove("disabled");
        activitiesInputs[i].parentElement.classList.add("abled");
      }
    }
  }
});
/* The credit card payment displayed by default  while the other payment form sections are hidden until they are selected . */
let payWithSelect = document.getElementById("payment");
let creditCardDiv = document.getElementById("credit-card");
let payPalDiv = document.getElementById("paypal");
let bitCoinDiv = document.getElementById("bitcoin");

payPalDiv.style.display = "none";
bitCoinDiv.style.display = "none";
let creditCardSelected = payWithSelect.children[1];
creditCardSelected.setAttribute("selected", "selected");

payWithSelect.addEventListener("change", (e) => {
  if (e.target.value === "paypal") {
    payPalDiv.style.display = "block";
    bitCoinDiv.style.display = "none";
    creditCardDiv.style.display = "none";
  } else if (e.target.value === "bitcoin") {
    bitCoinDiv.style.display = "block";
    payPalDiv.style.display = "none";
    creditCardDiv.style.display = "none";
  } else {
    payPalDiv.style.display = "none";
    bitCoinDiv.style.display = "none";
    creditCardDiv.style.display = "block";
  }
});
/* accessibility focus on activity selected and focus go away when selecting another one. 
It is more obvious which activity is selected */
//let activitiesInputs = document.querySelectorAll("input[type=checkbox]");
for (let i = 0; i < activitiesInputs.length; i++) {
  activitiesInputs[i].addEventListener("focus", (e) => {
    activitiesInputs[i].parentElement.classList.add("focus");
  });
  activitiesInputs[i].addEventListener("blur", (e) => {
    activitiesInputs[i].parentElement.classList.remove("focus");
  });
}
// validate section prevent submit if invaild
nameInput;
let emailInput = document.getElementById("email");
activitiesFieldset;
let creditCardNumber = document.getElementById("cc-num");
let zipCodeInput = document.getElementById("zip");
let cVVInput = document.getElementById("cvv");
let form = document.forms[0];
let submitBtn = document.querySelector("button[type=submit]");

// name field validation
const nameValidating = () => {
  let nameValue = nameInput.value;
  let regName = /^[a-zA-Z ]{1,50}$/;
  let nameValidationTest = regName.test(nameValue);
  return nameValidationTest;
};
// email validation
const emailValidating = () => {
  let emailValue = emailInput.value;
  let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailValidationTest = regEmail.test(emailValue);
  return emailValidationTest;
};
// at least one activity is selected before submitting
const activityValidating = () => {
  let noActivity = 0;
  let activityValidationTest = totalCost > noActivity;
  return activityValidationTest;
};
// credit card number is valid 13-16 digits
const cardCreditNumValidating = () => {
  let creditCardValue = creditCardNumber.value;
  let regCreditCard = /^[0-9]{13,16}$/;
  let creditCardValidationTest = regCreditCard.test(creditCardValue);
  return creditCardValidationTest;
};
// 5 digit zip code validation
const zipCodeValidating = () => {
  let zipCodeValue = zipCodeInput.value;
  let regZipCode = /^\d{5}$/;
  let zipCodeValidationTest = regZipCode.test(zipCodeValue);
  return zipCodeValidationTest;
};
// CVV is 3 digits validation
const cVVValidating = () => {
  let cVVValue = cVVInput.value;
  let regCVV = /^[0-9]{3,}$/;
  let cVVValidationTest = regCVV.test(cVVValue);
  return cVVValidationTest;
};
// Form validation function instead of adding classlist and removing to each element. DRY Principle
function validationValid(element) {
  element.classList.add("valid");
  element.classList.remove("not-valid");
  element.lastElementChild.style.display = "none";
}
function validationError(element) {
  element.classList.add("not-valid");
  element.classList.remove("valid");
  element.lastElementChild.style.display = "block";
}
let hintName = nameInput.parentElement;
let hintEmail = emailInput.parentElement;
let hintActivity = document.getElementById("activities-hint");
let pHintActivity = hintActivity.parentElement;
let hintCreditCard = creditCardNumber.parentElement;
let hintZipCode = zipCodeInput.parentElement;
let hintCVV = cVVInput.parentElement;

// Form should not submit until all required field is valid
form.addEventListener("submit", (e) => {
  if (!nameValidating()) {
    validationError(hintName);
    e.preventDefault();
  } else {
    validationValid(hintName);
  }
  if (!emailValidating()) {
    validationError(hintEmail);
    e.preventDefault();
  } else {
    validationValid(hintEmail);
  }
  if (!activityValidating()) {
    //hintActivity.parentElement.classList.add("not-valid");
    //hintActivity.parentElement.classList.remove("valid");
    //hintActivity.parentElement.lastElementChild.style.display = "inline";
    validationError(pHintActivity);
    e.preventDefault();
  } else {
    //hintActivity.parentElement.classList.remove("not-valid");
    //hintActivity.parentElement.classList.add("valid");
    //hintActivity.parentElement.lastElementChild.style.display = "none";
    validationValid(pHintActivity);
  }
  if (payWithSelect.value === "credit-card") {
    if (!cardCreditNumValidating()) {
      validationError(hintCreditCard);
      e.preventDefault();
    } else {
      validationValid(hintCreditCard);
    }
    if (!zipCodeValidating()) {
      validationError(hintZipCode);
      e.preventDefault();
    } else {
      validationValid(hintZipCode);
    }
    if (!cVVValidating()) {
      validationError(hintCVV);
      e.preventDefault();
    } else {
      validationValid(hintCVV);
    }
  }
});
