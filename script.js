const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => nav?.classList.remove("open"));
});

const toast = document.querySelector("[data-toast]");

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Numero copie : " + text);
  } catch {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    field.remove();
    showToast("Numero copie : " + text);
  }
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", () => copyText(button.dataset.copy));
});

const carousel = document.querySelector("[data-carousel]");

if (carousel) {
  const slides = [...carousel.querySelectorAll(".product-slide")];
  const tabs = [...carousel.querySelectorAll("[data-slide]")];
  const dotsBox = carousel.querySelector("[data-dots]");
  const prev = carousel.querySelector("[data-prev]");
  const next = carousel.querySelector("[data-next]");
  let active = 0;
  let timer;

  if (!dotsBox || slides.length === 0) {
    carousel.hidden = true;
  } else {
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Afficher le produit ${index + 1}`);
      dot.addEventListener("click", () => showSlide(index, true));
      dotsBox.appendChild(dot);
    });

    const dots = [...dotsBox.querySelectorAll("button")];

    function showSlide(index, manual = false) {
      active = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === active));
      tabs.forEach((tab, tabIndex) => tab.classList.toggle("active", tabIndex === active));
      dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === active));

      if (manual) restartTimer();
    }

    function restartTimer() {
      window.clearInterval(timer);
      timer = window.setInterval(() => showSlide(active + 1), 6500);
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => showSlide(Number(tab.dataset.slide), true));
    });

    prev?.addEventListener("click", () => showSlide(active - 1, true));
    next?.addEventListener("click", () => showSlide(active + 1, true));

    carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
    carousel.addEventListener("mouseleave", restartTimer);

    showSlide(0);
    restartTimer();
  }
}

const revealTargets = document.querySelectorAll(
  ".solution-grid article, .service-grid article, .project-grid article, .partner-cards article, .commitment-row span, .partner-strip span, .map-layout"
);

revealTargets.forEach((target) => target.setAttribute("data-reveal", ""));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((target) => revealObserver.observe(target));

const counters = document.querySelectorAll("[data-count]");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const end = Number(element.dataset.count);
      const duration = 1200;
      const startTime = performance.now();

      function tick(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.round(end * eased).toLocaleString("fr-FR");

        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      counterObserver.unobserve(element);
    });
  },
  { threshold: 0.8 }
);

counters.forEach((counter) => counterObserver.observe(counter));

// Contact form validation and submission
const contactForm = document.querySelector('.contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      showFormMessage('Veuillez remplir tous les champs obligatoires.', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showFormMessage('Veuillez entrer une adresse email valide.', 'error');
      return;
    }

    const subjectText = encodeURIComponent(String(subject));
    const bodyText = encodeURIComponent([
      `Nom: ${name}`,
      `Entreprise: ${formData.get('company') || ''}`,
      `Email: ${email}`,
      `Telephone: ${formData.get('phone') || ''}`,
      '',
      String(message),
    ].join('\r\n'));

    window.location.href = `mailto:m.aitbelkacem@gimelec.com?subject=${subjectText}&body=${bodyText}`;
    showFormMessage('Ouverture de votre messagerie...', 'success');
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showFormMessage(message, type) {
  if (!formMessage) return;
  formMessage.textContent = message;
  formMessage.className = 'form-message ' + type;
  
  if (type === 'success') {
    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.className = 'form-message';
    }, 5000);
  }
}

// Language selector functionality
const langSelector = document.querySelector('[data-lang-selector]');
const currentLangBtn = langSelector?.querySelector('[data-current-lang]');
const langDropdown = langSelector?.querySelector('.lang-dropdown');
const langButtons = langSelector?.querySelectorAll('[data-lang]');

if (langSelector && currentLangBtn && langDropdown && langButtons) {
  currentLangBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSelector.classList.toggle('open');
  });

  langButtons.forEach((btn) => {
    if (btn !== currentLangBtn) {
      btn.addEventListener('click', () => {
        const selectedLang = btn.dataset.lang;
        currentLangBtn.textContent = selectedLang.toUpperCase();
        currentLangBtn.dataset.currentLang = selectedLang;
        langSelector.classList.remove('open');
        
        // Here you would implement the actual language switching logic
        // For now, this is a placeholder for future translation implementation
        console.log('Language switched to:', selectedLang);
      });
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    langSelector.classList.remove('open');
  });
}
