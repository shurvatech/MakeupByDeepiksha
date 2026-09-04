/**
 * MakeupByDeepiksha - Interactive Website Logic
 * Pure Vanilla JavaScript | Production Ready
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. Header Scroll State & Active Page Navigation
     ========================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  const isHomePage = window.location.pathname.endsWith('index.html') || 
                     window.location.pathname.endsWith('/') || 
                     window.location.pathname.split('/').pop() === '';

  function handleHeaderScroll() {
    if (!siteHeader) return;
    if (isHomePage) {
      if (window.scrollY > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    } else {
      siteHeader.classList.add('header-solid');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // Active page navigation highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('nav a, .mobile-nav-links a');

  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('#')[0].split('/').pop() || 'index.html';

    if (linkPath === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  /* ==========================================================================
     2. Mobile Drawer Navigation
     ========================================================================== */
  const navToggle = document.getElementById('navToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileBackdrop = document.getElementById('mobileNavBackdrop');

  function openMobileMenu() {
    if (!mobileDrawer || !navToggle) return;
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('open');
    if (mobileBackdrop) mobileBackdrop.classList.add('open');
    document.body.classList.add('menu-open');
  }

  function closeMobileMenu() {
    if (!mobileDrawer || !navToggle) return;
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('open');
    if (mobileBackdrop) mobileBackdrop.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close when clicking any mobile link
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeLightbox();
    }
  });

  /* ==========================================================================
     3. Scroll Reveal Animations (IntersectionObserver)
     ========================================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal, .reveal-scale');

  if (!prefersReducedMotion && 'IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // If reduced motion or observer not supported, show immediately
    revealElements.forEach(el => el.classList.add('in'));
  }

  /* ==========================================================================
     4. Testimonials Carousel / Slider
     ========================================================================== */
  const sliderTrack = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');
  const dotsContainer = document.getElementById('testimonialDots');

  if (sliderTrack) {
    const slides = sliderTrack.querySelectorAll('.t-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let visibleSlides = getVisibleSlideCount();

    function getVisibleSlideCount() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function getMaxIndex() {
      return Math.max(0, totalSlides - visibleSlides);
    }

    function updateSlider() {
      visibleSlides = getVisibleSlideCount();
      const maxIndex = getMaxIndex();
      if (currentIndex > maxIndex) currentIndex = maxIndex;

      const slideWidthPercent = 100 / visibleSlides;
      const offset = -(currentIndex * slideWidthPercent);
      sliderTrack.style.transform = `translateX(${offset}%)`;

      // Update dot indicators
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.t-dot');
        dots.forEach((dot, idx) => {
          if (idx === currentIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
    }

    function createDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      const maxIndex = getMaxIndex();
      for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('button');
        dot.className = `t-dot ${i === currentIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to testimonial slide ${i + 1}`);
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateSlider();
        });
        dotsContainer.appendChild(dot);
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : getMaxIndex();
        updateSlider();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
        updateSlider();
      });
    }

    // Touch swipe support for testimonials
    let touchStartX = 0;
    let touchEndX = 0;

    sliderTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderTrack.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 40;
      if (touchStartX - touchEndX > swipeThreshold) {
        // swipe left -> next
        currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
        updateSlider();
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // swipe right -> prev
        currentIndex = currentIndex > 0 ? currentIndex - 1 : getMaxIndex();
        updateSlider();
      }
    }

    window.addEventListener('resize', () => {
      createDots();
      updateSlider();
    });

    createDots();
    updateSlider();
  }

  /* ==========================================================================
     5. Portfolio Gallery Lightbox Modal
     ========================================================================== */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTag = document.getElementById('lightboxTag');
  const lightboxAlt = document.getElementById('lightboxAlt');
  const lightboxCloseBtn = document.getElementById('lightboxClose');
  const lightboxPrevBtn = document.getElementById('lightboxPrev');
  const lightboxNextBtn = document.getElementById('lightboxNext');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

  let currentGalleryIndex = 0;

  function openLightbox(index) {
    if (!lightboxModal || !lightboxImg || galleryItems.length === 0) return;
    currentGalleryIndex = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentGalleryIndex];
    const img = item.querySelector('img');
    const tag = item.querySelector('.tag');
    const view = item.querySelector('.view');

    const highResSrc = item.dataset.full || img.getAttribute('src');
    const altText = img.getAttribute('alt') || '';
    const tagText = tag ? tag.textContent.trim() : '';

    lightboxImg.setAttribute('src', highResSrc);
    lightboxImg.setAttribute('alt', altText);
    if (lightboxTag) lightboxTag.textContent = tagText;
    if (lightboxAlt) lightboxAlt.textContent = altText;

    lightboxModal.classList.add('open');
    document.body.classList.add('menu-open');
    lightboxModal.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
    document.body.classList.remove('menu-open');
    lightboxModal.setAttribute('aria-hidden', 'true');
  }

  function showNextLightbox() {
    openLightbox(currentGalleryIndex + 1);
  }

  function showPrevLightbox() {
    openLightbox(currentGalleryIndex - 1);
  }

  if (galleryItems.length > 0) {
    galleryItems.forEach((item, idx) => {
      item.addEventListener('click', () => openLightbox(idx));
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(idx);
        }
      });
    });
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrevLightbox();
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showNextLightbox();
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    // Lightbox keyboard controls
    document.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('open')) return;
      if (e.key === 'ArrowRight') {
        showNextLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrevLightbox();
      }
    });

    // Touch swipe for lightbox
    let lbTouchStartX = 0;
    let lbTouchEndX = 0;

    lightboxModal.addEventListener('touchstart', (e) => {
      lbTouchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      lbTouchEndX = e.changedTouches[0].screenX;
      if (lbTouchStartX - lbTouchEndX > 50) {
        showNextLightbox();
      } else if (lbTouchEndX - lbTouchStartX > 50) {
        showPrevLightbox();
      }
    }, { passive: true });
  }

  /* ==========================================================================
     6. Portfolio Filter Tabs (work.html)
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.gallery-filters .filter-btn');

  if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterVal = btn.dataset.filter || 'all';

        galleryItems.forEach(item => {
          const category = item.dataset.category || 'all';
          if (filterVal === 'all' || category.includes(filterVal)) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 30);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  /* ==========================================================================
     7. Contact Form WhatsApp Generator (contact.html)
     ========================================================================== */
  const consultationForm = document.getElementById('consultationForm');

  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('brideName')?.value.trim() || '';
      const phone = document.getElementById('bridePhone')?.value.trim() || '';
      const date = document.getElementById('eventDate')?.value.trim() || '';
      const eventType = document.getElementById('eventType')?.value.trim() || '';
      const location = document.getElementById('eventLocation')?.value.trim() || '';
      const notes = document.getElementById('eventNotes')?.value.trim() || '';

      let message = `Hi Deepiksha, I'd like to check your availability for a bridal makeup session!%0A%0A`;
      if (name) message += `*Name:* ${encodeURIComponent(name)}%0A`;
      if (phone) message += `*Phone:* ${encodeURIComponent(phone)}%0A`;
      if (date) message += `*Event Date:* ${encodeURIComponent(date)}%0A`;
      if (eventType) message += `*Event Type:* ${encodeURIComponent(eventType)}%0A`;
      if (location) message += `*Location:* ${encodeURIComponent(location)}%0A`;
      if (notes) message += `*Notes:* ${encodeURIComponent(notes)}%0A`;

      const whatsappUrl = `https://wa.me/919819161943?text=${message}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
