/* ============================================================
   AHMAD FAROOQ — Global Scripts
   All 9 shared behaviors — loaded in every page footer
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. FONT FOUT GUARD
        Triggers .fonts-ready on body after all fonts load,
        which starts the page-in animation.
  ---------------------------------------------------------- */
  document.fonts.ready.then(function () {
    document.body.classList.add('fonts-ready');
  });

  /* ----------------------------------------------------------
     2. MOBILE MENU TOGGLE
  ---------------------------------------------------------- */
  var menuToggle = document.querySelector('.menu-toggle');
  var navLinks   = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close nav when a link is clicked */
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (navLinks.classList.contains('open') &&
          !navLinks.contains(e.target) &&
          !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ----------------------------------------------------------
     3. DROPDOWN TOGGLE (mobile accordion, ≤900px)
  ---------------------------------------------------------- */
  var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      /* On desktop, CSS :hover handles it — only intercept on mobile */
      if (window.innerWidth > 900) return;
      e.preventDefault();
      var parent = btn.closest('.dropdown');
      var isOpen = parent.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });

  /* ----------------------------------------------------------
     4. CASE STUDY ACCORDION (one-at-a-time)
  ---------------------------------------------------------- */
  var caseStudies = document.querySelectorAll('.case-study');

  caseStudies.forEach(function (cs) {
    var header = cs.querySelector('.case-study-header');
    var body   = cs.querySelector('.case-study-body');
    if (!header || !body) return;

    header.addEventListener('click', function () {
      var isOpen = cs.classList.contains('open');

      /* Collapse all */
      caseStudies.forEach(function (other) {
        var otherBody = other.querySelector('.case-study-body');
        other.classList.remove('open');
        if (otherBody) otherBody.style.maxHeight = '0';
        var toggle = other.querySelector('.case-study-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });

      /* If it wasn't open, open this one */
      if (!isOpen) {
        cs.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
        var toggle = cs.querySelector('.case-study-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ----------------------------------------------------------
     5. SCROLL REVEAL
        IntersectionObserver adds .visible when element enters
        viewport (10% threshold, -40px rootMargin)
  ---------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length > 0 && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    /* Fallback: show all immediately */
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ----------------------------------------------------------
     6. BLOG CATEGORY FILTER
        Filters .blog-card elements by data-category attribute.
        "all" shows everything.
  ---------------------------------------------------------- */
  var filterBtns  = document.querySelectorAll('.filter-btn');
  var blogCards   = document.querySelectorAll('.blog-card');
  var blogEmpty   = document.querySelector('.blog-empty');

  if (filterBtns.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var cat = btn.dataset.category;
        var visible = 0;

        blogCards.forEach(function (card) {
          var match = (cat === 'all' || card.dataset.category === cat);
          card.style.display = match ? '' : 'none';
          if (match) visible++;
        });

        if (blogEmpty) {
          blogEmpty.style.display = (visible === 0) ? 'block' : 'none';
        }
      });
    });
  }

  /* ----------------------------------------------------------
     7. PARALLAX SHAPES
        Passive scroll listener — translateY proportional to
        scroll position × multiplier per shape.
  ---------------------------------------------------------- */
  var parallaxShapes = document.querySelectorAll('.parallax-shape');

  if (parallaxShapes.length > 0) {
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      parallaxShapes.forEach(function (shape, i) {
        var speed = (i + 1) * 0.03;
        shape.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
      });
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     8. MODAL OPEN / CLOSE
        data-modal="modal-id" on trigger elements.
        Overlay click and .modal-close button both close.
  ---------------------------------------------------------- */
  document.addEventListener('click', function (e) {
    /* Open */
    var trigger = e.target.closest('[data-modal]');
    if (trigger) {
      var modalId = trigger.dataset.modal;
      var overlay = document.getElementById(modalId);
      if (overlay) {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
      return;
    }

    /* Close via X button */
    var closeBtn = e.target.closest('.modal-close');
    if (closeBtn) {
      var overlay = closeBtn.closest('.modal-overlay');
      if (overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
      return;
    }

    /* Close by clicking backdrop */
    if (e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  /* Close modals on Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(function (ov) {
        ov.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });

  /* ----------------------------------------------------------
     9. ACTIVE NAV LINK
        Compares current filename to each nav link's href.
  ---------------------------------------------------------- */
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';
  var navAnchors  = document.querySelectorAll('.nav-links a');

  navAnchors.forEach(function (a) {
    var href = a.getAttribute('href');
    if (href && href.split('/').pop() === currentFile) {
      a.classList.add('active');
    }
  });

})();
