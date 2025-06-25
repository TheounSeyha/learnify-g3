document.addEventListener('DOMContentLoaded', () => {
    const counterItems = document.querySelectorAll('.counter-item');
    
    // Options for the Intersection Observer
    const options = {
      threshold: 0.5 // Trigger when 50% of the element is visible
    };
    
    // Callback function for the observer
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target.querySelector('[data-target]');
          const targetValue = parseInt(target.getAttribute('data-target'));
          const duration = 2000; // Animation duration in ms
          const step = Math.ceil(targetValue / (duration / 16)); // 16ms per frame
          let current = 0;
          
          const updateCounter = () => {
            current += step;
            if (current >= targetValue) {
              current = targetValue;
              // For the percentage value, add % sign
              if (target.textContent.includes('%')) {
                target.textContent = current + '%';
              } else {
                target.textContent = current.toLocaleString(); // Adds commas for thousands
              }
              return;
            }
            
            // For the percentage value, add % sign
            if (target.textContent.includes('%')) {
              target.textContent = current + '%';
            } else {
              target.textContent = current.toLocaleString();
            }
            
            requestAnimationFrame(updateCounter);
          };
          
          updateCounter();
          observer.unobserve(entry.target); // Stop observing after animation starts
        }
      });
    };
    
    // Create the observer
    const observer = new IntersectionObserver(callback, options);
    
    // Observe each counter item
    counterItems.forEach(item => {
      observer.observe(item);
    });
});
  
let currentSlide = 0;
const totalSlides = 4;
const track = document.getElementById("carousel-track");
const dots = document.querySelectorAll(".carousel-dot");

function moveToSlide(index) {
  currentSlide = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-blue-500", i === currentSlide);
    dot.classList.toggle("bg-blue-300", i !== currentSlide);
  });
}

function autoSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  moveToSlide(currentSlide);
}

// Auto change every 4 seconds
setInterval(autoSlide, 4000);

// Initialize first dot active
updateDots();