/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 * Components`
 */

import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
const Project = () => {
  return (
    <section
      id="project"
      className="section"
    >
      <div className="container">
        <h2 className="headline-2 reveal-up mb-8">Project highlights</h2>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5">
          {projectsData.map(({ imgSrc, title, tags, projectLink }, key) => (
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

export default Project;
