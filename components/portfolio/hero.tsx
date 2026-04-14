"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";

const roles = [
  "Java Full Stack Developer",
  "Spring Boot Engineer",
  "Microservices Architect",
  "Backend Developer",
  "Cloud Enthusiast",
  "Scala Developer Enthusiast"
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content - Left Side */}
          <div className="space-y-6 flex-1 text-center lg:text-left">
            {/* Greeting */}
            <p className="text-primary font-mono text-sm md:text-base tracking-wider animate-fade-in">
              {"Hello Connections"}
            </p>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
              <span className="text-balance">{"I'm "}</span>
              <span className="text-primary">Nikita Jadhav</span>
            </h1>

            {/* Dynamic Role */}
            <div className="h-12 md:h-16">
              <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0">
              I build scalable, high-performance backend systems with{" "}
              <span className="text-foreground font-medium">Spring Boot</span>,{" "}
              <span className="text-foreground font-medium">Microservices</span>, and{" "}
              <span className="text-foreground font-medium">Cloud technologies</span>.
              Currently pursuing B.Tech in Computer Science with a CGPA of 9.24/10.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground justify-center lg:justify-start">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Pune, Maharashtra, India</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Nikita-Jadhav-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary transition-all duration-300"
              >
                <Github className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikita-jadhav-020882264/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="mailto:developer.rohan06@gmail.com"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Photo - Right Side */}
          <div className="relative flex-shrink-0 order-first lg:order-last">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-2xl scale-110" />

            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-110 animate-pulse" />

            {/* Main photo container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 
                rounded-full overflow-hidden 
                border-4 border-primary/50 
                shadow-2xl shadow-primary/20">
                <Image
                  src="/images/profile.jpeg"
                  alt="Nikita Jadhav"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

            </div>

            {/* Floating accent dots */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/60 blur-sm" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/40 blur-sm" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
