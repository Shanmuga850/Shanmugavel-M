"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const about =
  "Founder and Product Owner — Shanmugavel Book Universe.\nFounder of Food Psycho.\nAuthor, Narrator, Publisher and storyteller by choice.\nAuthor and Narrator of Gun Story.\nAuthor and Narrator of Life with the Blessing and Curses.\nMasters in Electronics by degree,\nI build worlds where you can get lost and found.";
const links = [
  ["Instagram", "https://www.instagram.com/___shanmugavel___850/"],
  ["LinkedIn", "https://www.linkedin.com/in/shanmugavel-m-324a601b2/"],
  ["GitHub", "https://github.com/Shanmuga850/"],
  ["X / Twitter", "https://x.com/shanmugavel850"],
  ["YouTube", "https://www.youtube.com/@THEBLUEWHALEOFFICAL"],
  ["Book Universe", "https://shanmugavel-bookuniverse.vercel.app/"],
  ["Food Psycho", "https://foodpsycho.vercel.app"],
  ["Email", "mailto:shanmugavelvetri@gmail.com"],
  ["Behance", "https://shanmugavel-bookuniverse.vercel.app/audiobooks/fd07c1b8-4ca2-49e8-af30-478622713196"],
  ["Resume", "#resume"],
];

const projects = [
  {
    number: "01",
    title: "Book Universe",
    type: "Worlds, stories, and beautiful exits",
    description:
      "A growing universe of stories for dreamers, rebels, and anyone looking for a place to belong.",
    href: "https://shanmugavel-bookuniverse.vercel.app/",
  },
  {
    number: "02",
    title: "Food Psycho",
    type: "Founder / food / feeling",
    description:
      "A playful food project built around curiosity, honest cravings, and the joy of a good obsession.",
    href: "https://foodpsycho.vercel.app",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />

      <nav className="topbar">
        <a className="brand flex items-center gap-3 font-bold tracking-[0.15em] text-[17px]" href="#top" aria-label="Shanmugavel M home">
          <Image src="/logo.png" width={48} height={48} alt="Shanmugavel M logo" className="rounded-full w-12 h-12" />
          SHANMUGAVEL.M
        </a>
        <a className="availability" href="mailto:shanmugavelvetri@gmail.com">
          <span className="status-dot" /> Open to good stories
        </a>
      </nav>

      <section className="hero" id="top">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">Founder · Full Stack Developer · Author</p>
          <Image
            src="/logo.png"
            width={96}
            height={96}
            alt="Shanmugavel Book Universe logo"
            className="mb-6 rounded-full shadow-[0_0_40px_rgba(255,215,0,0.5)] w-20 h-20 md:w-24 md:h-24"
          />
         <h1 className="uppercase">Shanmugavel</h1>
          <p className="hero-line">
            I make things for people who still believe the world can be more interesting.
          </p>
        </motion.div>

        <motion.div
          className="portrait-wrap"
          initial={{ opacity: 0, scale: 0.88, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <Image className="portrait" src="/founder.jpg" alt="Shanmugavel M - Founder of Book Universe and Food Psycho" width={200} height={200} priority />
          <span className="portrait-caption">the person behind it all</span>
        </motion.div>
      </section>

      <section className="about section-rule" id="about">
        <p className="section-label">About / 001</p>
        <div className="about-content">
          <p className="about-copy whitespace-pre-line leading-relaxed">{about}</p>
          <p className="margin-note">Still becoming.<br />Always building.</p>
        </div>
      </section>

      <section className="projects section-rule" id="projects">
        <div className="section-heading">
          <p className="section-label">Selected projects / 002</p>
          <p className="section-aside">Two little universes<br />with room to grow.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.a
              className={`project-card project-${index + 1}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.number}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <span className="project-number">{project.number}</span>
              <div>
                <p className="project-type">{project.type}</p>
                <h2>{project.title}</h2>
              </div>
              <p className="project-description">{project.description}</p>
              <span className="project-arrow">↗</span>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="links section-rule" id="links">
        <div className="section-heading">
          <p className="section-label">Find me elsewhere / 003</p>
          <p className="section-aside">The internet is a<br />big, friendly room.</p>
        </div>
        <div className="links-grid">
          {links.map(([label, href], index) => (
            <motion.a
              href={href}
              target={href.startsWith("http")? "_blank" : undefined}
              rel={href.startsWith("http")? "noreferrer" : undefined}
              key={label}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {label}
              <b>↗</b>
            </motion.a>
          ))}
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Shanmugavel M</span>
        <span>Made with curiosity &amp; caffeine</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}