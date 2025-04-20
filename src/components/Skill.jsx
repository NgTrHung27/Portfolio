/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 * Components`
 */

import { skillsData } from "../data/skillsData";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Skills</h2>
        <p className="mb-8 mt-3 max-w-[50ch] text-zinc-400">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        {skillsData.map((category, index) => (
          <div
            key={index}
            className="mb-10"
          >
            <h3 className="reveal-up mb-4 text-xl font-bold">
              {category.category}
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3">
              {category.skills.map((skill, key) => (
                <SkillCard
                  key={key}
                  imgSrc={skill.imgSrc}
                  label={skill.label}
                  desc={skill.desc}
                  className="reveal-up"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
