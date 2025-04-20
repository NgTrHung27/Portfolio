/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 * Components`
 */

import ProjectCard from "./ProjectCard";
const works = [
  {
    imgSrc: "/images/StudyAbroadApp.png",
    title: "Study Abroad Consulting",
    tags: [
      "Dart/Flutter",
      "BloC",
      "RESTful API",
      "GeminiAI",
      "socket.io",
      "FCM",
    ],
    projectLink: "https://github.com/NgTrHung27/StudyAbroad_App",
  },
  {
    imgSrc: "/images/CloudWorkApp.png",
    title: "CloudWORK",
    tags: [
      "Dart/Flutter",
      "BloC",
      "RESTful API",
      "Calendar",
      "Quill",
      "Google Map",
      "FCM",
    ],
    projectLink: "https://apps.apple.com/vn/app/cloudgo/id6474986122",
  },
  {
    imgSrc: "/images/CloudEventApp.png",
    title: "CloudEVENT",
    tags: [
      "Dart/Flutter",
      "BloC",
      "RESTful API",
      "Ticket",
      "FCM",
      "Location",
      "QR Code Scanner",
    ],
    projectLink: "https://apps.apple.com/vn/app/cloudgo/id6474986122",
  },
  {
    imgSrc: "/images/StudyAbroadWeb.png",
    title: "Study Abroad Consulting",
    tags: [
      "Typescript",
      "Next JS 13",
      "Tailwind CSS",
      "ShadCN U",
      "Auth.js",
      "FCM",
    ],
    projectLink: "https://github.com/NgTrHung27/StudyAbroad_Admin",
  },
  {
    imgSrc: "/images/AblyChat.png",
    title: "Ably Chat",
    tags: ["Dart/Flutter", "socket.io"],
    projectLink: "https://github.com/NgTrHung27/AblyChat_DemoFlutter",
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">
        <h2 className="headline-2 reveal-up mb-8">My Project highlights</h2>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              className="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
