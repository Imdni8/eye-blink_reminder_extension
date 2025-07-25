let time = 3 //make this 19

//after one minute
const myInterval = setInterval(settingTime, 1000*2) //make it 1000*60

function substractor() {
    time = time - 1
}

//substracting one minute in display -- main logic
function settingTime() {
    if (time != 0) {
        document.querySelector("#countdown").innerHTML = time
        console.log(`time changed`)
        substractor()
    } 
    
    else {
        clearInterval(myInterval)

        document.querySelector("#countdown").innerHTML = "Please blink your eyes, look away from the screen and focus 20 meters away for 20 seconds."
        document.querySelector('p').remove()
        document.querySelector("h3").remove()
        
        //creating the button for resetting
        const resetBtn = document.createElement("button")
        resetBtn.innerHTML = "Reset timer"
        document.body.appendChild(resetBtn)
        resetBtn.addEventListener("click", console.log("reset btn clicked"))
    }
}