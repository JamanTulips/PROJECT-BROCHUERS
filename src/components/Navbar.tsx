"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => (pathname === path ? "active" : "");

  return (
    <div className="container-fluid bg-primary">
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg py-0">
          <Link href="/" className="navbar-brand">
            <h1 className="text-white fw-bold d-block">
              Koju<span className="text-secondary"> IT SOLUTIONS</span>{" "}
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-transparent"
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto mx-xl-auto p-0">
              <Link
                href="/"
                className={`nav-item nav-link ${pathname === "/" ? "active text-secondary" : ""
                  }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`nav-item nav-link ${isActive("/about")}`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`nav-item nav-link ${isActive("/services")}`}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`nav-item nav-link ${isActive("/projects")}`}
              >
                Projects
              </Link>
              <div className={`nav-item dropdown ${["/team", "/blog", "/testimonials"].includes(pathname) ? "active" : ""}`}>
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${["/team", "/blog", "/testimonials"].includes(pathname) ? "text-secondary" : ""}`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link href="/blog" className={`dropdown-item ${isActive("/blog") ? "active" : ""}`}>Our Blog</Link>
                  <Link href="/team" className={`dropdown-item ${isActive("/team") ? "active" : ""}`}>Our Team</Link>
                  <Link href="/testimonials" className={`dropdown-item ${isActive("/testimonials") ? "active" : ""}`}>Testimonial</Link>
                </div>
              </div>
              <Link
                href="/contact"
                className={`nav-item nav-link ${isActive("/contact")}`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="d-none d-xl-flex flex-shirink-0">
            <div
              id="phone-tada"
              className="d-flex align-items-center justify-content-center me-4"
            >
              <a
                href="tel:+9779704788132"
                className="position-relative animated tada infinite"
              >
                <i className="fa fa-phone-alt text-white fa-2x"></i>
                <div
                  className="position-absolute"
                  style={{ top: "-7px", left: "20px" }}
                >
                  <span>
                    <i className="fa fa-comment-dots text-secondary"></i>
                  </span>
                </div>
              </a>
            </div>
            <div className="d-flex flex-column pe-4 border-end">
              <span className="text-white-50">Have any questions?</span>
              <span className="text-secondary">Call: +977 9704788132</span>
            </div>
            <div className="d-flex align-items-center justify-content-center ms-4 ">
              <a href="#">
                <i className="bi bi-search text-white fa-2x"></i>{" "}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
