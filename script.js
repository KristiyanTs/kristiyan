// Language configuration
const languages = {
    en: {
        flag: '🇺🇸',
        name: 'English',
        // Navigation
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact Me',
        
        // Hero section
        'hero.title': 'AI Engineer & Product Builder',
        'hero.description': 'I turn complex AI problems into profitable SaaS solutions that generate real revenue - like scaling Bookwiz.io to $3K MRR in under 12 months. With 9+ years of startup experience, I specialize in building intelligent applications that solve real-world problems and generate revenue from day one.',
        'hero.experience': '9+ Years Experience',
        'hero.mrr': '$3K MRR Achieved',
        'hero.retention': '95% Client Retention',
        
        // Achievements
        'achievements.mrr': 'Monthly Recurring Revenue',
        'achievements.projects': 'Client Projects Delivered',
        'achievements.years': 'Years of Experience',
        
        // Toolkit
        'toolkit.title': 'My Toolkit',
        'toolkit.subtitle': 'A selection of technologies I use to build high-quality software.',
        'toolkit.primary': 'Primary Stack',
        'toolkit.secondary': 'Secondary/Familiar',
        
        // Projects
        'projects.title': 'Featured Projects',
        'projects.problem': 'Problem:',
        'projects.solution': 'Solution:',
        'projects.result': 'Result:',
        'projects.visit': 'Visit Project →',
        'projects.source': 'View Source →',
        'projects.main': 'Main Platform →',
        'projects.discord': 'Discord Bots →',
        
        // Bookwiz project
        'projects.bookwiz.problem': 'Authors struggled with writer\'s block and needed intelligent assistance to improve their writing quality and productivity.',
        'projects.bookwiz.solution': 'Built an agentic AI writing assistant using LLMs and vector embeddings for context-aware suggestions, with a complete SaaS platform including payments and SEO optimization.',
        'projects.bookwiz.result': 'Scaled to $3,000 MRR, serving hundreds of authors with a Node.js backend, React frontend, Stripe integration, and server-side rendering for maximum visibility. Achieved 99.9% uptime with 200ms average response time. Platform now serves 55,000+ registered users worldwide.',
        
        // Vkashti project
        'projects.vkashti.problem': 'Sofia bar needed a complete digital solution for reservations, event management, staff coordination, inventory tracking, and interactive quiz nights.',
        'projects.vkashti.solution': 'Developed a comprehensive web platform with customer reservation system, admin dashboard for staff management, and AI-powered Discord bots for automated task management and inventory tracking using natural language processing.',
        'projects.vkashti.result': 'Streamlined bar operations with automated SMS confirmations, intelligent task delegation, AI-driven inventory management, and engaging quiz nights that increased operational efficiency and customer satisfaction.',
        'projects.vkashti.feature1': 'QR code quiz system with real-time scoring',
        'projects.vkashti.feature2': 'Reservation system with SMS confirmations',
        'projects.vkashti.feature3': 'AI-powered Discord bots for task management',
        'projects.vkashti.feature4': 'Automated staff task delegation by shifts',
        'projects.vkashti.feature5': 'Natural language inventory management',
        'projects.vkashti.feature6': 'Admin dashboard for complete bar operations',
        
        // Trading project
        'projects.trading.title': 'Automated Trading Bots',
        'projects.trading.problem': 'Manual trading was time-consuming and prone to emotional decisions, limiting profit potential.',
        'projects.trading.solution': 'Developed high-frequency trading bots in Python interfacing with Binance and ByBit APIs, implementing complex strategies based on market indicators and technical analysis.',
        'projects.trading.result': 'Achieved 18% annualized return over 24 months, outperforming ETH by 12% while reducing manual intervention by 90% through automated execution. Implemented risk management protocols for sustainable trading.',
        
        // CMS project
        'projects.cms.title': 'Custom CMS Systems',
        'projects.cms.problem': 'Clients needed flexible content management without the bloat and limitations of off-the-shelf solutions.',
        'projects.cms.solution': 'Designed and built bespoke CMS systems tailored to specific business needs, enabling efficient content, user data, and business logic management.',
        'projects.cms.result': 'Delivered 5+ custom CMS solutions, each reducing content management time by 60% and improving client workflow efficiency. Average project completion: 6 weeks with 95% client retention rate.',
        
        // Experience
        'experience.title': 'Career Journey',
        'experience.moonhythe.title': 'Founder & Lead Developer @ Moonhythe',
        'experience.moonhythe.description': 'Built and scaled multiple SaaS products to profitability, including Bookwiz.io ($3K MRR). Delivered 15+ client projects with 95% client retention rate. Specialized in AI integration and full-stack development.',
        'experience.researchspace.title': 'Lead Frontend Developer @ ResearchSpace',
        'experience.researchspace.description': 'Led frontend development for new product launches and modernized core application from jQuery to React, improving performance by 40% and reducing maintenance overhead by 60%.',
        'experience.bgmentor.title': 'Co-Founder & CTO @ BgMentor',
        'experience.bgmentor.description': 'Led technical strategy and platform development using Ruby on Rails and Vue.js. Built scalable architecture supporting 10,000+ users and managed team of 3 developers.',
        
        // Testimonials
        'testimonials.title': 'What Clients Say',
        'testimonials.subtitle': 'Real feedback from projects I\'ve delivered.',
        'testimonials.client1.name': 'Anonymous Client',
        'testimonials.client1.role': 'SaaS Platform Development',
        'testimonials.client1.quote': '"Kristiyan delivered our AI-powered platform ahead of schedule. His technical expertise and ability to translate complex requirements into elegant solutions exceeded our expectations."',
        'testimonials.client2.name': 'Startup Founder',
        'testimonials.client2.role': 'Custom CMS System',
        'testimonials.client2.quote': '"Working with Kristiyan was a game-changer. He built a custom CMS that perfectly fits our workflow, and the AI integration he implemented has saved us hours every week."',
        
        // Education
        'education.title': 'Education',
        'education.degree.title': 'BSc in Computer Science and Management Science',
        'education.degree.school': 'The University of Edinburgh',
        'education.degree.description': 'Comprehensive education in computer science fundamentals, software engineering principles, and business management strategies.',
        'education.highschool.title': 'High School Diploma',
        'education.highschool.school': 'Sofia High School of Mathematics',
        'education.highschool.description': 'Specialized mathematics and science education with focus on advanced problem-solving and analytical thinking.',
        
        // Career
        'career.title': 'What I\'m Looking For',
        'career.ideal.title': 'Ideal Role',
        'career.ideal.role1': 'Senior AI Engineer or Technical Lead',
        'career.ideal.role2': 'Product-focused engineering teams',
        'career.ideal.role3': 'AI/ML startup environments',
        'career.ideal.role4': 'Remote-first companies',
        'career.bring.title': 'What I Bring',
        'career.bring.skill1': 'Proven track record of building profitable products',
        'career.bring.skill2': 'Deep expertise in modern AI technologies',
        'career.bring.skill3': 'Full-stack development capabilities',
        'career.bring.skill4': 'Business acumen and strategic thinking',
        
        // CTA
        'cta.title': 'Have a project in mind?',
        'cta.subtitle': 'I\'m currently available for remote contract work and select full-time opportunities. Let\'s build something great together.',
        'cta.specialize': 'I specialize in:',
        'cta.contact': 'Get in Touch',
        'cta.work': 'View My Work',
        'cta.cv': 'Download CV',
        
        // Footer
        'footer.built': 'Designed and built from scratch.'
    },
    bg: {
        flag: '🇧🇬',
        name: 'Български',
        // Navigation
        'nav.projects': 'Проекти',
        'nav.experience': 'Опит',
        'nav.contact': 'Свържете се с мен',
        
        // Hero section
        'hero.title': 'AI Инженер & Създател на Продукти',
        'hero.description': 'Превръщам сложни AI проблеми в печеливши SaaS решения, които генерират реален доход - като мащабиране на Bookwiz.io до $3K MRR за по-малко от 12 месеца. С над 9 години стартъп опит, специализирам се в изграждането на интелигентни приложения, които решават реални световни проблеми и генерират доход от първия ден.',
        'hero.experience': '9+ Години Опит',
        'hero.mrr': '$3K MRR Постигнато',
        'hero.retention': '95% Запазване на Клиенти',
        
        // Achievements
        'achievements.mrr': 'Месечен Повтарящ се Приход',
        'achievements.projects': 'Клиентски Проекти Доставени',
        'achievements.years': 'Години Опит',
        
        // Toolkit
        'toolkit.title': 'Моите Инструменти',
        'toolkit.subtitle': 'Селекция от технологии, които използвам за изграждане на висококачествен софтуер.',
        'toolkit.primary': 'Основен Стек',
        'toolkit.secondary': 'Вторичен/Запознат',
        
        // Projects
        'projects.title': 'Избрани Проекти',
        'projects.problem': 'Проблем:',
        'projects.solution': 'Решение:',
        'projects.result': 'Резултат:',
        'projects.visit': 'Посетете Проекта →',
        'projects.source': 'Вижте Кода →',
        'projects.main': 'Основна Платформа →',
        'projects.discord': 'Discord Ботове →',
        
        // Bookwiz project
        'projects.bookwiz.problem': 'Авторите се бореха с писателския блок и се нуждаеха от интелигентна помощ за подобряване на качеството и продуктивността на писанията им.',
        'projects.bookwiz.solution': 'Изградих агентски AI асистент за писане, използващ LLM-и и векторни вграждания за контекстно-осъзнати предложения, с пълна SaaS платформа, включваща плащания и SEO оптимизация.',
        'projects.bookwiz.result': 'Мащабирах до $3,000 MRR, обслужвайки стотици автори с Node.js backend, React frontend, Stripe интеграция и server-side rendering за максимална видимост. Постигнах 99.9% uptime с 200ms средно време за отговор. Платформата сега обслужва 55,000+ регистрирани потребители по света.',
        
        // Vkashti project
        'projects.vkashti.problem': 'Софийският бар се нуждаеше от пълно дигитално решение за резервации, управление на събития, координация на персонала, проследяване на инвентара и интерактивни вечери с въпроси.',
        'projects.vkashti.solution': 'Развих комплексна уеб платформа с клиентска система за резервации, админ панел за управление на персонала и AI-powered Discord ботове за автоматизирано управление на задачи и проследяване на инвентара чрез естествено езиково обработване.',
        'projects.vkashti.result': 'Оптимизирах бар операциите с автоматизирани SMS потвърждения, интелигентно делегиране на задачи, AI-driven управление на инвентара и ангажиращи вечери с въпроси, които увеличиха оперативната ефективност и удовлетворението на клиентите.',
        'projects.vkashti.feature1': 'QR код система за въпроси с реално време за точки',
        'projects.vkashti.feature2': 'Система за резервации с SMS потвърждения',
        'projects.vkashti.feature3': 'AI-powered Discord ботове за управление на задачи',
        'projects.vkashti.feature4': 'Автоматизирано делегиране на задачи на персонала по смени',
        'projects.vkashti.feature5': 'Управление на инвентара чрез естествен език',
        'projects.vkashti.feature6': 'Админ панел за пълни бар операции',
        
        // Trading project
        'projects.trading.title': 'Автоматизирани Търговски Ботове',
        'projects.trading.problem': 'Ръчната търговия беше отнемаща време и склонна към емоционални решения, ограничаващи потенциала за печалба.',
        'projects.trading.solution': 'Развих високочестотни търговски ботове в Python, свързващи се с Binance и ByBit API-та, имплементирайки сложни стратегии базирани на пазарни индикатори и технически анализ.',
        'projects.trading.result': 'Постигнах 18% годишна възвръщаемост за 24 месеца, надминавайки ETH с 12%, докато намалих ръчната намеса с 90% чрез автоматизирано изпълнение. Имплементирах протоколи за управление на риска за устойчива търговия.',
        
        // CMS project
        'projects.cms.title': 'Персонализирани CMS Системи',
        'projects.cms.problem': 'Клиентите се нуждаеха от гъвкаво управление на съдържанието без излишъка и ограниченията на готовите решения.',
        'projects.cms.solution': 'Проектирах и изградих персонализирани CMS системи, пригодени към специфичните бизнес нужди, позволявайки ефективно управление на съдържание, потребителски данни и бизнес логика.',
        'projects.cms.result': 'Доставих 5+ персонализирани CMS решения, всяко намалявайки времето за управление на съдържанието с 60% и подобрявайки ефективността на клиентския работен процес. Средно време за завършване на проекта: 6 седмици с 95% процент на запазване на клиенти.',
        
        // Experience
        'experience.title': 'Кариерен Път',
        'experience.moonhythe.title': 'Основател & Главен Разработчик @ Moonhythe',
        'experience.moonhythe.description': 'Изградих и мащабирах множество SaaS продукти до рентабилност, включвайки Bookwiz.io ($3K MRR). Доставих 15+ клиентски проекта с 95% процент на запазване на клиенти. Специализирах се в AI интеграция и full-stack разработка.',
        'experience.researchspace.title': 'Главен Frontend Разработчик @ ResearchSpace',
        'experience.researchspace.description': 'Водих frontend разработката за нови продукти и модернизирах основното приложение от jQuery към React, подобрявайки производителността с 40% и намалявайки поддръжката с 60%.',
        'experience.bgmentor.title': 'Съосновател & CTO @ BgMentor',
        'experience.bgmentor.description': 'Водих техническата стратегия и разработката на платформата, използвайки Ruby on Rails и Vue.js. Изградих мащабируема архитектура, поддържаща 10,000+ потребители и управлявах екип от 3 разработчика.',
        
        // Testimonials
        'testimonials.title': 'Какво Казват Клиентите',
        'testimonials.subtitle': 'Реални отзиви от проекти, които съм доставил.',
        'testimonials.client1.name': 'Анонимен Клиент',
        'testimonials.client1.role': 'Разработка на SaaS Платформа',
        'testimonials.client1.quote': '"Кристиян достави нашата AI-powered платформа преди времето. Неговият технически опит и способността да превежда сложни изисквания в елегантни решения надминаха очакванията ни."',
        'testimonials.client2.name': 'Стартъп Основател',
        'testimonials.client2.role': 'Персонализирана CMS Система',
        'testimonials.client2.quote': '"Работата с Кристиян беше промяна в играта. Той изгради персонализирана CMS, която перфектно пасва на нашия работен процес, и AI интеграцията, която имплементира, ни спести часове всяка седмица."',
        
        // Education
        'education.title': 'Образование',
        'education.degree.title': 'Бакалавър по Компютърни Науки и Управление',
        'education.degree.school': 'Университетът в Единбург',
        'education.degree.description': 'Цялостно образование по основи на компютърните науки, принципи на софтуерното инженерство и стратегии за бизнес управление.',
        'education.highschool.title': 'Средно Образование',
        'education.highschool.school': 'Софийска Математическа Гимназия',
        'education.highschool.description': 'Специализирано математическо и научно образование с фокус върху разширено решаване на проблеми и аналитично мислене.',
        
        // Career
        'career.title': 'Какво Търся',
        'career.ideal.title': 'Идеална Роля',
        'career.ideal.role1': 'Старши AI Инженер или Технически Лийд',
        'career.ideal.role2': 'Продуктово-фокусирани инженерни екипи',
        'career.ideal.role3': 'AI/ML стартъп среди',
        'career.ideal.role4': 'Компании с приоритет на дистанционната работа',
        'career.bring.title': 'Какво Нося',
        'career.bring.skill1': 'Доказан опит в изграждане на печеливши продукти',
        'career.bring.skill2': 'Дълбок опит в модерни AI технологии',
        'career.bring.skill3': 'Full-stack разработни възможности',
        'career.bring.skill4': 'Бизнес проницателност и стратегическо мислене',
        
        // CTA
        'cta.title': 'Имате проект наум?',
        'cta.subtitle': 'В момента съм наличен за дистанционна договорна работа и избрани пълно работно време възможности. Нека изградим нещо страхотно заедно.',
        'cta.specialize': 'Специализирам се в:',
        'cta.contact': 'Свържете се с мен',
        'cta.work': 'Вижте работата ми',
        'cta.cv': 'Изтеглете CV',
        
        // Footer
        'footer.built': 'Дизайнирано и изградено от нулата.'
    }
};

