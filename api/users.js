export const users = [
  {
    role: "students",
    data: [
      {
        id: 1,
        name: "Jane Smith",
        class: "10th Grade",
        email: "jane.student1@example.com",
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        id: 2,
        name: "Emily White",
        class: "11th Grade",
        email: "emily.student2@example.com",
        profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        id: 3,
        name: "Olivia Miller",
        class: "12th Grade",
        email: "olivia.student3@example.com",
        profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        id: 4,
        name: "Sophia Wilson",
        class: "10th Grade",
        email: "sophia.student4@example.com",
        profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      {
        id: 5,
        name: "Isabella Moore",
        class: "9th Grade",
        email: "isabella.student5@example.com",
        profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      {
        id: 6,
        name: "Mia Taylor",
        class: "11th Grade",
        email: "mia.student6@example.com",
        profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        id: 7,
        name: "Charlotte Anderson",
        class: "12th Grade",
        email: "charlotte.student7@example.com",
        profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
      },
      {
        id: 8,
        name: "Amelia Thomas",
        class: "10th Grade",
        email: "amelia.student8@example.com",
        profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
      },
      {
        id: 9,
        name: "Harper Jackson",
        class: "9th Grade",
        email: "harper.student9@example.com",
        profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
      },
      {
        id: 10,
        name: "Evelyn Martin",
        class: "11th Grade",
        email: "evelyn.student10@example.com",
        profilePic: "https://randomuser.me/api/portraits/women/20.jpg",
      },
    ],
  },
  {
    role: "mentors",
    data: [
      {
        id: 11,
        name: "John Doe",
        qualification: "M.Sc. Physics",
        experience: "5 years",
        email: "john.mentor1@example.com",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: 12,
        name: "Robert Brown",
        qualification: "PhD Mathematics",
        experience: "8 years",
        email: "robert.mentor2@example.com",
        profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        id: 13,
        name: "William Harris",
        qualification: "M.A. English",
        experience: "6 years",
        email: "william.mentor3@example.com",
        profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        id: 14,
        name: "James Johnson",
        qualification: "M.Tech Computer Science",
        experience: "4 years",
        email: "james.mentor4@example.com",
        profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        id: 15,
        name: "David Lee",
        qualification: "MBA",
        experience: "7 years",
        email: "david.mentor5@example.com",
        profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      {
        id: 16,
        name: "Michael Scott",
        qualification: "B.Ed.",
        experience: "10 years",
        email: "michael.mentor6@example.com",
        profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
      },
      {
        id: 17,
        name: "Richard Clark",
        qualification: "M.Sc. Chemistry",
        experience: "3 years",
        email: "richard.mentor7@example.com",
        profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
      },
      {
        id: 18,
        name: "Thomas Lewis",
        qualification: "M.Com",
        experience: "6 years",
        email: "thomas.mentor8@example.com",
        profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
      },
      {
        id: 19,
        name: "Daniel Walker",
        qualification: "M.A. History",
        experience: "5 years",
        email: "daniel.mentor9@example.com",
        profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
      },
      {
        id: 20,
        name: "Steven Hall",
        qualification: "M.Sc. Biology",
        experience: "9 years",
        email: "steven.mentor10@example.com",
        profilePic: "https://randomuser.me/api/portraits/men/19.jpg",
      },
    ],
  },
];


export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }


  res.status(200).json(users);
}






