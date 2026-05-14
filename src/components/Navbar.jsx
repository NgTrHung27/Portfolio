/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 *
 * Nodule Modules
 */
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const [activeSection, setActiveSection] = useState("home");

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  const updateActiveLink = (sectionId) => {
    const allLinks = document.querySelectorAll(".nav-link");
    allLinks.forEach((link) => link.classList.remove("active"));

    const targetLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (targetLink) {
      targetLink.classList.add("active");
      lastActiveLink.current = targetLink;

      if (activeBox.current) {
        activeBox.current.style.top = targetLink.offsetTop + "px";
        activeBox.current.style.left = targetLink.offsetLeft + "px";
        activeBox.current.style.width = targetLink.offsetWidth + "px";
        activeBox.current.style.height = targetLink.offsetHeight + "px";
      }
    }
  };

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);
    updateActiveLink(sectionId);

    const targetSection = document.querySelector(`#${sectionId}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId && sectionId !== activeSection) {
            setActiveSection(sectionId);
            updateActiveLink(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll(
      "#home, #about, #project, #experiences, #achievements"
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [activeSection]);

  useEffect(() => {
    initActiveBox();
    const handleResize = () => initActiveBox();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    {
      label: "Home",
      link: "#home",
      sectionId: "home",
      className: "nav-link active",
    },
    {
      label: "About",
      link: "#about",
      sectionId: "about",
      className: "nav-link",
    },
    {
      label: "Project",
      link: "#project",
      sectionId: "project",
      className: "nav-link",
    },
    {
      label: "Experiences",
      link: "#experiences",
      sectionId: "experiences",
      className: "nav-link",
    },
    {
      label: "Achievements",
      link: "#achievements",
      sectionId: "achievements",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      sectionId: "contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, sectionId, className }, key) => (
        <a
          href={link}
          key={key}
          ref={sectionId === "home" ? lastActiveLink : null}
          data-section={sectionId}
          className={className}
          onClick={(e) => handleNavClick(e, sectionId)}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
