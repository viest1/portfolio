const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".container-main")


const sectionOneOptions = {
    rootMargin:"-330px 0px 0px 0px"
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