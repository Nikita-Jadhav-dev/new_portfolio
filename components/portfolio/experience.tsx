"use client";

import { useState } from "react";
import { Briefcase, Calendar, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    title: "Android Developer Intern",
    company: "Mountreach Solution Private Limited",
    collaboration: "Innovative Startup Internship",
    period: "Jan 2024 – May 2024",
    duration: "6 months",
    description: [
      "I completed a 6-month Android Development internship where I gained hands-on experience in building and maintaining mobile applications using Java/Kotlin and Android Studio. During this period, I worked on developing user-friendly interfaces, implementing core Android components such as Activities, Fragments, and RecyclerView, and integrating REST APIs and Firebase services for real-time data handling and authentication. I was also involved in debugging, testing, and optimizing application performance to ensure smooth user experience.",
    ],
    technologies: [
      "Java",
      "XML",
      "Android Studio",
      "REST API",
      "Apache Tomcat",
      "MySQL",
      "Git",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Ardcore Management",
    collaboration: "Paid Internship",
    period: "Jan 2025 – March 2025",
    duration: "12 weeks",
    description: [
      "Developed responsive web interfaces using React.js and Tailwind CSS.",
      "Collaborated with backend team to integrate REST APIs and optimize performance.",
      "Participated in code reviews and followed agile development practices.",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "REST API",
      "Git",
    ],
  },
  {
    title: "Data Analytics Trainee",
    company: "Deloitee virtual intership training",
    collaboration: "Training Program",
    period: "May 2025 – July 2025",
    duration: "6 Weeks",
    description: [
      "I completed a 6-Weeks Data Analysis internship where I gained practical experience in collecting, cleaning, and analyzing data to derive meaningful insights. During this internship, I worked with tools like Python, Excel, and SQL to handle large datasets, perform data preprocessing, and conduct exploratory data analysis (EDA). I created visualizations using libraries such as Matplotlib and Seaborn (or tools like Power BI/Tableau) to present trends and patterns in a clear and actionable way",
    ],
    technologies: [
      "Data Cleaning",
      "Python",
      "PowerBI",
      "Data Visualization",
      "NumPY,Pandas,Matplotlib,Seaborn",
    ],
  },
];

const achievements = [
  {
    title: "Front-End Internship Selection",
    description:
      "Cracked a paid Front-End Internship at Ardcore Management – selected based on skills, performance, and project assessment.",
  },
  {
    title: "College level Smart India Hackathon - Particpation",
    description:
      'developed an innovative solution under the theme "Campus Urbanization".',
  },
  {
    title: "Solution Challenge 2025 - GDG OnCampus Pune",
    description:
      'developed an innovative solution under the theme "GDG Campus Urbanization".',
  },
];

const certifications = [
  "Hackthon Participation - Unstop",
  "Operating Systems - Unstop",
  "Data Analytics - Deloitee Forage",
  "Spring Boot - simpleLearn",
  "Java Programming - Udemy",
  "REST API Development - LinkedIn Learning",
  "Docker Fundamentals - Udemy",
  "Git & GitHub - freeCodeCamp",
];

export function Experience() {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [showAllExps, setShowAllExps] = useState(false);
  const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 4);
  const displayedExps = showAllExps ? experiences : experiences.slice(0, 1);

  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Professional Experience
            </h3>

            <div className="space-y-6">
              {displayedExps.map((exp) => (
                <div
                  key={exp.title}
                  className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background" />

                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">
                          {exp.collaboration}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* See More Experience Button */}
            {experiences.length > 1 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowAllExps(!showAllExps)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-transparent border border-border/50 text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 text-xs group"
                >
                  <span className="font-medium">
                    {showAllExps ? "Show Less" : `See More (${experiences.length - 1})`}
                  </span>
                  {showAllExps ? (
                    <ChevronUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
                  ) : (
                    <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                Certifications
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {displayedCerts.map((cert) => (
                  <div
                    key={cert}
                    className="p-4 rounded-lg bg-secondary/50 border border-border text-center hover:border-primary/50 transition-all duration-300"
                  >
                    <p className="text-sm font-medium text-foreground">{cert}</p>
                  </div>
                ))}
              </div>

              {/* See More Certifications Button */}
              {certifications.length > 4 && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setShowAllCerts(!showAllCerts)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-transparent border border-border/50 text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 text-xs group"
                  >
                    <span className="font-medium">
                      {showAllCerts ? "Show Less" : `See More (${certifications.length - 4})`}
                    </span>
                    {showAllCerts ? (
                      <ChevronUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
                    ) : (
                      <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-primary" />
                Achievements
              </h3>

              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
