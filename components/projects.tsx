import { Github, ExternalLink, BookOpen, Monitor } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "TrustBridge",
    description:
      "TrustBridge is a protocol designed to empower individuals to request and offer loans directly through smart escrow contracts. It eliminates intermediaries and introduces automated trust mechanisms for safe, permissionless lending.",
    technologies: [
      "Rust",
      "TypeScript",
      "Blockchain",
      "Smart Contracts",
      "P2P",
      "Web3",
    ],
    links: [
      {
        label: "View on GitHub",
        url: "https://github.com/trustbridgecr",
        icon: Github,
      },
      {
        label: "Documentation",
        url: "https://trustbridge.gitbook.io/trustbridge",
        icon: BookOpen,
      },
      {
        label: "Visit Links",
        url: "https://trustbridge-links.vercel.app/",
        icon: Monitor,
      },
    ],
  },
  {
    title: "SafeTrust",
    description:
      "A decentralized and secure platform designed to transform the P2P transaction experience, safeguarding deposits and payments between parties. Leveraging advanced blockchain and trustless technologies, SafeTrust addresses key challenges to build trust among users, especially in transactions involving cryptocurrency, providing transparency and security in every peer-to-peer operation.",
    period: "Oct 2024 - April 2025",
    technologies: ["TypeScript", "Blockchain", "Smart Contracts", "P2P"],
    links: [
      {
        label: "View on GitHub",
        url: "https://github.com/safetrustcr",
        icon: Github,
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg p-4 md:p-6 bg-black/20"
            >
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <h3 className="text-xl md:text-2xl font-bold">
                  {project.title}
                </h3>
                {project.period && (
                  <span className="text-xs md:text-sm text-muted-foreground bg-gray-800 px-2 py-1 rounded-md">
                    {project.period}
                  </span>
                )}
              </div>
              <p className="mb-4 md:mb-6 text-gray-300 text-sm md:text-base">
                {project.description}
              </p>
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
              <div className="flex flex-col space-y-2">
                {project.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-white hover:text-primary transition-colors text-sm md:text-base group w-fit"
                  >
                    <link.icon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    {link.label}
                    <ExternalLink className="h-3 w-3 md:h-4 md:w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
