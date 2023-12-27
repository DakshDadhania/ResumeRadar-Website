const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Predict",
    path: "/predict",
    newTab: false,
  },
  {
    id: 5,
    title: "WebScrape",
    path: "/scraper",
    newTab: false,
  },
  {
    id: 6,
    title: "FileUpload",
    path: "/fileupload",
    newTab: false,
  },
  {
    id: 9,
    title: "Phish",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "AutoPhish",
        path: "/autophish",
        newTab: false,
      },
      {
        id: 42,
        title: "Phish",
        path: "/phish",
        newTab: false,
      }]
    },
  {
    id: 8,
    title: "Favicon",
    path: "/favicon",
    newTab: false,
  },
  {
    id: 9,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
    ],
  },
];
export default menuData;
