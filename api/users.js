
const users = [
  {
      role: "students",
      data: [
        {
          name: "Jane Smith",
          class: "10th Grade",
          email: "jane.student1@example.com",
          profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
          name: "Emily White",
          class: "11th Grade",
          email: "emily.student2@example.com",
          profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        {
          name: "Olivia Miller",
          class: "12th Grade",
          email: "olivia.student3@example.com",
          profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
        },
        {
          name: "Sophia Wilson",
          class: "10th Grade",
          email: "sophia.student4@example.com",
          profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
        },
        {
          name: "Isabella Moore",
          class: "9th Grade",
          email: "isabella.student5@example.com",
          profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
        },
        {
          name: "Mia Taylor",
          class: "11th Grade",
          email: "mia.student6@example.com",
          profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
        },
        {
          name: "Charlotte Anderson",
          class: "12th Grade",
          email: "charlotte.student7@example.com",
          profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
        },
        {
          name: "Amelia Thomas",
          class: "10th Grade",
          email: "amelia.student8@example.com",
          profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
        },
        {
          name: "Harper Jackson",
          class: "9th Grade",
          email: "harper.student9@example.com",
          profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
        },
        {
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
          name: "John Doe",
          qualification: "M.Sc. Physics",
          experience: "5 years",
          email: "john.mentor1@example.com",
          profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          name: "Robert Brown",
          qualification: "PhD Mathematics",
          experience: "8 years",
          email: "robert.mentor2@example.com",
          profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        {
          name: "William Harris",
          qualification: "M.A. English",
          experience: "6 years",
          email: "william.mentor3@example.com",
          profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        {
          name: "James Johnson",
          qualification: "M.Tech Computer Science",
          experience: "4 years",
          email: "james.mentor4@example.com",
          profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        {
          name: "David Lee",
          qualification: "MBA",
          experience: "7 years",
          email: "david.mentor5@example.com",
          profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
        },
        {
          name: "Michael Scott",
          qualification: "B.Ed.",
          experience: "10 years",
          email: "michael.mentor6@example.com",
          profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
        },
        {
          name: "Richard Clark",
          qualification: "M.Sc. Chemistry",
          experience: "3 years",
          email: "richard.mentor7@example.com",
          profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
        },
        {
          name: "Thomas Lewis",
          qualification: "M.Com",
          experience: "6 years",
          email: "thomas.mentor8@example.com",
          profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
        },
        {
          name: "Daniel Walker",
          qualification: "M.A. History",
          experience: "5 years",
          email: "daniel.mentor9@example.com",
          profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
        },
        {
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
  res.status(200).json(users);
}






