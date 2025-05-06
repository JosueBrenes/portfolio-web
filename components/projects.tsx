import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "SafeTrust",
    description:
      "A decentralized and secure platform designed to transform the P2P transaction experience, safeguarding deposits and payments between parties. Leveraging advanced blockchain and trustless technologies, SafeTrust addresses key challenges to build trust among users, especially in transactions involving cryptocurrency, providing transparency and security in every peer-to-peer operation.",
    technologies: ["TypeScript", "Blockchain", "Smart Contracts", "P2P"],
    githubUrl: "https://github.com/safetrustcr",
  },
  {
    title: "ByteWorks",
    description:
      "A team dedicated to developing high-quality decentralized applications, ensuring security, transparency, and efficiency in every project. Our mission is to innovate in the blockchain space by building robust and scalable solutions that empower users and businesses. We focus on building decentralized applications (dApps), creating efficient smart contracts, and integrating blockchain technology into real-world use cases.",
    technologies: ["Rust", "TypeScript", "Blockchain", "Smart Contracts", "P2P", "Web3"],
    githubUrl: "https://github.com/byteworkscr",
  },
]

export default function Projects() {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-white/10 rounded-lg p-4 md:p-6 bg-black/20">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{project.title}</h3>
              <p className="mb-4 md:mb-6 text-gray-300 text-sm md:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 md:px-3 md:py-1 bg-gray-800 text-gray-200 text-xs md:text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-white hover:text-primary transition-colors text-sm md:text-base group"
              >
                <Github className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                View on GitHub
                <ExternalLink className="h-3 w-3 md:h-4 md:w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
