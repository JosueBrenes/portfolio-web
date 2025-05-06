const techCategories = [
  {
    title: "Frontend",
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "TailwindCSS", "SASS", "jQuery"],
  },
  {
    title: "Backend",
    technologies: ["Node.js", "Python", "PHP", "Java", "Rust", ".NET", "Spring"],
  },
  {
    title: "Frameworks",
    technologies: ["React", "Next.js", "Angular", "Web3.js"],
  },
  {
    title: "Databases",
    technologies: ["MongoDB", "MySQL", "Microsoft SQL Server", "Firebase"],
  },
  {
    title: "Cloud & Deployment",
    technologies: ["Vercel", "Netlify", "Firebase", "Oracle"],
  },
  {
    title: "Development Tools",
    technologies: ["Git", "GitHub", "NPM", "Figma", "VS Code"],
  },
]

export default function TechStack() {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="border border-white/10 rounded-lg p-4 md:p-6 bg-black/20">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 md:px-3 md:py-1 bg-gray-800 text-gray-200 text-xs md:text-sm rounded-md"
                  >
                    {tech}
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
