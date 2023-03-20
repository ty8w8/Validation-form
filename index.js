const firstName = document.getElementById("first__name")
const form = document.getElementById("form")
const errorElement = document.getElementById("error-firstName")

form.addEventListener("submit",(e) => {
    let messages = []
    if (firstName.value === "" || firstName.value == null){
        messages.push("First name is required")
    }
    
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(", ")
        
    }
})

const secondName = document.getElementById("second__name")
const errorElementTwo = document.getElementById("error-secondName")

form.addEventListener("submit",(e) => {
    let messages = []
    if (secondName.value === "" || second.value == null){
        messages.push("Second name is required")
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElementTwo.innerText = messages.join(", ")
        
    }
})

const password = document.getElementById("password")
const errorElementThree = document.getElementById("error-password")

form.addEventListener("submit",(e) => {
    let messages = []
    
    if (password.value.length<=6){
        messages.push("Password must be longer than 6 characters")
    }
    if(password.value.length>20){
        messages.push("Password must me less than 20 characters")
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElementThree.innerText = messages.join(", ")
        
    }
})
