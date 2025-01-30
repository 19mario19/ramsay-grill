import slider from "../../../slider/slider.js"

let list = [
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
// preload images
for (let i = 0; i < list.length; i++) {
  const item = list[i]

  let img = new Image()
  img.src = item.fullSize
}
// to be modified list
let modList = [...list]

const indexRef = { value: 0 }

const display = document.querySelector(".display")
updateActiveImage(modList[0])

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

let listElements = []
recreateList()

controll.appendChild(content)
// append last
controll.appendChild(forward)

forward.addEventListener("click", () => {
  renderList()
})
backward.addEventListener("click", () => {
  renderList(false)
})

/**
 * @param {boolean} [forward=true]
 */
function renderList(forward = true) {
  const { prev, curr, next } = slider(modList, 0)

  const array = [
    { name: "prev", element: prev.fullSize },
    { name: "curr", element: curr.fullSize },
    { name: "next", element: next.fullSize },
  ]

  if (forward) {
    modList.push(modList[0])
    modList.shift()
  } else {
    const lastElement = modList[modList.length - 1]
    modList = [lastElement, ...modList]
    modList.pop()
  }

  listElements[0].classList.add("active")
  recreateList()
  updateActiveImage()
}

function recreateList() {
  // reset list
  listElements = []
  ul.innerHTML = ""

  // recreate it
  for (let i = 0; i < modList.length; i++) {
    const item = modList[i]

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
      updateActiveImage()
      li.classList.add("active")

      indexRef.value = i

      modifyListOnItem()
      updateActiveImage()
    })
  }
}

function modifyListOnItem() {
  // take the index ref plus whole array to the end and move to the start
  let newList = modList.splice(indexRef.value)

  modList.unshift(...newList)

  recreateList()
}

function updateActiveImage() {
  display.style.backgroundImage = `url(${modList[0].fullSize})`
}
