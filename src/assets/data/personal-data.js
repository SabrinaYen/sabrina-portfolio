// Every text field that's shown to the reader is bilingual: { en, zh }.
// Fields that are proper nouns / URLs / tech names (company names, tags,
// links, email, phone) are left as plain strings since they don't change
// between languages.

export const personalData = {
    name: { en: 'Sabrina Yen', zh: '殷淑冰' },
    fullName: { en: 'Sabrina Yen Sook Ping', zh: '殷淑冰 (Sabrina Yen Sook Ping)' },
    prevTitle: { en: 'Frontend Developer', zh: '前端开发工程师' },
    curTitle: { en: 'FullStack Developer', zh: '全栈开发工程师' },
    email: 'sabrinayen1301@gmail.com',
    phoneNo: '+6012-5288801',
   
    location: { en: 'Petaling Jaya, Selangor, Malaysia', zh: '雪兰莪，八打灵再也，马来西亚' },
    // wasn't in your data file before — pulled from resume's 个人简介
   
    socialLinks: {
        github: 'https://github.com/SabrinaYen/',
        linkedin: 'https://www.linkedin.com/in/sabrina-yen-sook-ping-8843a9206',
    },
};

export const stats = [
    { value: '5+', label: { en: 'Years experience', zh: '年工作经验' } },
    { value: '8+', label: { en: 'Projects delivered', zh: '完成项目数' } },
    { value: '4', label: { en: 'Languages spoken', zh: '语言能力' } },
];

export const skills = [
    {
        category: { en: 'Languages', zh: '编程语言' },
        items: ['React', 'Next.js', 'Vue 2', 'React Native'],
        skillsIcon: 'code',
    },
    {
        category: { en: 'Backend & Database', zh: '后端与数据库' },
        items: ['JavaScript', 'jQuery', '.NET', 'Python', 'MySQL / MSSQL', 'Firebase'],
        skillsIcon: 'database',
    },
    {
        category: { en: 'DevOps & Cloud', zh: 'DevOps 与云服务' },
        items: ['AWS Cloud', 'Jenkins', 'Lambda', 'Docker'],
        skillsIcon: 'cloud',
    },
    {
        category: { en: 'Design & Tools', zh: '设计与工具' },
        items: ['Figma', 'Adobe'],
        skillsIcon: 'checked',
    },
];

// NEW — personal strengths section from the resume, not previously
// captured anywhere in the data file
export const strengths = [
    { en: 'Strong adaptability with creative problem-solving skills', zh: '适应力强，具备创造性解决问题的能力' },
    { en: 'Multilingual — fluent in English, Mandarin, Cantonese, and Malay', zh: '多语能力：精通英语、华语、粤语及马来语' },
    { en: 'Passionate developer with a creative mindset', zh: '充满热情的程序开发者，富有创意思维' },
    { en: 'Strong team collaboration spirit', zh: '具备良好团队合作精神' },
    { en: 'Strong time management, able to handle multiple tasks effectively', zh: '时间管理能力强，能有效处理多项任务' },
    { en: 'Proactive and a fast learner', zh: '积极主动，学习能力强' },
];


