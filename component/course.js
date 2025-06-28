/******************************************************************
 * courses.js  —  card rendering + fully-working mini-cart
 ******************************************************************/

/* ----------------------------------------------------------------
   0.  SAMPLE DATA  (unchanged except we add an id + numeric price)
   ---------------------------------------------------------------- */
   const courses = [
    {
      id: 1,
      image: "https://thetutorbridge.com/blog/wp-content/uploads/2025/02/Data-Science-Course.webp",
      title: "IT Statistics Data Science And Business Analysis",
      rating: "4.5",
      reviews: "1.2k",
      price: 50.0,
      lessons: 10,
      duration: "24h",
      students: "20+",
      instructor: "Ong Endy",
      avatar: "/asset/imageLogin/user.jpg"
    },
    {
      id: 2,
      image: "https://www.tekkiwebsolutions.com/wp-content/uploads/html5-benefits.svg",
      title: "HTML5 Complete Course For Beginners",
      rating: "4.8",
      reviews: "890",
      price: 45.0,
      lessons: 8,
      duration: "18h",
      students: "30+",
      instructor: "Ong Endy",
       avatar: "/asset/imageLogin/user.jpg"
    },
    {
      id: 3,
      image: "https://i0.wp.com/epthinktank.eu/wp-content/uploads/2018/09/shutterstock_1054622195.jpg?fit=1000%2C1000&ssl=1",
      title: "Blockchain Essentials & Smart Contracts",
      rating: "4.6",
      reviews: "1.5k",
      price: 60.0,
      lessons: 12,
      duration: "30h",
      students: "50+",
      instructor: "Ong Endy",
     avatar: "/asset/imageLogin/user.jpg"
    },
    {
      id: 4,
      image: "https://www.keycdn.com/img/support/full-stack-development.png",
      title: "full Stack Web Development Bootcamp",
      rating: "4.9",
      reviews: "2.1k",
      price: 55.0,
      lessons: 14,
      duration: "28h",
      students: "40+",
      instructor: "Ong Endy",
      avatar: "/asset/imageLogin/user.jpg"
    }
  ];
  
  
  /* ----------------------------------------------------------------
     1.  CART  →  helpers + persistence
     ---------------------------------------------------------------- */
  const CART_KEY = "learnify-cart";
  let cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  
  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
  
  function cartContains(id) {
    return cart.some(item => item.id === id);
  }
  
  function addToCart(course) {
    if (!cartContains(course.id)) {
      cart.push(course);
      saveCart();
      syncCartUI();
      showNotification(`${course.title} added to cart!`);
    }
  }
  
  function removeFromCart(id) {
    const course = cart.find(item => item.id === id);
    cart = cart.filter(item => item.id !== id);
    saveCart();
    syncCartUI();
    showNotification(`${course.title} removed from cart`, true);
  }
  
  function getCartTotal() {
    return cart.reduce((sum, c) => sum + c.price, 0);
  }
  
  function showNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-md shadow-lg text-white font-medium text-sm ${
      isError ? 'bg-red-500' : 'bg-green-500'
    } animate-fade-in-out`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('opacity-0', 'transition-opacity', 'duration-300');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
  
  
  /* ----------------------------------------------------------------
     2.  UI  →  badge, sidebar list, total
     ---------------------------------------------------------------- */
  const badge = document.getElementById("cartCount");
  const sidebar = document.getElementById("cartSidebar");
  const listEl = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  
  function syncCartUI() {
    /* badge */
    badge.textContent = cart.length;
    badge.classList.toggle("hidden", cart.length === 0);
  
    /* list */
    listEl.innerHTML = "";
    if (cart.length === 0) {
      listEl.innerHTML = `
        <div class="flex flex-col items-center justify-center py-10 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p class="text-center">Your cart is empty</p>
          <p class="text-sm text-center">Start adding courses to see them here</p>
        </div>`;
    } else {
      cart.forEach(item => {
        const li = document.createElement("li");
        li.className = "flex gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-600 last:border-0";
        li.innerHTML = `
          <img src="${item.image}" class="w-16 h-16 object-cover rounded-lg" alt="${item.title}">
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium truncate">${item.title}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">$${item.price.toFixed(2)}</p>
          </div>
          <button data-remove="${item.id}"
                  class="self-center text-gray-400 hover:text-red-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>`;
        listEl.appendChild(li);
      });
    }
  
    /* total */
    totalEl.innerHTML = `
      <span class="text-gray-600 dark:text-gray-300">Total:</span>
      <span class="text-lg font-bold text-purple-600 dark:text-purple-400">$${getCartTotal().toFixed(2)}</span>`;
  }
  
  
  /* ----------------------------------------------------------------
     3.  BUILD COURSE CARDS (Improved styling)
     ---------------------------------------------------------------- */
  function createCourseCard(course) {
    const card = document.createElement("div");
    card.className = `
      bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg
      transition-shadow duration-300 border border-gray-100 dark:border-gray-700
      flex flex-col h-full`;
    
    card.innerHTML = `
      <div class="relative">
        <img src="${course.image}" alt="Course Image"
             class="w-full h-48 object-cover">
        <div class="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm 
                    rounded-full px-3 py-1 flex items-center text-sm font-semibold
                    text-purple-600 dark:text-purple-400 shadow-sm">
          $${course.price.toFixed(2)}
        </div>
      </div>
      
      <div class="p-5 flex-1 flex flex-col">
        <div class="flex justify-between items-start mb-3">
          <div class="flex items-center space-x-1">
            <div class="flex items-center text-yellow-400">
              ${Array.from({length: 5}).map((_, i) => 
                i < Math.floor(course.rating) ? 
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>' : 
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-gray-300" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'
              ).join('')}
            </div>
            <span class="text-sm text-gray-600 dark:text-gray-300 ml-1">
              ${course.rating} (${course.reviews})
            </span>
          </div>
        </div>
        
        <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
          ${course.title}
        </h3>
        
        <div class="mt-auto">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              ${course.lessons} Lessons
            </span>
            <span class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ${course.duration}
            </span>
            <span class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              ${course.students}
            </span>
          </div>
          
          <div class="flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-4">
            <div class="flex items-center space-x-2">
              <img src="${course.avatar}" alt="${course.instructor}"
                   class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-600 shadow-sm">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                ${course.instructor}
              </span>
            </div>
            <button data-add="${course.id}"
                    class="bg-purple-600 hover:bg-purple-700 text-white
                           text-sm font-medium py-2 px-4 rounded-lg transition-colors
                           flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Enroll
            </button>
          </div>
        </div>
      </div>`;
    return card;
  }
  
  document
    .getElementById("course-grid")
    .append(...courses.map(createCourseCard));
  
  
  /* ----------------------------------------------------------------
     4.  GLOBAL EVENT DELEGATION
     ---------------------------------------------------------------- */
  document.addEventListener("click", (e) => {
    /* ── add to cart ────────────────────────────────────────────── */
    if (e.target.matches("[data-add], [data-add] *")) {
      const btn = e.target.closest("[data-add]");
      const id = +btn.dataset.add;
      const course = courses.find(c => c.id === id);
      if (course) addToCart(course);
    }
  
    /* ── remove from cart ───────────────────────────────────────── */
    if (e.target.matches("[data-remove], [data-remove] *")) {
      const btn = e.target.closest("[data-remove]");
      const id = +btn.dataset.remove;
      removeFromCart(id);
    }
  });
  
  /* ── open / close sidebar ─────────────────────────────────────── */
  document.getElementById("cartToggleBtn").onclick = () => {
    sidebar.classList.toggle("translate-x-full");
    document.body.classList.toggle("overflow-hidden");
  }
  
  document.getElementById("cartCloseBtn").onclick = () => {
    sidebar.classList.add("translate-x-full");
    document.body.classList.remove("overflow-hidden");
  }
  
  /* Close sidebar when clicking outside */
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !e.target.closest('#cartToggleBtn') && !sidebar.classList.contains('translate-x-full')) {
      sidebar.classList.add("translate-x-full");
      document.body.classList.remove("overflow-hidden");
    }
  });
  
  /* ----------------------------------------------------------------
     5.  INITIALISE  (restore cart from localStorage)
     ---------------------------------------------------------------- */
  syncCartUI();