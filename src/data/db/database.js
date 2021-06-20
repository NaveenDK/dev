import Mock from "../mock";

const database = {
  information: {
    name: 'Naveen',
    aboutContent: "I am a Full Stack Developer with an emphasis on ReactJs, Node and PHP .",
    age: 26,
    phone: '',
    nationality: 'Sri Lankan',
    language: 'English, Sinhalese',
    email: '',
    address: '39 Onehunga Mall Road, Auckland',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      pinterest: '',
      behance: '',
      linkedin: '',
      dribbble: '',
      github: 'https://github.com/naveendk'
    },
    brandImage: '/images/headshot.png',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "ReactJS",
      icon: 'color-pallet',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "NodeJS",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Photoshop",
      value: 65
    }
  ],
  projects: [
    {
      id: 1,
      title: "Social Media App",
      subtitle: "HTML, CSS, JQuery, PHP, AJAX",
      imageUrl: "/images/portfolio-image-temp.jpg",
      largeImageUrl: ["/images/portfolio-image-temp-large.jpg"],
      url: 'https://github.com/NaveenDK/web-social'
    },
    {
      id: 2,
      title: "Shopping Cart - Ecommerce ",
      subtitle: "ReactJS, React Hooks",
      imageUrl: "/images/portfolio-image-temp.jpg",
      largeImageUrl: [
        "/images/portfolio-image-temp-large.jpg",
        "/images/portfolio-image-temp-large.jpg"
      ],
      url: 'https://github.com/NaveenDK/ecommerce-front'
    },
    {
      id: 3,
      title: "Music App ",
      subtitle: "HTML, CSS, PHP, JQuery",
      imageUrl: "/images/portfolio-image-temp.jpg",
      url: 'https://github.com/NaveenDK/musicplayer'
    },
    {
      id: 4,
      title: "Guess the Number Game :)",
      subtitle: "ReactJS",
      imageUrl: "/images/portfolio-image-temp.jpg",
           
      largeImageUrl: ["/images/portfolio-image-temp-large"],
      url: 'https://github.com/NaveenDK/numbergame'
    },
    {
      id: 5,
      title: "TimeLine Widget - wordpress plugin",
      subtitle: "PHP, JS, HTML and CSS",
      imageUrl: "/images/portfolio-image-temp.jpg",
      largeImageUrl: ["/images/portfolio-image-temp-large"],
      Url:'#'
    },
    {
      id: 6,
      title: "Permissions Module",
      subtitle: "NodeJS, ReactJS, MongoDB, DigitalOcean",
      imageUrl: "/images/portfolio-image-temp.jpg",
      largeImageUrl: ["/images/portfolio-image-temp-large"],
      Url:'https://github.com/NaveenDK/permissions-nodebackend'
    },
    {
      id: 7,
      title: "Star Wars Responsive Website",
      subtitle: "HTML, CSS",
      imageUrl: "/images/portfolio-image-temp.jpg",
      largeImageUrl: ["/images/portfolio-image-temp-large"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 Jan - present",
        position: "Web Developer",
        company: "Digital Collab ",
        details: "HTML, CSS, ReactJS, Wordpress, PHP, NodeJS, Jquery and UI Design"
      },
      {
        id: 2,
        year: "2018 April - 2018 December",
        position: "Web Developer",
        company: "Devitise",
        details: "Wordpress, JQuery, HTML and CSS."
      },
      {
        id: 3,
        year: "2016 Jan - 2016 Sept",
        position: "Web Developer (Intern)",
        company: "Jetts Fitness",
        details: "Bootstrap, HTML, CSS & NodeJS"
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2014 - 2017",
        graduation: "Bachelor of Information Sciences (Software Engineering Major) ",
        university: "Massey University",
        details: "Highlights: Web Development (HTML, CSS),  Internet Programming (PHP, Jquery) , Software design patterns (C#), Algorithms & Data Structures (C, C++)"
      }
      
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['020 40807364'],
    emailAddress: ['naveenkolambage@gmail.com'],
    address: "4/39 Onehunga Mall Road, Onehunga Auckland"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/projects").reply(config => {
  const response = database.projects;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});