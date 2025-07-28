import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Software Development
  { name: "HTML/CSS", level: 95, category: "software" },
  { name: "JavaScript", level: 90, category: "software" },
  { name: "React", level: 90, category: "software" },
  { name: "TypeScript", level: 85, category: "software" },
  { name: "Node.js", level: 80, category: "software" },
  { name: "Express", level: 75, category: "software" },
  { name: "MongoDB", level: 70, category: "software" },
  { name: "PostgreSQL", level: 65, category: "software" },
  { name: "GraphQL", level: 60, category: "software" },
  { name: "Git/GitHub", level: 90, category: "software" },

  // Security & SOC
  { name: "SIEM (Splunk/QRadar)", level: 90, category: "security" },
  { name: "Threat Hunting", level: 85, category: "security" },
  { name: "Incident Response", level: 90, category: "security" },
  { name: "Penetration Testing", level: 80, category: "security" },
  { name: "Vulnerability Management", level: 85, category: "security" },
  { name: "EDR/XDR", level: 80, category: "security" },
  {
    name: "Security Automation (Python/SOAR)",
    level: 75,
    category: "security",
  },
  {
    name: "Compliance (NIST, ISO 27001, DORA)",
    level: 85,
    category: "security",
  },

  // Cloud & DevOps
  { name: "Docker", level: 75, category: "cloud" },
  { name: "AWS", level: 70, category: "cloud" },
  { name: "CI/CD (GitHub Actions)", level: 75, category: "cloud" },
  { name: "Bash/Python Scripting", level: 80, category: "cloud" },
  { name: "Linux Administration", level: 85, category: "cloud" },
];

const categories = ["all", "software", "security", "cloud"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category === "software"
                ? "Software Development"
                : category === "security"
                ? "Security & SOC"
                : category === "cloud"
                ? "Cloud & DevOps"
                : "All"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
