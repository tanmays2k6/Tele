
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
    
    // Carousel setup
    var carousel = new bootstrap.Carousel(document.getElementById('mainCarousel'), {
        interval: 5000
    });
    
    // Confetti Animation Function
    function createConfetti() {
        const colors = ['#6366f1', '#ec4899', '#f43f5e', '#10b981', '#3b82f6', '#f59e0b', '#06b6d4'];
        const container = document.getElementById('confetti-container');
        container.innerHTML = '';
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 5 + 's';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            container.appendChild(confetti);
        }
    }
    
    // Event Card Hover Effects
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateY(5deg) rotateX(5deg)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Floating Action Button Scroll to Top
    const scrollTopBtn = document.querySelector('.position-fixed .btn-accent');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Trigger confetti on scroll to top
            createConfetti();
            
            // Remove confetti after animation
            setTimeout(() => {
                const container = document.getElementById('confetti-container');
                container.innerHTML = '';
            }, 5000);
        });
        
        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.transform = 'translateY(0)';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.transform = 'translateY(20px)';
            }
        });
    }
    
    // Initial style for scroll button
    if (scrollTopBtn) {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.transform = 'translateY(20px)';
        scrollTopBtn.style.transition = 'all 0.3s ease';
    }
    
    // Animate cards on mouseover with random tilt direction
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            const mouseX = e.clientX - cardCenterX;
            const mouseY = e.clientY - cardCenterY;
            
            // Calculate rotation based on mouse position
            const rotateY = mouseX / 10;
            const rotateX = -mouseY / 10;
            
            // Apply the transform
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.transition = 'all 0.5s ease';
        });
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
    
    // Randomly change colors periodically for dynamic effect
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Periodically update colors for dynamic effect
    setInterval(() => {
        const primary = getRandomColor();
        const accent = getRandomColor();
        document.documentElement.style.setProperty('--primary-color', primary);
        document.documentElement.style.setProperty('--accent-color', accent);
    }, 30000); // Change colors every 30 seconds
});