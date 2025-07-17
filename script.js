document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Social media link animations
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'scale(1.1) translateY(-5px)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = '';
    });
  });

  // Website link hover effects
  const websiteLinks = document.querySelectorAll('.website-link');
  websiteLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.querySelector('.link-arrow').style.transform = 'translateX(5px)';
    });
    link.addEventListener('mouseleave', () => {
      link.querySelector('.link-arrow').style.transform = '';
    });
  });

  // Logo interactions
  const logoImage = document.getElementById('logoImage');
  const logoCircle = document.querySelector('.logo-circle');
  
  if (logoCircle && logoImage) {
    logoCircle.addEventListener('click', function() {
      logoImage.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        logoImage.style.transform = 'rotate(0deg)';
      }, 1000);
    });
    
    logoCircle.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    });
    
    logoCircle.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    });
  }

  // Loading animation
  const loadingAnimation = () => {
    const loader = document.createElement('div');
    loader.style.position = 'fixed';
    loader.style.top = '0';
    loader.style.left = '0';
    loader.style.width = '100%';
    loader.style.height = '3px';
    loader.style.backgroundColor = '#f3f3f3';
    loader.style.zIndex = '9999';
    
    const bar = document.createElement('div');
    bar.style.height = '100%';
    bar.style.width = '0%';
    bar.style.backgroundColor = '#000';
    bar.style.transition = 'width 0.4s ease';
    
    loader.appendChild(bar);
    document.body.appendChild(loader);
    
    setTimeout(() => {
      bar.style.width = '100%';
    }, 10);
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(loader);
        }, 500);
      }, 300);
    });
  };
  
  loadingAnimation();

  // Scroll-to-top button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.style.position = 'fixed';
  scrollToTopBtn.style.bottom = '80px';
  scrollToTopBtn.style.right = '20px';
  scrollToTopBtn.style.width = '50px';
  scrollToTopBtn.style.height = '50px';
  scrollToTopBtn.style.borderRadius = '50%';
  scrollToTopBtn.style.backgroundColor = '#000';
  scrollToTopBtn.style.color = '#fff';
  scrollToTopBtn.style.border = 'none';
  scrollToTopBtn.style.cursor = 'pointer';
  scrollToTopBtn.style.opacity = '0';
  scrollToTopBtn.style.transition = 'opacity 0.3s';
  scrollToTopBtn.style.zIndex = '99';
  scrollToTopBtn.style.display = 'flex';
  scrollToTopBtn.style.alignItems = 'center';
  scrollToTopBtn.style.justifyContent = 'center';
  scrollToTopBtn.style.fontSize = '1.2rem';
  document.body.appendChild(scrollToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = '1';
    } else {
      scrollToTopBtn.style.opacity = '0';
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Simple analytics for link clicks
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.href && !this.href.startsWith('#')) {
        console.log(`Link clicked: ${this.href}`);
      }
    });
  });

  // Animation observer for scroll effects
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.about p');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  };
  
  animateOnScroll();
});