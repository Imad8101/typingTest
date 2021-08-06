let quoteDisplayEl = document.getElementById('quoteDisplay');
let timerEl = document.getElementById('timer');
let spinnerEl = document.getElementById('spinner');
let quoteInputEl = document.getElementById('quoteInput');
let submitBtn = document.getElementById('submitBtn');
let resetBtn = document.getElementById('resetBtn');
let resultEl = document.getElementById('result');
// let completedMsg = `completed in ${count} seconds`;

function getRandomJoke() {
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    spinnerEl.classList.toggle('d-none');
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.toggle('d-none');
            // console.log(jsonData);
            quoteDisplayEl.textContent = jsonData.content;
        });

}

getRandomJoke();

let counter = 0;
let timerId = setInterval(timer, 1000);

function timer() {
    counter += 1;
    timerEl.textContent = counter + " seconds";
}

function stopTimer() {
    clearInterval(timerId);
    console.log(counter);
}

submitBtn.addEventListener('click', function(event) {
    let userInp = quoteInputEl.value;
    let quote = quoteDisplayEl.textContent;
    if (userInp === quote) {
        stopTimer();
        resultEl.textContent = `Completed test in ${counter} seconds`;
        resultEl.classList.add('success');
    } else {
        resultEl.textContent = "Text does not match";
        resultEl.classList.add("error")
    }
});

resetBtn.addEventListener('click', function(event) {
    getRandomJoke();
    counter = 0;
    quoteInputEl.value = '';

});