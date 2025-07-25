// Countdown timer for eye break reminder
// Starts at 20 minutes and counts down every minute.
// When the timer reaches zero, a small popup window reminds
// the user to follow the 20-20-20 rule.

let minutesLeft = 20;
const minuteMs = 1000 * 60;
let intervalId = setInterval(updateTimer, minuteMs);

function updateTimer() {
    // show remaining time until an eye break is due
    if (minutesLeft > 1) {
        minutesLeft--;
        document.querySelector('#countdown').textContent = minutesLeft;
    } else {
        clearInterval(intervalId);
        showReminder();
    }
}

// Display the reminder message in a popup window.
function showReminder() {
    const message =
        'Please blink your eyes and look 20 meters away for 20 seconds.';
    const popup = window.open('', 'eyeBreakReminder', 'width=300,height=200');

    if (popup) {
        popup.document.write(`<p>${message}</p>`);
    } else {
        alert(message);
    }

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset timer';
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener('click', resetTimer);
}

// Reset the timer back to 20 minutes
function resetTimer() {
    const resetButton = document.querySelector('button');
    if (resetButton) {
        resetButton.remove();
    }
    minutesLeft = 20;
    document.querySelector('#countdown').textContent = minutesLeft;
    intervalId = setInterval(updateTimer, minuteMs);
}
