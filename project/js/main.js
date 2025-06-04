document.addEventListener('DOMContentLoaded', function() {
  // Typed.js initialization
  const typed = new Typed('.text', {
    strings: ['Full Stack Developer', 'UI/UX Designer', 'Web Developer', 'App Developer'],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
  });

  // Mobile navigation toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navbar = document.querySelector('.navbar');
  
  mobileNavToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navbar.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a nav link
  document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', () => {
      navbar.classList.remove('active');
      mobileNavToggle.classList.remove('active');
    });
  });

  // Sticky header
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  
  // Scroll to top button
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
  });
  
  scrollTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Skills tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      btn.classList.add('active');
      const target = btn.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });
  
  // Portfolio filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 100);
        } else {
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.display = 'none';
          }, 500);
        }
      });
    });
  });
  
  // Portfolio modal
  const portfolioDetailBtns = document.querySelectorAll('.portfolio-details-btn');
  const portfolioModal = document.querySelector('.portfolio-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalBody = document.querySelector('.modal-body');
  
  // Sample portfolio details data
  const portfolioData = [
    {
      title: 'Personal Website',
      category: 'Web Development',
      client: 'Self Project',
      date: 'January 2025',
      description: 'A personal portfolio website built with HTML, CSS, and JavaScript. Features responsive design, interactive elements, and modern aesthetics.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Responsive Landing Page',
      category: 'HTML/CSS/JS',
      client: 'TechCorp Inc.',
      date: 'February 2025',
      description: 'A fully responsive landing page for a tech startup with animations, product showcase, and call-to-action sections.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP Animations'],
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'E-commerce UI',
      category: 'UI/UX Design',
      client: 'ShopEasy',
      date: 'March 2025',
      description: 'A complete UI/UX design for an e-commerce platform with focus on user experience, accessibility, and conversion optimization.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing'],
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];
  
  portfolioDetailBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Create modal content based on project data
      const projectData = portfolioData[index % portfolioData.length];
      
      const modalContent = `
        <div class="modal-header">
          <h2>${projectData.title}</h2>
          <p class="modal-category">${projectData.category}</p>
        </div>
        <div class="modal-img">
          <img src="${projectData.image}" alt="${projectData.title}">
        </div>
        <div class="modal-info">
          <div class="modal-details">
            <div class="detail">
              <h4>Client:</h4>
              <p>${projectData.client}</p>
            </div>
            <div class="detail">
              <h4>Date:</h4>
              <p>${projectData.date}</p>
            </div>
          </div>
          <div class="modal-description">
            <h3>Project Description</h3>
            <p>${projectData.description}</p>
          </div>
          <div class="modal-tech">
            <h3>Technologies Used</h3>
            <ul>
              ${projectData.technologies.map(tech => `<li>${tech}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
      
      modalBody.innerHTML = modalContent;
      portfolioModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  
  modalClose.addEventListener('click', () => {
    portfolioModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  });
  
  // Close modal when clicking outside the content
  portfolioModal.addEventListener('click', (e) => {
    if (e.target === portfolioModal) {
      portfolioModal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });
  
  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple form validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the form data to a server
      // For demo purposes, just log to console
      console.log('Form submitted:', { name, email, subject, message });
      
      // Show success message (in a real app, this would happen after successful AJAX)
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Custom cursor effect
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Delay follower slightly for effect
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    }, 50);
  });
  
  // Cursor effects when hovering over links and buttons
  const links = document.querySelectorAll('a, button, .btn-box, .skill-box, .portfolio-item');
  
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.opacity = '0.5';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorFollower.style.borderColor = 'rgba(14, 255, 255, 0.6)';
    });
    
    link.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.opacity = '1';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorFollower.style.borderColor = 'rgba(14, 255, 255, 0.3)';
    });
  });
  
  // Animate on scroll effect
  const animateElements = document.querySelectorAll('[data-aos]');
  
  function checkIfInView() {
    animateElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (elementPosition.top < windowHeight * 0.8) {
        element.classList.add('aos-animate');
      }
    });
  }
  
  // Initial check
  checkIfInView();
  
  // Check when scrolling
  window.addEventListener('scroll', checkIfInView);
  
  // Initialize active classes for navigation
  function setActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      
      if (window.scrollY >= sectionTop - 100) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', setActiveNav);
  window.addEventListener('load', setActiveNav);
});