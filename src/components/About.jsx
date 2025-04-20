/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */
import { aboutItemsData } from "../data/aboutData";

const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">
        <div className="reveal-up rounded-2xl bg-zinc-800/50 p-7 md:p-12">
          <p className="mb-4 text-zinc-300 md:mb-8 md:text-xl">
            Welcome! I&apos;m Nguyễn Trung Hưng, I have a passion for building
            Mobile Solutions through clean code and problem solving. With the
            practice experience in the projects of the company and individuals,
            I set the goal of contributing my skills to the cooperation
            environment while developing as a versatile developer.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItemsData.map(({ label, number }, key) => (
              <div key={key}>
                <div className="items-center md:mb-2">
                  <span className="text-2xl font-bold text-sky-400 md:text-4xl">
                    {number}
                  </span>
                  {/* <span className="font-semibold text-sky-400 md:text-3xl">
                    +
                  </span> */}
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              </div>
            ))}
            <img
              src="/images/logo.png"
              width={40}
              height={40}
              alt="Logo"
              className="md: ml-auto h-[40px] md:w-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
