const values = {
    animation: "600ms"
}

// Init function
const init = () => {
    // Elements to animate
    const elements = document.querySelectorAll("[data-animate]")

    // Observer options
    const options = {
        root: null,
        rootMargin: "1px",
        threshold: 1,
    }

    // Init Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            
            if (entry.isIntersecting) {
                // Removes observer once intersected
                observer.unobserve(entry.target);

                // Animate
                handleAnimate(entry.target);
            }
        });
    }, options)

    // Iterating the elements to observe
    Array.from(elements).forEach((el) => {
        observer.observe(el);
    });

    // Animate function
    const handleAnimate = (el) => {
        // Get dataset values
        const dataset = el.dataset.animate;
        const animation = el.dataset.animateDuration
        
        if (dataset) {
            // Animation itself
            el.classList.add(dataset);

            // Animation duration
            animation ? (el.style.animationDuration = `${animation}ms`) : (el.style.animationDuration = values.animation)
        };
    };
};

// Waiting for window to load for init animatios
window.addEventListener("load", () => {init()});


