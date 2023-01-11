const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")
const progress = document.querySelector("#progress")
const modal = document.querySelector("#modal")
const closeButton = document.querySelector("#close-button")
const modalMessage = document.querySelector(".modal-message")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (nameInput.value === "") {
        alertMessage("Por favor, preeencha o seu nome!")
        return
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alertMessage("Por favor, preencha o seu e-mail!")
        return
    }

    if(!validatePassword(passwordInput.value, 8)) {
        alertMessage("A senha precisa ser no mínimo 8 dígitos!")
        return
    }

    if(jobSelect.value === "") {
        alertMessage("Por favor, selecione a sua situação!")
        return
    }

    if(messageTextarea.value === "") {
        alertMessage("Por favor, escreva uma mensagem.")
        return
    }

    form.submit()
})

form.addEventListener("input", () => {
    const totalFields = form.elements.length - 1
    let completedFields = 0

    for(let i = 0; i < totalFields; i++) {
        if(form.elements[i].value) {
            completedFields++
        }
    }

    progress.value = (completedFields / totalFields) * 100
})

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)) {
        return true
    }

    return false
}

function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        return true
    }

    return false
}

function alertMessage(msg) {
    modalMessage.textContent = msg
    modal.style.display = "block"
}

closeButton.addEventListener("click", () => {
    modal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if(e.target === modal) {
        modal.style.display = "none"
    }
})