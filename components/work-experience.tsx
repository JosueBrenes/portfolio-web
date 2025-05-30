import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Maintainer - TrustBridge",
    company: "Only Dust",
    period: "January 2025 - Present",
    description:
      "Lead development and maintenance of decentralized escrow and lending systems. Build and optimize both frontend (Next.js, TypeScript, Tailwind CSS) and backend (Node.js, Firebase) components for enhanced user experience and system reliability.",
    skills: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "Firebase",
      "Smart Contracts",
      "Web3",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "Only Dust",
    period: "September 2024 - Present",
    description:
      "Lead the resolution of assigned issues related to the development of applications using React and Next.js. Implemented Web3 functionalities, integrating decentralized features that enhance the functionality of applications. Serve as a maintainer and founder of two key projects, demonstrating leadership in project management and technical innovation.",
    skills: ["React", "Next.js", "Node.js", "Rust", "TypeScript", "Web3"],
  },
  {
    title: "Full Stack Developer",
    company: "Stellar Development Foundation",
    period: "September 2024 - Present",
    description:
      "Developing solutions to real-world problems through decentralized applications focused on transparency, efficiency, and financial inclusion. Contributing to the Stellar ecosystem by building innovative blockchain-based solutions.",
    skills: ["TypeScript", "Next.js", "Stellar SDK", "Blockchain", "Web3"],
  },
  {
    title: "Full Stack Developer",
    company: "Arce y Vargas",
    period: "September 2024 - Present",
    description:
      "Designed and implemented a comprehensive maintenance management system tailored to the company's operational needs. The system integrates preventive and corrective maintenance tracking, task assignment, and resource management capabilities.",
    skills: ["TypeScript", "Next.js", "Firebase"],
  },
  {
    title: "Full Stack Web Developer",
    company: "ROLOSA HyJ S.A.",
    period: "May 2024 - October 2024",
    description:
      "Specialized in Website Maintenance and Optimization, Ensuring User Experience across Multiple Devices and Browsers. Responsible for identifying, investigating, and fixing bugs in the code and in the operation of the company's applications and systems.",
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
  },
];

export default function WorkExperience() {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">
          Work Experience
        </h2>
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg p-4 md:p-6 bg-black/20"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm md:text-base">{exp.period}</span>
                </div>
              </div>
              <p className="mb-4 text-gray-300 text-sm md:text-base">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 md:px-3 md:py-1 bg-gray-800 text-gray-200 text-xs md:text-sm rounded-md"
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
