/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 *
 * Components
 */
import { useState } from "react";
import { ButtonOutline, ButtonPrimary } from "./Button";
const Hero = () => {
  const [showCVModal, setShowCVModal] = useState(false);
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box rouded-lg h-9 w-9">
              <img
                src="/images/avatar-1.png"
                width={40}
                height={40}
                alt="ChunHuwqAVT"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-sm tracking-wide text-zinc-400">
              <span className="relative h-2 w-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 mb-8 mt-5 max-w-[15ch] sm:max-w-[20ch] lg:mb-10 lg:max-w-[15ch]">
            Build Modern, Stable and Scalable Mobile Applications for the future
          </h2>
          <div className="flex items-center gap-3">
            {/* DownLoad CV */}
            <a
              href="files/TrungHungMobileDevCV.pdf"
              download="TrungHungMobileDevCV.pdf"
            >
              <ButtonPrimary
                label="Download CV"
                icon="download"
              />
            </a>
            {/* Quick View CV */}
            <button
              onClick={() => setShowCVModal(true)}
              className="btn btn-outline w-full justify-center"
            >
              <span className="material-symbols-rounded inline-flex flex-shrink-0 items-center justify-center align-middle text-base">
                visibility
              </span>
              <span className="align-middle">Quick View CV</span>
            </button>
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="to ml-auto w-full max-w-[480px] overflow-hidden rounded-[60px] bg-gradient-to-t from-sky-400 via-sky-400/40 via-25% to-65%">
            <img
              src="/images/hero-chunhuwq-banner.png"
              width={666}
              height={800}
              alt="ChunHuwqBanner"
              className="w-full"
            />
          </figure>
        </div>
      </div>
      {/* CV Preview Modal */}
      {showCVModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="flex h-[80vh] w-full max-w-4xl flex-col rounded-lg bg-white">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="text-lg font-bold">CV Preview</h3>
              <button
                onClick={() => setShowCVModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="material-symbols-rounded">close</span>
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src="files/TrungHungMobileDevCV.pdf"
                className="h-full w-full"
                title="CV Preview"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
