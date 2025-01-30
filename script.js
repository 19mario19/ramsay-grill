import fs from "fs/promises"
import { Layout } from "./layout.js"

const routes = [
  {
    name: "Home",
    folderBase: "home",
    link: "/",
  },
  {
    name: "Book now",
    folderBase: "book-now",
    link: "/book-now",
  },
  {
    name: "Menus",
    folderBase: "menus",
    link: "/menus",
  },
  {
    name: "@Bar & Grill - Mayfair",
    folderBase: "bar-grill",
    link: "/at-bar-and-grill-mayfair",
    children: [
      {
        name: "Restaurant",
        folderBase: "restaurant",
        link: "/restaurant",
      },
      {
        name: "Butcher's Block",
        folderBase: "butcher-block",
        link: "/butches-block-experience",
      },
      {
        name: "Gallery",
        folderBase: "gallery",
        link: "/galery",
      },
      {
        name: "Take A Tour",
        folderBase: "take-a-tour",
        link: "/take-a-tour",
      },
    ],
  },
  {
    name: "Groups & Events",
    folderBase: "gourps-events",
    link: "/private-dining-and-events",
    children: [
      {
        name: "Group Dining",
        folderBase: "group-dining",
        link: "/group-dining",
      },
      {
        name: "Private Dining",
        folderBase: "private-dining",
        link: "/private-dining",
      },
      {
        name: "Exclusive Hiring",
        folderBase: "exclusive-hire",
        link: "/exclusive-hire",
      },
    ],
  },
  {
    name: "What's on",
    folderBase: "what-is-on",
    link: "/what-is-on",
  },
  {
    name: "Gifting",
    folderBase: "gifting",
    link: "/gifting",
  },
]

async function checkFileExists(path) {
  try {
    await fs.access(path)
    return true
  } catch {
    return false
  }
}

async function createFolderPath(routes, rootPath = "") {
  try {
    if (rootPath !== "") {
      if (!(await checkFileExists(rootPath))) {
        await fs.mkdir(rootPath, { recursive: true })
      }

      for (let i = 0; i < routes.length; i++) {
        const route = routes[i]
        const folderName = rootPath + "/" + route.folderBase

        if (!(await checkFileExists(folderName))) {
          await fs.mkdir(folderName, { recursive: true })
        }

        const fileName = folderName + "/" + route.folderBase

        if (!(await checkFileExists(fileName + ".html"))) {
          await fs.writeFile(fileName + ".html", Layout(route))
        }

        if (!(await checkFileExists(fileName + ".js"))) {
          await fs.writeFile(fileName + ".js", "")
        }

        if (!(await checkFileExists(fileName + ".css"))) {
          await fs.writeFile(fileName + ".css", "")
        }

        if (route.children && route.children.length > 0) {
          for (let j = 0; j < route.children.length; j++) {
            const routeChild = route.children[j]
            const folderNameChild =
              rootPath + "/" + route.folderBase + "/" + routeChild.folderBase

            if (!(await checkFileExists(folderNameChild))) {
              await fs.mkdir(folderNameChild, { recursive: true })
            }

            const fileNameChild = folderNameChild + "/" + routeChild.folderBase

            if (!(await checkFileExists(fileNameChild + ".html"))) {
              await fs.writeFile(
                fileNameChild + ".html",
                Layout(routeChild, route.folderBase),
              )
            }

            if (!(await checkFileExists(fileNameChild + ".js"))) {
              await fs.writeFile(fileNameChild + ".js", "")
            }

            if (!(await checkFileExists(fileNameChild + ".css"))) {
              await fs.writeFile(fileNameChild + ".css", "")
            }
          }
        }
      }
    }
  } catch (error) {
    console.log("Could not create the folders!", error)
  } finally {
    console.log("Request completed!")
  }
}

createFolderPath(routes, "public/pages")
