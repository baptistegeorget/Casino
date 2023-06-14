var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var betInput = document.getElementById("bet-input");
var numberOfBetsInput = document.getElementById("number-of-bets");
var payoutValue = document.getElementById("payout-value");
const toggleButton = document.getElementById('toggle-button');
const betValueSpan = document.getElementById('bet-value');


// Fonction pour mettre à jour la valeur du curseur et l'afficher
function updateSliderValue() {
  var value = slider.value;
  output.innerHTML = value + "%";

  var gradientValue = (value - slider.min) / (slider.max - slider.min) * 100;

  // Appliquer le style de couleur en fonction de la position du curseur
  slider.style.background = 'linear-gradient(to right, green ' + gradientValue + '%, red ' + gradientValue + '%)';
}

slider.oninput = function() {
  updateSliderValue();
}

// Réinitialiser la position du curseur au milieu lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  slider.min = 1;
  slider.max = 98;
  slider.value = 50;
  updateSliderValue();
});

const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});

const container = document.querySelector('.container');
const darkModeButton = document.querySelector('.dark-mode-button');
const regularButtons = document.querySelectorAll('.button');


darkModeButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  container.classList.toggle('dark-mode');
  regularButtons.forEach(button => button.classList.toggle('dark-mode'));
  const isDarkMode = container.classList.contains('dark-mode');
  toggleButton.textContent = isDarkMode ? '🌑' : '☀️';
}

betInput.min = 1;


betInput.addEventListener('input', function() {
  var inputValue = parseFloat(betInput.value);
  if (!isNaN(inputValue)) {
    inputValue = Math.round(inputValue);
    betInput.value = inputValue;
    betValueSpan.textContent = inputValue;
  }
});

betInput.addEventListener('blur', function() {
  var inputValue = parseFloat(betInput.value);
  if (!isNaN(inputValue)) {
    inputValue = Math.round(inputValue);
    betInput.value = inputValue;
    betValueSpan.textContent = inputValue;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var betInput = document.getElementById("bet-input");
  betInput.value = 1;

  if (betInput.value === "") {
    betInput.value = "1";
  }
  updateSliderValue();
});

slider.addEventListener("input", function() {
  var payout = (100 / slider.value).toFixed(2);
  payoutValue.textContent = payout;
});



