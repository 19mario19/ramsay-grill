import { routes } from "./routes.js"
import { Footer } from "./footer.js"

function createBanner(root) {
  const container = document.createElement("div")
  container.className = "banner"
  container.id = "banner"

  const titleA = document.createElement("a")
  titleA.href = "/"

  const title = document.createElement("div")
  title.className = "title"

  titleA.appendChild(title)

  const name = document.createElement("div")
  name.className = "name"
  title.appendChild(name)
  container.appendChild(titleA)

  const nameTop = document.createElement("p")
  nameTop.textContent = "GORDON"
  name.appendChild(nameTop)

  const nameBottom = document.createElement("p")
  nameBottom.className = "title-name"
  nameBottom.textContent = "RAMSAY"
  name.appendChild(nameBottom)

  const type = document.createElement("h3")
  type.className = "title-type"
  type.textContent = "BAR&GRILL"
  title.appendChild(type)

  const location = document.createElement("h4")
  location.textContent = "MAYFAIR"
  title.appendChild(location)

  const locationContainer = document.createElement("div")
  locationContainer.className = "location"
  container.appendChild(locationContainer)

  const locationIcon = document.createElement("img")
  locationIcon.src = "/assets/icons/location-pin.png"
  locationContainer.appendChild(locationIcon)

  const address = document.createElement("p")
  address.className = "address"
  address.textContent = "10 - 13 Grosvenor Square, London, W1K 6JP"

  locationContainer.appendChild(address)

  const numberContainer = document.createElement("div")
  numberContainer.className = "number"
  container.appendChild(numberContainer)

  const numberIcon = document.createElement("img")
  numberIcon.src = "/assets/icons/call-black-auricular-interface-symbol.png"
  numberContainer.appendChild(numberIcon)

  const number = document.createElement("p")
  number.className = "number"
  number.textContent = "0207 495 2211"

  numberContainer.appendChild(number)

  const socials = document.createElement("div")
  socials.className = "socials"

  const x = document.createElement("img")
  x.src = "/assets/icons/x.png"
  const facebook = document.createElement("img")
  facebook.src = "/assets/icons/facebook-logo.png"
  const instagram = document.createElement("img")
  instagram.src = "/assets/icons/instagram-symbol.png"
  const tiktok = document.createElement("img")
  tiktok.src = "/assets/icons/Tiktok-icon-on-transparent-background-PNG.png"
  const linkedin = document.createElement("img")
  linkedin.src = "/assets/icons/linkedin-logo.png"

  socials.append(x, facebook, instagram, tiktok, linkedin)
  container.appendChild(socials)

  // mobile

  const burger = document.createElement("div")
  burger.className = "burger"

  const menuIcon = document.createElement("img")
  menuIcon.src = "/assets/icons/menu.png"
  burger.appendChild(menuIcon)

  const ul = document.createElement("ul")

  menuIcon.addEventListener("click", () => {
    ul.classList.toggle("active")
  })

  let liParentsList = []

  for (let i = 0; i < routes.length; i++) {
    if (i === 0) continue
    const parent = routes[i]

    const liParent = document.createElement("li")
    ul.appendChild(liParent)

    const aParent = document.createElement("a")
    aParent.href = parent.link
    aParent.textContent = parent.name

    if (parent.name.toLowerCase() === "gifting") {
      liParent.className = "gifting"
    }

    liParent.appendChild(aParent)

    if (parent.children && parent.children.length > 0) {
      liParentsList.push(liParent)

      const ulChild = document.createElement("ul")
      liParent.className = "parent"
      liParent.appendChild(ulChild)
      // add class active to enable children
      liParent.addEventListener("click", () => {
        liParent.classList.toggle("active")

        // removing active from other (to have just one active)
        for (let i = 0; i < liParentsList.length; i++) {
          const el = liParentsList[i]

          if (el !== liParent) {
            el.classList.remove("active")
            el.querySelector("ul").classList.remove("active")
          }
        }

        ulChild.classList.toggle("active")
      })

      for (let j = 0; j < parent.children.length; j++) {
        const child = parent.children[j]

        const liChild = document.createElement("li")
        ulChild.appendChild(liChild)

        const aChild = document.createElement("a")

        aChild.href = parent.link + child.link

        aChild.textContent = child.name

        liChild.appendChild(aChild)
      }
    }
  }
  burger.appendChild(ul)

  container.appendChild(burger)

  root.insertBefore(container, root.firstChild)
}

function createNavbar(root) {
  const nav = document.createElement("nav")
  root.insertBefore(nav, root.firstChild)

  const ul = document.createElement("ul")

  for (let i = 0; i < routes.length; i++) {
    if (i === 0) continue
    const parent = routes[i]

    const liParent = document.createElement("li")
    ul.appendChild(liParent)

    const aParent = document.createElement("a")
    aParent.href = parent.link
    aParent.textContent = parent.name

    if (parent.name.toLowerCase() === "gifting") {
      liParent.className = "gifting"
    }

    liParent.appendChild(aParent)

    if (parent.children && parent.children.length > 0) {
      const ulChild = document.createElement("ul")
      liParent.className = "parent"
      liParent.appendChild(ulChild)

      for (let j = 0; j < parent.children.length; j++) {
        const child = parent.children[j]

        const liChild = document.createElement("li")
        ulChild.appendChild(liChild)

        const aChild = document.createElement("a")

        aChild.href = parent.link + child.link

        aChild.textContent = child.name

        liChild.appendChild(aChild)
      }
    }
  }
  nav.appendChild(ul)

  // mobile

  const icons = document.createElement("div")
  icons.className = "icons"

  const aLocation = document.createElement("a")
  aLocation.href = ""
  const locationIcon = document.createElement("img")
  locationIcon.src = "/assets/icons/location-pin-white.png"
  aLocation.appendChild(locationIcon)

  const aNumebr = document.createElement("a")
  aNumebr.href = ""
  const numberIcon = document.createElement("img")
  numberIcon.src =
    "/assets/icons/call-black-auricular-interface-symbol-white.png"
  aNumebr.appendChild(numberIcon)

  icons.append(aLocation, aNumebr)

  nav.appendChild(icons)
}

function createFooter(parent) {
  const parser = new DOMParser()

  const doc = parser.parseFromString(Footer, "text/html")

  const footerElement = doc.querySelector("footer")

  parent.appendChild(footerElement)

  // form
  const form = footerElement.querySelector("#book-table")

  const dateInput = footerElement.querySelector("#date")
  const timeInput = footerElement.querySelector("#time")
  const sizeInput = footerElement.querySelector("#size")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    let obj = {
      date: dateInput.value,
      time: timeInput.value,
      size: sizeInput.value,
    }

    console.log(obj)

    // reset
    dateInput.value = ""
    timeInput.value = ""
    sizeInput.value = ""
  })
}

window.addEventListener("DOMContentLoaded", () => {
  const body = document.body
  createNavbar(body)
  createBanner(body)

  createFooter(body)
})
