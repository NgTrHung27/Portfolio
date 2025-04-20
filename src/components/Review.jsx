/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 * Node module
 */
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Register gsap plugin
 */
gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to avoid React version discrepancies
/**
 * Components
 */

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content:
      "IELTS \n - 11/2024 \n - Total Score: 5.0 - with the ability to: \n + Prociency in Speaking communication (6.0). \n + Moderate Procient in reading reference documents.",
    name: "Sophia Ramirez",
    imgSrc: "/images/ielts.png",
    company: "PixelForge",
  },
  {
    content:
      "DEVELOPING 101: INTO THE INDUSTRY \n - 12/2021 \n - The Digibeet \n - First Prizes",
    name: "Ethan Caldwell",
    imgSrc: "/images/The Digibeet.png",
    company: "NexaWave",
  },
  {
    content:
      "TOP 20 STUDENTS OF THE ENTIRE INFORMATION TECHNOLOGY FACULTY. \n - 03/2025 \n - HUFLIT \n - TOP 20",
    name: "Ethan Caldwell",
    imgSrc: "/images/top20_HUFLIT.jpeg",
    company: "NexaWave",
  },
];

export const Review = () => {
  // useGSAP(() => {
  //   gsap.to(".scrub-slide", {
  //     scrollTrigger: {
  //       trigger: ".scrub-slide",
  //       start: "-200% 80%",
  //       end: "400% bottom 80%",
  //       scrub: true,
  //     },
  //     x: "-1000",
  //   });
  // });
  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">
        <h2 className="headline-2 reveal-up mb-8">Certificates & Award</h2>
        <div className="scrub-slide flex w-fit items-stretch gap-3">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
              className="reveal-up max-w-[5ch]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
