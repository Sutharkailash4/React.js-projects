let Section = () => {

  let arr = [
  {
    profile_img: "https://picsum.photos/200?1",
    userName: "User 1",
    Profesion: "Frontend Developer",
    Work: "React Apps",
    skills: ["HTML", "CSS", "JS", "+2"],
    Description: "User 1 is a frontend developer.",
    isAvaibale: true,
    Charge: "$40/hr"
  },
  {
    profile_img: "https://picsum.photos/200?2",
    userName: "User 2",
    Profesion: "Backend Developer",
    Work: "APIs",
    skills: ["Node", "Express", "MongoDB", "+1"],
    Description: "User 2 is a backend developer.",
    isAvaibale: false,
    Charge: "$45/hr"
  },
  {
    profile_img: "https://picsum.photos/200?3",
    userName: "User 3",
    Profesion: "UI Designer",
    Work: "Design Systems",
    skills: ["Figma", "UI", "UX", "+3"],
    Description: "User 3 is a UI designer.",
    isAvaibale: true,
    Charge: "$35/hr"
  },
  {
    profile_img: "https://picsum.photos/200?4",
    userName: "User 4",
    Profesion: "Full Stack Dev",
    Work: "Web Apps",
    skills: ["React", "Node", "SQL", "+2"],
    Description: "User 4 is a full stack developer.",
    isAvaibale: true,
    Charge: "$60/hr"
  },
  {
    profile_img: "https://picsum.photos/200?5",
    userName: "User 5",
    Profesion: "Mobile Dev",
    Work: "Android Apps",
    skills: ["Java", "Kotlin", "UI", "+1"],
    Description: "User 5 builds mobile apps.",
    isAvaibale: false,
    Charge: "$50/hr"
  },
  {
    profile_img: "https://picsum.photos/200?6",
    userName: "User 6",
    Profesion: "Game Dev",
    Work: "2D Games",
    skills: ["Unity", "C#", "Design", "+2"],
    Description: "User 6 is a game developer.",
    isAvaibale: true,
    Charge: "$55/hr"
  },
  {
    profile_img: "https://picsum.photos/200?7",
    userName: "User 7",
    Profesion: "Data Analyst",
    Work: "Reports",
    skills: ["Excel", "SQL", "Python", "+1"],
    Description: "User 7 analyzes data.",
    isAvaibale: true,
    Charge: "$48/hr"
  },
  {
    profile_img: "https://picsum.photos/200?8",
    userName: "User 8",
    Profesion: "DevOps Engineer",
    Work: "CI/CD",
    skills: ["Docker", "AWS", "Linux", "+2"],
    Description: "User 8 handles deployments.",
    isAvaibale: false,
    Charge: "$70/hr"
  },
  {
    profile_img: "https://picsum.photos/200?9",
    userName: "User 9",
    Profesion: "Tester",
    Work: "Automation",
    skills: ["Selenium", "JS", "QA", "+1"],
    Description: "User 9 tests applications.",
    isAvaibale: true,
    Charge: "$30/hr"
  },
  {
    profile_img: "https://picsum.photos/200?10",
    userName: "User 10",
    Profesion: "Content Writer",
    Work: "Blogs",
    skills: ["SEO", "Writing", "Research", "+2"],
    Description: "User 10 writes content.",
    isAvaibale: true,
    Charge: "$25/hr"
  },
  {
    profile_img: "https://picsum.photos/200?11",
    userName: "User 11",
    Profesion: "SEO Expert",
    Work: "Rankings",
    skills: ["SEO", "Analytics", "Ads", "+1"],
    Description: "User 11 improves SEO.",
    isAvaibale: false,
    Charge: "$42/hr"
  },
  {
    profile_img: "https://picsum.photos/200?12",
    userName: "User 12",
    Profesion: "Project Manager",
    Work: "Planning",
    skills: ["Agile", "Scrum", "Tools", "+2"],
    Description: "User 12 manages projects.",
    isAvaibale: true,
    Charge: "$65/hr"
  }
];


    return (
        <section>
            <div className="section_heading">
                <h3>PROFILES (27)</h3>
            </div>
            <div className="section_main_box">
                {
                    arr.map(function (elem) {
                        return (
                            <div className="section_inner_box">
                                <button id="avilable">{elem.isAvaibale?"Avialbe":"Not"}</button>
                                <div className="img_box">
                                    <img src={elem.profile_img} alt="" />
                                </div>
                                <div className="name_and_profesion">
                                    <h2>{elem.userName}</h2>
                                    <p>{elem.Profesion}</p>
                                    <h5>{elem.work}</h5>
                                </div>
                                <div className="skills_box">
                                    <button>{elem.skills[0]}</button>
                                    <button>{elem.skills[1]}</button>
                                    <button>{elem.skills[2]}</button>
                                    <button id="blue_btn">{elem.skills[3]}</button>
                                </div>
                                <div className="description_box">
                                    <p>
                                        {elem.Description}
                                    </p>
                                </div>
                                <button className="view_btn">View Profile</button>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Section;