const footerHTML = `
  <footer class="bg-gray-200 dark:bg-gray-800 py-8 text-center text-gray-700 dark:text-gray-300 transition-colors duration-300">
   <div class="flex flex-col items-center space-y-4">
      <div class="flex items-center space-x-2">
        <img src="/asset/logo.png" alt="Learnify Logo" class="h-8 w-8" />
        <span class="text-xl font-semibold text-gray-800 dark:text-white">Learnify</span>
      </div>

      <div class="flex space-x-8">
        <a href="#" class="flex items-center space-x-2 hover:text-blue-500">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter Icon" class="w-6 h-6" />
          <span>Twitter</span>
        </a>
        <a href="#" class="flex items-center space-x-2 hover:text-blue-700">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook Icon" class="w-6 h-6" />
          <span>Facebook</span>
        </a>
        <a href="#" class="flex items-center space-x-2 hover:text-pink-600">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram Icon" class="w-6 h-6" />
          <span>Instagram</span>
        </a>
      </div>
    </div>
    <hr class="my-6 border-gray-300 dark:border-gray-700" />
    <p class="text-sm text-gray-600 dark:text-gray-400">© Copyright 2025, All Rights Reserved by Learnify</p>
  </footer>
`;

document.getElementById("app-footer").innerHTML = footerHTML;
