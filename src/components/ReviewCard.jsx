/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

import PropTypes from 'prop-types';

const ratings = new Array(5);
ratings.fill({
  icon: 'star',
  style: { fontVariationSettings: '"FILL" 1' },
});

const ReviewCard = ({ content, imgSrc, name, company }) => {
  return (
    <div className="flex min-w-[320px] flex-col rounded-xl bg-zinc-800 p-5 lg:min-w-[420px]">
      <div className="mb-3 flex items-center gap-1">
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            className="material-symbols-rounded text-[18px] text-yellow-300"
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>
      <p className="mb-8 text-zinc-400">{content}</p>
      <div className="mt-auto flex items-center gap-2">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover"
          />
        </figure>
      </div>

      <div>
        <p>{name}</p>
        <p className="text-xs tracking-wider text-zinc-400">
          {company}
        </p>
      </div>
    </div>
  );
};

ReviewCard.PropTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};
export default ReviewCard;