// Current language state
let currentLanguage = 'en';

// Initialize language system
function initLanguage() {
    // Check URL parameter for language
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam && languages[langParam]) {
        currentLanguage = langParam;
    } else {
        // Check localStorage for saved preference
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && languages[savedLang]) {
            currentLanguage = savedLang;
        }
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update flag display
    updateLanguageDisplay();
    
    // Apply translations
    applyTranslations();
    
    // Set up language switcher
    setupLanguageSwitcher();
}

// Update language display
function updateLanguageDisplay() {
    // Update active state for both language flags
    const langEn = document.getElementById('lang-en');
    const langBg = document.getElementById('lang-bg');
    
    if (langEn && langBg) {
        // Remove active state from both
        langEn.classList.remove('opacity-100');
        langBg.classList.remove('opacity-100');
        
        // Add active state to current language
        if (currentLanguage === 'en') {
            langEn.classList.add('opacity-100');
            langBg.classList.add('opacity-60');
        } else {
            langBg.classList.add('opacity-100');
            langEn.classList.add('opacity-60');
        }
    }
}

// Apply translations to the page
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = languages[currentLanguage][key];
        if (translation) {
            element.textContent = translation;
        }
    });
}

// Switch language
function switchLanguage(newLang) {
    if (languages[newLang] && newLang !== currentLanguage) {
        currentLanguage = newLang;
        
        // Update HTML lang attribute
        document.documentElement.lang = currentLanguage;
        
        // Update flag display
        updateLanguageDisplay();
        
        // Apply translations
        applyTranslations();
        
        // Save preference
        localStorage.setItem('preferred-language', currentLanguage);
        
        // Update URL without page reload
        const url = new URL(window.location);
        url.searchParams.set('lang', currentLanguage);
        window.history.pushState({}, '', url);
    }
}

