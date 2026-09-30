
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ logo }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Home",
    "Features",
    "Showcase",
    "Industries",
    "Pricing",
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="fixed top-1 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-3 text-white shadow-2xl shadow-black/10">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleScroll("Home")}
            className="flex items-center group"
          >
            <img
              src={logo}
              alt="Schedule"
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className="
                  text-sm
                  font-medium
                  text-white/70
                  hover:text-white
                  transition-colors
                  duration-300
                "
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => window.open("https://www.app.ischedule.ca", "_blank")}
              className="
                px-4
                py-2
                text-sm
                font-medium
                text-white/70
                hover:text-white
                transition-colors
              "
            >
              Login
            </button>
            <button
              onClick={() => window.open("https://www.app.ischedule.ca/signup", "_blank")}
              className="
                px-4
                py-2
                text-sm
                font-medium
                text-white/70
                hover:text-white
                transition-colors
              "
            >
              Signup
            </button>

            <button
              onClick={() => handleScroll("Demo")}
              className="
                px-5
                py-2.5
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-400
                text-white
                text-sm
                font-semibold
                shadow-lg
                shadow-cyan-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(item)}
                  className="
                    text-left
                    px-3
                    py-3
                    rounded-lg
                    text-sm
                    font-medium
                    text-white/70
                    hover:bg-white/10
                    hover:text-white
                    transition-colors
                  "
                >
                  {item}
                </button>
              ))}

              <div className="mt-2 pt-3 border-t border-white/10">
                <button
                  onClick={() => window.open("https://www.app.ischedule.ca", "_blank")}
                  className="
                    w-full
                    py-3
                    px-3
                    text-left
                    text-sm
                    font-medium
                    text-white/70
                    hover:text-white
                  "
                >
                  Login
                </button>      <button
                  onClick={() => window.open("https://www.app.ischedule.ca/signup", "_blank")}
                  className="
                    w-full
                    py-3
                    px-3
                    text-left
                    text-sm
                    font-medium
                    text-white/70
                    hover:text-white
                  "
                >
                  Signup
                </button>

                <button
                  onClick={() => handleScroll("Demo")}
                  className="
                    w-full
                    mt-2
                    py-3
                    rounded-xl
                    bg-cyan-500
                    hover:bg-cyan-400
                    text-white
                    font-semibold
                    text-sm
                    transition-colors
                  "
                >
                  Book a Demo
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

