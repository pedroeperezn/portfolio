
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