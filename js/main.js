// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        navLinks.classList.remove('active');
    });
});

// Form Submission Handler for Contact Form
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         alert('Thank you for your message! We will get back to you soon.');
//         contactForm.reset();
//     });
// }

// Modal Functionality for Services Section
const serviceCards = document.querySelectorAll('#services .service-card');
const serviceModalTemplate = `
    <div class="modal" id="service-modal">
        <div class="modal-content">
            <span class="close-btn">×</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <div class="benefits">
                <h4>Why Choose Us?</h4>
                <ul>
                    {benefits}
                </ul>
            </div>
        </div>
    </div>
`;

const serviceDetails = [
    {
        title: 'SFA',
        description: 'Agrim Mobile SFA is a powerful sales force automation app designed to streamline your sales operations, enhance productivity, and provide management with real-time insights. From order tracking to inventory management, our app ensures your sales team operates at peak efficiency.',
        benefits: [
            'Real-time sales tracking and reporting for better decision-making.',
            'Increased efficiency with automated order and inventory management.',
            'Enhanced management control with detailed analytics and insights.'
        ]
    },
    {
        title: 'IoT Solutions',
        description: 'Unlock the power of connected devices with our IoT solutions. We help you collect, analyze, and act on real-time data to optimize operations, improve efficiency, and drive innovation.',
        benefits: [
            'Seamless integration of IoT devices with your business systems.',
            'Real-time data collection and actionable insights.',
            'Enhanced operational efficiency and automation.',
            'Scalable solutions for manufacturing, logistics, smart offices, and more.'
        ]
    },
    {
        title: 'Custom Software Development',
        description: 'We specialize in developing custom software solutions that are tailored to your unique business requirements. Our team works closely with you to design, develop, and deploy software that enhances productivity, integrates seamlessly with your existing systems, and scales with your growth.',
        benefits: [
            'Software designed specifically for your business processes.',
            'Seamless integration with your current tools and platforms.',
            'Dedicated support and updates to ensure long-term success.'
        ]
    }
];

serviceCards.forEach((card, index) => {
    const learnMoreBtn = card.querySelector('.learn-more-btn');
    if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        const details = serviceDetails[index];
        const modalHtml = serviceModalTemplate
            .replace('{title}', details.title)
            .replace('{description}', details.description)
            .replace('{benefits}', details.benefits.map(benefit => `<li>${benefit}</li>`).join(''));

        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const modal = document.getElementById('service-modal');
        modal.style.display = 'flex';

        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal) {
                modal.remove();
            }
        });
    });
    }
});

// Modal Functionality for Why Us? Section
const whyUsCard = document.querySelector('.why-us-card');
const whyUsModalTemplate = `
    <div class="modal" id="why-us-modal">
        <div class="modal-content">
            <span class="close-btn">×</span>
            <h3>Why Choose AGRIM SYSTEMS?</h3>
            <p>At AGRIM SYSTEMS, we are committed to delivering tailored solutions that drive your business forward. Our expertise in custom software, IT consulting, and ERP implementation ensures that you get the best technology to meet your needs.</p>
            <div class="benefits">
                <h4>Benefits of Choosing Us</h4>
                <ul>
                    <li>Tailored solutions designed to fit your unique business requirements.</li>
                    <li>Proven expertise in delivering scalable and secure technology solutions.</li>
                    <li>Dedicated support to ensure seamless integration and long-term success.</li>
                    <li>Cost-effective strategies that maximize your return on investment.</li>
                </ul>
            </div>
        </div>
    </div>
`;

if (whyUsCard) {
    const learnMoreBtn = whyUsCard.querySelector('.learn-more-btn');
    if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        document.body.insertAdjacentHTML('beforeend', whyUsModalTemplate);

        const modal = document.getElementById('why-us-modal');
        modal.style.display = 'flex';

        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal) {
                modal.remove();
            }
        });
    });
    }
}

// Modal Functionality for What is ERP? Section
const whatIsErpCard = document.querySelector('.what-is-erp-card');
const whatIsErpModalTemplate = `
    <div class="modal" id="what-is-erp-modal">
        <div class="modal-content">
            <span class="close-btn">×</span>
            <h3>What is ERP?</h3>
            <p>An Enterprise Resource Planning (ERP) system integrates key business processes like finance, HR, and operations into a single platform, enabling seamless data flow and automation across departments.</p>
            <div class="benefits">
                <h4>Why Go for an ERP?</h4>
                <ul>
                    <li>Streamline operations by automating repetitive tasks.</li>
                    <li>Gain real-time insights for better decision-making.</li>
                    <li>Improve collaboration with integrated systems.</li>
                    <li>Scale your business with a flexible and robust solution.</li>
                </ul>
            </div>
        </div>
    </div>
`;

if (whatIsErpCard) {
    const learnMoreBtn = whatIsErpCard.querySelector('.learn-more-btn');
    if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        document.body.insertAdjacentHTML('beforeend', whatIsErpModalTemplate);

        const modal = document.getElementById('what-is-erp-modal');
        modal.style.display = 'flex';

        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal) {
                modal.remove();
            }
        });
    });
    }
}

// Modal Functionality for Choose Your ERP Section
const chooseErpCard = document.querySelector('.choose-erp-card');
const chooseErpModalTemplate = `
    <div class="modal" id="choose-erp-modal">
        <div class="modal-content">
            <span class="close-btn">×</span>
            <h3>Choose Your ERP Solution</h3>
            <p>Provide your details, and we'll help you find the ideal ERP for your business.</p>
            <form class="choose-erp-form">
                <div class="form-group">
                    <label for="erp-name">Name</label>
                    <input type="text" id="erp-name" required>
                </div>
                <div class="form-group">
                    <label for="erp-email">Email</label>
                    <input type="email" id="erp-email" required>
                </div>
                <div class="form-group">
                    <label for="erp-business-type">Business Type</label>
                    <select id="erp-business-type" required>
                        <option value="" disabled selected>Select your business type</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="erp-solution">Solution Sought</label>
                    <textarea id="erp-solution" rows="5" required placeholder="Describe the solution you are seeking..."></textarea>
                </div>
                <button type="submit" class="submit-button">Submit</button>
            </form>
        </div>
    </div>
`;

if (chooseErpCard) {
    // Remove the learn more button creation and event listener
    // The form will be handled separately if needed
}

// IntersectionObserver for Scroll Animations
const observerOptions = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.textContent = '☰';
        });
    });

    // Function to open modal and prevent body scrolling
    const openModal = (modal) => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent body scrolling
    };

    // Function to close modal and restore body scrolling
    const closeModal = (modal) => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore body scrolling
    };

    // Open modals when "Learn More" buttons are clicked
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                openModal(modal);
            }
        });
    });

    // Close modals when close buttons are clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });

    // Close modals when clicking outside the modal content
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'flex') {
                    closeModal(modal);
                }
            });
        }
    });

    // Form submission handling for Choose Your ERP form
    const chooseErpForm = document.querySelector('#choose-erp-form');
    if (chooseErpForm) {
        chooseErpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(chooseErpForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                businessType: formData.get('business-type'),
                solutionSought: formData.get('solution-sought')
            };
            console.log('Form Data:', data); // For debugging
            alert('Thank you for your submission! We will get back to you soon.');
            closeModal(document.getElementById('choose-erp-modal'));
            chooseErpForm.reset();
        });
    }
});