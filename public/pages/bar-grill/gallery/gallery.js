const list = [
  {
    fullSize: "/assets/bar-grill/gallery/1.jpg",
    smallSize: "/assets/bar-grill/gallery/small/1.jpg",
  },
  {
    fullSize: "/assets/bar-grill/gallery/2.jpg",
    smallSize: "/assets/bar-grill/gallery/small/2.jpg",
  },
  {
    fullSize: "/assets/bar-grill/gallery/3.png",
    smallSize: "/assets/bar-grill/gallery/small/3.png",
  },
  {
    fullSize: "/assets/bar-grill/gallery/4.png",
    smallSize: "/assets/bar-grill/gallery/small/4.png",
  },
  {
    fullSize: "/assets/bar-grill/gallery/5.jpg",
    smallSize: "/assets/bar-grill/gallery/small/5.jpg",
  },
  {
    fullSize: "/assets/bar-grill/gallery/6.png",
    smallSize: "/assets/bar-grill/gallery/small/6.png",
  },
  {
    fullSize: "/assets/bar-grill/gallery/7.png",
    smallSize: "/assets/bar-grill/gallery/small/7.png",
  },
  {
    fullSize: "/assets/bar-grill/gallery/8.jpg",
    smallSize: "/assets/bar-grill/gallery/small/8.jpg",
  },
  {
    fullSize: "/assets/bar-grill/gallery/9.jpg",
    smallSize: "/assets/bar-grill/gallery/small/9.jpg",
  },
  {
    fullSize: "/assets/bar-grill/gallery/10.jpg",
    smallSize: "/assets/bar-grill/gallery/small/10.jpg",
  },
  {
    fullSize: "/assets/bar-grill/gallery/11.jpg",
    smallSize: "/assets/bar-grill/gallery/small/11.jpg",
  },
  {
    fullSize: "/assets/bar-grill/gallery/12.png",
    smallSize: "/assets/bar-grill/gallery/small/12.png",
  },
  {
    fullSize: "/assets/bar-grill/gallery/13.jpg",
    smallSize: "/assets/bar-grill/gallery/small/13.jpg",
  },
]

// initial load
let active = { value: 0 }
let visibleItems = 7

const display = document.querySelector(".display")
updateActiveImage(active.value)

const controll = document.querySelector(".controll")

const forward = document.createElement("img")
forward.src = "/assets/bar-grill/gallery/controll/down-arrow.png"
forward.className = "forward"
const backward = document.createElement("img")
backward.src = "/assets/bar-grill/gallery/controll/down-arrow.png"
backward.className = "backward"

controll.insertBefore(backward, controll.firstChild)

const content = document.createElement("div")
content.className = "content"

const ul = document.createElement("ul")
content.appendChild(ul)

controll.appendChild(content)
// append last
controll.appendChild(forward)

let listElements = []

for (let i = 0; i < list.length; i++) {
  const item = list[i]

  const li = document.createElement("li")
  if (i === 0) li.classList.add("active")

  listElements.push(li)
  ul.appendChild(li)

  /**
   * @type {HTMLImageElement}
   */
  const img = document.createElement("img")
  img.src = item.smallSize
  li.appendChild(img)

  li.addEventListener("click", () => {
    active.value = i
    updateActiveImage(active.value)
    removeClasses()
    li.classList.add("active")
  })
}

forward.addEventListener("click", () => {
  active.value = (active.value + 1) % listElements.length
  updateActiveImage(active.value)
  removeClasses()
  listElements[active.value].classList.add("active")
})
backward.addEventListener("click", () => {
  active.value = (active.value - 1 + listElements.length) % listElements.length
  removeClasses()
  updateActiveImage(active.value)
  listElements[active.value].classList.add("active")
})

function updateActiveImage(index) {
  display.style.backgroundImage = `url(${list[index].fullSize})`
}

function removeClasses() {
  for (let i = 0; i < listElements.length; i++) {
    const element = listElements[i]

    element.classList.remove("active")
  }
}
