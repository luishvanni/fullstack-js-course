import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwithcer from "./themeSwithcer.js"


document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', handleButtonPress)
})

document.querySelector("#clear").addEventListener("click", handleClearButton)
document.querySelector("#input").addEventListener("keydown", handleTyping)
document.querySelector("#equal").addEventListener("click", calculate)
document.querySelector("#copyToClipboard").addEventListener("click", copyToClipboard)
document.querySelector("#themeSwitcher").addEventListener("click", themeSwithcer)


