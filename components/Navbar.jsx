"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "@/styles/navbar.css";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    // Disable body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <header>
      <div className={`navbar ${scrolled ? "scrolled" : "notScrolled"}`}>
        <div className="container">
          <div className="navbar_container">
            <Link href="/" className="nav_logo">
              Walshak
            </Link>

            <div className="desktop_navlinks">
              <div className="desktop_link">
                {[
                  { href: "#resume", label: "Resume" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${pathname === link.href ? "active" : "inactive"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href={"#contact"}>
              <Button
                size="sm"
                className="desktop_btn"
              >
                Contact Me
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <div className="mobile_hamburger_section">
              <button
                id="menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
              // onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <div className="burger_lines">
                  <span
                    className={`
                      ${isMenuOpen ? "open" : "close"}
                    `}
                  />
                  <span
                    className={`
                      ${isMenuOpen ? "open" : "close"}
                    `}
                  />
                  <span
                    className={`
                      ${isMenuOpen ? "open" : "close"}
                    `}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu_overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mobile_menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mobile_menu_contents">
                {[
                  { href: "#resume", label: "Resume" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((link, index) => (
                  <motion.div
                    key={link.label}
                    variants={linkVariants}
                    custom={index}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={` ${pathname === link.href ? "active" : "inactive"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}