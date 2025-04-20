/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

import PropTypes from "prop-types";
import { useMemo } from "react";

const AchievementsCard = ({ title, time, organization, content, imgSrc }) => {
  // Xử lý nội dung để tách dòng và thêm bullets
  const processedContent = useMemo(() => {
    if (typeof content !== "string") return content;

    return content
      .split("\n")
      .filter(Boolean)
      .map((item, index) => (
        <div
          key={index}
          className="mb-1.5 flex items-start"
        >
          <span className="mr-1.5">•</span>
          <span>{item.trim()}</span>
        </div>
      ));
  }, [content]);

  return (
    <div className="flex h-full min-w-[320px] flex-col rounded-xl bg-zinc-800 p-5 lg:min-w-[420px]">
      {/* Phần nội dung - Thêm flex-grow và overflow */}
      <div className="mb-4 flex flex-1 flex-col overflow-hidden">
        {title && (
          <h3 className="mb-1 line-clamp-2 font-medium text-white">{title}</h3>
        )}

        {organization && (
          <p className="mb-2 line-clamp-1 text-sm text-zinc-300">
            {organization} {time && `• ${time}`}
          </p>
        )}

        <div className="flex-1 overflow-y-auto text-zinc-400">
          {processedContent}
        </div>
      </div>

      {/* Phần hình ảnh - Cố định tỷ lệ khung hình */}
      <div className="relative h-40 w-full shrink-0">
        <figure className="relative h-full w-full overflow-hidden rounded-lg bg-zinc-700/50">
          <img
            src={imgSrc}
            alt={title || "Achievement image"}
            loading="lazy"
            className="h-full w-full object-contain p-2"
          />
        </figure>
      </div>
    </div>
  );
};

AchievementsCard.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  organization: PropTypes.string,
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default AchievementsCard;
