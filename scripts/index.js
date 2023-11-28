
//document.addEventListener("DOMContentLoaded", function () {
//    const contentContainer = document.querySelector(".gallery-content");
//    const contentItems = document.querySelectorAll(".content");
//    const prevButton = document.querySelector(".prev");
//    const nextButton = document.querySelector(".next");
//    let currentIndex = 0;
//  
//    nextButton.addEventListener("click", function () {
//      currentIndex = (currentIndex + 1) % contentItems.length;
//      updateGallery();
//    });
//  
//    prevButton.addEventListener("click", function () {
//      currentIndex = (currentIndex - 1 + contentItems.length) % contentItems.length;
//      updateGallery();
//    });
//  
//    function updateGallery() {
//      const translateX = -currentIndex * 100 + "%";
//      contentContainer.style.transform = `translateX(${translateX})`;
//    }
//  });

//const tooltips = document.querySelectorAll('.tt')
//
//tooltips.forEach(t=> {
//    new bootstrap.Tooltip(t)
//})

document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll('.project-item');
    let currentIndex = 0;
  
    function showProject(index) {
      projectItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  
    function nextProject() {
      currentIndex = (currentIndex + 1) % projectItems.length;
      showProject(currentIndex);
    }
  
    function prevProject() {
      currentIndex = (currentIndex - 1 + projectItems.length) % projectItems.length;
      showProject(currentIndex);
    }
  
    document.getElementById('nextBtn').addEventListener('click', nextProject);
    document.getElementById('prevBtn').addEventListener('click', prevProject);
    
    // Show the initial project (optional)
    showProject(currentIndex);
  });

  document.addEventListener('DOMContentLoaded', function () {
    Prism.highlightAll();
  });