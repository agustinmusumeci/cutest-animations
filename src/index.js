const values = {
    animation: "600ms",
    fill_mode: "forwards",
    timing_function: "ease-in-out",
    delay : "100ms"
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
        const name = el.dataset.animate;
        const animation = el.dataset.animateDuration;
        const timing = el.dataset.animateTiming;
        const delay = el.dataset.animateDelay;
        
        if (name) {
            // Animation name and fillmode (do NOT change)
            el.style.animationName = name;
            el.style.animationFillMode = values.fill_mode;
            
            // Animation timing function
            timing ? (el.style.animationTimingFunction = timing) : (el.style.animationTimingFunction = values.timing_function);

            // Animation duration
            animation ? (el.style.animationDuration = `${animation}ms`) : (el.style.animationDuration = values.animation);

            // Animation delay
            delay ? (el.style.animationDelay = `${delay}ms`) : (el.style.animationDelay = values.delay)
        };
    };
};

// Waiting for window to load for init animatios
window.addEventListener("load", () => {init()});


