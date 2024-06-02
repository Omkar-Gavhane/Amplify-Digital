
var swiper = new Swiper(".slider-container", {
  slidesPerView: 2,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const imageLinks = document.querySelectorAll(".list-group-item");
  const mainImage = document.getElementById("mainImage");

  imageLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const newImageSrc = link.getAttribute("data-image");
      mainImage.setAttribute("src", newImageSrc);

      imageLinks.forEach((link) =>
        link.classList.remove("list-group-item-active")
      );

      // Add active class to the clicked link
      link.classList.add("list-group-item-active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");
  const speed = 200; // The lower the number, the faster the count

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // Lower inc to slow and higher to slow
      const inc = target / speed;

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = Math.ceil(count + inc);
        // Call function every ms
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
