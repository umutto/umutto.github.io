import { SectionHeader, Timeline } from "@/components";

const timelineEvents = [
  {
    name: "DUNKSOFT Co.,Ltd",
    location: "Tokyo, Japan",
    image: "/images/dunksoft.webp",
    events: [
      {
        title: "Full Stack Engineer",
        dateFrom: new Date("2020-01-01"),
        dateTo: "present" as const,
        description:
          "Development lead and management of WeARee! an innovative community creation platform for everyone.",
      },
      {
        title: "Data Scientist",
        dateFrom: new Date("2017-01-01"),
        dateTo: new Date("2020-01-01"),
        description:
          "Research, data analysis, preparation and realization of in-house machine learning models and API's on a variety of problem domains.",
      },
    ],
  },
  {
    name: "obase",
    location: "Istanbul, Turkey",
    image: "/images/obase.webp",
    events: [
      {
        title: "Software Engineering Intern",
        dateFrom: new Date("2015-08-01"),
        dateTo: new Date("2015-11-01"),
        description:
          "Played an active role on development for an ERP project for a large e-commerce company.",
      },
    ],
  },
  {
    name: "DUNKSOFT Co.,Ltd",
    location: "Tokyo, Japan",
    image: "/images/dunksoft.webp",
    events: [
      {
        title: "Software Engineering Intern",
        dateFrom: new Date("2011-09-01"),
        dateTo: new Date("2011-11-01"),
        description:
          "Development of an innovative video conferencing tool using Microsoft Kinect for pose estimation and speech analysis.",
      },
    ],
  },
  {
    name: "Freelance",
    location: "Istanbul, Turkey",
    events: [
      {
        title: "Software Developer",
        dateFrom: new Date("2007-01-01"),
        dateTo: new Date("2010-01-01"),
        description:
          "Intermittently worked as a freelancer for a wide variety of companies including Microsoft Turkey. Developing mostly windows applications using .NET framework.",
      },
    ],
  },
];

export default function WorkHistory() {
  return (
    <>
      <SectionHeader>Work History</SectionHeader>
      <Timeline timeline={timelineEvents} />
    </>
  );
}
