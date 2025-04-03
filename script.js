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
  