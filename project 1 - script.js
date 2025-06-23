let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  fetch('http://127.0.0.1:5000/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ expression: display.value })
  })
  .then(response => response.json())
  .then(data => {
    if (data.result !== undefined) {
      display.value = data.result;
    } else {
      display.value = data.error;
    }
  })
  .catch(() => {
    display.value = "Server Error";
  });
}
