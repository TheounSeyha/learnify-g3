// courses.js

const courses = [
    {
      image: "https://via.placeholder.com/300x150",
      title: "It Statistics Data Science And Business Analysis",
      rating: "4.5k",
      price: "$50.00",
      lessons: 10,
      duration: "24h",
      students: "20+",
      instructor: "Ong Endy",
      avatar: "https://via.placeholder.com/32"
    },
    {
      image: "https://via.placeholder.com/300x150?text=HTML5",
      title: "HTML5 Complete Course For Beginners",
      rating: "4.8k",
      price: "$45.00",
      lessons: 8,
      duration: "18h",
      students: "30+",
      instructor: "Ong Endy",
      avatar: "https://via.placeholder.com/32"
    },
    {
      image: "https://via.placeholder.com/300x150?text=Blockchain",
      title: "Blockchain Essentials & Smart Contracts",
      rating: "4.6k",
      price: "$60.00",
      lessons: 12,
      duration: "30h",
      students: "50+",
      instructor: "Ong Endy",
      avatar: "https://via.placeholder.com/32"
    },
    {
      image: "https://via.placeholder.com/300x150?text=Live+Streaming",
      title: "Live Streaming & Content Creation Masterclass",
      rating: "4.9k",
      price: "$55.00",
      lessons: 14,
      duration: "28h",
      students: "40+",
      instructor: "Ong Endy",
      avatar: "https://via.placeholder.com/32"
    }
  ];
  
  function createCourseCard(course) {
    const card = document.createElement("div");
    card.className = "bg-gray-200 dark:bg-gray-800 shadow rounded-xl overflow-hidden";
  
    card.innerHTML = `
      <img src="${course.image}" alt="Course Image" class="w-full h-40 object-cover" />
      <div class="p-4">
        <div class="flex justify-between items-center mb-2">
          <div class="flex items-center space-x-1 text-orange-500">
            <span>★</span><span>${course.rating}</span>
          </div>
          <span class="text-purple-600 font-semibold">${course.price}</span>
        </div>
        <h3 class="text-sm font-semibold text-gray-800 dark:text-white leading-snug mb-2">
          ${course.title}
        </h3>
        <div class="flex justify-between items-center text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 mb-4">
          <span>📘 Lesson ${course.lessons}</span>
          <span>🕒 ${course.duration}</span>
          <span>👥 Students ${course.students}</span>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <img src="${course.avatar}" alt="${course.instructor}" class="w-8 h-8 rounded-full border" />
            <span class="text-sm text-gray-700 dark:text-gray-300 font-medium">${course.instructor}</span>
          </div>
          <button class="bg-violet-500 hover:bg-violet-600 text-white text-xs font-semibold py-2 px-3 rounded-full">
            add to card
          </button>
        </div>
      </div>
    `;
  
    return card;
  }
  
  // Render cards
  const grid = document.getElementById("course-grid");
  courses.forEach(course => grid.appendChild(createCourseCard(course)));
  