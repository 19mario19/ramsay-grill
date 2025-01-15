const formIndividual = document.querySelector("#individual")

//inputs
/**
 * @type {HTMLInputElement}
 */
const iDate = document.querySelector("#date")
/**
 * @type {HTMLInputElement}
 */
const iTime = document.querySelector("#time")
/**
 * @type {HTMLInputElement}
 */
const iSize = document.querySelector("#size")

formIndividual.addEventListener("submit", (e) => {
  e.preventDefault()

  const inputs = {
    date: iDate.value.trim(),
    time: iTime.value.trim(),
    size: iSize.value.trim(),
  }

  console.log(inputs)
})

const formGroup = document.querySelector("#group")

/**
 * @type {HTMLInputElement}
 */
const first = document.querySelector("#first-id")
/**
 * @type {HTMLInputElement}
 */
const last = document.querySelector("#last-id")
/**
 * @type {HTMLInputElement}
 */
const email = document.querySelector("#email-id")
/**
 * @type {HTMLInputElement}
 */
const phone = document.querySelector("#phone-id")
/**
 * @type {HTMLInputElement}
 */
const date = document.querySelector("#date-id")
/**
 * @type {HTMLInputElement}
 */
const time = document.querySelector("#time-id")
/**
 * @type {HTMLInputElement}
 */
const size = document.querySelector("#size-id")

const marketing = document.querySelector("#marketing")
const privacy = document.querySelector("#privacy")

const newCheckbox = document.querySelector("#checkbox-one")
marketing.addEventListener("input", (e) => {
  console.log(e.target)

  newCheckbox.classList.toggle("filled")
})

const newCheckboxTwo = document.querySelector("#checkbox-two")
privacy.addEventListener("input", (e) => {
  console.log(e.target)

  newCheckboxTwo.classList.toggle("filled")
})

formGroup.addEventListener("submit", (e) => {
  e.preventDefault()

  let currentTime = new Date().toLocaleString("en-GB", { timeZone: "UTC" })

  const inputs = {
    timeOfOrder: currentTime,
    first: first.value.trim(),
    last: last.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim(),
    date: date.value.trim(),
    time: time.value.trim(),
    size: size.value.trim(),
    acceptedMarketing: marketing.checked,
    acceptedPrivacy: privacy.checked,
  }

  console.log(inputs)
})
