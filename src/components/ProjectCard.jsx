/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 * Node Modules
 */

import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  className,
  companyName,
  companyLink,
  features,
  description,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const handleToggle = () => {
    setExpanded((v) => !v);
    if (!interacted) setInteracted(true);
  };
  return (
    <div
      className={
        "relative rounded-2xl bg-zinc-700/60 p-4 ring-1 ring-inset ring-zinc-50/5 transition-colors hover:bg-zinc-700/50 " +
        (className || "")
      }
    >
      <figure className="img-box relative mb-4 aspect-[16/9] overflow-hidden rounded-lg">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover object-center"
        />
        {companyName &&
          (companyLink ? (
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-2 top-2 z-10 inline-flex items-center rounded-lg bg-zinc-900/70 px-3 py-1 text-xs font-medium text-zinc-100 ring-1 ring-white/10 backdrop-blur hover:bg-sky-300 hover:text-zinc-900"
            >
              {companyName}
            </a>
          ) : (
            <span className="absolute right-2 top-2 z-10 inline-flex items-center rounded-lg bg-zinc-900/70 px-3 py-1 text-xs font-medium text-zinc-100 ring-1 ring-white/10 backdrop-blur">
              {companyName}
            </span>
          ))}
      </figure>
      {/* Row 1: Title left + Expand + Project icon */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="title-1">{title}</h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={expanded}
            aria-controls="project-details"
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-zinc-50/5 text-zinc-300 ring-1 ring-white/10 hover:bg-zinc-50/10 ${
              interacted ? "" : "animate-pulse"
            }`}
            title={expanded ? "Collapse details" : "Expand details"}
          >
            <span
              className={`material-symbols-rounded transition-transform duration-200 ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
            >
              expand_more
            </span>
          </button>
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-400 text-zinc-950 hover:bg-sky-300"
              aria-label="Open project"
            >
              <span
                className="material-symbols-rounded"
                aria-hidden="true"
              >
                arrow_outward
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Row 2: Technical tags */}
      {Array.isArray(tags) && tags.length > 0 && (
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {tags.map((label, key) => (
            <span
              key={key}
              className="grid h-8 items-center rounded-lg bg-zinc-50/5 px-3 text-sm text-zinc-400"
            >
              {label}
            </span>
          ))}
        </div>
      )}

      {/* Expandable: Features + Description */}
      {(features || description) && (
        <div
          id="project-details"
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-[320px]" : "max-h-0"
          }`}
        >
          {features && (
            <div className="mb-2 text-sm text-zinc-300">
              <span className="font-semibold text-zinc-200">Features: </span>
              <span className="text-sm leading-relaxed text-zinc-400">
                {features}
              </span>
            </div>
          )}
          {description && (
            <div className="mb-2 text-sm text-zinc-300">
              <span className="font-semibold text-zinc-200">Description: </span>{" "}
              <span className="text-sm leading-relaxed text-zinc-400">
                {description}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  className: PropTypes.string,
  companyName: PropTypes.string,
  companyLink: PropTypes.string,
  features: PropTypes.string,
  description: PropTypes.string,
};
export default ProjectCard;
