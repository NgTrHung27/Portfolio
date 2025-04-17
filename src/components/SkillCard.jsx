/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import PropTypes from 'prop-types';

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={
        'group flex items-center gap-3 rounded-2xl p-3 ring-2 ring-inset ring-zinc-50/10 transition-colors hover:bg-zinc-800 ' +
        classes
      }
    >
      <figure className="h-12 w-12 overflow-hidden rounded-lg bg-zinc-700/50 p-2 transition-colors group-hover:bg-zinc-900">
        <img
          src={imgSrc}
          width={32}
          height={32}
          alt={label}
        />
      </figure>
      <div>
        <h3>{label}</h3>
        <p className="text-sm text-zinc-400">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.prototype = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};
export default SkillCard;
