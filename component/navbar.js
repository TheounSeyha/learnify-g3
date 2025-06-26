// navbar.js

const navbarHTML = `
  <nav class="bg-white dark:bg-gray-800 shadow px-4 sm:px-6 py-3 flex items-center justify-between w-full">
    <div class="flex items-center gap-3 animate-slide-in-left">
      <img src="../asset/logo.png" alt="Logo" class="h-9 w-9" />
      <span class="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
        Learnify
      </span>
    </div>

    <ul class="hidden md:flex items-center gap-8 font-medium animate-fade-in-up">
      <li><a href="#" class="hover:text-blue-600">Home</a></li>
      <li><a href="#" class="hover:text-blue-600">Courses</a></li>
      <li><a href="#" class="hover:text-blue-600">Career</a></li>
      <li><a href="#" class="hover:text-blue-600">About Us</a></li>
      <li><a href="#" class="hover:text-blue-600">Contact</a></li>
    </ul>

    <div class="flex items-center gap-4 animate-slide-in-right">
      <button class="relative text-gray-600 hover:text-blue-600 dark:text-gray-300">
        <i class="bx bx-cart text-xl"></i>
        <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          3
        </span>
      </button>

      <button id="themeToggle" class="text-gray-700 dark:text-gray-200 hover:text-blue-600 p-2">
        <i class="bx bx-moon text-xl"></i>
      </button>

      <a href="#" class="bg-blue-500 px-5 py-2 rounded-full font-medium text-sm hidden sm:inline-block animate-zoom-in" id="openLogin" >
        Register Now
      </a>
      <button class="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 p-2">
        <i class="bx bx-menu text-2xl"></i>
      </button>
    </div>
  </nav>
`;

document.getElementById("app-navbar").innerHTML = navbarHTML;

// navbar.js  (loaded as type="module")
import { setupLoginModal } from "../src/js/login-modal.js";

// 🗂️ build the correct URL next to this JS file
const modalURL = new URL("./login-modal.html", import.meta.url);

fetch(modalURL)
  .then(res => res.text())
  .then(html => {
    document.getElementById("modalContainer").innerHTML = html;
    setupLoginModal();
  });

// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }

  toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

