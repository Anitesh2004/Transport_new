document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector(".image-container");
    const scrollButton = document.getElementById("scroll-button");
    let scrollAmount = 2; // Adjust the scrolling speed

    scrollButton.addEventListener("click", function() {
        scrollImages();
    });

    function scrollImages() {
        const scrollWidth = imageContainer.scrollWidth;
        const currentScrollLeft = imageContainer.scrollLeft;
        let newScrollLeft = currentScrollLeft + scrollAmount;

        if (newScrollLeft >= scrollWidth) {
            newScrollLeft = 0;
        }

        imageContainer.scrollTo({
            left: newScrollLeft,
            behavior: "smooth"
        });
    }
});
