import { users } from "./users.js";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  const { id } = req.query;
  const mentorId = parseInt(id);

  const mentors = users.find((u) => u.role === "mentors")?.data;
  const mentor = mentors.find((m) => m.id === mentorId);

  if (!mentor) {
    return res.status(404).json({ error: "Mentor not found" });
  }

  const stats = {
    interactedWithStudents: Math.floor(Math.random() * 100) + 10,
    averageRating: (Math.random() * (5 - 3) + 3).toFixed(1),
    subjectsTaught: {
      Maths: Math.floor(Math.random() * 50),
      Biology: Math.floor(Math.random() * 50),
      Hindi: Math.floor(Math.random() * 50),
      English: Math.floor(Math.random() * 50),
      Physics: Math.floor(Math.random() * 50),
      Chemistry: Math.floor(Math.random() * 50),
    },
  };

  res.status(200).json({
    ...mentor,
    ...stats,
  });
}
