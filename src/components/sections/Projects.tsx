import { ProjectCard, SectionHeader } from "@/components";

const projects = [
  {
    title: "WeARee!",
    role: "Lead Development & Project Management",
    image: "/images/wearee.webp",
    description:
      "Developed WeARee!, a SaaS platform enabling users to create interactive spaces, pages, and events without any coding knowledge. WeARee! aims to provide fun and innovative tools for building communities, accessible to anyone from anywhere. These tools include AR events, web page creation, virtual tours, 3D models, stamp rallies, and much more.",
    links: [
      {
        url: "https://wearee.jp",
        icon: "Link" as const,
        title: "Website",
      },
    ],
  },
  {
    title: "Computer Vision API",
    role: "Lead Development",
    description:
      "Developed a variety of machine learning APIs and models for internal use, specifically focusing on transparent image processing and analysis. With all the black-box steps of the deep neural networks are exposed in a human readable way as much as possible, ensuring clarity in the process.",
  },
  {
    title: "Natural Language Understanding API",
    role: "Lead Development",
    description:
      "Developed a variety of machine learning APIs and models for natural language understanding, with a focus on the Japanese language for internal company use. This includes keyword extraction, summarization, similarity index, emotion analysis, and many more.",
  },
  {
    title:
      "Artificial Musical Compositions Using Deep Belief Nets and Genetic Algorithms",
    role: "Author",
    description:
      "As a final project, I've designed an innovative method for composing music using a hybrid structure. The fitness function of a genetic algorithm is constructed from a k-means filter of an unsupervised neural network output. This structure allows for the emulation of human behaviors without introducing any bias.",
  },
];

export default function Projects() {
  return (
    <>
      <SectionHeader>Projects</SectionHeader>
      <div className="py-2 mx-2 flex flex-col gap-2">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </>
  );
}
