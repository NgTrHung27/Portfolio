/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 * Components
 */
import { useEffect, useRef, useState } from "react";
import { achievementsData } from "../data/achivementsData";
import AchievementsCard from "./AchievementsCard";

export const Achievements = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Check if we can scroll left (scrollLeft > 0)
    setCanScrollLeft(container.scrollLeft > 0);

    // Check if we can scroll right (scrollLeft < max scroll position)
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setCanScrollRight(container.scrollLeft < maxScrollLeft - 5); // 5px threshold
  };

  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 0.8; // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk;
  };

  const scrollLeftArrow = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Scroll by card width + gap (approximately 300px)
      container.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRightArrow = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Scroll by card width + gap (approximately 300px)
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Initial check
      checkScrollPosition();
      // Add scroll event listener
      container.addEventListener("scroll", checkScrollPosition);
      // Check on window resize
      window.addEventListener("resize", checkScrollPosition);

      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  return (
    <section
      id="achievements"
      className="section overflow-hidden"
    >
      <div className="container relative">
        <h2 className="headline-2 reveal-up mb-8">Certificates & Award</h2>

        <div className="relative">
          {/* Left navigation arrow */}
          {canScrollLeft && (
            <button
              onClick={scrollLeftArrow}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800 bg-opacity-50 p-2 text-white transition-all hover:bg-opacity-70"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Right navigation arrow */}
          {canScrollRight && (
            <button
              onClick={scrollRightArrow}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800 bg-opacity-50 p-2 text-white transition-all hover:bg-opacity-70"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          {/* Scrollable container with completely hidden scrollbar */}
          <div
            ref={scrollContainerRef}
            className="flex cursor-grab overflow-x-auto pb-4 active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
              overscrollBehaviorX: "contain",
              scrollSnapType: "x mandatory",
              /* Hide scrollbar for all browsers */
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE and Edge */,
              WebkitOverflowScrolling: "touch",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="flex w-max gap-3">
              {achievementsData.map(
                ({ title, time, organization, content, imgSrc }, key) => (
                  <AchievementsCard
                    key={key}
                    title={title}
                    time={time}
                    organization={organization}
                    imgSrc={imgSrc}
                    content={content}
                    className="reveal-up scroll-snap-align-start"
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
