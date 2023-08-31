// https://dribbble.com/shots/6440077-Add-a-New-Credit-Card-alternate-flow

const cardNumberInput = document.getElementById('card-number-input');
const cardholderInput = document.getElementById('cardholder-input');
const validationMonthInput = document.getElementById('validation-month-input');
const validationYearInput = document.getElementById('validation-year-input');
const cvvInput = document.getElementById('cvv-input');

function formatCardNumber(number) {
  // Divide o número do cartão em grupos de 4 dígitos
  if (number) {
    const fourNumbers = number.match(/(\d{1,4})/g);

    // Formata o número do cartão com hífens entre os grupos
    const result = fourNumbers.join('-');
    return result;
  }
  return "XXXX-XXXX-XXXX-XXXX"
}

cardNumberInput.addEventListener('input', () => {
  const cardNumber = document.getElementById("card-number").children[0];
  const result = formatCardNumber(cardNumberInput.value);
  cardNumber.innerHTML = result;
});

cardholderInput.addEventListener('input', () => {
  const cardholder = document.getElementById("cardholder").children[1];
  cardholder.innerHTML = cardholderInput.value;
})

validationMonthInput.addEventListener('input', () => {
  const validationMonth = document.getElementById("validation-month");
  validationMonth.innerHTML = validationMonthInput.value;
})

validationYearInput.addEventListener('input', () => {
  const validationYear = document.getElementById("validation-year");
  validationYear.innerHTML = validationYearInput.value;
})

cvvInput.addEventListener('input', () => {
  const cvv = document.getElementById("cvv");
  cvv.innerHTML = cvvInput.value;
})

cvvInput.addEventListener('focus', () => {
  const backCard = document.getElementById("back-card");
  const frontCard = document.getElementById("front-card");
  backCard.style.display = "flex";
  frontCard.style.display = "none";
})

cvvInput.addEventListener('blur', () => {
  const backCard = document.getElementById("back-card");
  const frontCard = document.getElementById("front-card");
  backCard.style.display = "none";
  frontCard.style.display = "flex";
})