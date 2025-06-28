/* component/navbar.js */
import { setupLoginModal } from "../src/js/login-modal.js";

/* ----------------------------- HTML Template ----------------------------- */
const navbarHTML = /*html*/ `
  <nav class="bg-white dark:bg-gray-800 shadow px-4 sm:px-6 py-3 flex items-center justify-between w-full">
    <div class="flex items-center gap-3 animate-slide-in-left">
      <img src="/asset/logo.png" alt="Logo" class="h-9 w-9" />
      <span class="text-xl text-blue-500 font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text ">
        Learnify
      </span>
    </div>

    <ul class="hidden md:flex items-center gap-8 font-medium animate-fade-in-up">
      <li><a href="/index.html" class="hover:text-blue-600">Home</a></li>
      <li><a href="/component/Course.html" class="hover:text-blue-600">Courses</a></li>
      <li><a href="/component/career.html" class="hover:text-blue-600">Career</a></li>
      <li><a href="/src/HTML/AboutUs.html" class="hover:text-blue-600">About Us</a></li>
      <li><a href="/src/HTML/contact.html" class="hover:text-blue-600">Contact</a></li>
      
    </ul>

    <div class="flex items-center gap-4">
      <!-- Cart Icon -->
      <button id="cartToggleBtn"
              class="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                     transition-transform duration-300 hover:scale-110 focus:outline-none">
       <a href="component/Payment.html">
         <i class="bx bx-cart text-2xl"></i>
        </a>
   
      </button>

      <!-- Cart Slide-Over -->
      <aside id="cartSidebar"
             class="fixed top-0 right-0 h-full w-80 max-w-full bg-white dark:bg-gray-800 shadow-xl
                    translate-x-full transition-transform duration-300 z-50 flex flex-col">
        <header class="flex justify-between items-center px-4 py-3 border-b dark:border-gray-700">
          <h3 class="text-lg font-bold">My Courses</h3>
          <button id="cartCloseBtn" class="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">✕</button>
        </header>
        <ul id="cartItems" class="flex-1 overflow-y-auto divide-y dark:divide-gray-700"></ul>
        <div class="p-4 border-t dark:border-gray-700">
          <button id="checkoutBtn"
                  class="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-lg">
            Proceed to Checkout
          </button>
        </div>
      </aside>

 

      <!-- Mobile Menu Toggle -->
      <button id="mobileToggle" class="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 p-2">
        <i class="bx bx-menu text-2xl"></i>
      </button>

      <!-- Theme Toggle -->
      <button id="themeToggle" class="ml-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 p-2">
        <i class="bx bx-moon text-2xl"></i>
      </button>
           <!-- Login/Register Button -->
      <a href="#loginModal" id="openLoginModal"
         class="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-medium text-sm hidden sm:inline-block">
        Register Now
      </a>
    </div>
  </nav>
`;

/* ------------------------- Inject Navbar into DOM ------------------------ */
const navbarContainer = document.getElementById("app-navbar");
if (navbarContainer) {
  navbarContainer.innerHTML = navbarHTML;
}

/* ------------------------ Load Modal HTML Content ------------------------ */
const modalURL = new URL("./login-modal.html", import.meta.url);
fetch(modalURL)
  .then((res) => res.text())
  .then((html) => {
    const modalContainer = document.getElementById("modalContainer");
    if (modalContainer) {
      modalContainer.innerHTML = html;
      setupLoginModal();
    }
  });

/* ------------------------------- Dark Mode ------------------------------- */
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

/* ---------------------------- Mobile Navigation -------------------------- */
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.querySelector("nav ul");
if (mobileToggle && navLinks) {
  mobileToggle.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
  });

  /* -------------------------- Highlight Active Link -------------------------- */
const currentPath = window.location.pathname;

document.querySelectorAll("nav ul li a").forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("text-blue-600", "font-semibold" ,"border-b-2", "border-blue-600");
  }
});
}
