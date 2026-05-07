export interface TeamMember {
  name: string;
  role: string;
  skill: string;
  image: string;
  yearJoined: string;
}

export const TEAM_DATA = {
  founders: [
    { name: "Sudeep Bajracharya", role: "CEO", skill: "Mobile App Developer", image: "/assets/team/sudeep.jpg", yearJoined: "2022" },
    { name: "Bijay Lama", role: "Co-Founder", skill: "Full Stack Developer", image: "/assets/team/bijay.jpg", yearJoined: "2022" },
    { name: "Sujan Shrestha", role: "Co-Founder", skill: "Full Stack Developer", image: "/assets/team/fallback.jpg", yearJoined: "2022" },
    { name: "Dorje Lama", role: "Co-Founder", skill: "Web Developer", image: "/assets/team/dorje.jpg", yearJoined: "2022" },
    { name: "Pasang Dorje Lama", role: "Co-Founder", skill: "Web Developer", image: "/assets/team/pasang.jpg", yearJoined: "2022" },
    { name: "Sonam Dorje Lama", role: "Manager", skill: "UI/UX, Management", image: "/assets/team/sonam.jpg", yearJoined: "2022" },
  ],
  evolution: [
    { name: "Tshering Netup Lama", role: "PM / QA", skill: "Testing, Management", image: "/assets/team/tshering.jpg", yearJoined: "2023" },
    { name: "Dawa Dicky Lama", role: "QA", skill: "Testing, Documentation", image: "/assets/team/dawa.jpg", yearJoined: "2023" },
    { name: "Kesang Lama", role: "Frontend Developer", skill: "Frontend Development", image: "/assets/team/kesang.jpg", yearJoined: "2025" },
  ],
  interns: [
    { name: "Dawa Dorje Lama", skill: "Backend Developer", image: "/assets/team/fallback.jpg" },
    { name: "Deepak Syangdan", skill: "Frontend Developer", image: "/assets/team/fallback.jpg" },
    { name: "Rajkumar Tamang", skill: "Backend Developer", image: "/assets/team/rajkumar.png" },
    { name: "Neru Maya Tamang", skill: "Frontend Developer", image: "/assets/team/neeru.jpg" },
  ]
};