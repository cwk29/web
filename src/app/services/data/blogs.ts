// create a list of data objects that contain blog post information
//  - id: string
//  - title: string
//  - date: string
//  - author: string
//  - description: string
//  - image: string
//  - category: Category
//  - tags: string[]
//  - content: string
//  - comments: Comment[]
//  - related: string[]
export const CATEGORIES = [
  {
    id: "1",
    name: "Software Development",
  },
  {
    id: "2",
    name: "Systems Engineering",
  },
  {
    id: "3",
    name: "Systems Administration",
  },
  {
    id: "4",
    name: "Cyber Security",
  },
  {
    id: "5",
    name: "DevOps",
  },
  {
    id: "6",
    name: "Cloud",
  },
  {
    id: "7",
    name: "Data Science",
  },
  {
    id: "8",
    name: "Artificial Intelligence",
  },
  {
    id: "9",
    name: "Machine Learning",
  },
  {
    id: "10",
    name: "Data Engineering",
  },
  {
    id: "11",
    name: "Data Analytics",
  },
  {
    id: "12",
    name: "Hardware",
  },
  {
    id: "13",
    name: "RF",
  },
  {
    id: "14",
    name: "Networking",
  },
  {
    id: "15",
    name: "IoT",
  },
  {
    id: "16",
    name: "Business Development",
  },
  {
    id: "17",
    name: "Marketing",
  },
  {
    id: "18",
    name: "Event",
  },
];

export const BLOGPOSTS = [
  {
    id: "veteran-insitute-procurement-certification",
    title: "Veteran Institute Procurement Certifiations",
    date: "2021-07-29",
    author: "Daniel Wortman",
    description: "Graduation celebration for VIP GROW",
    image: "assets/images/blog/blog-post-1.png",
    category: "Business Development",
    tags: ["certification"],
    sections: [
      {
        title: "",
        content: [
          "WorTech Corp recently completed the Veteran Institute Procurement (VIP) GROW Program, a comprehensive training and certification program that helps veteran-owned businesses strengthen their ability to win government contracts and do business with both military and civilian agencies. WorTech was also a member of the inagural Veteran Institute Procurement AEROSPACE Program, a program designed to accelerate the success of veteran-owned small businesses in the federal aerospace market.",
          "The first of its kind in the nation, VIP GROW is a 3-day, 27-hour comprehensive certification program designed for veteran-owned small businesses to increase their ability to win government contracts. Facilitated by subject matter experts, VIP GROW participants receive hands-on market-based instruction that helps establish best business practices for Federal government contracting.",
          "\nVIP AEROSPACE is a 27-hour comprehensive certification program designed specifically for SDVOSB and VOSB leaders. Topics are taught by Government and Industry experts and include contracting acquisition, strategic planning, supply chain management, capture management, marketing, operations and program controls, and much more.",
        ],
      },
    ],
    comments: [],
    related: [],
  },
  {
    id: "2017-maryland-technology-invitational",
    title: "Maryland Tech Invitational Overview",
    date: "2017-06-23",
    author: "Daniel Wortman",
    description: "2017 Maryland FIRST Tech Invitational",
    image: "assets/images/blog/blog-post-2.jpg",
    category: "Business Development",
    tags: ["sponsorship", "robotics"],
    sections: [
      {
        title: "",
        content: [
          "In 2017 Maryland FIRST Tech Challenge partner USRA STEM Action Center, Inc. announced the inaugural Maryland Tech Invitational. The FIRST Tech Challenge (FTC) robotics competition for middle and high school students offers the inspiration of a FIRST Robotics Competition, but is generally more affordable and accessible. It's also a great step up for experienced FIRST LEGO League teams. Teams of up to 15 students, with adult leaders and mentors, build a remote-controlled robot using the Android controller and metal parts. Each year's game is different, and teams must strategize, design and build their robots accordingly. At competitions, two-team alliances square off in successive two-and-a-half minute rounds combining autonomous and operator-controlled play. During the season, teams document their progress and the process behind the creation and deployment of their robot, then present their results to judges. Teams can earn awards in areas that include engineering, design excellence, competitive play and sportsmanship. Participants in the FIRST Tech Challenge are eligible for millions of dollars in college scholarships through FIRST.",
        ],
      },
    ],
    comments: [
      {
        id: "2",
        name: "Scott Wecht",
        email: "swecht@wortechcorp.com",
        date: "2017-06-24",
        content: "Awesome event. I'm looking forward to next year!",
      },
    ],
    related: [],
  },
  {
    id: "2018-maryland-technology-invitational",
    title: "Maryland Tech Invitational Overview",
    date: "2018-06-22",
    author: "Daniel Wortman",
    description: "2018 Maryland FIRST Tech Invitational",
    image: "assets/images/blog/blog-post-3.jpg",
    category: "Business Development",
    tags: ["sponsorship", "robotics"],
    sections: [
      {
        title: "",
        content: [
          "WorTech was proud to sponsor, for the 2nd year, the Innovative Sensor Fusion Award at the Maryland Tech Invitational. 2018 featured 31 teams from across the globe and 13 states nationally. The winner of the Innovative Sensor Fusion Award receives grant money to continue their operations in the FIRST Tech Challenge Program. FIRST Tech Challenge Teams played Relic Recovery at the 2nd annual MTI. This year offered a bonus STEM program on the afternoon of Friday June 22. Judged technical awards will be presented while the winning and finalist Alliance will be given prizes to support their continued participation in the FIRST Tech Challenge program.",
        ],
      },
    ],
    comments: [],
    related: ["2"],
  },
  {
    id: "2018-blood-drive",
    title: "Semi Annual Blood Drive",
    date: "2018-09-08",
    author: "Katie Rahn",
    description: "Annual blood drive at WorTech",
    image: "assets/images/blog/blog-post-4.jpeg",
    category: "Event",
    tags: ["community-service"],
    sections: [
      {
        title: "Blood Drive",
        content: [
          "WorTech was proud to sponsor, for the 2nd year, the Innovative Sensor Fusion Award at the Maryland Tech Invitational. 2018 featured 31 teams from across the globe and 13 states nationally. The winner of the Innovative Sensor Fusion Award receives grant money to continue their operations in the FIRST Tech Challenge Program. FIRST Tech Challenge Teams played Relic Recovery at the 2nd annual MTI. This year offered a bonus STEM program on the afternoon of Friday June 22. Judged technical awards will be presented while the winning and finalist Alliance will be given prizes to support their continued participation in the FIRST Tech Challenge program.",
        ],
      },
    ],
    comments: [],
    related: [],
  },
];
