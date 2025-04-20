/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ratings = new Array(5);
ratings.fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1' },
});

const ReviewCard = ({ content, imgSrc, name }) => {
  return (
    <div className="flex min-w-[320px] rounded-xl bg-zinc-800 p-5 lg:min-w-[420px]">
      {/* Content area (60%) */}
      <div className="w-[60%] pr-4">
        <p className="whitespace-pre-line text-zinc-400">{content}</p>
      </div>

      {/* Image area (40%) */}
      <div className="flex w-[40%] items-center justify-center">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            width={100}
            height={100}
            loading="lazy"
            className="img-cover"
          />
        </figure>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
