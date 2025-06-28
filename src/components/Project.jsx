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
  // Tách projects thành web và app
  const webProjects = projectsData.filter((project) => project.type === "web");
  const appProjects = projectsData.filter((project) => project.type === "app");

  return (
    <section
      id="project"
      className="section"
    >
      <div className="container">
        <h2 className="headline-2 reveal-up mb-8">Project highlights</h2>
        {/* Mobile Apps Section */}
        <h3 className="reveal-up mb-4 text-center text-2xl font-bold">
          Mobile Apps Projects
        </h3>
        {appProjects.length > 0 && (
          <div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5">
              {appProjects.map(({ imgSrc, title, tags, projectLink }, key) => (
                <ProjectCard
                  key={`app-${key}`}
                  imgSrc={imgSrc}
                  title={title}
                  tags={tags}
                  projectLink={projectLink}
                  className="reveal-up"
                />
              ))}
            </div>
          </div>
        )}
        {/* Web Projects Section */}
        <h3 className="reveal-up mb-4 mt-10 text-center text-2xl font-bold">
          Website Projects
        </h3>
        {webProjects.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5">
              {webProjects.map(({ imgSrc, title, tags, projectLink }, key) => (
                <ProjectCard
                  key={`web-${key}`}
                  imgSrc={imgSrc}
                  title={title}
                  tags={tags}
                  projectLink={projectLink}
                  className="reveal-up"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
