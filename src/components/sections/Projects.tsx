import { SectionHeader, ShowcaseCard } from "@/components";

const projects = [
  {
    title: "WeARee!",
    subtitle: "Lead Development & Project Management",
    image: "/images/wearee.webp",
    description:
      "A SaaS platform where users can create interactive spaces, without any coding knowledge. WeARee! aims to provide fun and innovative tools for building communities, accessible to anyone from anywhere. These tools include AR events, web page creation, virtual tours, 3D models, stamp rallies, and much more.",
    links: [
      {
        url: "https://wearee.jp",
        icon: "Link" as const,
        title: "Website",
      },
    ],
  },
  {
    title: "Cryptocurrency Tax Calculator",
    subtitle: "Personal Project",
    description:
      "Most famous tax calculators either did not have proper support for the platforms I've used or was not supporting Japanese tax formula. Domestic tools were too expensive to justify, with these excuses created my own tax calculator to practice my web dev.",
    image: "/images/crypto.webp",
    links: [
      {
        url: "https://github.com/umutto/crypto-tax",
        icon: "Github" as const,
        title: "Repository",
      },
    ],
  },
  {
    title: "Buddy-19",
    subtitle: "Personal Project",
    description:
      "A web app that has been created during initial months of COVID-19 lockdown. A platform where multiple people can watch videos, play games and even create custom flows together using web sockets. Meant as a complimentary app for online meetings, thus the name buddy-19.",
    image: "/images/buddy.webp",
    links: [
      {
        url: "https://buddy.umu.to",
        icon: "Link" as const,
        title: "Demo",
      },
      {
        url: "https://github.com/umutto/buddy-19",
        icon: "Github" as const,
        title: "Repository",
      },
    ],
  },
  {
    title: "Computer Vision API",
    subtitle: "Lead Development",
    description:
      "Developed a variety of machine learning APIs and models for internal use, specifically focusing on transparent image processing and analysis. With all the black-box steps of the deep neural networks are exposed in a human readable way as much as possible, ensuring clarity in the process.",
    image: "/images/cv.webp",
  },
  {
    title: "Natural Language Understanding API",
    subtitle: "Lead Development",
    description:
      "Developed a variety of machine learning APIs and models for natural language understanding, with a focus on the Japanese language for internal company use. This includes keyword extraction, summarization, similarity index, emotion analysis, and many more.",
    image: "/images/nlp.webp",
  },
  {
    title:
      "Artificial Musical Compositions Using Deep Belief Nets and Genetic Algorithms",
    subtitle: "Author",
    description:
      "As a graduation project, I've designed an innovative method for composing music using a hybrid structure. The fitness function of a genetic algorithm is constructed from a k-means filter of an unsupervised neural network output. This structure allows for the emulation of human behaviors without introducing any bias.",
    image: "/images/graduation_project.webp",
    links: [
      {
        url: "/files/umut_karakulak-graduation_paper.pdf",
        icon: "GraduationCap" as const,
        title: "Paper",
        isFileDownload: true,
      },
    ],
  },
];

export default function Projects() {
  return (
    <>
      <SectionHeader>Projects</SectionHeader>
      <div className="py-2 mx-2 grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-4 xl:gap-6">
        {projects.map((project, idx) => (
          <ShowcaseCard key={idx} orientation="vertical" {...project} />
        ))}
      </div>
    </>
  );
}
