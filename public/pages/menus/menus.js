import { menuPdf } from "../../menu-pdf.js"

const list = document.querySelectorAll("li")

list[0].classList.add("active")

const container = document.querySelector(".pdf")
const pdf = document.createElement("iframe")
// init
pdf.src = "../../assets/menus/1.pdf"
container.appendChild(pdf)

for (let i = 0; i < list.length; i++) {
  const li = list[i]
  li.addEventListener("click", () => {
    for (let j = 0; j < list.length; j++) {
      const element = list[j]
      if (li !== element) {
        element.classList.remove("active")
      }
    }
    li.classList.add("active")

    const activeClassName = li.classList[0]

    for (let k = 0; k < menuPdf.length; k++) {
      const el = menuPdf[k]

      if (el.name === activeClassName) {
        pdf.src = el.link + "#view=Fit"
        pdf.style.height = el.height
      }
    }

    if (container.firstChild !== pdf) {
      container.innerHTML = ""
    }
  })
}
