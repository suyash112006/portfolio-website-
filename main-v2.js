/* ============================================================
   SUYASH PORTFOLIO - ADVANCED ANIMATION ENGINE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ============================
    // 1. INIT HERO SEQUENCE
    // ============================
    function triggerHeroSequence() {
        const heroEls = document.querySelectorAll('.hero .reveal, .hero-badge');
        heroEls.forEach((el, i) => {
            setTimeout(() => el.classList.add('active'), i * 120);
        });
    }
    setTimeout(triggerHeroSequence, 100);


    // ============================
    // 2. INTERACTIVE PARTICLE NETWORK
    // ============================
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let mouse = { x: -1000, y: -1000 };
    let particles = [];
    const PARTICLE_COUNT = 100;
    const CONNECTION_DIST = 150;
    const MOUSE_RADIUS = 200;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        // Cursor glow
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.baseX = this.x;
            this.baseY = this.y;
            this.size = Math.random() * 2 + 0.5;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.15;
            this.pulseSpeed = Math.random() * 0.02 + 0.01;
            this.pulsePhase = Math.random() * Math.PI * 2;
            const palette = [
                [99, 102, 241],  // indigo
                [139, 92, 246],  // violet
                [6, 182, 212],   // cyan
                [167, 139, 250], // purple
            ];
            this.color = palette[Math.floor(Math.random() * palette.length)];
        }

        update(time) {
            // Base movement
            this.x += this.vx;
            this.y += this.vy;

            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;

            // Mouse repulsion — particles gently push away from cursor
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MOUSE_RADIUS) {
                const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                const angle = Math.atan2(dy, dx);
                this.x += Math.cos(angle) * force * 2;
                this.y += Math.sin(angle) * force * 2;
            }

            // Pulse size
            this.currentSize = this.size + Math.sin(time * this.pulseSpeed + this.pulsePhase) * 0.5;
        }

        draw(time) {
            const pulsedOpacity = this.opacity + Math.sin(time * this.pulseSpeed + this.pulsePhase) * 0.1;
            ctx.beginPath();
            ctx.arc(this.x, this.y, Math.max(this.currentSize, 0.1), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${pulsedOpacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECTION_DIST) {
                    const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }

        // Draw lines from mouse to nearby particles (interactive web)
        particles.forEach(p => {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MOUSE_RADIUS) {
                const alpha = (1 - dist / MOUSE_RADIUS) * 0.2;
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(p.x, p.y);
                ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        });
    }

    let startTime = performance.now();
    function animateParticles() {
        const time = performance.now() - startTime;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(time); p.draw(time); });
        drawConnections();
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // ============================
    // 3. CURSOR GLOW
    // ============================
    const cursorGlow = document.getElementById('cursorGlow');

    // ============================
    // 4. TYPED TEXT EFFECT (Smoother)
    // ============================
    const typedEl = document.getElementById('typedText');
    const phrases = [
        'Responsive Websites.',
        'React Applications.',
        'Next.js Dashboards.',
        'Landing Pages.',
        'Full-Stack Solutions.',
        'Database-Driven Apps.'
    ];
    let phraseIdx = 0, charIdx = 0, isDeleting = false;

    function type() {
        const current = phrases[phraseIdx];
        if (isDeleting) {
            charIdx--;
            typedEl.textContent = current.substring(0, charIdx);
        } else {
            charIdx++;
            typedEl.textContent = current.substring(0, charIdx);
        }

        let delay = isDeleting ? 40 : 80;
        if (!isDeleting && charIdx === current.length) {
            delay = 2200;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            delay = 500;
        }
        setTimeout(type, delay);
    }
    setTimeout(type, 2000);

    // ============================
    // 5. MAGNETIC BUTTONS
    // ============================
    document.querySelectorAll('.btn-primary, .btn-ghost, .hero-social-link, .csocial-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
            btn.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            setTimeout(() => { btn.style.transition = ''; }, 400);
        });
    });

    // ============================
    // 6. NAVBAR SCROLL & ACTIVE
    // ============================
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const scrollTopBtn = document.getElementById('scrollTop');

    function onScroll() {
        // Sticky
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        // Scroll top button
        scrollTopBtn.classList.toggle('show', window.scrollY > 500);

        // Active nav
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // ============================
    // 7. MOBILE MENU
    // ============================
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // ============================
    // 8. SCROLL REVEAL (Advanced Intersection Observer)
    // ============================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Animate skill bars
                if (entry.target.classList.contains('skill-card')) {
                    entry.target.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
                        setTimeout(() => bar.classList.add('animated'), i * 200);
                    });
                }

                // Animate counter
                if (entry.target.classList.contains('stat-box')) {
                    const numEl = entry.target.querySelector('.stat-num');
                    if (numEl) animateCounter(numEl);
                }

                // Text character split animation
                if (entry.target.classList.contains('char-reveal')) {
                    animateChars(entry.target);
                }
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ============================
    // 9. COUNTER ANIMATION (Smooth easing)
    // ============================
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'));
        if (!target || el.dataset.animated) return;
        el.dataset.animated = 'true';
        const duration = 1500;
        const startTime = performance.now();

        function step(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(step);
    }

    // ============================
    // 10. SCROLL TO TOP
    // ============================
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });



    // ============================
    // 12. PARALLAX FLOATING BADGES
    // ============================
    const heroBadges = document.querySelectorAll('.float-badge');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        heroBadges.forEach((badge, i) => {
            const speed = 0.03 + i * 0.02;
            badge.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, { passive: true });

    // ============================
    // 13. 3D CARD TILT (Advanced)
    // ============================
    document.querySelectorAll('.project-card-v2, .service-card-v2, .testi-card, .skill-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const tiltX = (y - 0.5) * 8;
            const tiltY = (0.5 - x) * 8;

            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px) scale(1.02)`;

            // Dynamic glow that follows cursor
            card.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(99,102,241,0.08), rgba(255,255,255,0.02) 50%)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.background = '';
            card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            setTimeout(() => { card.style.transition = ''; }, 500);
        });
    });

    // ============================
    // 14. SMOOTH SCROLLING
    // ============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ============================
    // 15. FOOTER YEAR
    // ============================
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ============================
    // 16. STAGGERED SERVICE ICON ANIMATION
    // ============================
    document.querySelectorAll('.service-card-v2').forEach(card => {
        const icon = card.querySelector('.service-icon-wrap');
        card.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.15) rotate(-8deg)';
            icon.style.boxShadow = '0 8px 30px rgba(99,102,241,0.3)';
        });
        card.addEventListener('mouseleave', () => {
            icon.style.transform = '';
            icon.style.boxShadow = '';
        });
    });

    // ============================
    // 17. TEXT SCRAMBLE EFFECT for section tags
    // ============================
    const tagObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.scrambled) {
                entry.target.dataset.scrambled = 'true';
                scrambleText(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-tag').forEach(el => tagObserver.observe(el));

    function scrambleText(el) {
        const original = el.textContent;
        const chars = '!@#$%^&*()_+-={}[]|:;<>?/~';
        let iterations = 0;

        const interval = setInterval(() => {
            el.textContent = original
                .split('')
                .map((char, idx) => {
                    if (idx < iterations) return original[idx];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');

            iterations += 0.8;
            if (iterations >= original.length) {
                el.textContent = original;
                clearInterval(interval);
            }
        }, 30);
    }

    // ============================
    // 18. SCROLL PROGRESS BAR
    // ============================
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        }, { passive: true });
    }

    // ============================
    // 19. PORTFOLIO CAROUSEL
    // ============================
    const projectData = [
        {
            title: "Trading Journal",
            duration: "3 Months",
            desc: "Full Stack Trading Analytics Platform. A comprehensive trading analytics platform that helps traders track performance, replay charts, and make data-driven decisions.",
            problem: "Traders lacked a unified platform to backtest strategies, journal their trades, and analyze their performance metrics without using multiple disjointed tools.",
            solution: "Built a comprehensive full-stack analytics platform that integrates real-time chart replays, automated journaling, and deep performance insights into a single dashboard.",
            results: "Increased trader retention by 40% and reduced manual journaling time by 2 hours per week for active users.",
            stack: ["Flask", "PostgreSQL", "JavaScript", "TradingView"],
            features: [
                { icon: "fa-solid fa-chart-line", text: "Chart Replay System" },
                { icon: "fa-solid fa-book", text: "Trade Journal" },
                { icon: "fa-solid fa-chart-pie", text: "Performance Analytics" }
            ],
            githubUrl: "#",
            demoUrl: "#",
            screenshots: [
                "trading-1.png",
                "trading-2.png",
                "trading-3.png",
                "trading-4.png",
                "trading-5.png"
            ]
        },
        {
            title: "Garage Manager",
            duration: "2 Months",
            desc: "Garage Business Management System. A full business management system for garages — from customer onboarding to invoice generation and mechanic tracking.",
            problem: "Local garages were using paper-based tracking for vehicle repairs, leading to lost invoices, inefficient mechanic scheduling, and poor customer communication.",
            solution: "Developed an end-to-end SaaS application that digitalizes vehicle intake, automates invoice generation, and provides mechanics with a real-time job dashboard.",
            results: "Streamlined operations for 3 local garages, reducing administrative overhead by 30% and improving invoice collection rates.",
            stack: ["Next.js", "PostgreSQL", "Tailwind CSS"],
            features: [
                { icon: "fa-solid fa-users", text: "Customer Management" },
                { icon: "fa-solid fa-file-invoice-dollar", text: "Invoice Generation" },
                { icon: "fa-solid fa-wrench", text: "Mechanic Dashboard" }
            ],
            githubUrl: "#",
            demoUrl: "#",
            screenshots: [
                "garage-1.png",
                "garage-2.png",
                "garage-3.png",
                "garage-4.png",
                "garage-5.png"
            ]
        },
        {
            title: "Modern Landing Page",
            duration: "3 Weeks",
            desc: "Responsive Business Landing Page. A conversion-optimised business landing page with professional design, fast load times, and a clear call-to-action hierarchy.",
            problem: "A client was experiencing high bounce rates and low lead generation due to an outdated, slow-loading, and non-responsive website.",
            solution: "Designed and developed a highly optimized, mobile-first landing page utilizing modern aesthetics, micro-animations, and strategic call-to-actions.",
            results: "Achieved a perfect 100 Lighthouse performance score and increased lead conversion rate by 215% within the first month.",
            stack: ["React", "Next.js", "Tailwind CSS"],
            features: [
                { icon: "fa-solid fa-mobile-screen", text: "Mobile Optimized" },
                { icon: "fa-solid fa-bolt", text: "Fast Loading" },
                { icon: "fa-solid fa-palette", text: "Modern UI/UX" }
            ],
            githubUrl: "#",
            demoUrl: "#",
            screenshots: [
                "bluecandle-1.png"
            ]
        }
    ];

    const track = document.getElementById('projectCarouselTrack');
    const detailsContainer = document.getElementById('projectDetailsDisplay');
    let activeIdx = 0;
    let carouselInterval;
    let cards = [];

    function initCarousel() {
        if (!track) return;
        
        // Generate cards
        track.innerHTML = '';
        projectData.forEach((data, index) => {
            const card = document.createElement('div');
            card.className = 'carousel-card';
            card.dataset.index = index;
            // Setting specific thumbnails for the projects
            let imgSrc = '';
            if (index === 0) imgSrc = 'trading-thumb.png'; // Trading Journal Thumbnail
            else if (index === 1) imgSrc = 'garage-thumb.png'; // Garage Manager Thumbnail
            else imgSrc = 'hero_laptop.png'; // Modern Landing Page Thumbnail

            let categoryText = "BUSINESS APP";
            if (index === 0) categoryText = "FINANCE APP";
            if (index === 2) categoryText = "LANDING PAGE";

            card.innerHTML = `
                <img src="${imgSrc}" alt="${data.title}">
                <div class="carousel-card-title">${data.title}</div>
                <div class="carousel-card-hover-overlay">
                    <button class="view-screenshot-btn" data-imgs='${JSON.stringify(data.screenshots || []).replace(/"/g, "&quot;")}'>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    <div class="hover-category">${categoryText}</div>
                    <h3>${data.title}</h3>
                    <p>${data.desc}</p>
                    <ul class="hover-features">
                        ${data.features.map(f => `<li><i class="fa-solid fa-check-circle" style="color: #10b981;"></i> ${f.text}</li>`).join('')}
                    </ul>
                    <div class="card-tech">
                        ${data.stack.map(s => `<span>${s}</span>`).join('')}
                    </div>
                </div>
            `;
            track.appendChild(card);
            cards.push(card);
            
            card.addEventListener('click', (e) => {
                // If they clicked the view screenshot button, open the modal
                if(e.target.closest('.view-screenshot-btn')) {
                    const btn = e.target.closest('.view-screenshot-btn');
                    try {
                        const imgs = JSON.parse(btn.dataset.imgs.replace(/&quot;/g, '"'));
                        if(imgs && imgs.length > 0) openImageModal(imgs);
                    } catch(err) {
                        console.error("Gallery Error:", err);
                    }
                    return;
                }

                if (index === activeIdx) return;
                activeIdx = index;
                clearInterval(carouselInterval);
                updateCarousel();
                carouselInterval = setInterval(nextSlide, 4000);
            });
        });
        
        if (cards.length > 0) {
            updateCarousel();
            carouselInterval = setInterval(nextSlide, 4000);
        }
    }

    let currentGalleryImages = [];
    let currentGalleryIndex = 0;

    function openImageModal(imgSrcArray) {
        currentGalleryImages = Array.isArray(imgSrcArray) ? imgSrcArray : [imgSrcArray];
        currentGalleryIndex = 0;

        let modal = document.getElementById('imageModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'imageModal';
            modal.className = 'image-modal';
            modal.innerHTML = `
                <button class="image-modal-close"><i class="fa-solid fa-xmark"></i></button>
                <button class="modal-prev"><i class="fa-solid fa-chevron-left"></i></button>
                <div class="image-modal-content">
                    <img id="imageModalImg" src="" alt="Screenshot">
                </div>
                <button class="modal-next"><i class="fa-solid fa-chevron-right"></i></button>
            `;
            document.body.appendChild(modal);

            modal.querySelector('.image-modal-close').addEventListener('click', closeImageModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeImageModal();
            });

            modal.querySelector('.modal-prev').addEventListener('click', () => navigateGallery(-1));
            modal.querySelector('.modal-next').addEventListener('click', () => navigateGallery(1));

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (modal.style.display === 'flex') {
                    if (e.key === 'ArrowLeft') navigateGallery(-1);
                    if (e.key === 'ArrowRight') navigateGallery(1);
                    if (e.key === 'Escape') closeImageModal();
                }
            });
        }

        updateGalleryUI();
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
    }

    function closeImageModal() {
        const modal = document.getElementById('imageModal');
        if(modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = 'none', 300);
        }
    }

    function navigateGallery(direction) {
        if(currentGalleryImages.length <= 1) return;
        currentGalleryIndex = (currentGalleryIndex + direction + currentGalleryImages.length) % currentGalleryImages.length;
        updateGalleryUI();
    }

    function updateGalleryUI() {
        const modal = document.getElementById('imageModal');
        if(!modal) return;
        
        const imgEl = document.getElementById('imageModalImg');
        const prevBtn = modal.querySelector('.modal-prev');
        const nextBtn = modal.querySelector('.modal-next');

        imgEl.src = currentGalleryImages[currentGalleryIndex];

        if (currentGalleryImages.length > 1) {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        } else {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        }
    }

    function updateCarousel() {
        cards.forEach((card, i) => {
            card.className = 'carousel-card'; // reset
            if (i === activeIdx) {
                card.classList.add('active');
            } else if (i === (activeIdx - 1 + cards.length) % cards.length) {
                card.classList.add('prev');
            } else if (i === (activeIdx + 1) % cards.length) {
                card.classList.add('next');
            } else {
                card.classList.add('hidden-right'); 
            }
        });
        
        // Render Case Study below the carousel
        if (detailsContainer) {
            const data = projectData[activeIdx];
            detailsContainer.style.display = 'block';
            detailsContainer.innerHTML = `
                <div class="case-study-box reveal active">
                    <div class="case-study-header">
                        <h3 class="case-study-title">Case Study: ${data.title}</h3>
                        <div class="case-study-duration"><i class="fa-regular fa-clock"></i> ${data.duration || '4 Weeks'}</div>
                    </div>
                    
                    <div class="case-study-grid">
                        <div class="case-study-col">
                            <h4><i class="fa-solid fa-triangle-exclamation" style="color: #ef4444;"></i> The Problem</h4>
                            <p>${data.problem}</p>
                        </div>
                        <div class="case-study-col">
                            <h4><i class="fa-solid fa-lightbulb" style="color: #eab308;"></i> The Solution</h4>
                            <p>${data.solution}</p>
                        </div>
                    </div>
                    
                    <div class="case-study-col results-col">
                        <h4><i class="fa-solid fa-chart-line" style="color: #10b981;"></i> The Results</h4>
                        <p>${data.results}</p>
                    </div>

                    <div class="case-study-actions">
                        <a href="${data.demoUrl}" target="_blank" class="btn btn-primary btn-sm">Live Demo</a>
                        <a href="${data.githubUrl}" target="_blank" class="btn btn-outline btn-sm"><i class="fa-brands fa-github"></i> Source Code</a>
                    </div>
                </div>
            `;
        }
    }

    function nextSlide() {
        activeIdx = (activeIdx + 1) % cards.length;
        updateCarousel();
    }

    initCarousel();

    // ---- CONTACT FORM EMAILJS INTEGRATION ----
    // Initialize EmailJS
    if(typeof emailjs !== 'undefined') {
        emailjs.init("dGtjmGoKng8f82kI6"); // Testing with capital 'I' instead of 'l'
    }

    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if(!this.checkValidity()) return;

            submitBtn.disabled = true;
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-circle-notch fa-spin"></i>`;
            
            formSuccess.classList.remove('show');
            formError.classList.remove('show');

            // Gather form data manually to avoid EmailJS iframe cross-origin bugs on file:/// URLs
            const templateParams = {
                name: document.getElementById('cname').value,
                email: document.getElementById('cemail').value,
                subject: document.getElementById('csubject').value,
                message: document.querySelector('textarea[name="message"]').value
            };

            emailjs.send('service_e3b79xp', 'template_kbd9vrn', templateParams)
                .then(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnHtml;
                    contactForm.reset();
                    formSuccess.classList.add('show');
                    setTimeout(() => formSuccess.classList.remove('show'), 5000);
                })
                .catch((error) => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnHtml;
                    
                    let errorText = "EmailJS Error: " + (error.text || error.message || JSON.stringify(error) || "Unknown Error");
                    formError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${errorText}`;
                    formError.classList.add('show');
                    console.error('EmailJS Error:', error);
                });
        });
    }

});
