"use client";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";


export default function Home() {
  const navLinks = useRef([]);
  const [activeLink, setActiveLink] = useState("about");

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setActiveLink(sectionId);
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (direction) => {
    const currentIndex = navLinks.current.findIndex(
      (link) => link && link.classList.contains("active")
    );
    if (currentIndex === -1) return;

    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = navLinks.current.length - 1;
    else if (newIndex >= navLinks.current.length) newIndex = 0;

    const targetLink = navLinks.current[newIndex];
    if (targetLink) {
      setActiveLink(targetLink.getAttribute("href").substring(1));
      const targetSection = document.getElementById(
        targetLink.getAttribute("href").substring(1)
      );
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="section1 flex justify-center items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
          {/* Left Column (Image) */}
          <div className="hidden md:flex md:col-span-5 flex-col justify-end">
            <img
              className="w-full p-3 pl-0"
              src="/assets/yours-charan-goud-digital.png"
              alt="yours-charan-goud-digital"
            />
          </div>

          {/* Right Column (Content) */}
          <div className="scroll col-span-5">
            <div className="hiddenu flex flex-col justify-center">
              <section className="box" id="about"><About/></section>
              <section className="box" id="skills"><Skills/></section>
              <section className="box" id="projects"><Projects/></section>              
              <section className="box" id="education"><Education/></section>
              <section className="box" id="certifications"><Certifications/></section>
              <section className="box" id="gallery"><Gallery/></section>
              <section className="box" id="contact"><Contact/></section>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex md:col-span-2 flex-col justify-center items-end">
            <nav className="flex flex-col items-end space-y-2">
              {['about', 'skills', 'projects', 'education', 'certifications', 'gallery', 'contact'].map((sectionId, index) => (
                <a
                  key={sectionId}
                  ref={(el) => (navLinks.current[index] = el)}
                  className={`text-white hover:text-gray-300 transition ${activeLink === sectionId ? "font-bold underline" : ""}`}
                  href={`#${sectionId}`}
                  onClick={(e) => handleLinkClick(e, sectionId)}
                >
                  {sectionId.toUpperCase()}
                </a>
              ))}
            </nav>
            <div className="flex w-full justify-end items-end space-x-2 mt-4">
              <button
                className="pnbtn p-2 bg-gray-800 text-white rounded transition"
                onClick={() => handleNavigation(-1)}
              >
                <FontAwesomeIcon icon={faLessThan} />
              </button>
              <button
                className="pnbtn p-2 bg-gray-800 text-white rounded transition"
                onClick={() => handleNavigation(1)}
              >
                <FontAwesomeIcon icon={faGreaterThan} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}