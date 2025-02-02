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
    template: "/templates/gallery",
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
        template: "/templates/events",
      },
      {
        name: "Private Dining",
        folderBase: "private-dining",
        link: "/private-dining",
        template: "/templates/events",
      },
      {
        name: "Exclusive Hiring",
        folderBase: "exclusive-hire",
        link: "/exclusive-hire",
        template: "/templates/events",
      },
    ],
  },
  {
    name: "What's on",
    folderBase: "what-is-on",
    link: "/what-is-on",
    template: "/templates/events",
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

async function copyFile(from, to) {
  try {
    const file = await fs.readFile(from, "utf-8")
    if (!(await checkFileExists(to))) {
      await fs.writeFile(to, file)
    } else {
      console.log(`Skipped (already exists): ${to}`)
    }
  } catch (error) {
    console.log(`Error copying file: \n${from} ---> \n${to}`, error)
  }
}

async function createFolderPath(routes, rootPath = "") {
  console.log("Creation begins!")
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

        const parentTemplate = route.template

        if (!(await checkFileExists(fileName + ".html"))) {
          let template = ""
          if (parentTemplate) {
            const templateName = parentTemplate.split("/")[2]
            template = await fs.readFile(
              "public" + parentTemplate + "/" + templateName + ".html",
              "utf-8",
            )
          }
          await fs.writeFile(
            fileName + ".html",
            Layout(route, "", template ?? ""),
          )
        }

        if (!(await checkFileExists(fileName + ".js"))) {
          if (parentTemplate) {
            const templateName = parentTemplate.split("/")[2]
            const script = await fs.readFile(
              "public" + parentTemplate + "/" + templateName + ".js",
            )
            await fs.writeFile(fileName + ".js", script)
          } else await fs.writeFile(fileName + ".js", "")
        }

        if (!(await checkFileExists(fileName + ".css"))) {
          if (parentTemplate) {
            const templateName = parentTemplate.split("/")[2]
            const style = await fs.readFile(
              "public" + parentTemplate + "/" + templateName + ".css",
            )
            await fs.writeFile(fileName + ".css", style)
          } else await fs.writeFile(fileName + ".css", "")
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
            const childTemplate = routeChild.template

            if (!(await checkFileExists(fileNameChild + ".html"))) {
              let template = ""
              if (childTemplate) {
                const templateName = childTemplate.split("/")[2]
                template = await fs.readFile(
                  "public" + childTemplate + "/" + templateName + ".html",
                  "utf-8",
                )
              }

              await fs.writeFile(
                fileNameChild + ".html",
                Layout(routeChild, route.folderBase, template ?? ""),
              )
            }

            if (!(await checkFileExists(fileNameChild + ".js"))) {
              if (childTemplate) {
                const templateName = childTemplate.split("/")[2]

                if (childTemplate) {
                  await copyFile(
                    "public" + childTemplate + "/" + templateName + ".js",
                    fileNameChild + ".js",
                  )
                }
              } else await fs.writeFile(fileNameChild + ".js", "")
            }

            if (!(await checkFileExists(fileNameChild + ".css"))) {
              if (childTemplate) {
                const templateName = childTemplate.split("/")[2]

                if (childTemplate) {
                  await copyFile(
                    "public" + childTemplate + "/" + templateName + ".css",
                    fileNameChild + ".css",
                  )
                }
              } else await fs.writeFile(fileNameChild + ".css", "")
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
