/**
 * Mountain Bliss - Main JavaScript file
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    delay: 100,
    easing: 'ease-in-out'
  });

  // Initialize preloader animation
  initPreloader();
  
  // Initialize scroll animations
  initScrollAnimations();
  
  // Load content
  loadContent();
  
  // Create snow effect for hero section
  createSnowEffect();
  
  // Initialize all event handlers
  initEventHandlers();
  
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Add luxury class to section titles
  document.querySelectorAll('.section-title').forEach(title => {
    title.classList.add('luxury-text');
  });
});

/**
 * Initialize preloader animation and hide after timeout
 */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const mountainLeft = document.querySelector('.mountain-left');
  const mountainMiddle = document.querySelector('.mountain-middle');
  const mountainRight = document.querySelector('.mountain-right');
  const loaderText = document.querySelector('.loader-text');
  
  // Animate mountains and text using GSAP
  const tl = gsap.timeline();
  
  tl.to(mountainLeft, { opacity: 1, duration: 0.8, delay: 0.2 })
    .to(mountainMiddle, { opacity: 1, duration: 0.8 }, "-=0.6")
    .to(mountainRight, { opacity: 1, duration: 0.8 }, "-=0.6")
    .to(loaderText, { opacity: 1, duration: 1 }, "-=0.4");

  // Hide preloader after 3 seconds
  setTimeout(() => {
    gsap.to(preloader, {
      opacity: 0,
      duration: 0.8,
      onComplete: () => {
        preloader.style.display = 'none';
        // Initialize hero animations after preloader is gone
        initHeroAnimations();
      }
    });
  }, 3000);
}

/**
 * Initialize hero section animations
 */
function initHeroAnimations() {
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroButtons = document.querySelector('.hero-buttons');
  
  const tl = gsap.timeline();
  
  tl.to(heroTitle, {
    opacity: 1,
    y: 0,
    duration: 1.2
  })
  .to(heroSubtitle, {
    opacity: 1,
    y: 0,
    duration: 1.2
  }, "-=0.8")
  .to(heroButtons, {
    opacity: 1,
    y: 0,
    duration: 1
  }, "-=0.8");
}

/**
 * Initialize scroll-based animations
 */
function initScrollAnimations() {
  // Initialize header scroll effect
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Initialize parallax effects for sections
  gsap.registerPlugin(ScrollTrigger);
  
  // About image parallax
  ScrollTrigger.create({
    trigger: "#about",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
    onEnter: () => {
      gsap.to(".about-img", {
        y: -50,
        duration: 1.5,
        ease: "power2.out"
      });
    }
  });
}

/**
 * Load dynamic content from data files
 */
