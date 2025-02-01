function Layout(route, parentPath = "", template = "") {
  const fullPath = parentPath
    ? `${parentPath}/${route.folderBase}`
    : route.folderBase

  return /*html*/ `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/global.css" />
    <link rel="stylesheet" href="/pages/${fullPath}/${route.folderBase}.css" >
    <script src="/pages/${fullPath}/${route.folderBase}.js" type="module" defer></script>
    <script src="/nav/nav.js" type="module" defer></script>
    <title>${route.name}</title>
</head>
<body>
    ${template}
</body>
</html>
`
}

export { Layout }
