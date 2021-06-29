const nav = document.querySelector("nav");
const sectionOne = document.querySelector("main")


const sectionOneOptions = {
    threshold:0,
    rootMargin:"-750px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add("nav-scrolled");
        } else {
            nav.classList.remove("nav-scrolled");
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);




// 



const sliders = document.querySelectorAll(".animation-slide-left")
const sliders1 = document.querySelectorAll(".animation-slide-right")
const sliders2 = document.querySelectorAll(".animation-slide-top")
const sliders3 = document.querySelectorAll(".animation-slide-bottom")
const sliders4 = document.querySelectorAll(".animation-slide-testimonial")
const counter1 = document.querySelectorAll(".counter-first")
const counter2 = document.querySelectorAll(".counter-second")
const counter3 = document.querySelectorAll(".counter-third")
const counter4 = document.querySelectorAll(".counter-fourth")
const progress1 = document.querySelectorAll(".progress-bar-1")
const progress2 = document.querySelectorAll(".progress-bar-2")
const progress3 = document.querySelectorAll(".progress-bar-3")
const progress4 = document.querySelectorAll(".progress-bar-4")

const appearOptions = {
    threshold: 0.75,
    rootMargin: "-50px 0px 0px 0px"
}

const appearOptionsTestimonial = {
    threshold:0.5,
    rootMargin: "0px 0px 0px 0px"
}

// PROBLEM Z POZYCJĄ? Czemu nie mogę dać w inne miejsce.

// Slide to top
const appearOnScrollTop = new IntersectionObserver(function(entries, appearOnScrollTop){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("slide-to-top");
            appearOnScrollTop.unobserve(entry.target);
        }
    });
},
appearOptions)


// Slide to right
const appearOnScrollRight = new IntersectionObserver(function(entries, appearOnScrollRight){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("slide-to-right");
            appearOnScrollRight.unobserve(entry.target);
        }
    });
},
appearOptions)

// Slide to left
const appearOnScrollLeft = new IntersectionObserver(function(entries, appearOnScrollLeft){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("slide-to-left");
            appearOnScrollLeft.unobserve(entry.target);
        }
    });
},
appearOptions)

// Slide to bottom
const appearOnScrollBottom = new IntersectionObserver(function(entries, appearOnScrollBottom){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("slide-to-bottom");
            appearOnScrollBottom.unobserve(entry.target);
        }
    });
},
appearOptions)

// Slide to left - Testimonial
const appearOnScrollTestimonial = new IntersectionObserver(function(entries, appearOnScrollTestimonial){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("slide-to-top");
            appearOnScrollTestimonial.unobserve(entry.target);
        }
    });
},
appearOptionsTestimonial)

// Counter-1
const counter11 = new IntersectionObserver(function(entries, counter11){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("counter-1");
            counter11.unobserve(entry.target);
        }
    });
},
appearOptions)

// Counter-2
const counter22 = new IntersectionObserver(function(entries, counter22){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("counter-2");
            counter22.unobserve(entry.target);
        }
    });
},
appearOptions)

// Counter-3
const counter33 = new IntersectionObserver(function(entries, counter33){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("counter-3");
            counter33.unobserve(entry.target);
        }
    });
},
appearOptions)

// Counter-4
const counter44 = new IntersectionObserver(function(entries, counter44){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("counter-4");
            counter44.unobserve(entry.target);
        }
    });
},
appearOptions)

// Progress bar 1
const progressbar1 = new IntersectionObserver(function(entries, progressbar1){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("progress-bar-11");
            progressbar1.unobserve(entry.target);
        }
    });
},
appearOptions)

// Progress bar 2
const progressbar2 = new IntersectionObserver(function(entries, progressbar2){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("progress-bar-22");
            progressbar2.unobserve(entry.target);
        }
    });
},
appearOptions)

// Progress bar 3
const progressbar3 = new IntersectionObserver(function(entries, progressbar3){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("progress-bar-33");
            progressbar3.unobserve(entry.target);
        }
    });
},
appearOptions)

// Progress bar 4
const progressbar4 = new IntersectionObserver(function(entries, progressbar4){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("progress-bar-44");
            progressbar4.unobserve(entry.target);
        }
    });
},
appearOptions)

// Slide to left
sliders.forEach(slider => {
    appearOnScrollLeft.observe(slider);
}),

// Slide to right
sliders1.forEach(slider => {
    appearOnScrollRight.observe(slider);
})

// Slide to top
sliders2.forEach(slider => {
    appearOnScrollTop.observe(slider);
})

// Slide to bottom
sliders3.forEach(slider => {
    appearOnScrollBottom.observe(slider);
})

// Slide to left - Testimonial
sliders4.forEach(slider => {
    appearOnScrollTestimonial.observe(slider);
})

// Counter-1
counter1.forEach(slider => {
    counter11.observe(slider);
})

// Counter-2
counter2.forEach(slider => {
    counter22.observe(slider);
})

// Counter-3
counter3.forEach(slider => {
    counter33.observe(slider);
})

// Counter-4
counter4.forEach(slider => {
    counter44.observe(slider);
})

// Progress bar 1
progress1.forEach(slider => {
    progressbar1.observe(slider);
})

// Progress bar 2
progress2.forEach(slider => {
    progressbar2.observe(slider);
})

// Progress bar 3
progress3.forEach(slider => {
    progressbar3.observe(slider);
})

// Progress bar 4
progress4.forEach(slider => {
    progressbar4.observe(slider);
})