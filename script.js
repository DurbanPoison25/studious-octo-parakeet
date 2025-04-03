// --- Carousel and Modal Functionality ---
const images = {
  project1: ["image1.jpg", "image2.jpg", "image3.jpg"]
};

let currentIndex = {
  project1: 0
};

function openModal(id) {
  document.getElementById(`modal-${id}`).style.display = "flex";
  updateCarousel(id);
}

function closeModal(id) {
  document.getElementById(`modal-${id}`).style.display = "none";
}

function nextImage(id) {
  currentIndex[id] = (currentIndex[id] + 1) % images[id].length;
  updateCarousel(id);
}

function prevImage(id) {
  currentIndex[id] = (currentIndex[id] - 1 + images[id].length) % images[id].length;
  updateCarousel(id);
}

function updateCarousel(id) {
  const imgElement = document.getElementById(`carousel-image-${id}`);
  imgElement.src = images[id][currentIndex[id]];
  document.getElementById(`carousel-indicator-${id}`).textContent =
    `${currentIndex[id] + 1} / ${images[id].length}`;
}

// --- Tabbed Panel Functionality for Skills Section ---
function openTab(evt, tabName) {
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
    tabContents[i].classList.remove("active");
  }
  const tabLinks = document.getElementsByClassName("tab-link");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Initialize the first tab on page load
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("programming").style.display = "block";
});

// --- Form Validation for Contact Section ---
document.querySelector('#contact form').addEventListener('submit', function(event) {
  event.preventDefault();
  const nameField = this.querySelector('input[type="text"]').value.trim();
  const emailField = this.querySelector('input[type="email"]').value.trim();
  const messageField = this.querySelector('textarea').value.trim();
  const errorContainer = document.getElementById('form-errors');
  let errors = [];

  if (nameField === "") {
    errors.push("Name is required.");
  }
  if (messageField === "") {
    errors.push("Message is required.");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField)) {
    errors.push("Please enter a valid email address.");
  }
  
  if (errors.length > 0) {
    errorContainer.innerHTML = errors.join("<br>");
    errorContainer.style.color = "red";
  } else {
    errorContainer.innerHTML = "Message sent successfully!";
    errorContainer.style.color = "green";
    this.reset();
  }
});
