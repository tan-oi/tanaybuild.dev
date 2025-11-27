import Github from "./github";
import LinkedIn from "./linkedin";
import Motion from "./motion";
import NextJs from "./next";
import Prisma from "./prisma";
import ReactIcon from "./react";
import Shadcn from "./shadcn";
import TailwindCss from "./tailwind";
import TypeScript from "./typescript";
import X from "./x";
import { Mail } from "lucide-react";
import Zustand from "./zustand";
import MongoDB from "./mongodb";
import Express from "./express";
import Tanstack from "./tanstack";
import BetterAuth from "./better-auth";
export const ICON_REGISTRY = {
  next: NextJs,
  prisma: Prisma,
  TypeScript: TypeScript,
  "shadcn/ui": Shadcn,
  tailwind: TailwindCss,
  motion: Motion,
  react: ReactIcon,
  x: X,
  LinkedIn: LinkedIn,
  Github: Github,
  Email: Mail,
  Zustand: Zustand,
  Mongodb: MongoDB,
  Express: Express,
  "React-query": Tanstack,
  "Better-auth": BetterAuth,
};
