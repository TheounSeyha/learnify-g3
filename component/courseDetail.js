document.addEventListener('DOMContentLoaded', () => {
    // Get the selected course from localStorage
    const course = JSON.parse(localStorage.getItem('selectedCourse'));
    
    if (course) {
      // Update the page with course details
      document.getElementById('courseTitle').textContent = course.title;
      document.getElementById('courseCategory').textContent = `#${course.category}`;
      document.getElementById('courseImage').src = course.image;
      document.getElementById('courseDescription').textContent = course.description;
      document.getElementById('courseAuthorImg').src = course.authorImage || '../asset/default-avatar.jpg';
      
      // Initialize feather icons
      feather.replace();
    } else {
      // If no course found, redirect back to courses page
      window.location.href = './Course.html';
    }
  });