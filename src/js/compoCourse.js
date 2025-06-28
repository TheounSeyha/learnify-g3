document.addEventListener("DOMContentLoaded", () => {
  const courses = [
    {
      id: 1,
      image: "https://thetutorbridge.com/blog/wp-content/uploads/2025/02/Data-Science-Course.webp",
      title: "IT Statistics, Data Science & Business Analysis",
      rating: "4.5",
      reviews: "1.2k",
      price: "$50.00",
      originalPrice: "$99.00",
      lessons: 10,
      duration: "24h",
      students: "20+",
      instructor: "Ong Endy",
      avatar: "/asset/imageLogin/user.jpg",
      category: "Data Science"
    },
    {
      id: 2,
      image: "https://www.tekkiwebsolutions.com/wp-content/uploads/html5-benefits.svg",
      title: "HTML5 Complete Course For Beginners",
      rating: "4.8",
      reviews: "2.4k",
      price: "$45.00",
      originalPrice: "$89.00",
      lessons: 8,
      duration: "18h",
      students: "30+",
      instructor: "Ong Endy",
      avatar: "/asset/imageLogin/user.jpg",
      category: "Web Development"
    },
    {
      id: 3,
      image: "https://i0.wp.com/epthinktank.eu/wp-content/uploads/2018/09/shutterstock_1054622195.jpg?fit=1000%2C1000&ssl=1",
      title: "Blockchain Essentials & Smart Contracts",
      rating: "4.6",
      reviews: "1.8k",
      price: "$60.00",
      originalPrice: "$120.00",
      lessons: 12,
      duration: "30h",
      students: "50+",
      instructor: "Ong Endy",
      avatar: "/asset/imageLogin/user.jpg",
      category: "Blockchain"
    },
    {
      id: 4,
      image: "https://www.keycdn.com/img/support/full-stack-development.png",
      title: "full Stack Web Development Bootcamp",
      rating: "4.9",
      reviews: "3.1k",
      price: "$55.00",
      originalPrice: "$110.00",
      lessons: 14,
      duration: "28h",
      students: "40+",
      instructor: "Ong Endy",
      avatar: "/asset/imageLogin/user.jpg",
      category: "Content Creation"
    },
    {
      id: 5,
      image: "https://thetutorbridge.com/blog/wp-content/uploads/2025/02/Data-Science-Course.webp",
      title: "Advanced JavaScript Patterns",
      rating: "4.7",
      reviews: "1.5k",
      price: "$65.00",
      originalPrice: "$130.00",
      lessons: 15,
      duration: "32h",
      students: "35+",
      instructor: "Ong Endy",
      avatar: "/asset/imageLogin/user.jpg",
      category: "Web Development"
    },
    {
      id: 6,
      image: "https://thetutorbridge.com/blog/wp-content/uploads/2025/02/Data-Science-Course.webp",
      title: "Machine Learning Fundamentals",
      rating: "4.8",
      reviews: "2.2k",
      price: "$75.00",
      originalPrice: "$150.00",
      lessons: 18,
      duration: "36h",
      students: "45+",
      instructor: "Ong Endy",
      avatar: "/asset/imageLogin/user.jpg",
      category: "Data Science"
    },
    {
      id: 7,
      image: "https://thetutorbridge.com/blog/wp-content/uploads/2025/02/Data-Science-Course.webp",
      title: "UI/UX Design Principles and Tools",
      rating: "4.9",
      reviews: "2.8k",
      price: "$50.00",
      originalPrice: "$100.00",
      lessons: 12,
      duration: "24h",
      students: "60+",
      instructor: "Ong Endy",
      avatar: "/asset/imageLogin/user.jpg",
      category: "Design"
    },
    {
      id: 8,
      image: "https://thetutorbridge.com/blog/wp-content/uploads/2025/02/Data-Science-Course.webp",
      title: "DevOps & Cloud Deployment",
      rating: "4.7",
      reviews: "1.7k",
      price: "$70.00",
      originalPrice: "$140.00",
      lessons: 16,
      duration: "34h",
      students: "30+",
      instructor: "Ong Endy",
      avatar: "/asset/imageLogin/user.jpg",
      category: "DevOps"
    }
  ];

  const courseGrid = document.getElementById("courseGrid");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const filterButtons = document.querySelectorAll(".filter-btn");
  let visibleCount = 4;
  let filteredCourses = [...courses];

  function renderCourses() {
    if (!courseGrid) {
      console.error("Course grid element not found.");
      return;
    }

    const visibleCourses = filteredCourses.slice(0, visibleCount);

    courseGrid.innerHTML = visibleCourses
      .map(
        (course) => `
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-shadow duration-200">
          <a href="detailcard.html?courseId=${course.id}" class="block">
            <div class="relative">
              <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover">
              <div class="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                ${course.category}
              </div>
              <div class="absolute top-3 right-3 bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 text-sm font-bold px-3 py-1 rounded-full flex items-center">
                ${course.price}
                <span class="text-xs text-gray-500 dark:text-gray-400 line-through ml-1">${course.originalPrice}</span>
              </div>
            </div>
            <div class="p-5">
              <div class="flex items-center mb-3">
                <div class="flex items-center text-yellow-400">
                  ${'★'.repeat(Math.floor(parseFloat(course.rating)))}${'☆'.repeat(5 - Math.floor(parseFloat(course.rating)))}
                  <span class="text-yellow-400 ml-1 text-sm">${course.rating}</span>
                </div>
                <span class="text-sm text-gray-600 dark:text-gray-300 ml-2">(${course.reviews})</span>
              </div>
              <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                ${course.title}
              </h3>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">
                  📘 ${course.lessons} Lessons
                </span>
                <span class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">
                  ⏱️ ${course.duration}
                </span>
                <span class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">
                  👥 ${course.students}
                </span>
              </div>
              <div class="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                <div class="flex items-center">
                  <div class="relative">
                    <img src="${course.avatar}" alt="${course.instructor}" class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-600">
                  </div>
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 ml-2">${course.instructor}</span>
                </div>
                <button class="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                  Enroll Now
                </button>
              </div>
            </div>
          </a>
        </div>
      `
      )
      .join("");

    if (showMoreBtn) {
      showMoreBtn.style.display =
        visibleCount >= filteredCourses.length ? "none" : "block";
      showMoreBtn.textContent =
        visibleCount >= filteredCourses.length
          ? "All Courses Loaded"
          : "Show More Courses";
      showMoreBtn.className = visibleCount >= filteredCourses.length 
        ? "mt-8 mx-auto px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg cursor-not-allowed font-medium"
        : "mt-8 mx-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-200";
    }
  }

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.dataset.filter;
      filterButtons.forEach((btn) => 
        btn.classList.remove(
          "bg-purple-600", "text-white", 
          "dark:bg-purple-700",
          "bg-gray-100", "dark:bg-gray-700"
        )
      );
      
      if (filterValue === "all") {
        button.classList.add("bg-purple-600", "text-white", "dark:bg-purple-700");
        filteredCourses = [...courses];
      } else {
        button.classList.add("bg-gray-100", "dark:bg-gray-700");
        filteredCourses = courses.filter(
          (course) => course.category === filterValue
        );
      }

      visibleCount = 4;
      renderCourses();
    });
  });

  // Show more functionality
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      visibleCount += 4;
      renderCourses();
    });
  }

  // Initial render
  renderCourses();
});




// In your compoCourse.js
function createCourseCard(course) {
  const card = document.createElement('div');
  card.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer';
  card.setAttribute('data-course-id', course.id); // Add course ID as data attribute
  card.innerHTML = `
    <div class="relative">
      <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover">
      <span class="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">${course.category}</span>
    </div>
    <div class="p-4">
      <h3 class="font-bold text-lg mb-1 dark:text-white">${course.title}</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">${course.description.substring(0, 60)}...</p>
      <div class="flex justify-between items-center">
        <span class="font-bold text-blue-600 dark:text-blue-400">$${course.price}</span>
        <div class="flex items-center text-yellow-400">
          ${generateStarRating(course.rating)}
          <span class="text-gray-500 dark:text-gray-300 text-xs ml-1">(${course.reviews})</span>
        </div>
      </div>
    </div>
  `;
  
  // Add click event listener
  card.addEventListener('click', () => {
    localStorage.setItem('selectedCourse', JSON.stringify(course));
    window.location.href = './courseDetail.html';
  });
  
  return card;
}