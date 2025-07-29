// const searchBar = document.getElementById("searchBar");
// const galleryItems = document.querySelectorAll(".gallery-item");
// const lightbox = document.getElementById("lightbox");
// const lightboxImg = document.getElementById("lightboxImg");
// const closeBtn = document.getElementById("closeBtn");

// // Image Click → Open Lightbox
// galleryItems.forEach(item => {
//   const img = item.querySelector("img");
//   img.addEventListener("click", () => {
//     lightboxImg.src = img.src;
//     lightbox.style.display = "flex";
//   });
// });

// // Close Lightbox on X
// closeBtn.addEventListener("click", () => {
//   lightbox.style.display = "none";
// });

// // Optional: Close when clicking outside image
// lightbox.addEventListener("click", (e) => {
//   if (e.target !== lightboxImg) {
//     lightbox.style.display = "none";
//   }
// });

// // Search Filter
// searchBar.addEventListener("input", () => {
//   const searchTerm = searchBar.value.toLowerCase();
//   galleryItems.forEach(item => {
//     const title = item.getAttribute("data-title").toLowerCase();
//     if (title.includes(searchTerm)) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// });
// n&f
const searchBar = document.getElementById("searchBar");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let allImages = [];
let currentIndex = 0;

// Collect all gallery images into array
galleryItems.forEach(item => {
  const img = item.querySelector("img");
  allImages.push(img);

  img.addEventListener("click", () => {
    currentIndex = allImages.indexOf(img);
    showImage(currentIndex);
    lightbox.style.display = "flex";
  });
});

// Show image by index
function showImage(index) {
  lightboxImg.src = allImages[index].src;
}

// Navigation buttons
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % allImages.length;
  showImage(currentIndex);
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg && e.target !== prevBtn && e.target !== nextBtn) {
    lightbox.style.display = "none";
  }
});

// Search Filter
searchBar.addEventListener("input", () => {
  const searchTerm = searchBar.value.toLowerCase();
  galleryItems.forEach(item => {
    const title = item.getAttribute("data-title").toLowerCase();
    if (title.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// Collect all images in gallery
galleryItems.forEach(item => {
  const imgs = item.querySelectorAll("img");
  imgs.forEach(img => {
    allImages.push(img);

    img.addEventListener("click", () => {
      currentIndex = allImages.indexOf(img);
      showImage(currentIndex);
      lightbox.style.display = "flex";
    });
  });
});
