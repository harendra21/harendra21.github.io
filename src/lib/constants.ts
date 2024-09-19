import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/harendra21',
  linkedin: 'https://www.linkedin.com/in/harendra21/',
  mail: 'mailto:harendraverma21@gmail.com',
  email: 'harendraverma21@gmail.com',
  twitter: 'https://twitter.com/harendraverma2',
  medium: 'https://medium.com/@harendra21',
  // discord: 'https://discordapp.com/users/harendra3788',
}

// Global
export const SITE: Site = {
  TITLE: '🇮🇳 Harendra Kumar Kanojiya - Portfolio Site',
  DESCRIPTION:
    'Hi, I’m Harendra Kumar, a full-stack frontend  developer specializing in backend development and system design.',
  AUTHOR: 'Harendra Kumar Kanojiya',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Harendra Kumar Kanojiya - Work Expriance',
  DESCRIPTION: 'Currently working with Vendasta, previously worked in - Aakash Edu. Tech (Byjus), Quippelin, Aabhyasa and Aviance Sales Mart.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Harendra Kumar Kanojiya - Blogs',
  DESCRIPTION: 'I am passionate to write technical blogs on medium.com',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Harendra Kumar Kanojiya - Projects',
  DESCRIPTION: 'A list of all projects done by me professional and personal',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Search Page
export const STUDY: Page = {
  TITLE: 'Harendra Kumar Kanojiya - Study',
  DESCRIPTION: 'All about my studies - B.tech, Intermediate and High School',
}


// Study Page
export const STUDIES = [
  {
    title: 'B. Tech in Computer Science',
    institution: 'S.R.M.S College of Engineering and Technology, Unnao',
    link: 'https://www.srms.ac.in/engineering/',
    date: '2013 - 2017',
  },
  {
    title: 'Intermediate',
    institution: 'Shraswati Vidhya Mandir, Gola Gokaran Nath',
    link: 'http://www.svmicgola.com/',
    date: '2010 - 2012',
  },
  {
    title: 'High School',
    institution: 'Shraswati Vidhya Mandir, Gola Gokaran Nath',
    link: 'http://www.svmicgola.com/',
    date: '2009 - 2010',
  },
]

export const EXPERIENCE = [
  {
    company: 'Vendasta',
    location: 'Saskatoon, Canada (Remote)',
    position: 'Software Development Engineer 3 (SDE 3)',
    start: 'Oct, 2022',
    link: 'https://www.vendasta.com/',
    end: 'Current',
    skills: 'Golang · JavaScript · Angular · Back-End Web Development · Git · Docker · Kubernetes · Python',
  },
  {
    company: 'Aakash Edu. Tech (Byjus)',
    location: 'Mexico City, Mexico',
    position: 'Software Engineer',
    link: 'https://aakashdigital.com/',
    start: 'July, 2020',
    end: 'Oct, 2022',
    skills: 'Golang · PHP · JavaScript · Beego · Back-End Web Development · PostgreSQL · Git · Linux'
  },
  {
    company: 'Quippelin',
    link: 'https://www.queppelin.com/',
    location: 'Bogotá D C, Colombia',
    position: 'Frontend developer',
    start: 'Aug, 2019',
    end: 'July, 2020',
    skills: 'PHP · JavaScript · Back-End Web Development · Angular · Laravel · HTML5 · Amazon Web Services (AWS) · Git · Linux · Amazon EC2 · MySQL',
  },
  {
    company: 'Aabhyasa',
    location: 'Bogotá D C, Colombia',
    position: 'Frontend developer',
    start: 'May, 2018',
    link: 'https://aabhyasa.com/',
    end: 'Aug, 2019',
    skills: 'PHP · JavaScript · Back-End Web Development · Angular · Laravel · HTML5 · CodeIgniter · Cascading Style Sheets (CSS) · Amazon Web Services (AWS) · Git · Linux · Amazon EC2 · MySQL',
  },
  {
    company: 'Aviance Sales Mart',
    location: 'Bogotá D C, Colombia',
    position: 'Software developer',
    start: 'May, 2017',
    end: 'May, 2018',
    skills: 'PHP · JavaScript · Back-End Web Development · HTML5 · CodeIgniter · Cascading Style Sheets (CSS) · MySQL',
  }
]

export const PROFESSIONAL_PROJECTS = [
  {
    name: "Website Pro",
    description: "Platform to provide the worpress based hosting with more than 18k site hosted.",
    link: "https://www.vendasta.com/websites/website-pro/",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/WebsiteDevTools_kqlqaz.png"
  },
  {
    name: "Aakash Digital",
    description: "Aakash Digital is online teaching platform, I have worked on their live class platform.",
    link: "https://aakashdigital.com/",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/Screenshot_2024-09-18_at_3.16.35_PM_niyuhf.png"
  },
  {
    name: "QOTD (Quiz Of The Day)",
    description: "An android application to conduct the daily tests and measure the efficency of student based on diffrent aspects to create report.",
    link: "https://play.google.com/store/apps/details?id=com.byjus.aakash.thelearningapp&hl=en_IN",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/Screenshot_2024-09-18_at_4.07.52_PM_gpejk9.png"
  },
  {
    name: "Mind Master Zambia",
    description: "This was also a online game based on KBC which was running on android in Zambia country.",
    link: "",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/Egp1H-KVkAAI9y8_kcq0f5.jpg"
  },
  {
    name: "Gully Cricket",
    description: "This is a fantsy game like dream 11, where you can create your ticket to play and win the cash price",
    link: "",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/first-block.png_ednioc.png"
  },
  {
    name: "Symposium Go",
    description: "This web application is used to provide the online and recorded webinars to the US doctors.",
    link: "https://www.symposiumgo.com/",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/Screenshot_2024-09-18_at_7.03.12_PM_yrbqmi.png"
  },
  {
    name: "Online Audio Training (OAT)",
    description: "This web application is used to conduct online webinars for doctors over goto meeting.",
    link: "https://www.onlinevodcasttraining.com/",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/Screenshot_2024-09-18_at_4.16.45_PM_aj7o0i.png"
  },
  {
    name: "Aviance Sales Mart (Fabolic)",
    description: "This was a multivendor ecommerce application with full-featured ecommerc functions like delivery and payment integration.",
    link: "https://www.fabolic.com/",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/fabolic_cover_z3xfr1.jpg"
  },

]

export const PERSONAL_PROJECTS = [
  {
    name: "Open Source Alternatives",
    description: "An app to find open source alternatives for popular paid SaaS products.",
    link: "https://osa.withcodeexample.com/",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/Screenshot_2024-09-18_at_6.49.13_PM_kwucxx.png"
  },
  {
    name: "Blogging Platform",
    description: "A open-source platform to manage social media accounts (Facebook, twitter, instagram, pintrest and linkedin",
    link: "https://content-clock.web.app/",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/Screenshot_2024-09-18_at_4.39.18_PM_jz4vo2.png"
  },
  {
    name: "Blogging Platform",
    description: "With Code Example plogging platform",
    link: "https://withcodeexample.com",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/Screenshot_2024-09-18_at_4.30.47_PM_qt1du0.png"
  },
  {
    name: "Php real time private chat",
    description: "This project is build with PHP websockets for realtime chat. 20 Stars on github",
    link: "https://github.com/harendra21/Realtime-One-To-One-Chat",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/Php_real_time_private_chat_kjbiff.png"
  },
  {
    name: "Laravel Migration Builder",
    description: "A project to generate Laravel Migration",
    link: "https://github.com/harendra21/laravel-migration-builder",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_500/png_zlvdkj.png"
  }
]

