import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { X, Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/assets/Charity Okechukwu2.pdf" },
  { name: "GitHub", href: "https://github.com/Chachi444" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        "fixed w-full z-40 transition-all duration-300 " + 
        (isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-lg" : "py-5")
      }
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Chacha </span>
            Portfolio
          </span>
        </a>

        {/*Desktop version*/}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, key) => {
            return (
              <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                {item.name}
              </a>
            );
          })}
          <ThemeToggle />
        </div>

        {/*Mobile version */}
        <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} 
        className="md:hidden p-2 text-foreground z-50"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >

          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={
          "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center " +
          "transition-all duration-300 md:hidden " +
          (isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none")
        }>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => {
              return (
                <a 
                  key={key} 
                  href={item.href} 
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
        