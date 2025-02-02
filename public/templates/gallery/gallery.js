import slider from "/slider/slider.js"
import slides from "/slider/slides.js"

const mainContainer = document.querySelector("#slide")

function createSlider() {
    const c = document.createElement("div")
    c.className = "container"

    // controll buttons
    const btnCotnainer = document.createElement("div")
    btnCotnainer.className = "buttons"
    let buttons = []
    let elements = []
    let indexRef = { value: 0 }

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];

        // slides
        const container = document.createElement("div")
        container.className = "slide"
        container.style.backgroundImage = slide.img

        const title = document.createElement("h2")
        title.textContent = slide.title

        const subtitle = document.createElement("h3")
        subtitle.textContent = slide.subtitle ?? ""

        const button = document.createElement("button")
        button.textContent = slide.button

        container.append(title, subtitle, button)
        elements.push(container)

        // controll buttons
        const btn = document.createElement("button")
        buttons.push(btn)

        const back = document.createElement("img")
        const forward = document.createElement("img")
        back.className = "back"
        forward.className = "forward"
        back.src = "/assets/icons/controls/back.png"
        forward.src = "/assets/icons/controls/back.png"

        // append to main container
        c.append(back, forward)


        indexRef.value = i

        back.addEventListener("click", () => {
            indexRef.value--
            if (indexRef.value < 0) indexRef.value = elements.length - 1

            updateClasses(elements, buttons, indexRef.value)
        })
        forward.addEventListener("click", () => {
            indexRef.value++
            if (indexRef.value > elements.length - 1) indexRef.value = 0

            updateClasses(elements, buttons, indexRef.value)
        })

        btn.addEventListener("click", () => {
            indexRef.value = i

            updateClasses(elements, buttons, indexRef.value)
        })

        btnCotnainer.appendChild(btn)
        c.append(btnCotnainer, container)
    }


    // init
    indexRef.value = 0
    initialisation(elements, buttons, indexRef.value)


    mainContainer.insertBefore(c, mainContainer.firstChild)
}

function initialisation(elements, buttons, index) {
    const { prev, curr, next } = slider(buttons, index)
    const { prev: p, curr: c, next: n } = slider(elements, index)

    prev.classList.add("prev")
    curr.classList.add("curr")
    next.classList.add("next")

    p.classList.add("prev")
    c.classList.add("curr")
    n.classList.add("next")

}
function updateClasses(elements, buttons, index) {

    const { prev, curr, next } = slider(buttons, index)
    const { prev: p, curr: c, next: n } = slider(elements, index)

    for (let j = 0; j < elements.length; j++) {
        const el = elements[j];
        el.classList.remove("prev", "curr", "next")

        if (el === p) el.classList.add("prev")
        if (el === c) el.classList.add("curr")
        if (el === n) el.classList.add("next")

    }
    for (let k = 0; k < buttons.length; k++) {
        const el = buttons[k];
        el.classList.remove("prev", "curr", "next")


        if (el === prev) el.classList.add("prev")
        if (el === curr) el.classList.add("curr")
        if (el === next) el.classList.add("next")

    }

}

window.addEventListener("DOMContentLoaded", () => {
    createSlider()

})