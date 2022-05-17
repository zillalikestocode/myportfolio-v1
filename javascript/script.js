    const socials = document.querySelector(".socials");
    const homebtn = document.querySelector(".homebtn");
    const aboutbtn = document.querySelector(".aboutbtn");
    const servbtn = document.querySelector(".servbtn");
    const contactbtn = document.querySelector(".contactbtn");

    document.querySelector(".darkbtn").onclick = () => {
        document.querySelector("body").classList.toggle("dark");
        document.querySelector(".light-toggle").classList.toggle("bxs-moon");
        document.querySelector(".light-toggle").classList.toggle("bxs-sun");
    };
    // Function for navigation link buttons
    homebtn.onclick = () => {
        homebtn.classList.add("enter");
        aboutbtn.classList.remove("enter");
        servbtn.classList.remove("enter");
        contactbtn.classList.remove("enter");
        document.querySelector(".navlinks").classList.remove("open")
        document.querySelector(".openmenu").classList.remove("hide")
        document.querySelector(".closemenu").classList.add("hide")
    };
    aboutbtn.onclick = () => {
        homebtn.classList.remove("enter");
        aboutbtn.classList.add("enter");
        servbtn.classList.remove("enter");
        contactbtn.classList.remove("enter");
        document.querySelector(".navlinks").classList.remove("open")
        document.querySelector(".openmenu").classList.remove("hide")
        document.querySelector(".closemenu").classList.add("hide")
    };
    servbtn.onclick = () => {
        homebtn.classList.remove("enter");
        aboutbtn.classList.remove("enter");
        servbtn.classList.add("enter");
        contactbtn.classList.remove("enter");
        document.querySelector(".navlinks").classList.remove("open")
        document.querySelector(".openmenu").classList.remove("hide")
        document.querySelector(".closemenu").classList.add("hide")
    };
    contactbtn.onclick = () => {
        homebtn.classList.remove("enter");
        aboutbtn.classList.remove("enter");
        servbtn.classList.remove("enter");
        contactbtn.classList.add("enter");
        document.querySelector(".navlinks").classList.remove("open")
        document.querySelector(".openmenu").classList.remove("hide")
        document.querySelector(".closemenu").classList.add("hide")
    };
    // Fixed nav after scroll
    document.addEventListener("DOMContentLoaded", function(){
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                document.querySelector(".nav").classList.add('fixed');
            } else {
                document.querySelector(".nav").classList.remove('fixed');
            } 
        });
    });
    // function for responsive nav
    document.querySelector(".openmenu").onclick = () => {
        document.querySelector(".navlinks").classList.add("open")
        document.querySelector(".openmenu").classList.add("hide")
        document.querySelector(".closemenu").classList.remove("hide")    
    }
    document.querySelector(".closemenu").onclick = () => {
        document.querySelector(".navlinks").classList.remove("open")
        document.querySelector(".openmenu").classList.remove("hide")
        document.querySelector(".closemenu").classList.add("hide")    
    }
    // function for navigation animation
    document.querySelector("#about").onmouseenter = () => {
        homebtn.classList.remove("enter");
        aboutbtn.classList.add("enter");
        servbtn.classList.remove("enter");
        contactbtn.classList.remove("enter");
    };
    document.querySelector("#home").onmouseenter = () => {
        homebtn.classList.add("enter");
        aboutbtn.classList.remove("enter");
        servbtn.classList.remove("enter");
        contactbtn.classList.remove("enter");
    };
    document.querySelector("#services").onmouseenter = () => {
        homebtn.classList.remove("enter");
        aboutbtn.classList.remove("enter");
        servbtn.classList.add("enter");
        contactbtn.classList.remove("enter");
    };
    document.querySelector("#contact").onmouseenter = () => {
        homebtn.classList.remove("enter");
        aboutbtn.classList.remove("enter");
        servbtn.classList.remove("enter");
        contactbtn.classList.add("enter");
    };
    // function for  footer date
    document.querySelector(".currentyear").innerHTML = new Date().getFullYear();
    (function($) {
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            $(document).on('click', 'a.page-scroll', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 600, 'easeInOutExpo');
                event.preventDefault();
            });
        });
    
        
    })(jQuery);