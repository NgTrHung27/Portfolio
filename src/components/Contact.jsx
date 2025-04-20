/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

import { socialLinksData } from "../data/socialLinksData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section"
    >
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <div className="headline-2 reveal-up lg:max-w-[12ch]">
            Contact me for collaboration
          </div>
          <p className="reveal-up mb-8 mt-3 max-w-[50ch] text-zinc-400 lg:max-w-[30ch]">
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>
          <div className="mt-auto flex items-center gap-2">
            {socialLinksData.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                className="ring-inset-2 ring-zinc-50/2 reveal-up grid h-12 w-12 place-items-center rounded-lg ring-2 transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <form
          action="https://getform.io/f/bllydowb"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          {/* Name */}
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-2">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="label reveal-up"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Your name"
                className="text-field reveal-up"
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="label reveal-up"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="abc@example.com"
                className="text-field reveal-up"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="label reveal-up"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              className="text-field reveal-up max-h-80 min-h-32 resize-y"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary reveal-up w-full justify-center [&]:max-w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