// Setup language switcher
function setupLanguageSwitcher() {
    const langEn = document.getElementById('lang-en');
    const langBg = document.getElementById('lang-bg');
    
    if (langEn && langBg) {
        // English flag click
        langEn.addEventListener('click', function() {
            if (currentLanguage !== 'en') {
                switchLanguage('en');
            }
        });
        
        // Bulgarian flag click
        langBg.addEventListener('click', function() {
            if (currentLanguage !== 'bg') {
                switchLanguage('bg');
            }
        });
        
        // Add hover effects
        langEn.addEventListener('mouseenter', function() {
            this.title = 'Switch to English';
        });
        
        langBg.addEventListener('mouseenter', function() {
            this.title = 'Switch to Bulgarian';
        });
    }
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { rootMargin: '0px', threshold: 0.1 });

// Observe all sections with fade-in class
document.querySelectorAll('.section-fade-in').forEach(section => {
    observer.observe(section);
});

// CV Download functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system
    initLanguage();
    
    const cvDownloadBtn = document.querySelector('a[href="./kristiyan-tsvetanov-cv.pdf"]');
    
    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            downloadCV();
        });
    }
});

async function downloadCV() {
    try {
        // Show loading state
        const btn = document.querySelector('a[href="./kristiyan-tsvetanov-cv.pdf"]');
        const originalText = btn.textContent;
        btn.textContent = 'Generating PDF...';
        btn.style.pointerEvents = 'none';
        
        // Load the CV HTML content
        const response = await fetch('./cv.html');
        const cvHtml = await response.text();
        
        // Create a temporary container for the CV
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = cvHtml;
        const cvContent = tempContainer.querySelector('.cv-container');
        
        // Configure PDF options
        const opt = {
            margin: [15, 15, 15, 15],
            filename: 'kristiyan-tsvetanov-cv.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                letterRendering: true,
                allowTaint: true,
                foreignObjectRendering: true
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait' 
            }
        };
        
        // Generate and download PDF
        const pdf = await html2pdf().set(opt).from(cvContent).save();
        
        // Reset button state
        btn.textContent = originalText;
        btn.style.pointerEvents = 'auto';
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        
        // Reset button state
        const btn = document.querySelector('a[href="./kristiyan-tsvetanov-cv.pdf"]');
        btn.textContent = 'Download CV';
        btn.style.pointerEvents = 'auto';
        
        // Fallback: open CV in new tab
        window.open('./cv.html', '_blank');
    }
}
