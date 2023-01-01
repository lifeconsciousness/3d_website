const passwordDisplay = document.querySelector(`#password`)

const rangeSlider = document.querySelector(`#password-length-slider`)
const sliderValueDisplay = document.querySelector(`.password-length`)

const lowcaseCheckbox = document.querySelector(`#lowercase-checkbox`)
const uppercaseCheckbox = document.querySelector(`#uppercase-checkbox`)
const numbersCheckbox = document.querySelector(`#numbers-checkbox`)
const symbolsCheckbox = document.querySelector(`#symbols-checkbox`)
const checkboxes = document.querySelectorAll(`.checkbox`)

const lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"]
const uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","X","Y","Z"]
const numbersArray = ["0","1","2","3","4","5","6","7","8","9"]
const symbolsArray = ["!","#","`","$","%","^",":",";","&","*","(",")","-",".","?","[","]","_","~","*","="]

const generateButton = document.querySelector(`.generate-btn`)

let result = `` 
let includesArray = []

//updates password length display
rangeSlider.oninput = function(){
    sliderValueDisplay.innerHTML = rangeSlider.value
}

generateButton.onclick = function generatePassword(){
    //reset the variables
    result = ``
    includesArray = []

    popupMessage.classList.remove(`popup-animation`)

    //fill array with numbers that represent different includes
    getIncludesNumbers()
    //check if it's empty
    if(includesArray.length == 0){
        passwordDisplay.innerHTML = `Include something`
        return
    }

    //get string of random calls to different arrays of characters
    let differentIncludes = generateDifferentIncludes(includesArray)

    //fill the result sting with random characters
    for(let i = 0; i < rangeSlider.value; i++){
        if(differentIncludes[i] == 1){
            let randomIndex = Math.floor(Math.random() * lowercaseArray.length)
            result += lowercaseArray[randomIndex] 
        }
        if(differentIncludes[i] == 2){
            let randomIndex = Math.floor(Math.random() * uppercaseArray.length)
            result += uppercaseArray[randomIndex] 
        }
        if(differentIncludes[i] == 3){
            let randomIndex = Math.floor(Math.random() * numbersArray.length)
            result += numbersArray[randomIndex] 
        }
        if(differentIncludes[i] == 4){
            let randomIndex = Math.floor(Math.random() * symbolsArray.length)
            result += symbolsArray[randomIndex] 
        }
    }

    passwordDisplay.innerHTML = result
}


//fills array with numbers that represent different symbols,letters inclusion
function getIncludesNumbers(){
    if(lowcaseCheckbox.checked){
        includesArray.push(1)
    }
    if(uppercaseCheckbox.checked){
        includesArray.push(2)
    }
    if(numbersCheckbox.checked){
        includesArray.push(3)
    }
    if(symbolsCheckbox.checked){
        includesArray.push(4)
    }
}

//takes numbers that represent checked checkboxes (lowercase,uppercase,numbers, etc)
function generateDifferentIncludes(includesNumbers){
    let includesString = ``

    for(let i = 0; i < rangeSlider.value; i++){
        let numbersRandomIndex = Math.floor(Math.random() * includesNumbers.length)
        includesString += includesNumbers[numbersRandomIndex]
    }

    return includesString
}



const copyIcon = document.querySelector(`.copy-icon`)
copyIcon.addEventListener("click", function(){copyToClipboard(passwordDisplay.innerHTML)})
const popupMessage = document.querySelector(`.popup-message`)

async function copyToClipboard(text){
    popupMessage.classList.add(`popup-animation`)
    try{
        await navigator.clipboard.writeText(text)
    } catch(err){ console.error(err) }
}




