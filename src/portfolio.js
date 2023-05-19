/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  image: require("./assets/images/profileImage.jfif"),
  username: "Faizan Safdar Ali",
  title: "Hi all, I'm Faizan",
  subTitle: emoji(
    "A passionate Researcher and a Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Java / Python / JavaScript / TypeScript / Reactjs / Nodejs / React Native / Blockchain / Ethereum / Smart Contracts / Web3 and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1l6gaI2quKuLSpw9-6HT6oiSj9nhimliN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/faiziali98",
  linkedin: "https://www.linkedin.com/in/faiziali436/",
  gmail: "faiziali436@gmail.com",
  facebook: "https://www.facebook.com/faizi.ali.98",
  medium: "https://medium.com/@faizan-ali",
  stackoverflow: "https://stackoverflow.com/users/17276328/faizan-safdar-ali",
  googlescholar: "https://scholar.google.com.tr/citations?user=vWkIM_cAAAAJ&hl=en",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK AND CREATE NEXT BIG SOFTWARE",
  skills: [
    emoji("⚡ Develope Scalable Backend Development Using SOLID Principles"),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Koc University",
      logo: require("./assets/images/kocLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "February 2019 - September 2020",
      desc: "Participated in the research of 'Blockchain Applications in Energy Trading' and published 6 papers.",
      descBullets: [
        "Award: IEEE Computer Turkey 2nd Best Thesis, KUTEM and UAE grant, Mentor Senior Year Project",
        "Teaching Assistant: Computer Networks, Software Engineering, Senior Year Project"
      ]
    },
    {
      schoolName: "Lahore University Of Management Sciences",
      logo: require("./assets/images/lumsLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2013 - July 2017",
      desc: "Got NOP Scholarship for 4 years",
      descBullets: [
        "Relevant Courses: Data Mining, Machine Learning, Problem Solving and Algorithms, Artificial Intelligence",
        "Teaching Assistant: Programming in C++, Assembly Language, Digital Logic Circuits"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer",
      company: "Amazon",
      companylogo: require("./assets/images/amazonLogo.png"),
      date: "August 2022 – Present",
      desc: "Working on better and consistent discover-ability of products across pages for millions of users.",
      descBullets: [
        "Tech Stack: Python, Java, TypeScript, AWS.",
        "Designed and implemented cache to reduce million of requests to a few hundred.",
        "Developed widgets to be used across multiple Amazon pages.",
        "Invented warm-build for Java to reduce testing time from 8 minutes to 1-2 minutes."
      ]
    },
    {
      role: "Backend Engineer II",
      company: "Careem (Uber)",
      companylogo: require("./assets/images/careemLogo.png"),
      date: "May 2022 – August 2018",
      desc: "Worked at Careem pay division; an online payment method for more than 10 million users.",
      descBullets: [
        "Tech Stack: Python, Java Spring Boot, NodeJS, AWS.",
        "Developed dynamic configuration for Careem pay One-click checkout service using Java Spring Boot.",
        "Designed and implemented best possible data layer for Careem pay merchant orders using Cassandra DB.",
        "Developed automation using Python for migration from SQL.",
        "Designed solution to scale with on-soiling cloud infrastructure available and migration from AWS."
      ]
    },
    {
      role: "Full Stack Engineer - Tech Lead",
      company: "Educative",
      companylogo: require("./assets/images/educativeLogo.webp"),
      date: "Oct 2020 – May 2022",
      desc: "Educative is an online learning platform used by more than 1 million users.",
      descBullets: [
        "Tech Stack: Python, ReactJs, NodeJS, Cloudflare, Docker and GCP.",
        "Designed, implemented and tested marketing tools and Educative free trails.",
        "Improved site-wide search, used Cloudflare to reduce calls to Google cluster by 90% and price upto 20%.",
        "Designed, developed and tested ’Copy Work’ to create course copies. Resulted in 40+ (growing) new courses.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Best Thesis Award",
      subtitle:
        "Awarded 2nd best thesis award by IEEE Computer.",
      image: require("./assets/images/logo-ieee-computer-society.png"),
      imageAlt: "IEEE Computer",
      footerLink: [
        {
          name: "Award Announcement",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6855833192117624832/"
        }
      ]
    },
    {
      title: "TUBITAK Research Award",
      subtitle:
        "My research was granted TÜBİTAK 2247-A National Leader Researchers Project award.",
      image: require("./assets/images/tubitakLogo.png"),
      imageAlt: "TUBITAK  Logo",
      footerLink: [
        {
          name: "Award Announcement",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6936323885172674560?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6936323885172674560%29"
        }
      ]
    },

    {
      title: "Applied Data Science with Python (Specialization)",
      subtitle: "Completed Certifcation from Coursera and course if offered by University of Michigan",
      image: require("./assets/images/uMichLogo.jfif"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/beca69ac4456914d2371ed04cdbbc4fc"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+34-695177031",
  email_address: "faiziali436@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
