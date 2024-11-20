//PHOTO GALLERY

let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');


function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// ANIMATION FOR THE CONTACT US AND ABOUT US SECTIONS
setInterval(showNextImage, 3000);

document.addEventListener("scroll", function() {
    const contactSection = document.querySelector(".contact-section");
    const sectionPosition = contactSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        contactSection.classList.add("show");
    }
});

document.addEventListener("scroll", function() {
    const abtusSection = document.querySelector(".abtus-section");
    const sectionsPosition = abtusSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionsPosition < screenPosition) {
        abtusSection.classList.add("show");
    }
});



//navbar active state

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    let activeLink = null;

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

        
            if (activeLink) activeLink.classList.remove('active');
            this.classList.add('active');
            activeLink = this;
        });
    });

    
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === entry.target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        },
        {
            threshold: 0.5 
        }
    );

    sections.forEach(section => observer.observe(section));
});

