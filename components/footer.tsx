import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} JosueBrenes.dev. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/JosueBrenes"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://x.com/_brenes_3005"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/josue-brenes/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:josuebrenes3005@gmail.com"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
