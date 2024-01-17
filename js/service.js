document.addEventListener("DOMContentLoaded", function () {
  // Get all service buttons and containers
  const serviceButtons = document.querySelectorAll(".service-btn");
  const serviceContainers = document.querySelectorAll(
    '.container[id^="serviceContainer"]'
  );

  // Hide all service containers initially
  serviceContainers.forEach((container) => {
    container.style.display = "none";
  });

  // Add click event listener to each service button
  serviceButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      // Reset styles for all buttons
      serviceButtons.forEach((btn) => {
        btn.style.background = "var(--bs-primary)";
        btn.style.color = "var(--bs-dark)";
      });

      // Hide all service containers
      serviceContainers.forEach((container) => {
        container.style.display = "none";
      });

      // Apply styles to the clicked button
      button.style.background = "var(--bs-dark)";
      button.style.color = "var(--bs-primary)";

      // Show the corresponding servic  e container based on the button index
      const selectedContainer = document.getElementById(
        `serviceContainer${index + 1}`
      );

      if (selectedContainer) {
        selectedContainer.style.display = "block";
      }
    });
  });
});
$(document).ready(function () {
  // Function to toggle visibility of service content
  function toggleServiceContent(serviceNumber) {
    // Hide all service containers
    $(".service-content").hide();

    // Show the selected service container
    $("#serviceContainer" + serviceNumber).fadeIn();
  }

  // Wedding Services Button Click Event
  $("#weddingBtn").click(function () {
    toggleServiceContent(1);
  });

  // Corporate Catering Button Click Event
  $("#corporateBtn").click(function () {
    toggleServiceContent(2);
  });

  // Cocktail Reception Button Click Event
  $("#cocktailBtn").click(function () {
    toggleServiceContent(3);
  });

  // Bento Catering Button Click Event
  $("#bentoBtn").click(function () {
    toggleServiceContent(4);
  });

  // Pub Party Button Click Event
  $("#pubBtn").click(function () {
    toggleServiceContent(5);
  });

  // Buffet Catering Button Click Event
  $("#buffetBtn").click(function () {
    toggleServiceContent(6);
  });
});