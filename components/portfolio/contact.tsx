"use client";

import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "developer.nikita1011@gmail.com",
    href: "mailto:developer.nikita1011@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9604171092",
    href: "tel:+919604171092",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Nikita-Jadhav-dev",
    username: "@Nikita-Jadhav-dev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/nikita-jadhav020882264",
    username: "/in/nikita-jadhav020882264",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {"I'm currently looking for new opportunities and my inbox is always open. Whether you have a question, want to discuss a project, or just want to say hi, I'll get back to you as soon as possible!"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Contact Information
            </h3>
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <h4 className="text-sm text-muted-foreground mb-4">
                Connect with me
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Message Card */}
          <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {"Let's Work Together"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {"I'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology."}
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Open for</p>
                  <p className="text-foreground font-medium">
                    Full-time Positions, Internships, Freelance Projects
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">
                    Expertise in
                  </p>
                  <p className="text-foreground font-medium">
                    Java Backend, Spring Boot, Microservices, REST APIs
                  </p>
                </div>
              </div>

              <a
                href="mailto:developer.nikita1011@gmail.com"
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <Send className="w-5 h-5" />
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
