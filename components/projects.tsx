import { Github } from "lucide-react"
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
    <section className="py-20">
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-white/10 rounded-lg p-6 bg-black/20">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-6 text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-200 text-sm rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-white hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