export const projects = [
    {
        title: 'Setia Didik',
        type: { en: 'E-commerce Experience', zh: '电商网站' },
        isCompanyProject: true,
        company: 'Revnology PLT',
        description: {
            en: 'Delivered client-side features for an online bookstore, building responsive layouts and debugging across devices to keep the shopping experience reliable.',
            zh: 'Setia Didik 是一个电子商务项目，允许用户在线购买书籍与文具用品。负责管理网站在跨平台设备上的响应式呈现效果，使用 JavaScript 与 jQuery 实现客户端功能，并调试修复网站问题以确保质量。',
        },
        tags: ['JavaScript', 'jQuery', 'React'],
        link: 'https://setiadidik.com/',
        isAvaliable: true,
        isSensitive: false,
    },
    {
        title: 'Toyota Dream Car Art Contest',
        type: { en: 'Campaign Landing Page', zh: '活动着陆页' },
        isCompanyProject: true,
        company: 'Revnology PLT',
        description: {
            en: 'Built a static one-page contest site for Toyota Malaysia using HTML, CSS, and Bootstrap, with interactive sections for contest details and requirements.',
            zh: '一个静态单页海报项目，让用户点击浏览更多详细信息。使用 HTML、CSS 及 Bootstrap 构建自定义页面，并管理网站在跨平台设备上的响应式呈现效果。',
        },
        tags: ['HTML/CSS', 'JavaScript'],
        link: 'https://toyota.com.my/dreamcarartcontest',
        isAvaliable: false,
        isSensitive: false,
    },
    {
        title: 'Aequo360 [WEB/APP]',
        type: { en: 'Healthcare Platform', zh: '医疗服务网站' },
        isCompanyProject: true,
        company: 'Revnology PLT',
        description: {
            en: 'Maintained a medical booking platform, keeping multilingual content up to date and shipping client-side features that kept records and reservations running smoothly.',
            zh: 'Aequo360 是一个医疗相关网站，允许用户查询记录并进行预约。在 Google Sheets 中追踪现有语言内容以确保数据保持最新，并使用 JavaScript / jQuery 实现客户端功能。',
        },
        tags: ['JavaScript', 'jQuery', 'PHP'],
        link: 'https://www.aequo360.com/en',
        isAvaliable: true,
        isSensitive: false,
    },
    {
        title: 'MetalHead NFT',
        type: { en: 'Web3 Experience', zh: 'NFT 项目' },
        isCompanyProject: true,
        company: 'Revnology PLT',
        description: {
            en: 'Built responsive UI components for an NFT collection site, helping users explore lore and mint pieces from the collection.',
            zh: 'MetalHead 是一个 NFT 项目，让用户浏览详情并铸造 NFT 收藏品。构建组件以打造用户友好的界面，并管理网站在跨平台设备上的响应式呈现效果。',
        },
        tags: ['Next.js'],
        link: 'https://metalheadsnft.com/',
        isAvaliable: false,
        isSensitive: false,
    },
    {
        title: 'Interact',
        type: { en: 'CMS Platform', zh: '企业管理系统网站' },
        isCompanyProject: true,
        company: 'Revnology PLT',
        description: {
            en: 'Built UI across web and mobile for a CMS system tracking company revenue and sales, using Next.js and React Native.',
            zh: 'Interact 是一个企业管理系统，集成报表模块，支持用户实时查看公司营收与销售数据报表，辅助业务决策。涵盖移动应用程序与网站开发，使用 Next.js 与 React Native 构建界面。',
        },
        tags: ['Next.js', 'React Native', 'CMS'],
        link: 'https://interact.com.my/',
        isAvaliable: true,
        isSensitive: false,
    },
    {
        title: 'Study Timer',
        type: { en: 'Personal Project', zh: '个人项目' },
        isCompanyProject: false,
        description: {
            en: 'Designed and built a desktop-friendly study timer with a motivational message API, helping students stay focused through work and break sessions.',
            zh: '一款专为学生设计的激励型计时器，提供电脑端友好的方式管理学习时段、保持专注。整合激励语句 API，在倒计时过程中随机显示鼓励性信息。',
        },
        tags: ['Next.js', 'MongoDB', 'GitHub Actions', 'Vercel'],
        link: 'https://study-timer-eight.vercel.app/',
        isAvaliable: true,
        isSensitive: false,
    },
    {
        title: 'Casinoplus PH',
        type: { en: 'Entertainment', zh: '娱乐平台' },
        isCompanyProject: true,
        company: 'Snsoft Sdn Bhd',
        description: {
            en: 'CasinoplusPH is a Philippines-based platform offering a gambling experience for users.',
            zh: 'CasinoplusPH 是一个基于菲律宾市场，为用户提供博彩服务的娱乐平台。',
        },
        tags: ['Vue.js2', 'JavaScript', 'Nuxt2', 'React Monorepo'],
        link: 'https://casinoplus.ph/',
        isAvaliable: true,
        isSensitive: true,
    },
    {
        title: 'Ms. Puiyi Virtual Birthday Hunt',
        type: { en: 'Landing Page', zh: '着陆页' },
        isCompanyProject: true,
        company: 'Revnology PLT',
        description: {
            en: 'A standalone static landing page built with Next.js. Developed the UI to meet client requirements and assisted with interface refinements to improve the user experience.',
            zh: '使用 Next.js 开发的静态独立着陆页项目，构建并开发用户界面以满足客户需求，并协助进行界面优化以提升用户体验。',
        },
        tags: ['Next.js'],
        // no link given in the resume — fill in if you have one, or leave
        // isAvaliable: false so your UI can hide/grey out the link button
        link: '',
        isAvaliable: false,
        isSensitive: true,
    },
    // NEW — final year project from the resume, wasn't in your data file
    {
        title: { en: 'QR Code & GPS Attendance App', zh: 'QR 码与 GPS 手机应用出席管理系统' },
        type: { en: 'Final Year Project', zh: '毕业专题项目' },
        isCompanyProject: false,
        description: {
            en: 'An Android attendance-tracking app for small classrooms or workplaces (roughly 15 people or fewer), combining QR code scanning with GPS verification to log attendance.',
            zh: '该项目为一款用于追踪学生出席情况的 Android 出席管理应用，适用于人数约 15 人以内的小型工作场所或小班教学。',
        },
        tags: ['Java', 'Android Studio', 'Firebase', 'Cloud Firestore', 'Google Forms', 'Google Sheets'],
        link: '',
        isAvaliable: false,
        isSensitive: false,
    },
];

