const courses = [
  {
    image: "/asset/UI.png",
    title: "It Statistics Data Science And Business Analysis",
    rating: "4.5k",
    price: "$50.00",
    lessons: 10,
    duration: "24h",
    students: "20+",
    instructor: "Ong Endy",
    avatar: "asset/Endy.jpg"
  },
  {
    image: "/asset/UI.png",
    title: "HTML5 Complete Course For Beginners",
    rating: "4.8k",
    price: "$45.00",
    lessons: 8,
    duration: "18h",
    students: "30+",
    instructor: "Ong Endy",
    avatar: "asset/Endy.jpg"
  },
  {
    image: "asset/ImageCourse/course2.jpg",
    title: "Blockchain Essentials & Smart Contracts",
    rating: "4.6k",
    price: "$60.00",
    lessons: 12,
    duration: "30h",
    students: "50+",
    instructor: "Ong Endy",
    avatar: "asset/Endy.jpg"
  },
  {
    image: "asset/ImageCourse/course3.jpg",
    title: "Live Streaming & Content Creation Masterclass",
    rating: "4.9k",
    price: "$55.00",
    lessons: 14,
    duration: "28h",
    students: "40+",
    instructor: "Ong Endy",
    avatar: "asset/Endy.jpg"
  }
];

function createCourseCard(course) {
  const card = document.createElement("div");
  card.className = "bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1";

  card.innerHTML = `
    <div class="relative">
      <img src="${course.image}" alt="Course Image" class="w-full h-48 object-cover" />
      <span class="absolute top-3 right-3 bg-white dark:bg-gray-900 text-purple-600 text-xs font-bold px-2.5 py-1 rounded-full shadow">${course.price}</span>
    </div>
    <div class="p-5">
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white line-clamp-2" style="min-height: 3rem;">
          ${course.title}
        </h3>
      </div>
      
      <div class="flex items-center mb-4">
        <div class="flex items-center mr-2">
          <span class="text-yellow-400">★</span>
          <span class="text-sm font-medium text-gray-600 dark:text-gray-300 ml-1">${course.rating}</span>
        </div>
        <span class="text-gray-400 mx-2">•</span>
        <div class="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span>👥 ${course.students}</span>
        </div>
      </div>
      
      <div class="flex flex-wrap gap-2 mb-5">
        <span class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full flex items-center">
          📘 ${course.lessons} Lessons
        </span>
        <span class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full flex items-center">
          🕒 ${course.duration}
        </span>
      </div>
      
      <div class="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <div class="flex items-center">
          <img src="${course.avatar}" alt="${course.instructor}" class="w-9 h-9 rounded-full border-2 border-white dark:border-gray-600 shadow" />
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300 ml-3">${course.instructor}</span>
        </div>
        <button class="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105">
          Enroll Now
        </button>
      </div>
    </div>
  `;

  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("course-grid");
  courses.forEach(course => grid.appendChild(createCourseCard(course)));
});
