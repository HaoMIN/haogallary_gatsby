import { nanoid } from "nanoid"

// INDEX DATA
export const indexData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: require("../images/Leaf.jpg"),
    title: "Title1",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: require("../images/Leaf.jpg"),
    title: "Title2",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
]

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "instagram",
      url: "",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "",
    },
    {
      id: nanoid(),
      name: "github",
      url: "",
    },
  ],
}
