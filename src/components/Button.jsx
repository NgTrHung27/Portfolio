/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 *
 * Node Modules
 */
import PropTypes from "prop-types";

/**
 * Primary Button
 */
const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes,
  onClick,
}) => {
  // Handle mailto links differently with a fallback
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }

    if (href?.startsWith("mailto:")) {
      e.preventDefault();
      window.location.href = href;
    }
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-primary " + (classes || "")}
        onClick={handleClick}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {label}
        {icon ? (
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
          >
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else
    return (
      <button
        className={"btn btn-primary " + (classes || "")}
        onClick={onClick}
      >
        {label}{" "}
        {icon ? (
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
          >
            {icon}
          </span>
        ) : undefined}
      </button>
    );
};

// Fix the typo: prototype -> propTypes
ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

/**
 * Outline Button
 */
const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  classes,
  onClick,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-outline " + (classes || "")}
        onClick={onClick}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {label}
        {icon ? (
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
          >
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else
    return (
      <button
        className={"btn btn-outline " + (classes || "")}
        onClick={onClick}
      >
        {label}{" "}
        {icon ? (
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
          >
            {icon}
          </span>
        ) : undefined}
      </button>
    );
};

// Fix the typo: prototype -> propTypes
ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

export { ButtonOutline, ButtonPrimary };
