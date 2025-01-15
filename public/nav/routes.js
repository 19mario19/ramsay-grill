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

export { routes }
