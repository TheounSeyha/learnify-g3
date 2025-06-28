class ImageGallery {
  constructor(containerId, images = []) {
    if (!containerId) throw new Error('Container ID is required');
    this.container = document.getElementById(containerId);
    if (!this.container) throw new Error(`Container with ID "${containerId}" not found`);
    
    this.images = Array.isArray(images) ? images : [];
    this.render();
  }

  render() {
    // Clear existing content
    this.container.innerHTML = '';

    // Create responsive masonry grid with smooth transitions
    const masonryContainer = document.createElement('div');
    masonryContainer.className = 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6';
    
    // Add fade-in animation to container
    masonryContainer.style.animation = 'fadeIn 0.5s ease-out';

    this.images.forEach((src, index) => {
      if (!src) return; // Skip invalid entries

      const figure = document.createElement('figure');
      figure.className = 'relative group break-inside-avoid rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl';

      const img = document.createElement('img');
      img.src = src;
      img.alt = `Activity ${index + 1}`;
      img.loading = 'lazy'; // Lazy loading for better performance
      img.className = 'w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105';
      img.onerror = () => { img.src = 'placeholder.jpg'; }; // Fallback for broken images

      // Optional: Add caption overlay on hover
      const caption = document.createElement('figcaption');
      caption.className = 'absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-end p-4 transition-all duration-300';
      caption.innerHTML = `<span class="text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Activity ${index + 1}</span>`;

      figure.appendChild(img);
      figure.appendChild(caption);
      masonryContainer.appendChild(figure);
    });

    this.container.appendChild(masonryContainer);

    // Add CSS for fade-in animation
    this.addAnimationStyles();
  }

  addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }
  addAnimationStyles() {
    if (document.getElementById('fade-in-animation-style')) return;
  
    const style = document.createElement('style');
    style.id = 'fade-in-animation-style';
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Optional: Method to update images
  updateImages(newImages) {
    this.images = Array.isArray(newImages) ? newImages : [];
    this.render();
  }
}

// Example usage with error handling
try {
  const imagePaths = [
    'asset/activityImage/activity.jpg',
    'asset/activityImage/activyti1.jpg',
    'asset/activityImage/actyvity.jpg',
    'asset/activityImage/acvity2.jpg',
    'asset/activityImage/actyvity.jpg',
    'asset/activityImage/activyti1.jpg',
    'asset/activityImage/activity3.jpg',
    'asset/activityImage/actyvity.jpg',
    './asset/activityImage/activity4.jpg',
    './asset/activityImage/activity5.jpg',
    './asset/activityImage/activity6.jpg',
    './asset/activityImage/activity6.jpg'
  ];

  new ImageGallery('activity-gallery', imagePaths);

  
} catch (error) {
  console.error('Gallery initialization failed:', error);
  // Optionally display user-friendly error message
  const container = document.getElementById('activity-gallery');
  if (container) {
    container.innerHTML = `<div class="text-red-500 p-4 bg-red-50 rounded">Failed to load gallery: ${error.message}</div>`;
  }
}


