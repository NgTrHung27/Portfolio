/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of experience",
    number: 10,
  },
];
const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">
        <div className="reveal-up rounded-2xl bg-zinc-800/50 p-7 md:p-12">
          <p className="mb-4 text-zinc-300 md:mb-8 md:text-xl">
            Welcome! I&apos;m Henry, a professional web developer with a knack
            for crafting visually stunning and highly functional websites.
            Combining creativity and technical expertise. I transform your
            vision into digital masterpiece that excels in both appearance and
            performance.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="font-semibold text-sky-400 md:text-3xl">
                    +
                  </span>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              </div>
            ))}
            <img
              src="/images/logo.svg"
              width={30}
              height={30}
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
