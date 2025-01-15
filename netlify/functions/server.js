import serverless from "serverless-http"
import express from "express"
import { routes } from "./routes.js"

const app = express()

app.use(express.static("public"))

// creating the routes
for (let i = 0; i < routes.length; i++) {
  const route = routes[i]

  if (route.folderBase.toLowerCase() === "home") {
    app.get("/", (_, res) => {
      res.redirect("/pages/home/home.html")
    })
  }

  app.get(route.link, (_, res) => {
    res.redirect(
      `pages/${route.folderBase.toLowerCase()}/${route.folderBase}.html`,
    )
  })

  if (route.children && route.children.length > 0) {
    for (let j = 0; j < route.children.length; j++) {
      const child = route.children[j]
      const link = route.link + child.link + "/"

      app.get(link, (_, res) => {
        let childFolderBase = child.folderBase.toLowerCase()
        res.redirect(
          `pages/${route.folderBase.toLowerCase()}/${childFolderBase}/${childFolderBase}.html`,
        )
      })
    }
  }
}

export const handler = serverless(app)
