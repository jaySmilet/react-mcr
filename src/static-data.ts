export type AccordionTypes = {
  id: number;
  title: string;
  content: string;
};

export const accordionData: AccordionTypes[] = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    id: 2,
    title: "What is Tailwind?",
    content:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is designed to be highly customizable and can be used to create a wide variety of designs.",
  },
  {
    id: 3,
    title: "What is Vite?",
    content:
      "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It is designed to be highly performant and can be used to build a wide variety of applications.",
  },
  {
    id: 4,
    title: "What is TypeScript?",
    content:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is designed to help developers write more maintainable and scalable code by adding static types and other features to the language.",
  },
];

interface mLink {
  title: string;
  path: string;
}

export const allLinks: mLink[] = [
  {
    title: "Accordion",
    path: "accordion",
  },
  {
    title: "EMI Calculator",
    path: "emi-calculator",
  },
  {
    title: "Star Rating",
    path: "star-rating",
  },
  {
    title: "Progress Bar",
    path: "progress-bar",
  },
  {
    title: "Folder Structure",
    path: "folder-structure",
  },
];

export interface Folder {
  name: string;
  isFold?: boolean;
  children?: Folder[];
}

export const folderData: Folder = {
  name: "root",
  isFold: true,
  children: [
    {
      name: "public",
      isFold: true,
      children: [
        {
          name: "assets",
          isFold: true,
          children: [
            {
              name: "images",
            },
            {
              name: "logo",
            },
          ],
        },
      ],
    },
    {
      name: "src",
      isFold: true,
      children: [
        {
          name: "App.tsx",
        },
        {
          name: "main.tsx",
        },
        {
          name: "App.css",
        },
      ],
    },
    {
      name: ".gitignore",
    },
    {
      name: ".eslint.config.js",
    },
    {
      name: "index.html",
    },
    {
      name: "package-lock.json",
    },
    {
      name: "README.md",
    },
  ],
};
