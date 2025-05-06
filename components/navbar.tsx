import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, Twitter, Linkedin } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Josué Brenes</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="#experience" className="transition-colors hover:text-primary">
            Experience
          </Link>
          <Link href="#projects" className="transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="#achievements" className="transition-colors hover:text-primary">
            Achievements
          </Link>
          <Link href="#tech-stack" className="transition-colors hover:text-primary">
            Tech Stack
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/JosueBrenes" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://x.com/_brenes_3005" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/josue-brenes/" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:josuebrenes3005@gmail.com">
            <Button variant="ghost" size="icon">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
