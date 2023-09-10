let time = 19

//after one minute
setInterval(settingTime, 1000*5)

function substractor() {
    time = time - 1
}

//substracting one minute in display
function settingTime() {
    document.querySelector("#countdown").innerHTML = time
    console.log(`time changed ${time}th time`)
    substractor()
}