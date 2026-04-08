const SKILLS = [
  { type: "devicon", className: "devicons devicons devicons-html5", label: "HTML5" },
  { type: "devicon", className: "devicons devicons-css3", label: "CSS" },
  { type: "devicon", className: "devicons devicons-javascript_badge", label: "JavaScript" },
  { type: "devicon", className: "devicons devicon-typescript-plain", label: "TypeScript" },
  { type: "devicon", className: "devicons devicons-sass", label: "Sass" },
  { type: "devicon", className: "devicons devicons-python", label: "Python" },
  { type: "devicon", className: "devicons devicon-cplusplus-plain", label: "C++" },
  { type: "devicon", className: "devicons devicons devicons-react", label: "React" },
  { type: "devicon", className: "devicons devicons-swift", label: "Swift" },
  { type: "devicon", className: "devicons devicons-git", label: "Git" },
  {
    type: "material",
    className: "material-icons",
    materialText: "settings_ethernet",
    label: "REST APIs",
  },
  { type: "devicon", className: "devicons devicon-mysql-plain", label: "SQL" },
  { type: "devicon", className: "devicons devicon-postgresql-plain", label: "PostgreSQL" },
  { type: "devicon", className: "devicons devicon-flask-original", label: "Flask" },
  {
    type: "devicon",
    className: "devicons devicon-amazonwebservices-original",
    label: "AWS",
  },
  { type: "devicon", className: "devicons devicon-mongodb-plain", label: "MongoDB" },
];

export default function Skills() {
  return (
    <section className="skills">
      <div className="wrapper">
        <h2>
          <span>Skills</span>
        </h2>
        <ul className="skills-container">
          {SKILLS.map((skill) => (
            <li className="skills-title" key={skill.label}>
              {skill.type === "material" ? (
                <span aria-hidden="true" className={skill.className}>
                  {skill.materialText}
                </span>
              ) : (
                <span aria-hidden="true" className={skill.className} title={skill.label} />
              )}
              <p>{skill.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
