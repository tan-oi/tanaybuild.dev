export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  status: "completed" | "wip" | "inactive";
  slug?: string;
  video?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Glyph",
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
    link: "https://glyph.tanaybuild.dev",
    image: "https://ik.imagekit.io/wqcnxo6ayi/ppt.png",
    status: "completed",
    video: "https://www.youtube.com/watch?v=V33sitDROyg",
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
    link: "https://flowdocs.tanaybuild.dev",
    github: "https://github.com/tan-oi/flowdoc",
    image: "https://ik.imagekit.io/wqcnxo6ayi/flowdocs.png",
    video: "https://www.youtube.com/watch?v=EyPwyjhCJvY",
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
    video: "https://youtu.be/QWej_nhIF-c",
    slug: "tracker",
    status: "completed",
  },
  {
    id: "5",
    title: "Testify",
    // slug: "testify",
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
    image: "https://ik.imagekit.io/wqcnxo6ayi/testify.png",
    video: "https://www.youtube.com/watch?v=kETYUSYRjnU",
    status: "inactive",
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

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  start: string;
  end: string;
  description: string;
  note?: string;
  tags?: string[];
  slug?: string;
  image?: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Software Engineer",
    company: "Chronicle",
    companyUrl: "https://chroniclehq.com/",
    start: "Jan 2026",
    end: "Jun 2026",
    description:
      "Worked across multiple streams. Owned and handled the exports service in close collaboration with the pod lead.",
    note: "first experience, had v fun working with the best team :)",
    tags: ["TypeScript", "React"],
    slug: "chronicle",
    image: "/chronicle.png",
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
    href: "https://x.com/tan0i_",
  },
];
