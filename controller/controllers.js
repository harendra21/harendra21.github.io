(() => {
  const App = angular.module("App.controllers", []);

  App.controller("ExperianceCtrl", ["$scope", function ($scope) {

    $scope.calcDate = (date1,date2) => {
      var diff = Math.floor(date1.getTime() - date2.getTime());
      var day = 1000 * 60 * 60 * 24;
      var days = Math.floor(diff/day);
      var years = Math.floor(days/365);
      var months = Math.ceil((days%365)/30);
      var message = years + " yr "
      message += months + " mos"
      return message
    }
    var today = new Date()
    var last_start = new Date(2020,07,15)
    last_experiance = $scope.calcDate(today,last_start)
    var start = new Date(2017,05,15)
    $scope.total = $scope.calcDate(today,start)
    $scope.records = [
      {
        "company": "Aakash EduTech Private Limited",
        "designation": "Software Engineer",
        "location": "Remote Location",
        "dates": "Jul, 2020 - Present. "+last_experiance,
        "description": "Working as a Software Engineer. Responsible to create the rest API using Goland and handling the backend.",
        "skills": "Go (Programming Language) · PHP · JavaScript · Beego · Back-End Web Development · PostgreSQL · Git · Linux"
      },
      {
        "company": "Queppelin Technology Solutions Pvt. Ltd.",
        "designation": "Full-stack Developer",
        "location": "Gurgaon, India",
        "dates": "Sep 2019 - Jul 2020· 11 mos",
        "description": "Working as Application Developer. Responsible for creating and managing backend web applications using Laravel (PHP) and PWA applications using angular 8.",
        "skills": "PHP · JavaScript · Back-End Web Development · Angular · Laravel · HTML5 · Amazon Web Services (AWS) · Git · Linux · Amazon EC2 · MySQL"
      },
      {
        "company": "Aabhyasa Technologies Pvt. Ltd.",
        "designation": "Web Developer",
        "location": "Lucknow, Uttar Pradesh, India",
        "dates": "May 2018 - Jul 2019 · 1 yr 3 mos",
        "description": "Working as Web Developer. Responsible for creating and managing web applications using Laravel(PHP), Javascript, HTML, CSS, and AWS.",
        "skills": "PHP · JavaScript · Back-End Web Development · Angular · Laravel · HTML5 · CodeIgniter · Cascading Style Sheets (CSS) · Amazon Web Services (AWS) · Git · Linux · Amazon EC2 · MySQL"
      },
      {
        "company": "Aviance Salesmart (Fabilic)",
        "designation": "Web Developer",
        "location": "Lucknow, Uttar Pradesh, India",
        "dates": "May 2017 - May 2018 · 1 yr 1 mo",
        "description": "Working as Web Developer. Responsible to create and manage Web Applications using Codeigniter(PHP), Html, Css and Mysql.",
        "skills": "PHP · JavaScript · Back-End Web Development · HTML5 · CodeIgniter · Cascading Style Sheets (CSS) · MySQL"
      }
    ];
  
  },]);



  App.controller("SkillsCtrl", ["$scope", function ($scope) {
    $scope.records = [
      { "title" : "Golang", "rating" : 7 },
      { "title" : "PHP", "rating" : 8 },
      { "title" : "Database (SQL)", "rating" : 8 },
      { "title" : "AWS", "rating" : 6 },
      { "title" : "Docker", "rating" : 7 },
      { "title" : "Javascript", "rating" : 7 },
      { "title" : "Laravel", "rating" : 6 },
      { "title" : "Angular Js", "rating" : 8 },
      { "title" : "Angular 2+", "rating" : 6 },
      { "title" : "Frontend (HTML + CSS)", "rating" : 6 },
      { "title" : "Backend", "rating" : 8 },
      { "title" : "Linux", "rating" : 8 },
      { "title" : "Ruby On Rails", "rating" : 5 },
      { "title" : "Python", "rating" : 5 }
    ]  
  },]);

  App.controller("ProjectCtrl", ["$scope", function ($scope) {
    $scope.records = [
      {
        "title": "TLLMS",
        "tech": "Ruby On Rails. PostgreSQL. Activeadmin",
        "description": "Worked to create some new modules in existing application.",
        "link": null,
        "github": null
      },{
        "title": "QOTD",
        "tech": "Golang. PostgreSQL. Beego",
        "description": "Golang application to conduct the daily tests and measure the efficency of student based on diffrent aspects to create the report.",
        "link": null,
        "github": null
      },{
        "title": "Crystal - Online Classroom",
        "tech": "Angular Js. Angular 10. Node JS",
        "description": "Crystal is a platform which is used to conduct online classes with Audio/Video and realtime whiteboard.",
        "link": null,
        "github": null
      },{
        "title": "Php real time private chat",
        "tech": "PHP. Websockets",
        "description": "Hobby project - This project is build with PHP websockets for realtime chat. 20 Stars on github",
        "link": null,
        "github": "https://github.com/harendra21/Realtime-One-To-One-Chat"
      },{
        "title": "Laravel migration builder",
        "tech": "Angular Js. Html. Css",
        "description": "Hobby project - Laravel migration builder",
        "link": "https://tender-stonebraker-c1254e.netlify.app/",
        "github": "https://github.com/harendra21/laravel-migration-builder"
      },{
        "title": "Stripe payment gateway with Node JS",
        "tech": "NodeJs",
        "description": "Hobby project - In this post, we will learn how to integrate Stripe payment gateway in our application using Node Js and Express.",
        "link": null,
        "github": "https://github.com/harendra21/stripe-nodejs"
      },{
        "title": "Pixabay Image Gallery",
        "tech": "React Js. Bootstrap. CSS. API",
        "description": "Hobby project - A simple image gallery built with pixabay free api with search feature.",
        "link": "https://harendra21.github.io/react-gallery/index.html",
        "github": "https://github.com/harendra21/react-image-gallery"
      },{
        "title": "Mindmaster Android app",
        "tech": "Ionic 4 (Angular). Laravel. PHP. MySql",
        "description": "Mindmaster was a online quiz game for Zambians based on daily, weekly and yearly luckey draw system.",
        "link": null,
        "github": null
      },{
        "title": "Gullyy - Betting game",
        "tech": "Angular 10. Laravel. MySql. AWS (EC2, RDS)",
        "description": "This PWA application was built on Angular 10",
        "link": null,
        "github": null
      },{
        "title": "OTT Platform",
        "tech": "Angular 10. Laravel. MySql. AWS (S3, Elastic Encoder, CDN, EC2)",
        "description": "This web application provides ondimand videos webinars",
        "link": null,
        "github": null
      },{
        "title": "Online Audio Training (OAT)",
        "tech": "Laravel. Html. CSS. Bootstrap. AWS (EC2)",
        "description": "This web application is used to conduct online webinars for doctors over goto meeting.",
        "link": null,
        "github": null
      },{
        "title": "Multivendor ecommerce website",
        "tech": "Codeigniter. Angular Js. HTML. CSS. Bootstrap. Jquery",
        "description": "Fabolic was an multivendor ecommerce platform built on codeigniter (php frameword) and Angular Js. This statup is not working currently.",
        "link": null,
        "github": null
      },
    ]  
  },]);

  App.controller("EducationCtrl", ["$scope", function ($scope) {
    $scope.records = [
      { 
        "college": "SRMS College of Engg. & Tech, Bareilly",
        "degree": "Bachelor’s Degree in Computer Science",
        "dates": "Aug, 2013 to May, 2017"
      },{ 
        "college": "Sarswati vidhya maidir inter college, Gola",
        "degree": "Intermediate with Math",
        "dates": "2010 to 2012"
      },{ 
        "college": "Sarswati vidhya maidir inter college, Gola",
        "degree": "High School with Computer",
        "dates": "2009 to 2010"
      },
    ]  
  },]);

  App.controller("HomeCtrl", ["$scope", function ($scope) {

    $scope.calcDate = (date1,date2) => {
      var diff = Math.floor(date1.getTime() - date2.getTime());
      var day = 1000 * 60 * 60 * 24;
      var days = Math.floor(diff/day);
      var years = Math.floor(days/365);
      var months = Math.ceil((days%365)/30);
      var message = years + " yr "
      message += months + " mos"
      return message
    }
    var today = new Date()
    var dob = new Date(1996,01,07)

    var age = $scope.calcDate(today,dob)

    $scope.record = {
      "name": "Harendra Kumar Kanojiya",
      "heading": "Backend Developer (Golang + PHP)",
      "image" : "/assets/images/harendra.jpeg",
      "about_l1": "Hi I'm Harendra Kumar Kanojiya. Currently I am FSD (Full-stack developer) and I have expertise with Angular ,PHP, Node JS, Laravel, Codeigniter and front end. Done few live projects and portfolio work in above.",
      "about_l2": "Lover of innovation and everything related to generate new knowledge. Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.",
      "dob": "7th Jan, 1996 ("+age+")",
      "address": "Vill. & Post. - Mamari, Dist. - Lakhimpur Kheri, U.P., 262802",
      "languages": "Hindi, English",
      "resume": "https://drive.google.com/file/d/1Isu5Xpxi8zylOV5ywGmikFWMNaA9IBXn/view",
      "phone": "+91-9559058446",
      "email": "harendraverma21@gmail.com",
      "github": "https://github.com/harendra21/",
      "linkedin": "https://www.linkedin.com/in/harendra21/",
      "twitter": "https://twitter.com/harendraverma2",
      "facebook": "https://www.facebook.com/harendraverma21/"
    }
  },]);



})();
