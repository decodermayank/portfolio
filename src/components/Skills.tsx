"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const skillsCategories = [
  {
    name: "Frontend",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "AJAX", "Responsive Design", "UI Development"]
  },
  {
    name: "Backend & Database",
    skills: ["PHP", "MySQL", "PDO", "Authentication Systems", "Admin Dashboard Development"]
  },
  {
    name: "Languages",
    skills: ["C", "Java", "JavaScript", "PHP", "Python (Beginner)"]
  },
  {
    name: "Tools & Hardware",
    skills: ["Git", "GitHub", "Arduino IDE", "Arduino Uno", "HC-SR04", "SG90 Servo", "IR Sensors"]
  },
  {
    name: "Media & Design",
    skills: ["Canva", "Adobe Photoshop", "CorelDraw", "Video Editing (Basic)", "Photography", "Videography", "Content Creation"]
  }
];

export default function Skills() {
  const sectionRef = useIntersectionObserver();

  return (
    <section id="skills" ref={sectionRef} className="py-section bg-surface/30">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="reveal text-4xl md:text-5xl font-black mb-16">Skills.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillsCategories.map((category, i) => (
            <div 
              key={category.name} 
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="text-sm font-mono text-gold uppercase tracking-[0.2em] mb-6 pb-2 border-b border-gold/10">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-surface border border-border text-sm text-text-muted rounded-sm transition-all duration-300 hover:border-gold/50 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
