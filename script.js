document.addEventListener("DOMContentLoaded", function () {
  // Get all image containers
  var imageContainers = document.querySelectorAll(".image-container");

  // Add click event listener to each image container
  imageContainers.forEach(function (container) {
    container.addEventListener("click", function () {
      // Toggle the "enlarged" class on the clicked image container
      container.classList.toggle("enlarged");
    });
  });
});
