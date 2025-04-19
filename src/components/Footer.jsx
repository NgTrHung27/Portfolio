/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";
const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/codewithsadee-org",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/codewithsadee",
  },
  {
    label: "Twitter X",
    href: "https://x.com/codewithsadee_",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithsadee",
  },
  {
    label: "CodePen",
    href: "https://codepen.io/codewithsadee",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg: grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 reveal-up mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:trunghungpq456@gmail.com"
              label="Start project"
              icon="chevron_right"
              className="reveal-up"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="reveal-up mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="reveal-up block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="reveal-up mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="reveal-up block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8 flex items-center justify-between pt-10">
          <a
            href=""
            className="logo reveal-up"
          >
            <img
              src="/images/logo.svg"
              width={40}
              height={49}
              alt="Logo"
              className="reveal-up"
            />
          </a>
          <p className="reveal-up to-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-200">Nguyễn Trung Hưng</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