export const experience = [
    {
        role: {
            en: 'Assistant Manager (Senior Software Engineer)',
            zh: '助理经理（高级软件工程师）',
        },
        company: 'Aeon Credit Sdn Bhd',
        period: 'Oct 2024 — Present',
        summary: [
            {
                en: 'Restructured and upgraded frontend applications with React.js, improving responsiveness and user experience.',
                zh: '使用 React.js 重构并升级前端应用程序，提升响应速度与用户体验。',
            },
            {
                en: 'Designed, maintained, and optimized .NET Core / .NET Framework APIs to ensure system scalability and security.',
                zh: '设计、维护并优化 .NET Core / .NET Framework API，确保系统的可扩展性与安全性。',
            },
            {
                en: 'Developed and integrated RESTful APIs for seamless communication across systems.',
                zh: '开发并整合 RESTful API，实现各系统间的无缝通信。',
            },
            {
                en: 'Optimized MS SQL Server and MySQL database architecture and queries to improve database performance.',
                zh: '优化 MS SQL Server 与 MySQL 的数据库架构与查询，提升数据库性能。',
            },
            {
                en: 'Implemented GitLab CI/CD pipelines and automated workflows with AWS Lambda to streamline deployments.',
                zh: '实施 GitLab CI/CD 流水线，并使用 AWS Lambda 自动化工作流程，简化部署流程。',
            },
            {
                en: 'Improved Webpack build performance and created reusable components for a shared layout system.',
                zh: '改善 Webpack 构建性能，并创建可复用组件以统一共享布局。',
            },
            {
                en: 'Guided and reviewed vendor-related projects to ensure proposed processes and solutions met company standards.',
                zh: '指导并审查供应商相关项目，确保所提出的流程与方案符合公司标准与需求。',
            },
        ],
    },
    {
        role: { en: 'Frontend Developer', zh: '前端开发工程师' },
        company: 'Snsoft Sdn Bhd',
        period: 'Jun 2022 — Oct 2024',
        summary: [
            {
                en: 'Implemented responsive web design principles to ensure the company site rendered well across devices.',
                zh: '落实响应式网页设计原则，确保公司网站能在多种设备上良好呈现。',
            },
            {
                en: 'Built landing pages using JavaScript and jQuery.',
                zh: '使用 JavaScript 与 jQuery 开发着陆页（Landing Page）。',
            },
            {
                en: 'Developed and maintained feature enhancements for existing platforms based on client requirements.',
                zh: '依据客户需求，开发并维护现有平台的功能增强。',
            },
            { en: 'Built new user-facing features.', zh: '开发面向用户的新功能。' },
            {
                en: 'Actively contributed to major system performance optimization efforts.',
                zh: '积极参与系统性能优化的重大改进工作。',
            },
            {
                en: 'Led periodic code reviews to ensure the team followed best practices and coding standards.',
                zh: '定期进行代码审查，确保团队遵循最佳实践与编码规范。',
            },
            {
                en: 'Supported teammates with coding and debugging.',
                zh: '为团队成员提供编码与调试方面的支持。',
            },
            {
                en: 'Specialized in mini-program development as a primary area of contribution.',
                zh: '专注于小程序的开发，作为项目贡献的主要方向。',
            },
        ],
    },
    {
        role: { en: 'Frontend Developer (Part-Timer)', zh: '前端开发工程师（兼职）' },
        company: 'Revnology PLT',
        period: 'Aug 2022 — Oct 2022',
        summary: [
            { en: 'Delivered quick fixes and bug resolutions.', zh: '快速修复问题。' },
            { en: 'Built standalone landing pages.', zh: '开发并构建独立的着陆页。' },
            { en: 'Maintained and monitored existing sites for issues.', zh: '维护并监控网站问题。' },
        ],
    },
    {
        role: { en: 'Intern / Part-Timer', zh: '实习生／兼职人员' },
        company: 'Revnology PLT',
        period: 'Jun 2021 — Jan 2022',
        summary: [
            {
                en: 'Built features to improve user experience.',
                zh: '开发功能以提升用户体验。',
            },
            {
                en: 'Built responsive, functional user interfaces.',
                zh: '构建具响应式设计的功能性用户界面。',
            },
            {
                en: 'Managed up-to-date multilingual content data across projects.',
                zh: '管理项目中多种本地语言的最新数据。',
            },
            { en: 'Debugged issues that arose during development.', zh: '处理开发过程中出现的调试错误。' },
            { en: 'Learned new programming languages on the job.', zh: '学习多种编程语言。' },
        ],
    },
];