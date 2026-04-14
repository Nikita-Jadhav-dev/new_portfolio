"use client";

import { useState } from "react";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    name: "Backend & Frameworks",
    skills: [
      { name: "Spring Boot", level: 90 },
      { name: "Spring MVC", level: 85 },
      { name: "Spring Security", level: 80 },
      { name: "Spring Data JPA", level: 85 },
      { name: "Hibernate", level: 85 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    name: "Microservices & DevOps",
    skills: [
      { name: "Microservices", level: 80 },
      { name: "Apache Kafka", level: 60 },
      { name: "Docker", level: 70 },
      { name: "Docker Compose", level: 65 },
      { name: "Zipkin", level: 50 },

    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "SQL Server", level: 75 },
      { name: "Redis Cache", level: 65 },
    ],
  },
  {
    name: "Testing & Quality",
    skills: [
      { name: "JUnit 5", level: 80 },
      { name: "Mockito", level: 75 },
      { name: "Swagger/OpenAPI", level: 85 },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "IntelliJ IDEA", level: 90 },
      { name: "Postman", level: 90 },
      { name: "VS Code", level: 85 },
      { name: "Docker", level: 60 },
    ],
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Technical Skills
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories[activeCategory].skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* All Skills Overview */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Complete Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Java",
              "Spring Boot",
              "Spring MVC",
              "Spring Security",
              "Spring Data JPA",
              "Hibernate",
              "REST API",
              "Microservices",
              "Apache Kafka",
              "Docker",
              "PostgreSQL",
              "MySQL",
              "SQL Server",
              "JWT Auth",
              "JUnit 5",
              "Mockito",
              "Zipkin",
              "Micrometer",
              "Swagger/OpenAPI",
              "Git",
              "GitHub",
              "Postman",
              "IntelliJ IDEA",
              "AOT",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
