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
        'hero.title': 'Independent AI Product Engineer',
        'hero.description': 'Tired of slow agencies and risky junior hires? I\'m the alternative: an independent product engineer who ships.',
        'hero.achievement_1': 'Scaled an AI SaaS to $3k MRR and 55,000+ users.',
        'hero.achievement_2': 'Built a viral AI benchmark that reveals a model\'s true character.',
        'hero.achievement_3': 'De-risk your roadmap and turn vision into product in weeks, not months.',
        'hero.metrics.mrr': 'Scaled to $3K MRR',
        'hero.metrics.users': 'Grew to 55K+ Users',
        'hero.metrics.retention': 'Client Retention',
        
        // Achievements
        'achievements.mrr': 'Monthly Recurring Revenue',
        'achievements.projects': 'Client Projects Delivered',
        'achievements.years': 'Years of Experience',
        
        // Toolkit
        'toolkit.title': 'Technologies I Use to Deliver Results',
        'toolkit.subtitle': 'My battle-tested stack for building AI products that scale.',
        
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
        'projects.bookwiz.problem': 'Authors and writers were struggling with writer\'s block and needed a tool that provided intelligent, context-aware assistance beyond simple grammar checks.',
        'projects.bookwiz.solution': 'Built an agentic AI writing assistant from the ground up, with a complete SaaS platform including user management, Stripe payments, and a high-performance backend.',
        'projects.bookwiz.headline': 'Scaled a solo-founder SaaS to $3,000 MRR and 55,000+ users.',
        'projects.bookwiz.result': 'This platform now serves authors worldwide with a complete SaaS infrastructure. Built a product that people actually pay for.',
        
        // Vkashti project
        'projects.vkashti.problem': 'A popular local bar was struggling with operational chaos, from reservations and inventory to staff coordination and customer engagement.',
        'projects.vkashti.solution': 'Developed a comprehensive web platform and AI-powered Discord bots to automate everything: reservations with SMS confirmations, staff task delegation, natural language inventory tracking, and even real-time quiz nights.',
        'projects.vkashti.headline': 'Streamlined 90% of daily bar operations with AI automation.',
        'projects.vkashti.result': 'Increased efficiency and proved I can apply complex tech solutions to solve messy, real-world business problems.',
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
        
        // AI War Zone project
        'projects.aiwarzone.problem': 'Businesses are choosing multi-million dollar AI models based on incomplete data. They test for capability but are blind to a model\'s character—its trustworthiness, strategic flaws, and potential for ruthless or naive behavior.',
        'projects.aiwarzone.solution': 'I built a full-stack platform that forces top LLMs into the Prisoner\'s Dilemma, creating the first public benchmark for their emergent strategic behavior.',
        'projects.aiwarzone.headline': 'Sparked viral discussion across AI communities.',
        'projects.aiwarzone.result': 'Revealed unique "personality" flaws in major AI models, creating a viral project cited by AI enthusiasts and demonstrating deep expertise in multi-LLM integration and behavioral analysis.',
        
        // CMS project
        'projects.cms.title': 'Custom CMS Systems',
        'projects.cms.problem': 'Clients needed flexible content management without the bloat and limitations of off-the-shelf solutions.',
        'projects.cms.solution': 'Designed and built bespoke CMS systems tailored to specific business needs, enabling efficient content, user data, and business logic management.',
        'projects.cms.result': 'Delivered 5+ custom CMS solutions, each reducing content management time by 60% and improving client workflow efficiency. Average project completion: 6 weeks with 95% client retention rate.',
        
        // Experience
        'experience.title': 'Career Journey',
        'experience.moonhythe.title': 'Founder & Lead Developer @ Moonhythe',
        'experience.moonhythe.description': 'As the principal of Moonhythe, I\'ve acted as a fractional CTO and lead AI engineer for 15+ clients. My focus is taking AI products from concept to launch, with expertise in full-stack development and AI integration.',
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
        'career.title': 'My Playbook: How We Can Work Together',
        'career.subtitle': 'I offer three focused engagements designed for speed and impact.',
        'career.offers.sprint.title': 'AI Feature Sprint',
        'career.offers.sprint.benefit': 'Your fastest path from idea to a working prototype.',
        'career.offers.sprint.description': 'A fixed 4-week engagement to build and ship one core AI feature.',
        'career.offers.sprint.price': 'Starting at $10k',
        'career.offers.strategy.title': 'AI Strategy & Roadmap',
        'career.offers.strategy.benefit': 'A 2-day intensive to de-risk your plan.',
        'career.offers.strategy.description': 'We\'ll define the highest-impact features, choose the right models, and create a clear technical roadmap.',
        'career.offers.strategy.price': 'Fixed 2-Day Engagement',
        'career.offers.fractional.title': 'Fractional AI Lead',
        'career.offers.fractional.benefit': 'Ongoing technical leadership and development.',
        'career.offers.fractional.description': 'I act as your dedicated AI expert to guide your team and product, without the full-time overhead.',
        'career.offers.fractional.price': 'Monthly Retainer (Inquire)',
        
        // CTA
        'cta.title': 'Ready to build something incredible?',
        'cta.subtitle': 'I take on a limited number of projects per quarter to ensure every client gets the focus they deserve. My slots are filling up for Q4.',
        'cta.description': 'If you\'re a founder who needs to move fast and build with an expert, let\'s talk.',
        'cta.contact': 'Book a Free 15-Min Strategy Call',
        'cta.work': 'View My Work',
        
        // Footer
        'footer.built': 'Designed and built from scratch.',
        
        // Contact Page
        'contact.hero.title': 'Let\'s Connect',
        'contact.hero.subtitle': 'Ready to Build Something Amazing?',
        'contact.hero.description': 'I\'m always excited to discuss new opportunities, whether it\'s building AI-powered SaaS solutions, consulting on technical strategy, or collaborating on innovative projects.',
        
        'contact.sections.getintouch.title': 'Get In Touch',
        'contact.sections.getintouch.direct.title': 'Direct Contact',
        'contact.sections.getintouch.direct.email.label': 'Email',
        'contact.sections.getintouch.direct.phone.label': 'Phone',
        'contact.sections.getintouch.networks.title': 'Professional Networks',
        'contact.sections.getintouch.networks.linkedin.label': 'LinkedIn',
        'contact.sections.getintouch.networks.linkedin.link': 'Connect on LinkedIn',
        'contact.sections.getintouch.networks.github.label': 'GitHub',
        'contact.sections.getintouch.networks.github.link': 'View Projects',
        'contact.sections.getintouch.response.title': 'Response Time',
        'contact.sections.getintouch.response.description': 'I typically respond to all inquiries within 24 hours during business days. For urgent matters, feel free to call directly.',
        
        'contact.sections.career.title': 'What I\'m Looking For',
        'contact.sections.career.ideal.title': 'Ideal Opportunities',
        'contact.sections.career.ideal.role1': 'Senior AI Engineer or Technical Lead roles',
        'contact.sections.career.ideal.role2': 'Product-focused engineering teams',
        'contact.sections.career.ideal.role3': 'AI/ML startup environments',
        'contact.sections.career.ideal.role4': 'Remote-first companies',
        'contact.sections.career.ideal.role5': 'Contract work and consulting',
        'contact.sections.career.bring.title': 'What I Bring',
        'contact.sections.career.bring.skill1': 'Proven track record of building profitable products',
        'contact.sections.career.bring.skill2': 'Deep expertise in modern AI technologies',
        'contact.sections.career.bring.skill3': 'Full-stack development capabilities',
        'contact.sections.career.bring.skill4': 'Business acumen and strategic thinking',
        'contact.sections.career.bring.skill5': '10+ years of startup experience',
        
        'contact.sections.cta.title': 'Ready to Start?',
        'contact.sections.cta.description': 'Whether you have a specific project in mind or just want to explore possibilities, I\'m here to help turn your ideas into reality.',
        'contact.sections.cta.email': 'Send Email',
        'contact.sections.cta.call': 'Call Now',
        'contact.sections.cta.back': 'Back to Portfolio'
    },
    bg: {
        flag: '🇧🇬',
        name: 'Български',
        // Navigation
        'nav.projects': 'Проекти',
        'nav.experience': 'Опит',
        'nav.contact': 'Свържете се с мен',
        
        // Hero section
        'hero.title': 'Независим AI Продуктов Инженер',
        'hero.description': 'Омръзна ли ви от бавни агенции и рискови младши назначения? Аз съм алтернативата: независим продуктов инженер, който доставя.',
        'hero.achievement_1': 'Мащабирах AI SaaS до $3k MRR и 55 000+ потребители.',
        'hero.achievement_2': 'Изградих вирален AI бенчмарк, който разкрива истинския характер на модела.',
        'hero.achievement_3': 'Намалявам риска от пътеводителя и превръщам визията в продукт за седмици, не месеци.',
        'hero.metrics.mrr': 'Мащабирах до $3K MRR',
        'hero.metrics.users': 'Нарастнах до 55K+ Потребители',
        'hero.metrics.retention': 'Запазване на Клиенти',
        
        // Achievements
        'achievements.mrr': 'Месечен Повтарящ се Приход',
        'achievements.projects': 'Клиентски Проекти Доставени',
        'achievements.years': 'Години Опит',
        
        // Toolkit
        'toolkit.title': 'Технологии, които използвам за постигане на резултати',
        'toolkit.subtitle': 'Моят проверен стек за изграждане на AI продукти, които мащабират.',
        
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
        
        // AI War Zone project
        'projects.aiwarzone.problem': 'Стандартните AI бенчмаркове тестват способностите, но игнорират характера. Това оставя бизнесите да гадаят за надеждността, достоверността и стратегическите недостатъци на модела в реални сценарии.',
        'projects.aiwarzone.solution': 'Изградих платформа с пълен стек, която принуждава водещите LLM-и (от Google, OpenAI, Anthropic) в класическата Дилема на Затворника, създавайки нов бенчмарк за тяхното възникващо стратегическо поведение и "характер".',
        'projects.aiwarzone.result': 'Разкрих уникални характерни профили за основните AI модели, създавайки вирален проект, който демонстрира дълбок експерт в мулти-LLM интеграция, поведенчески анализ и изграждане на продукти със силен разказ.',
        
        // CMS project
        'projects.cms.title': 'Персонализирани CMS Системи',
        'projects.cms.problem': 'Клиентите се нуждаеха от гъвкаво управление на съдържанието без излишъка и ограниченията на готовите решения.',
        'projects.cms.solution': 'Проектирах и изградих персонализирани CMS системи, пригодени към специфичните бизнес нужди, позволявайки ефективно управление на съдържание, потребителски данни и бизнес логика.',
        'projects.cms.result': 'Доставих 5+ персонализирани CMS решения, всяко намалявайки времето за управление на съдържанието с 60% и подобрявайки ефективността на клиентския работен процес. Средно време за завършване на проекта: 6 седмици с 95% процент на запазване на клиенти.',
        
        // Experience
        'experience.title': 'Кариерен Път',
        'experience.moonhythe.title': 'Основател & Главен Разработчик @ Moonhythe',
        'experience.moonhythe.description': 'Като главен на Moonhythe, действах като фракционен CTO и водещ AI инженер за 15+ клиенти. Фокусът ми е да вземам AI продукти от концепция до стартиране, с експертиза в full-stack разработка и AI интеграция.',
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
        'career.title': 'Моята Стратегия: Как Можем да Работим Заедно',
        'career.subtitle': 'Предлагам три фокусирани ангажимента, проектирани за скорост и въздействие.',
        'career.offers.sprint.title': 'AI Функционален Спринт',
        'career.offers.sprint.benefit': 'Най-бързият ви път от идея до работещ прототип.',
        'career.offers.sprint.description': 'Фиксирано 4-седмично ангажиране за изграждане и пускане на една основна AI функция.',
        'career.offers.sprint.price': 'Започва от $10k',
        'career.offers.strategy.title': 'AI Стратегия & Пътеводител',
        'career.offers.strategy.benefit': '2-дневен интензивен за намаляване на риска от плана ви.',
        'career.offers.strategy.description': 'Ще дефинираме функциите с най-голямо въздействие, ще изберем правилните модели и ще създадем ясен технически пътеводител.',
        'career.offers.strategy.price': 'Фиксирано 2-Дневно Ангажиране',
        'career.offers.fractional.title': 'Фракционен AI Лийд',
        'career.offers.fractional.benefit': 'Текущо техническо лидерство и разработка.',
        'career.offers.fractional.description': 'Действам като вашия посветен AI експерт за ръководство на екипа и продукта ви, без разходите за пълно работно време.',
        'career.offers.fractional.price': 'Месечен Абонамент (Запитване)',
        
        // CTA
        'cta.title': 'Готови ли сте да изградим нещо невероятно?',
        'cta.subtitle': 'Приемам ограничен брой проекти на тримесечие, за да гарантирам, че всеки клиент получава фокуса, който заслужава. Местата ми се запълват за Q4.',
        'cta.description': 'Ако сте основател, който трябва да се движи бързо и да строи с експерт, нека да поговорим.',
        'cta.contact': 'Резервирайте Безплатна 15-Минутна Стратегическа Разговор',
        'cta.work': 'Вижте работата ми',
        
        // Footer
        'footer.built': 'Създадено от нулата.',
        
        // Contact Page
        'contact.hero.title': 'Нека се Свържем',
        'contact.hero.subtitle': 'Готови ли сте да Изградим Нещо Удивително?',
        'contact.hero.description': 'Винаги съм развълнуван да обсъдя нови възможности, независимо дали е изграждане на AI-powered SaaS решения, консултиране по техническа стратегия или сътрудничество по иновативни проекти.',
        
        'contact.sections.getintouch.title': 'Свържете се с мен',
        'contact.sections.getintouch.direct.title': 'Директен Контакт',
        'contact.sections.getintouch.direct.email.label': 'Имейл',
        'contact.sections.getintouch.direct.phone.label': 'Телефон',
        'contact.sections.getintouch.networks.title': 'Професионални Мрежи',
        'contact.sections.getintouch.networks.linkedin.label': 'LinkedIn',
        'contact.sections.getintouch.networks.linkedin.link': 'Свържете се в LinkedIn',
        'contact.sections.getintouch.networks.github.label': 'GitHub',
        'contact.sections.getintouch.networks.github.link': 'Вижте Проектите',
        'contact.sections.getintouch.response.title': 'Време за Отговор',
        'contact.sections.getintouch.response.description': 'Обикновено отговарям на всички запитвания в рамките на 24 часа през работните дни. За спешни въпроси, не се колебайте да се обадите директно.',
        
        'contact.sections.career.title': 'Какво Търся',
        'contact.sections.career.ideal.title': 'Идеални Възможности',
        'contact.sections.career.ideal.role1': 'Старши AI Инженер или Технически Лийд роли',
        'contact.sections.career.ideal.role2': 'Продуктово-фокусирани инженерни екипи',
        'contact.sections.career.ideal.role3': 'AI/ML стартъп среди',
        'contact.sections.career.ideal.role4': 'Компании с приоритет на дистанционната работа',
        'contact.sections.career.ideal.role5': 'Договорна работа и консултиране',
        'contact.sections.career.bring.title': 'Какво Нося',
        'contact.sections.career.bring.skill1': 'Доказан опит в изграждане на печеливши продукти',
        'contact.sections.career.bring.skill2': 'Дълбок опит в модерни AI технологии',
        'contact.sections.career.bring.skill3': 'Full-stack разработни възможности',
        'contact.sections.career.bring.skill4': 'Бизнес проницателност и стратегическо мислене',
        'contact.sections.career.bring.skill5': '10+ години стартъп опит',
        
        'contact.sections.cta.title': 'Готови ли сте да Започнем?',
        'contact.sections.cta.description': 'Независимо дали имате конкретен проект наум или просто искате да проучите възможности, тук съм да помогна да превърнем идеите ви в реалност.',
        'contact.sections.cta.email': 'Изпратете Имейл',
        'contact.sections.cta.call': 'Обадете се Сега',
        'contact.sections.cta.back': 'Обратно към Портфолиото'
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
