const passwordDisplay = document.querySelector(`#password`)

const rangeSlider = document.querySelector(`#password-length-slider`)
const sliderValueDisplay = document.querySelector(`.password-length`)

const lowcaseCheckbox = document.querySelector(`#lowercase-checkbox`)
const uppercaseCheckbox = document.querySelector(`#uppercase-checkbox`)
const numbersCheckbox = document.querySelector(`#numbers-checkbox`)
const symbolsCheckbox = document.querySelector(`symbols-checkbox`)
const checkboxes = document.querySelectorAll(`.checkbox`)

const lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"]
const uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","X","Y","Z"]
const numbersArray = ["0","1","2","3","4","5","6","7","8","9"]
const symbolsArray = ["!","#","'","$","%","^",":",";","&","*","(",")"]

const generateButton = document.querySelector(`.generate-btn`)
let result = ``

rangeSlider.oninput = function(){
    sliderValueDisplay.innerHTML = rangeSlider.value
}

generateButton.onclick = function(){
    result = ``
    if(checkEmptyCheckboxes()){
        return
    }


    for(let i = 0; i < rangeSlider.value; i++){
        if(lowcaseCheckbox.checked){
            let randomIndex = Math.floor(Math.random() * lowercaseArray.length)
            result += lowercaseArray[randomIndex] 
        }
    }

    
    passwordDisplay.innerHTML = result
}




function checkEmptyCheckboxes(){
    let counter = 0;
    checkboxes.forEach((checkbox)=>{
        if (!checkbox.checked){
            counter++
        }
    })
    if(counter == checkboxes.length){
        passwordDisplay.innerHTML = "empty"
        return true
    }
    return false
}