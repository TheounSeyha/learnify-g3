// testimonialCarousel.js

const testimonials = [
  {
    name: "Endy Ong",
    role: "Student from ISTAD",
    message: "CSTAD is the best for who want to improve your IT skill...",
    image: "./asset/Endy.jpg",
  },
  {
    name: "Lunh Raksmey",
    role: "Graduate from ISTAD",
    message: "Learnify helped me take my coding to the next level!...",
    image: "./asset/Lok b.jpg",
  },
  {
    name: "Soeng Yanut",
    role: "Alumni of CodeLab",
    message: "This platform gave me real-world skills and portfolio projects...",
    image: "./asset/Yanut.jpg",
  },
  {
    name: "Theoun Seyha",
    role: "Student from ISTAD",
    message: "Instructors really cared about our progress and helped anytime!",
    image: "./asset/Seyha.png",
  },
];

class TestimonialCarousel {
  constructor(containerId, data) {
    this.container = document.getElementById(containerId);
    this.data = data;
    this.currentIndex = 0;
    this.track = null;
    this.dots = [];
      this.render();
      this.autoSlide(); // ✅ Start auto-sliding
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.className = "relative max-w-5xl mx-auto overflow-hidden";

    const track = document.createElement("div");
    track.id = "carousel-track";
    track.className = "flex transition-transform duration-700 ease-in-out";
    this.track = track;

    this.data.forEach((item) => {
      const slide = document.createElement("div");
      slide.className = "min-w-full px-4";
      slide.innerHTML = `
      <div class="bg-white dark:bg-gray-800 shadow-md p-8 rounded-xl flex flex-col md:flex-row items-center gap-8">
        <div class="shrink-0">
          <div class="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden mx-auto border-4 border-blue-500 shadow-lg">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              class="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
        <div class="text-center md:text-left">
          <p class="text-gray-700 dark:text-gray-300 mb-4 max-w-xl">${item.message}</p>
          <p class="text-blue-600 font-semibold dark:text-blue-400">${item.name}</p>
          <p class="text-red-600 font-medium">${item.role}</p>
          <button class="mt-3 px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-100 dark:hover:bg-blue-700">See more</button>
        </div>
      </div>
    `;
    
      track.appendChild(slide);
    });

    wrapper.appendChild(track);

    // Dots
    const dotsWrapper = document.createElement("div");
    dotsWrapper.className = "flex justify-center mt-6 gap-4";
    this.data.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className =
        "carousel-dot w-4 h-4 bg-blue-300 rounded-full hover:bg-blue-500 transition-colors";
      dot.onclick = () => this.moveToSlide(index);
      dotsWrapper.appendChild(dot);
      this.dots.push(dot);
    });

    this.container.appendChild(wrapper);
    this.container.appendChild(dotsWrapper);
    this.updateDots();
  }

  moveToSlide(index) {
    this.currentIndex = index;
    const offset = -index * 100;
    this.track.style.transform = `translateX(${offset}%)`;
    this.updateDots();
  }

  updateDots() {
    this.dots.forEach((dot, i) => {
      dot.classList.toggle("bg-blue-600", i === this.currentIndex);
      dot.classList.toggle("bg-blue-300", i !== this.currentIndex);
    });
    }
    autoSlide() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.data.length;
        this.moveToSlide(this.currentIndex);
      }, 5000); // Slide every 5 seconds
    }
}

new TestimonialCarousel("testimonial-carousel", testimonials);
