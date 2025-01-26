const container = document.querySelector(".container")

let number = { value: 0 }

const button = document.createElement("button")
container.appendChild(button)

const paragraph = document.createElement("p")
paragraph.textContent = "Click me!"
button.appendChild(paragraph)

const span = document.createElement("span")

button.addEventListener("click", (e) => {
  number.value++

  console.log("Current value is: ", number.value)

  span.textContent = number.value
  paragraph.replaceWith(span)
})
