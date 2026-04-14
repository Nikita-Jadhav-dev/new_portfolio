"use client";

import { GraduationCap, Award, Code2, Server } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech in Computer Science and Engineering - CGPA 9.24/10",
    subtitle: "GHRCEM, Pune | 2024 - 2027",
  },
  {
    icon: Award,
    title: "Diploma",
    description: "Computer Engineering - 89.60%",
    subtitle: "Government Polytechnic, Ambad | 2021 - 2024",
  },
  {
    icon: Code2,
    title: "Focus Area",
    description: "Java Full Stack Development",
    subtitle: "Spring Boot, Microservices, REST APIs",
  },
  {
    icon: Server,
    title: "Specialization",
    description: "Backend & Distributed Systems",
    subtitle: "Kafka, Docker, PostgreSQL, Zipkin",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"I'm a passionate "}
              <span className="text-foreground font-medium">Java Full Stack Developer</span>
              {" with a strong foundation in building robust, scalable backend systems. My journey in software development began with a curiosity for how complex systems work, which led me to specialize in "}
              <span className="text-primary font-medium">Spring Boot</span>
              {" and "}
              <span className="text-primary font-medium">Microservices Architecture</span>.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {"Currently pursuing my B.Tech at GHRCEM Pune, I combine academic excellence with hands-on project experience. I've built production-ready applications including a "}
              <span className="text-foreground font-medium">PayNova-Banking Application</span>
              {" and a "}
              <span className="text-foreground font-medium">AI-Powered Plant-Guard Web Applicaion(Java,Springboot,python)</span>
              {" with event-driven architecture."}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {"My expertise spans the entire backend stack - from RESTful API design to distributed tracing with Zipkin, from message queuing with Apache Kafka to containerization with Docker. I'm committed to writing clean, testable code and implementing best practices in every project."}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="text-3xl font-bold text-primary">9.24</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="text-3xl font-bold text-primary">89.60%</div>
                <div className="text-sm text-muted-foreground">Diploma</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-foreground mt-1">{item.description}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
