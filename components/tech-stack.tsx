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
    <section className="py-20">
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="border border-white/10 rounded-lg p-6 bg-black/20">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-200 text-sm rounded-md">
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
