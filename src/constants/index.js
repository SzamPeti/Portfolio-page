import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  space,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Security Analysis Intern",
    company_name: "Schönherz Iskolaszövetkezet (Cetin Hungary Zrt.)",
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Analyzing incoming DLP logs every day.",
      "Session Monitoring",
      "Antivirus, IDP and IPS alerts handling, in case opening tickets and upgradeing the problems to a L2 colleague.",
      "Handleing security incidents and solving user issues.",
    ],
  },
  {
    title: "University of Dunaújváros",
    company_name: "Tesla",
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Present",
    points: [
      "Through my university sudies i learned useing and installing Linux Debian operating system.",
      "Learned HTML, CSS, basic JavaScript and PHP knowledge.",
      "My curriculum is focused on network system, so learned about web security, builed network system in Cisco Packet Tracer.",
      "Worked a little with C# and make a project in Python.",
    ],
  },
  {
    title: "Mészáros Gaszto Kft.",
    company_name: "Tesla",
    iconBg: "#383E56",
    date: "Nov 2018 - Feb 2022",
    points: [
      "I worked in a restaurant as a waiter near the M1 highway.",
      "The company operated a few more restaurants so in case we helpedn eash other with employees.",
      "Besieds the everyday water jobs we made catering for events (year ending party, company trainings, weddings, big familly events, etc).",
      "My main location was the mentioned restaurant which had a hotel on the upper levels and at daytime i was the recepcionist also.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Webshop",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Space Tourism Website",
    description:
      "I made this page based on a challange on Frontendmentor.io, Not my best work but i'm proud of it because i could use any tool i want and improve through the process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: space,
    source_code_link: "https://github.com/SzamPeti/space-tourism-website",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
