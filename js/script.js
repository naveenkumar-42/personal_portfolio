let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');

                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }

    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};


$(document).ready(function () {
    var readMoreButton = $("#download");
    var infoFrame = $("#infoFrame");
    infoFrame.hide();
    readMoreButton.on("click", function (event) {
        event.preventDefault();
        console.log("Button clicked");
        infoFrame.attr("src", "iframe.html");
        infoFrame.show();
        $("#home_img").hide();
        $('html, body').animate({
            scrollTop: $('#home').offset().top
        }, 1000);
    });
});



(function () {
    emailjs.init("EFhHBlGQHefpPjFFr");
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();


    const firstName = document.querySelector("input[name='First Name']").value;
    const lastName = document.querySelector("input[name='Last Name']").value;
    const mobile = document.querySelector("input[name='Mobile Number']").value;
    const email = document.querySelector("input[name='Email address']").value;
    const message = document.querySelector("textarea[name='Message']").value;


    emailjs.send("service_ekxptjv", "template_2y3fzn4", {
        first_name: firstName,
        last_name: lastName,
        mobile_number: mobile,
        email_address: email,
        message: message
    }).then(function (response) {
        alert("Email sent successfully. Thanks for your feedback !");
        document.getElementById("contact-form").reset();
    }, function (error) {
        alert("Failed to send email ! Please try again later.");
    });
});



const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");

slides.forEach(slide => {
    let clone = slide.cloneNode(true);
    sliderTrack.appendChild(clone);
});



var typed = new Typed(".auto-type", {
    strings: ["Naveen kumar", "Developer", "Self Learner", "Unique", "Creative", "Empathetic"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
})