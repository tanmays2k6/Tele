 // Initialize AOS animations
 document.addEventListener('DOMContentLoaded', function() {
    // Page Transition Animation
    const pageTransition = document.querySelector('.page-transition');
    
    // Show transition on page load
    pageTransition.classList.add('active');
    
    // Hide after initial load
    setTimeout(() => {
        pageTransition.classList.remove('active');
        pageTransition.classList.add('exit');
        
        // Remove exit class after animation completes
        setTimeout(() => {
            pageTransition.classList.remove('exit');
        }, 500);
    }, 500);
    
    // Initialize AOS with enhanced settings
    AOS.init({
        duration: 800,
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
        once: false,
        mirror: true,
        anchorPlacement: 'center-bottom'
    });
    
    // Add fade-up animation to elements
    const fadeElements = document.querySelectorAll('.card, .btn-primary, .btn-accent');
    fadeElements.forEach((element, index) => {
        element.classList.add('fade-up');
        setTimeout(() => {
            element.classList.add('show');
        }, 300 + (index * 50)); // Staggered timing
    });
    
    // Activate text reveal animations
    const textReveals = document.querySelectorAll('.text-reveal');
    setTimeout(() => {
        textReveals.forEach(text => {
            text.classList.add('active');
        });
    }, 800);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                // Show transition animation
                pageTransition.classList.add('active');
                
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Hide transition animation
                    setTimeout(() => {
                        pageTransition.classList.remove('active');
                        pageTransition.classList.add('exit');
                        
                        setTimeout(() => {
                            pageTransition.classList.remove('exit');
                        }, 500);
                    }, 300);
                }, 300);
            }
        });
    });

    const navbar = document.querySelector('.navbar');
            let lastScrollTop = 0;
            
            window.addEventListener('scroll', function() {
                let st = window.pageYOffset || document.documentElement.scrollTop;
                
                if (st > 50) {
                    navbar.style.padding = '10px 0';
                    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                    navbar.style.backdropFilter = 'blur(15px)';
                    navbar.style.background = 'rgba(255, 255, 255, 0.8) !important';
                } else {
                    navbar.style.padding = '15px 0';
                    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                    navbar.style.backdropFilter = 'blur(10px)';
                    navbar.style.background = 'rgba(255, 255, 255, 0.85) !important';
                }
                
                // Hide navbar on scroll down, show on scroll up
                if (st > lastScrollTop && st > 200) {
                    // Scrolling down
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    // Scrolling up
                    navbar.style.transform = 'translateY(0)';
                }
                
                lastScrollTop = st <= 0 ? 0 : st;
            });
            
            // Initialize ripple effect for buttons
            const rippleButtons = document.querySelectorAll('.ripple-effect');
            rippleButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    const x = e.clientX - e.target.getBoundingClientRect().left;
                    const y = e.clientY - e.target.getBoundingClientRect().top;
                    
                    const ripple = document.createElement('span');
                    ripple.className = 'ripple';
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            });
            
            // Initialize magnetic effect
            const magneticElements = document.querySelectorAll('.magnetic-effect');
            magneticElements.forEach(element => {
                element.addEventListener('mousemove', function(e) {
                    const rect = this.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    const mouseX = e.clientX - centerX;
                    const mouseY = e.clientY - centerY;
                    
                    const maxMove = 10; // maximum movement in pixels
                    const moveX = (mouseX / rect.width) * maxMove;
                    const moveY = (mouseY / rect.height) * maxMove;
                    
                    this.style.transform = `translate(${moveX}px, ${moveY}px)`;
                });
                
                element.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                    this.style.transition = 'transform 0.5s ease';
                });
            });
            
            // Animate staggered items
            const staggerItems = document.querySelectorAll('.stagger-item');
            staggerItems.forEach((item, index) => {
                item.style.animationDelay = `${0.1 * index}s`;
            });
            
            // Typewriter effect
            const typewriterElements = document.querySelectorAll('.typewriter');
            typewriterElements.forEach(element => {
                const text = element.textContent;
                element.textContent = '';
                element.style.width = '0';
                
                setTimeout(() => {
                    element.textContent = text;
                    element.style.width = '100%';
                }, 500);
            });
        });