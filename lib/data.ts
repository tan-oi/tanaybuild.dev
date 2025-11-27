export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  status?: "completed" | "wip" | "inactive";
  slug: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "PPT",
    slug: "ppt",
    description:
      "An AI-powered presentation tool with a rich library of layouts and widgets. Create stunning, shareable slide decks in seconds using generative AI.",
    tags: [
      "next",
      "react",
      "TypeScript",
      "shadcn/ui",
      "tailwind",
      "motion",
      "prisma",
      "Better-auth",
      "Zustand",
    ],
    link: "https://ppt-hazel.vercel.app/",
    github: "https://github.com/tanay/nexus",
    image: "https://ik.imagekit.io/wqcnxo6ayi/ppt.png",
    status: "wip",
  },
  {
    id: "2",
    title: "Flowdocs",
    slug: "flowdocs",
    description:
      "A minimal, intelligent writing interface built on Tiptap. Features a reactive editor that adapts and assists as you type.",
    tags: [
      "next",
      "react",
      "TypeScript",
      "shadcn",
      "tailwind",
      "motion",
      "prisma",
      "React-query",
      "Zustand",
      "Better-auth",
    ],
    link: "https://flowdoc-delta.vercel.app/",
    github: "https://github.com/tan-oi/flowdoc",
    image: "https://ik.imagekit.io/wqcnxo6ayi/flowdocs.png",
    status: "completed",
  },
  {
    id: "3",
    title: "Contests tracker",
    description:
      "A centralized dashboard to track upcoming coding contests across major platforms like Codeforces, CodeChef, and LeetCode.",
    tags: ["react", "Mongodb", "Express"],
    link: "https://tracker-three-rho.vercel.app/",
    github: "https://github.com/tan-oi/tracker",
    image: "https://ik.imagekit.io/wqcnxo6ayi/tracker.png",
    slug: "tracker",
    status: "completed",
  },
  {
    id: "4",
    title: "Inagiffy",
    slug: "giffy",
    description:
      "Generates personalized learning roadmaps in seconds. Built in a 5-hour sprint using the Gemini API to tailor paths based on your experience.",
    tags: ["next", "react", "TypeScript", "tailwind", "shadcn/ui"],
    link: "https://inagiffy-one.vercel.app/",
    github: "https://github.com/tan-oi/inagiffy",
    image: "https://ik.imagekit.io/wqcnxo6ayi/tracker.png",
    status: "completed",
  },
  {
    id: "5",
    title: "Testify",
    slug: "testify",
    description:
      "A feedback collection platform inspired by Testimonials.to. Create custom forms to gather testimonials and easily embed them into your site.",
    tags: [
      "next",
      "react",
      "TypeScript",
      "tailwind",
      "shadcn/ui",
      "React-query",
      "Zustand",
    ],
    link: "https://testify-blond-six.vercel.app/",
    github: "https://github.com/tan-oi/testify",
    image: "https://ik.imagekit.io/wqcnxo6ayi/tracker.png",
    status: "completed",
  },
  {
    id: "6",
    title: "Eduversa",
    slug: "eduversa",
    description:
      "A comprehensive college management system built to streamline academic and administrative processes. (College Project).",
    tags: ["Mongodb", "Express", "react", "next"],
    link: "https://github.com/eduversa/eduversa.github.io",
    github: "https://github.com/eduversa/eduversa.github.io",
    image: "https://ik.imagekit.io/wqcnxo6ayi/eduversa.png",
    status: "inactive",
  },
];

export const contactTags = [
  {
    iconTag: "LinkedIn",
    href: "https://www.linkedin.com/in/tanay-ghoriwala",
  },
  {
    iconTag: "Github",
    href: "https://github.com/tan-oi",
  },
  {
    iconTag: "x",
    href: "https://x.com/tan0i",
  },
];