function loadContent() {
  // Load amenities
  const amenitiesGrid = document.getElementById('amenities-grid');
  
  amenitiesData.forEach((amenity, index) => {
    const amenityCard = document.createElement('div');
    amenityCard.className = 'col-md-6 col-lg-4 mb-4';
    amenityCard.setAttribute('data-aos', 'fade-up');
    amenityCard.setAttribute('data-aos-delay', 100 + (index * 100));
    
    amenityCard.innerHTML = `
      <div class="amenity-card">
        <div class="amenity-icon">
          <i class="fas ${amenity.icon}"></i>
        </div>
        <h3 class="amenity-title">${amenity.title}</h3>
        <p class="amenity-desc">${amenity.description}</p>
      </div>
    `;
    
    amenitiesGrid.appendChild(amenityCard);
  });
  
  // Load nearby attractions
  const attractionsList = document.getElementById('attractions-list');
  
  nearbyAttractions.forEach((attraction) => {
    const attractionItem = document.createElement('li');
    attractionItem.className = 'attraction-item';
    
    attractionItem.innerHTML = `
      <span class="attraction-icon"><i class="fas ${attraction.icon}"></i></span>
      <div>
        <span class="attraction-name">${attraction.name}</span>
        <p class="attraction-distance">${attraction.distance}</p>
      </div>
    `;
    
    attractionsList.appendChild(attractionItem);
  });
  
  // Load property plans
  const propertyPlansContainer = document.getElementById('property-plans');
  
  propertyPlans.forEach((plan, index) => {
    const propertyCol = document.createElement('div');
    propertyCol.className = 'col-md-6 col-lg-4 mb-4';
    propertyCol.setAttribute('data-aos', 'fade-up');
    propertyCol.setAttribute('data-aos-delay', 100 + (index * 100));
    
    propertyCol.innerHTML = `
      <div class="card-wrapper">
        <div class="card-inner">
          <div class="property-card-front">
            <div class="property-image">
              <img src="${plan.image}" alt="${plan.name}">
              <div class="property-category">${plan.category}</div>
            </div>
            <div class="property-content">
              <h3 class="property-title">${plan.name}</h3>
              <div class="property-stats">
                <span class="property-stat"><i class="fas fa-ruler-combined"></i> ${plan.sqft}</span>
                <span class="property-stat"><i class="fas fa-bed"></i> ${plan.beds} Beds</span>
                <span class="property-stat"><i class="fas fa-bath"></i> ${plan.baths} Baths</span>
              </div>
              <div class="property-actions">
                <div class="property-price">${plan.price}</div>
                <a href="javascript:void(0)" class="property-details">View Details</a>
              </div>
            </div>
          </div>
          <div class="property-card-back">
            <h3 class="text-gold mb-4">${plan.name}</h3>
            <div>
              <h4 class="text-white mb-3">Features:</h4>
              <ul class="features-list">
                ${plan.features.map(feature => `<li class="feature"><i class="fas fa-check"></i> ${feature}</li>`).join('')}
              </ul>
            </div>
            <div class="mt-auto">
              <a href="#contact" class="btn btn-gold w-100">Request Information</a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    propertyPlansContainer.appendChild(propertyCol);
  });
  
  // Load gallery images
  const galleryGrid = document.getElementById('gallery-grid');
  const modalGalleryGrid = document.getElementById('modal-gallery-grid');
  
  // Function to create gallery item
  function createGalleryItem(image, index, isModal = false) {
    const galleryCol = document.createElement('div');
    galleryCol.className = isModal ? 'col-sm-6 col-md-4 mb-4' : 'col-md-6 col-lg-4 mb-4';
    
    if (!isModal) {
      galleryCol.setAttribute('data-aos', 'fade-up');
      galleryCol.setAttribute('data-aos-delay', 100 + (index * 50));
    }
    
    galleryCol.innerHTML = `
      <div class="gallery-item" data-category="${image.category}" data-image-url="${image.url}">
        <img src="${image.url}" alt="${image.title}">
        <div class="gallery-overlay">
          <h3 class="gallery-title">${image.title}</h3>
          <p class="gallery-subtitle">${image.subtitle}</p>
        </div>
      </div>
    `;
    
    return galleryCol;
  }
  
  // Add gallery items to main gallery
  galleryImages.forEach((image, index) => {
    galleryGrid.appendChild(createGalleryItem(image, index));
  });
  
  // Add gallery items to modal gallery
  galleryImages.forEach((image, index) => {
    modalGalleryGrid.appendChild(createGalleryItem(image, index, true));
  });
}

/**
 * Initialize all event handlers
 */
function initEventHandlers() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuToggle.addEventListener('click', function() {
    if (mobileMenu.style.display === 'block') {
      gsap.to(mobileMenu, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          mobileMenu.style.display = 'none';
        }
      });
    } else {
      mobileMenu.style.display = 'block';
      gsap.fromTo(mobileMenu,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
    }
  });
  
  // Mobile menu link click (closes menu)
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav .btn-inquire');
  
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      gsap.to(mobileMenu, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          mobileMenu.style.display = 'none';
        }
      });
    });
  });
  
  // Gallery filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      // Filter gallery items
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          gsap.to(item.parentElement, { opacity: 1, scale: 1, duration: 0.4 });
        } else {
          gsap.to(item.parentElement, { opacity: 0.3, scale: 0.9, duration: 0.4 });
        }
      });
    });
  });
  
  // Gallery item click - opens lightbox
  const galleryItemsAll = document.querySelectorAll('.gallery-item');
  const lightboxImage = document.getElementById('lightbox-image');
  const imageLightbox = new bootstrap.Modal(document.getElementById('imageLightbox'));
  
  galleryItemsAll.forEach(item => {
    item.addEventListener('click', function() {
      const imageUrl = this.getAttribute('data-image-url');
      lightboxImage.src = imageUrl;
      imageLightbox.show();
    });
  });
  
  // View full gallery button
  const viewFullGalleryBtn = document.getElementById('view-full-gallery');
  const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
  
  viewFullGalleryBtn.addEventListener('click', function() {
    galleryModal.show();
  });
  
  // Contact form validation and submission
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  const successMessage = document.getElementById('success-message');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    let isValid = true;
    
    if (name.trim() === '') {
      document.getElementById('name').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('name').classList.remove('is-invalid');
    }
    
    if (email.trim() === '' || !isValidEmail(email)) {
      document.getElementById('email').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('email').classList.remove('is-invalid');
    }
    
    if (interest === '' || interest === null) {
      document.getElementById('interest').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('interest').classList.remove('is-invalid');
    }
    
    if (message.trim() === '' || message.length < 10) {
      document.getElementById('message').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('message').classList.remove('is-invalid');
    }
    
    if (isValid) {
      // Show loading state
      submitBtn.innerHTML = '<span><i class="fas fa-spinner fa-spin me-2"></i>Processing...</span>';
      submitBtn.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = 'Submit Inquiry';
        submitBtn.disabled = false;
        
        // Show success message
        successMessage.textContent = 'Your inquiry has been submitted. Our team will contact you soon.';
        successModal.show();
      }, 1500);
    }
  });
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletter-form');
  
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    if (email.trim() === '' || !isValidEmail(email)) {
      // Show error
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      // Reset form
      this.reset();
      
      // Show success message
      successMessage.textContent = 'You have been subscribed to our newsletter.';
      successModal.show();
    }, 800);
  });
  
  // Chat widget functionality
  const chatToggle = document.getElementById('chat-toggle');
  const chatContainer = document.getElementById('chat-container');
  const closeChat = document.getElementById('close-chat');
  const chatMessages = document.getElementById('chat-messages');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const startChatBtn = document.getElementById('start-chat');
  
  let messageId = 0;
  
  // Toggle chat widget
  function toggleChat() {
    if (chatContainer.style.display === 'flex') {
      chatContainer.style.display = 'none';
      chatToggle.innerHTML = '<i class="fas fa-comments"></i>';
    } else {
      chatContainer.style.display = 'flex';
      chatToggle.innerHTML = '<i class="fas fa-times"></i>';
      
      // Add initial message if empty
      if (chatMessages.childElementCount === 0) {
        addMessage("Hello! Welcome to Mountain Bliss. How can I assist you today?", 'agent');
      }
      
      // Focus input
      setTimeout(() => chatInput.focus(), 300);
    }
  }
  
  chatToggle.addEventListener('click', toggleChat);
  closeChat.addEventListener('click', toggleChat);
  startChatBtn.addEventListener('click', toggleChat);
  
  // Send message
  chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    chatInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate response after delay
    setTimeout(() => {
      // Hide typing indicator
      hideTypingIndicator();
      
      // Get random response
      const responseIndex = Math.floor(Math.random() * agentResponses.length);
      
      // Add agent response
      addMessage(agentResponses[responseIndex], 'agent');
    }, 1500);
  });
  
  // Add message to chat
  function addMessage(text, sender) {
    messageId++;
    
    const messageEl = document.createElement('div');
    messageEl.className = `message ${sender}`;
    messageEl.id = `message-${messageId}`;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageEl.innerHTML = `
      <div class="message-content">${text}</div>
      <div class="message-time">${time}</div>
    `;
    
    chatMessages.appendChild(messageEl);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // Show typing indicator
  function showTypingIndicator() {
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message agent';
    typingIndicator.id = 'typing-indicator';
    
    typingIndicator.innerHTML = `
      <div class="typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    
    chatMessages.appendChild(typingIndicator);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // Hide typing indicator
  function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }
}

/**
 * Create snow effect for hero section
 */
function createSnowEffect() {
  const mountainDecoration = document.querySelector('.mountain-decoration');
  if (!mountainDecoration) return;
  
  // Create 50 snowflakes
  for (let i = 0; i < 50; i++) {
    createSnowflake(mountainDecoration);
  }
}

/**
 * Create individual snowflake
 */
function createSnowflake(parent) {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  
  // Random position
  const posX = Math.random() * 100; // percentage
  const posY = Math.random() * 100; // percentage
  
  // Random size
  const size = Math.random() * 3 + 1; // 1-4px
  
  // Random animation duration
  const duration = Math.random() * 10 + 5; // 5-15s
  
  // Random animation delay
  const delay = Math.random() * 5; // 0-5s
  
  // Apply styles
  snowflake.style.left = `${posX}%`;
  snowflake.style.top = `${posY}%`;
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.animationDuration = `${duration}s`;
  snowflake.style.animationDelay = `${delay}s`;
  
  // Add to parent
  parent.appendChild(snowflake);
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
