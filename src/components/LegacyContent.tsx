import React from 'react';

export default function LegacyContent() {
  return (
    <>
    {/* ===== STATS SECTION ===== */}
    <section className="stats-section">
        <div className="container">
            <div className="stats-row">
                <div className="stat-box reveal">
                    <div className="stat-num" data-count="3">0</div>
                    <div className="stat-plus">+</div>
                    <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-box reveal delay-1">
                    <div className="stat-icon"><i className="fa-solid fa-code"></i></div>
                    <div className="stat-label">HTML & Next.js</div>
                    <div className="stat-sub">Frontend Specialist</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-box reveal delay-2">
                    <div className="stat-icon"><i className="fa-solid fa-layer-group"></i></div>
                    <div className="stat-label">Full-Stack</div>
                    <div className="stat-sub">End-to-End Development</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-box reveal delay-3">
                    <div className="stat-icon"><i className="fa-solid fa-bolt"></i></div>
                    <div className="stat-label">Fiverr Freelancer</div>
                    <div className="stat-sub">Available Now</div>
                </div>
            </div>
        </div>
    </section>

    {/* ===== ABOUT SECTION ===== */}
    <section id="about" className="about section">
        <div className="container">
            <div className="section-header reveal">
                <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
            </div>
            <div className="about-grid">
                <div className="about-image-col reveal">
                    <div className="about-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?auto=format&fit=crop&w=600&q=80" alt="About Suyash" loading="lazy" />
                        <div className="about-img-border"></div>
                        <div className="about-code-snippet">
                            <span className="code-line"><span className="code-kw">const</span> <span className="code-var">dev</span> = {"{"}</span>
                            <span className="code-line">  name: <span className="code-str">"Suyash"</span>,</span>
                            <span className="code-line">  stack: <span className="code-str">"HTML CSS JS React"</span>,</span>
                            <span className="code-line">  deploy: <span className="code-str">"Vercel / Render"</span>,</span>
                            <span className="code-line">  available: <span className="code-bool">true</span></span>
                            <span className="code-line">{"}"};</span>
                        </div>
                    </div>
                </div>
                <div className="about-text-col reveal delay-1">
                    <h3 className="about-headline">Building digital solutions that <span className="gradient-text">drive growth</span></h3>
                    <p className="about-para">I am a Full-Stack Web Developer with strong expertise in <strong>HTML, CSS, JavaScript, React, and Next.js</strong>. I build responsive, production-ready web solutions from frontend to backend — including database integration and deployment.</p>

                    <div className="about-highlights">
                        <div className="highlight-item">
                            <div className="highlight-icon"><i className="fa-brands fa-html5"></i></div>
                            <div>
                                <strong>HTML / CSS / JavaScript</strong>
                                <span>Pixel-perfect, responsive, hand-coded</span>
                            </div>
                        </div>
                        <div className="highlight-item">
                            <div className="highlight-icon"><i className="fa-brands fa-react"></i></div>
                            <div>
                                <strong>React / Next.js</strong>
                                <span>Component-based, SSR, fast SPAs</span>
                            </div>
                        </div>
                        <div className="highlight-item">
                            <div className="highlight-icon"><i className="fa-solid fa-server"></i></div>
                            <div>
                                <strong>Node.js / Python / Flask</strong>
                                <span>APIs, authentication, backend logic</span>
                            </div>
                        </div>
                        <div className="highlight-item">
                            <div className="highlight-icon"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                            <div>
                                <strong>Database & Deployment</strong>
                                <span>PostgreSQL, Vercel, Render, WordPress</span>
                            </div>
                        </div>
                    </div>
                    <a href="#contact" className="btn btn-primary">Work With Me <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>

    {/* ===== PROJECTS SECTION ===== */}
    <section id="projects" className="projects section">
        <div className="container">
            <div className="section-header reveal">
                <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                <p className="section-sub">Real-world applications built with modern technology stacks</p>
            </div>

            <div className="portfolio-carousel-wrapper reveal delay-1">
                <div className="carousel-track" id="projectCarouselTrack">
                    {/* Cards injected via JS */}
                </div>
            </div>

            <div className="project-details-container reveal delay-2" id="projectDetailsDisplay">
                {/* Content dynamically injected via JavaScript */}
            </div>
        </div>
    </section>

    {/* ===== SKILLS SECTION ===== */}
    <section id="skills" className="skills section">
        <div className="container">
            <div className="section-header reveal">
                <h2 className="section-title">Tech <span className="gradient-text">Stack</span></h2>
            </div>
            <div className="skills-grid">
                <div className="skill-card reveal">
                    <div className="skill-card-header">
                        <div className="skill-card-icon frontend-icon"><i className="fa-solid fa-laptop-code"></i></div>
                        <h3>Frontend</h3>
                    </div>
                    <div className="skill-pills">
                        <span className="skill-pill"><i className="fa-brands fa-html5" style={{color: '#e34c26'}}></i> HTML5</span>
                        <span className="skill-pill"><i className="fa-brands fa-css3-alt" style={{color: '#264de4'}}></i> CSS3</span>
                        <span className="skill-pill"><i className="fa-brands fa-js" style={{color: '#f0db4f'}}></i> JavaScript</span>
                        <span className="skill-pill"><i className="fa-brands fa-react" style={{color: '#61dafb'}}></i> React</span>
                        <span className="skill-pill"><i className="fa-solid fa-n" style={{color: '#fff'}}></i> Next.js</span>
                        <span className="skill-pill"><i className="fa-solid fa-wind" style={{color: '#38bdf8'}}></i> Tailwind</span>
                    </div>

                </div>
                <div className="skill-card reveal delay-1">
                    <div className="skill-card-header">
                        <div className="skill-card-icon backend-icon"><i className="fa-solid fa-server"></i></div>
                        <h3>Backend</h3>
                    </div>
                    <div className="skill-pills">
                        <span className="skill-pill"><i className="fa-brands fa-node-js" style={{color: '#3c873a'}}></i> Node.js</span>
                        <span className="skill-pill"><i className="fa-brands fa-python" style={{color: '#3572A5'}}></i> Python</span>
                        <span className="skill-pill"><i className="fa-solid fa-pepper-hot" style={{color: '#ef4444'}}></i> Flask</span>
                    </div>

                </div>
                <div className="skill-card reveal delay-2">
                    <div className="skill-card-header">
                        <div className="skill-card-icon db-icon"><i className="fa-solid fa-database"></i></div>
                        <h3>Database & Tools</h3>
                    </div>
                    <div className="skill-pills">
                        <span className="skill-pill"><i className="fa-solid fa-database" style={{color: '#336791'}}></i> PostgreSQL</span>
                        <span className="skill-pill"><i className="fa-solid fa-server" style={{color: '#aaa'}}></i> SQLite</span>
                        <span className="skill-pill"><i className="fa-brands fa-git-alt" style={{color: '#f34f29'}}></i> Git</span>
                        <span className="skill-pill"><i className="fa-brands fa-github" style={{color: '#fff'}}></i> GitHub</span>
                        <span className="skill-pill"><i className="fa-solid fa-cloud" style={{color: '#a78bfa'}}></i> Vercel</span>
                        <span className="skill-pill"><i className="fa-solid fa-cloud-arrow-up" style={{color: '#6ee7b7'}}></i> Render</span>
                        <span className="skill-pill"><i className="fa-brands fa-wordpress" style={{color: '#21759b'}}></i> WordPress</span>
                    </div>

                </div>
            </div>
        </div>
    </section>

    {/* ===== SERVICES SECTION ===== */}
    <section id="services" className="services section">
        <div className="container">
            <div className="section-header reveal">
                <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
                <p className="section-sub">Everything you need to build and launch your online presence</p>
            </div>
            <div className="services-grid">
                <div className="service-card-v2 reveal">
                    <div className="service-icon-wrap" style={{'--svc-color': '#3b82f6'} as React.CSSProperties}><i className="fa-solid fa-briefcase"></i></div>
                    <h3>Business Websites</h3>
                    <p>Professional, fast-loading websites tailored to your brand. Built to attract clients and convert visitors.</p>
                    <div className="service-arrow"><i className="fa-solid fa-arrow-right"></i></div>
                </div>
                <div className="service-card-v2 reveal delay-1">
                    <div className="service-icon-wrap" style={{'--svc-color': '#8b5cf6'} as React.CSSProperties}><i className="fa-solid fa-rocket"></i></div>
                    <h3>Landing Pages</h3>
                    <p>High-converting landing pages designed to turn your traffic into paying customers and leads.</p>
                    <div className="service-arrow"><i className="fa-solid fa-arrow-right"></i></div>
                </div>
                <div className="service-card-v2 reveal delay-2">
                    <div className="service-icon-wrap" style={{'--svc-color': '#06b6d4'} as React.CSSProperties}><i className="fa-solid fa-layer-group"></i></div>
                    <h3>Web Applications</h3>
                    <p>Complex, full-stack web apps built to solve specific business problems and scale with your growth.</p>
                    <div className="service-arrow"><i className="fa-solid fa-arrow-right"></i></div>
                </div>
                <div className="service-card-v2 reveal delay-3">
                    <div className="service-icon-wrap" style={{'--svc-color': '#10b981'} as React.CSSProperties}><i className="fa-solid fa-chart-line"></i></div>
                    <h3>Dashboard Development</h3>
                    <p>Intuitive admin dashboards and analytics panels for data-driven business decisions.</p>
                    <div className="service-arrow"><i className="fa-solid fa-arrow-right"></i></div>
                </div>
                <div className="service-card-v2 reveal delay-4">
                    <div className="service-icon-wrap" style={{'--svc-color': '#f59e0b'} as React.CSSProperties}><i className="fa-brands fa-wordpress-simple"></i></div>
                    <h3>WordPress Websites</h3>
                    <p>Custom WordPress sites, themes, and plugins with powerful CMS for easy content management.</p>
                    <div className="service-arrow"><i className="fa-solid fa-arrow-right"></i></div>
                </div>
                <div className="service-card-v2 reveal delay-5">
                    <div className="service-icon-wrap" style={{'--svc-color': '#ef4444'} as React.CSSProperties}><i className="fa-solid fa-server"></i></div>
                    <h3>Deployment & Hosting</h3>
                    <p>Secure, optimized deployment to Vercel, Render, or custom servers. Live in hours, not days.</p>
                    <div className="service-arrow"><i className="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>
        </div>
    </section>

    {/* ===== TESTIMONIALS SECTION ===== */}
    <section className="testimonials section">
        <div className="container">
            <div className="section-header reveal">
                <h2 className="section-title">Client <span className="gradient-text">Feedback</span></h2>
            </div>
            <div className="testimonials-grid">
                <div className="testi-card reveal">
                    <div className="testi-stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                    <p>"Suyash delivered an amazing dashboard that completely transformed how we track our business metrics. Incredibly professional and fast."</p>
                    <div className="testi-author">
                        <div className="testi-avatar">A</div>
                        <div>
                            <strong>Alex M.</strong>
                            <span>Startup Founder</span>
                        </div>
                    </div>
                </div>
                <div className="testi-card reveal delay-1">
                    <div className="testi-stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                    <p>"The landing page Suyash built looks incredibly professional and loads instantly. Great communication throughout — will definitely hire again!"</p>
                    <div className="testi-author">
                        <div className="testi-avatar">S</div>
                        <div>
                            <strong>Sarah J.</strong>
                            <span>Marketing Director</span>
                        </div>
                    </div>
                </div>
                <div className="testi-card reveal delay-2">
                    <div className="testi-stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                    <p>"Our garage management system works flawlessly. Suyash understood our requirements perfectly and delivered exactly what we needed."</p>
                    <div className="testi-author">
                        <div className="testi-avatar">R</div>
                        <div>
                            <strong>Raj K.</strong>
                            <span>Garage Owner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ===== CTA SECTION ===== */}
    <section className="cta-section reveal">
        <div className="container">
            <div className="cta-box">
                <div className="cta-glow"></div>
                <h2>Have a project in mind?</h2>
                <p>I'm currently taking on new freelance projects. Let's turn your vision into reality.</p>
                <div className="cta-actions">
                    <a href="#contact" className="btn btn-primary btn-lg">Start a Project <i className="fa-solid fa-arrow-right"></i></a>
                    <a href="https://fiverr.com/your-username" target="_blank" className="btn btn-ghost btn-lg">
                        <i className="fa-solid fa-bolt"></i> Order on Fiverr
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* ===== CONTACT SECTION ===== */}
    <section id="contact" className="contact section">
        <div className="container">
            <div className="section-header reveal">
                <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
            </div>
            <div className="contact-grid">
                <div className="contact-info-col reveal">
                    <h3>Let's build something <span className="gradient-text">great together</span></h3>
                    <p>Whether you need a landing page, a complex web application, or anything in between — I'm here to help. Drop me a message and I'll get back to you within 24 hours.</p>

                    <div className="contact-details">
                        <div className="contact-detail-item">
                            <div className="contact-detail-icon"><i className="fa-solid fa-envelope"></i></div>
                            <div>
                                <strong>Email</strong>
                                <a href="mailto:your-email@example.com">your-email@example.com</a>
                            </div>
                        </div>
                        <div className="contact-detail-item">
                            <div className="contact-detail-icon"><i className="fa-solid fa-bolt"></i></div>
                            <div>
                                <strong>Fiverr</strong>
                                <a href="https://fiverr.com/your-username" target="_blank">fiverr.com/your-username</a>
                            </div>
                        </div>
                        <div className="contact-detail-item">
                            <div className="contact-detail-icon"><i className="fa-brands fa-github"></i></div>
                            <div>
                                <strong>GitHub</strong>
                                <a href="https://github.com/your-username" target="_blank">github.com/your-username</a>
                            </div>
                        </div>
                        <div className="contact-detail-item">
                            <div className="contact-detail-icon"><i className="fa-brands fa-linkedin-in"></i></div>
                            <div>
                                <strong>LinkedIn</strong>
                                <a href="https://linkedin.com/in/your-username" target="_blank">linkedin.com/in/your-username</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-social">
                        <a href="https://github.com/your-username" target="_blank" className="csocial-btn" data-name="GitHub"><i className="fa-brands fa-github"></i></a>
                        <a href="https://linkedin.com/in/your-username" target="_blank" className="csocial-btn" data-name="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://fiverr.com/your-username" target="_blank" className="csocial-btn" data-name="Fiverr"><i className="fa-solid fa-bolt"></i></a>
                        <a href="https://instagram.com/your-username" target="_blank" className="csocial-btn" data-name="Instagram"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://youtube.com/your-username" target="_blank" className="csocial-btn" data-name="YouTube"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>

                <div className="contact-form-col reveal delay-1">
                    <form className="contact-form" id="contactForm">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="cname">Your Name</label>
                                <input type="text" id="cname" name="name" placeholder="John Doe" required={true} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cemail">Email Address</label>
                                <input type="email" id="cemail" name="email" placeholder="john@example.com" required={true} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="csubject">Subject</label>
                            <input type="text" id="csubject" name="subject" placeholder="What's the project about?" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cmessage">Your Message</label>
                            <textarea id="cmessage" name="message" rows={5} placeholder="Tell me about your project, timeline, and budget..." required={true}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-full" id="submitBtn">
                            <span>Send Message</span>
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                        <div className="form-success" id="formSuccess">
                            <i className="fa-solid fa-circle-check"></i> Message sent! I'll reply within 24 hours.
                        </div>
                        <div className="form-error" id="formError" style={{display: 'none', marginTop: '16px', padding: '14px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500', alignItems: 'center', gap: '10px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#ef4444'}}></div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    {/* ===== FOOTER ===== */}
    <footer className="footer">
        <div className="footer-gradient"></div>
        <div className="container">
            <div className="footer-top">
                <div className="footer-brand">
                    <a href="#hero" className="logo">
                        <img src="logo_custom.png" alt="SD Logo" style={{height: '40px'}} onError={(e) => { e.currentTarget.style.display='none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display='block'; }} />
                        <span className="logo-text" style={{display: 'none'}}>S<span>.</span></span>
                    </a>
                    <p>Building modern web solutions that drive real business growth. Available for freelance projects globally.</p>
                </div>
                <div className="footer-nav">
                    <h4>Quick Links</h4>
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-nav">
                    <h4>Services</h4>
                    <a href="#services">Business Websites</a>
                    <a href="#services">Landing Pages</a>
                    <a href="#services">Web Applications</a>
                    <a href="#services">Dashboards</a>
                    <a href="#services">WordPress</a>
                </div>
                <div className="footer-social-col">
                    <h4>Find Me Online</h4>
                    <a href="https://fiverr.com/your-username" target="_blank" className="footer-social-link">
                        <i className="fa-solid fa-bolt"></i> Fiverr
                    </a>
                    <a href="https://github.com/your-username" target="_blank" className="footer-social-link">
                        <i className="fa-brands fa-github"></i> GitHub
                    </a>
                    <a href="https://linkedin.com/in/your-username" target="_blank" className="footer-social-link">
                        <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                    </a>
                    <a href="https://instagram.com/your-username" target="_blank" className="footer-social-link">
                        <i className="fa-brands fa-instagram"></i> Instagram
                    </a>
                    <a href="https://youtube.com/your-username" target="_blank" className="footer-social-link">
                        <i className="fa-brands fa-youtube"></i> YouTube
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; <span id="year"></span> Suyash. Crafted with <i className="fa-solid fa-heart" style={{color: '#ef4444'}}></i> and lots of code.</p>
                <p>Full-Stack Web Developer · Available for Freelance</p>
            </div>
        </div>
    </footer>

    {/* Scroll to Top */}
    <button id="scrollTop" className="scroll-top" aria-label="Scroll to top">
        <i className="fa-solid fa-arrow-up"></i>
    </button>


    </>
  );
}
