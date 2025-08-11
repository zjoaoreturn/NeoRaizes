// Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const overlay = document.getElementById('overlay');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });

        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
        });

        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
        });

        // Menu Tabs
        const menuTabs = document.querySelectorAll('.menu-tab');
        const menuSections = document.querySelectorAll('.menu-section');

        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and sections
                menuTabs.forEach(t => t.classList.remove('active-tab'));
                menuSections.forEach(s => s.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active-tab');
                
                // Show corresponding section
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu.classList.contains('open')) {
                        mobileMenu.classList.remove('open');
                        overlay.classList.add('hidden');
                        document.body.style.overflow = '';
                    }
                }
            });
        });