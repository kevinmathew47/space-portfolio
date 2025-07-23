import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Unity",
    image: "unity.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AR/VR",
    image: "arvr.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "UX/UI Design",
    image: "uxui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Cybersecurity",
    image: "cybersecurity.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "cpp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/kevin-mathew-47422a22b",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/kevinmathew47",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "UX/UI Design",
    image: "uxui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "cpp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Cybersecurity",
    image: "cybersecurity.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Unity",
    image: "unity.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AR/VR",
    image: "arvr.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Blender",
    image: "blender.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "3D Modeling",
    image: "3dmodeling.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Project Management",
    image: "projectmanagement.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "System Administration",
    image: "sysadmin.png",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "ZARA - Humanoid Tutor",
    description:
      'A revolutionary humanoid robot designed to teach programming languages including Java, C++, and Python. ZARA combines advanced AI with interactive learning methodologies to provide personalized tutoring experiences, making complex programming concepts accessible and engaging for students.',
    image: "/projects/project-1.png",
    link: "https://github.com/kevinmathew47",
  },
  {
    title: "Autonomous Driving Car",
    description:
      'An advanced autonomous vehicle system featuring real-time object detection, path planning, and decision-making algorithms. This project demonstrates cutting-edge computer vision and machine learning techniques to create a self-driving car capable of navigating complex environments safely and efficiently.',
    image: "/projects/project-2.png",
    link: "https://github.com/kevinmathew47",
  },
  {
    title: "AR/VR Development Portfolio",
    description:
      'A comprehensive collection of AR/VR applications and experiences developed using Unity and various immersive technologies. This portfolio showcases innovative solutions in virtual reality gaming, augmented reality filters, and geo-spatial applications that push the boundaries of digital interaction.',
    image: "/projects/project-3.png",
    link: "https://github.com/kevinmathew47",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Professional",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/kevin-mathew-47422a22b",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/kevinmathew47",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        name: "Divegrid - CTO",
        icon: null,
        link: "https://divegrid.com",
      },
      {
        name: "RigLabs Collectives",
        icon: null,
        link: "https://riglabs.com",
      },
      {
        name: "AR/VR Mentor",
        icon: null,
        link: "mailto:kevinmathew388@gmail.com",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email Me",
        icon: null,
        link: "mailto:kevinmathew388@gmail.com",
      },
      {
        name: "Location",
        icon: null,
        link: "https://maps.google.com/?q=Karukachal,Kerala,India",
      },
      {
        name: "Hire Me",
        icon: null,
        link: "mailto:kevinmathew388@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/kevinmathew47",
};
