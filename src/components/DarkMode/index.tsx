import { useEffect } from "react";
import sun from '../../assets/icons/sun.svg'
import moon from '../../assets/icons/moon.svg'
import Image from "next/image";

export const DarkMode = () => {

  useEffect(() => {
    localStorage.setItem("color-theme", "light");
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      themeToggleLightIcon?.classList.remove("hidden");
    } else {
      themeToggleDarkIcon?.classList.remove("hidden");
    }
    const handleClick = () => {
      // toggle icons inside button
      themeToggleDarkIcon?.classList.toggle("hidden");
      themeToggleLightIcon?.classList.toggle("hidden");

      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    };
    themeToggleBtn?.addEventListener("click", handleClick);

    return () => {
      themeToggleBtn?.removeEventListener("click", handleClick);
    };
  }, [])
    return (
      <>
          <button id="theme-toggle">
            <Image src={moon} alt="Moon" id="theme-toggle-dark-icon" className="hidden" />
            <Image src={sun} alt="Sun" id="theme-toggle-light-icon" className="hidden" />
          </button>
      </>
    )
}
