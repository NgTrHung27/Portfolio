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
    label: "Project",
    href: "#Project",
  },
  {
    label: "Experiences",
    href: "#experiences",
  },
  {
    label: "Achievements",
    href: "#achievements",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/NgTrHung27",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ngtrhung27",
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

            {/* Email button with copy fallback */}
            <div className="flex flex-col">
              <ButtonPrimary
                href="mailto:trunghungpq456@gmail.com"
                label="Start project"
                icon="chevron_right"
                classes="reveal-up"
                onClick={(e) => {
                  e.preventDefault();

                  // Try multiple approaches
                  const email = "trunghungpq456@gmail.com";

                  try {
                    // First attempt: window.location
                    window.location.href = `mailto:${email}`;

                    // Set a timeout to check if it failed (will run if page doesn't navigate away)
                    setTimeout(() => {
                      // Copy email as fallback
                      navigator.clipboard.writeText(email).then(() => {
                        alert("Email address copied to clipboard: " + email);
                      });
                    }, 500);
                  } catch (err) {
                    // If all else fails, show the email
                    console.log(err);
                    alert("Please email me at: " + email);
                  }
                }}
              />
              <span className="reveal-up mt-2 text-xs text-zinc-400">
                Or email directly at: trunghungpq456@gmail.com
              </span>
            </div>
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
              src="/images/logo.png"
              width={60}
              height={60}
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
