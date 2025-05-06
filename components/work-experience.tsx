import { Calendar } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "ROLOSA HyJ S.A.",
    period: "May 2024 - October 2024",
    description:
      "Specialized in Website Maintenance and Optimization, Ensuring User Experience across Multiple Devices and Browsers. Responsible for identifying, investigating, and fixing bugs in the code and in the operation of the company's applications and systems.",
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Full Stack Web Developer",
    company: "Only Dust",
    period: "September 2024 - Present",
    description:
      "Lead the resolution of assigned issues related to the development of applications using React and Next.js. Implemented Web3 functionalities, integrating decentralized features that enhance the functionality of applications. Serve as a maintainer and founder of two key projects, demonstrating leadership in project management and technical innovation.",
    skills: ["React", "Next.js", "Node.js", "Rust", "TypeScript", "Web3"],
  },
]

export default function WorkExperience() {
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-white/10 rounded-lg p-6 bg-black/20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="mb-4 text-gray-300">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-gray-800 text-gray-200 text-sm rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
