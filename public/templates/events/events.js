const form = document.querySelector("#form")

// Inputs
const first = document.querySelector("#first-id")
const last = document.querySelector("#last-id")
const email = document.querySelector("#email-id")
const companyName = document.querySelector("#company-id")
const phone = document.querySelector("#phone-id")
const jobTitle = document.querySelector("#job-title")
const occasion = document.querySelector("#occasion")
const date = document.querySelector("#date-id")
const time = document.querySelector("#time-id")
const size = document.querySelector("#size-id")
const customerNote = document.querySelector("#note-id")

// Checkboxes
const marketing = document.querySelector("#marketing")
const privacy = document.querySelector("#privacy")

const newCheckbox = document.querySelector("#checkbox-one")
marketing.addEventListener("input", (e) => {
  newCheckbox.classList.toggle("filled")
})

const newCheckboxTwo = document.querySelector("#checkbox-two")
privacy.addEventListener("input", (e) => {
  newCheckboxTwo.classList.toggle("filled")
})

form.addEventListener("submit", (e) => {
  e.preventDefault()

  let currentTime = new Date().toLocaleString("en-GB", { timeZone: "UTC" })

  const inputs = {
    firstName: first.value.trim(),
    lastName: last.value.trim(),
    email: email.value.trim(),
    companyName: companyName.value.trim(),
    phone: phone.value.trim(),
    jobTitle: jobTitle.value.trim(),
    occasion: occasion.value,
    date: date.value,
    time: time.value,
    size: size.value,
    customerNote: customerNote.value.trim(),
    marketingConsent: marketing.checked,
    privacyConsent: privacy.checked,
    submittedAt: currentTime,
  }

  console.log(inputs)
})
