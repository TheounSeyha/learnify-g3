// gallery.js

class ImageGallery {
    constructor(containerId, images = []) {
      this.container = document.getElementById(containerId);
      this.images = images;
      this.render();
    }
  
    render() {
      const galleryGrid = document.createElement('div');
      galleryGrid.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4';
  
      this.images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Activity';
        img.className = 'rounded-xl shadow object-cover w-full h-48';
        galleryGrid.appendChild(img);
      });
  
      this.container.appendChild(galleryGrid);
    }
  }
  
  // Example image data
  const imagePaths = [
    './asset/Endy.jpg', './asset/logo.png',
    './asset/logo.png', './asset/logo.png',
    './asset/logo.png', './asset/logo.png',
    './asset/logo.png', './asset/logo.png',
    './asset/logo.png', './asset/logo.png',
    './asset/logo.png', './asset/logo.png'
  ];
  
  // Initialize the gallery
  new ImageGallery('activity-gallery', imagePaths);
  