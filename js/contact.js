const output = document.querySelector("#end-feedback")
const outputText = document.querySelector("#end-feedback-text")
const submissionForm = document.querySelector("#submission-form")

const nameInput = document.querySelector("#name-input")
const emailInput = document.querySelector("#email-input")
const subjectInput = document.querySelector("#subject-input")
const contentInput = document.querySelector("#content-input")

const nameFeedback = document.querySelector("#name-feedback")
const emailFeedback = document.querySelector("#email-feedback")
const subjectFeedback = document.querySelector("#subject-feedback")
const contentFeedback = document.querySelector("#content-feedback")

const nameFeedbackText = document.querySelector("#name-feedback-text")
const emailFeedbackText = document.querySelector("#email-feedback-text")
const subjectFeedbackText = document.querySelector("#subject-feedback-text")
const contentFeedbackText = document.querySelector("#content-feedback-text")

const submitFeedback = document.querySelector("#submit-feedback")

submissionForm.addEventListener("submit", (event) => {
    validation()
    event.preventDefault()
})

function validation() {

    let nameValid = false
    let subjectValid = false
    let emailValid = false
    let contentValid = false

    if (nameInput.value.length > 4) {
        nameValid = true
        nameFeedback.style.display = "none"
        nameFeedbackText.innerText = ""
    } else {
        nameFeedback.style.display = "block"
        nameFeedbackText.innerText = "Must be at least 5 characters"
    }

    if (emailCheck()) {
        emailValid = true
        emailFeedback.style.display = "none"
        emailFeedbackText.innerText = ""
    } else {
        emailFeedback.style.display = "block"
        emailFeedbackText.innerText = "Must be a valid email"
    }

    if (subjectInput.value.length > 14) {
        subjectValid = true
        subjectFeedback.style.display = "none"
        subjectFeedbackText.innerText = ""
    } else {
        subjectFeedback.style.display = "block"
        subjectFeedbackText.innerText = "Must be at least 15 characters"
    }

    if (contentInput.value.length > 24) {
        contentValid = true
        contentFeedback.style.display = "none"
        contentFeedbackText.innerText = ""
    } else {
        contentFeedback.style.display = "block"
        contentFeedbackText.innerText = "Must be at least 25 characters"
    }

    if (nameValid && subjectValid && emailValid && contentValid) {
        output.style.display = "block"
        outputText.innerText = "Valid"
    } else {
        output.style.display = "none"
        outputText.innerText = ""
    }
}

function emailCheck() {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regEx.test(emailInput.value)
}