"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <Link href="/" className={styles.logoLink} aria-label="Qsystems AI home">
          <img src="/img/qsystems.png" alt="Qsystems AI" className={styles.logo} />
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`${styles.navGroup} ${isMenuOpen ? styles.open : ""}`}
          id="primary-navigation"
        >
          <div className={styles.links}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive(link.href) ? styles.active : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/contact" className={styles.cta} onClick={() => setIsMenuOpen(false)}>
            Request A Demo
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
