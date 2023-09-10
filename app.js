let time = 19

//after one minute
setInterval(settingTime, 1000*2)

function substractor() {
    time = time - 1
}

//substracting one minute in display
function settingTime() {
    if (time != 0) {
        document.querySelector("#countdown").innerHTML = time
        console.log(`time changed`)
        substractor()
    } 
    
    else {
        document.querySelector("#countdown").innerHTML = "Please blink your eyes, look away from the screen and focus 20 meters away for 20 seconds."
    }
    
}

// function resetClock() {
//     document.querySelector("#countdown").innerHTML = 20
// }