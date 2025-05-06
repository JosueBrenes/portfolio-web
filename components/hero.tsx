import { Button } from "@/components/ui/button"
import { Github, Mail, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Web Development Specialist
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          I'm Josué Brenes, a passionate Full Stack web developer dedicated to crafting exceptional digital experiences
          with modern technologies.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="https://github.com/JosueBrenes" target="_blank" rel="noreferrer">
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/josue-brenes/" target="_blank" rel="noreferrer">
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link href="https://x.com/_brenes_3005" target="_blank" rel="noreferrer">
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Button>
        </Link>
        <Link href="mailto:josuebrenes3005@gmail.com">
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </Link>
      </div>
    </section>
  )
}
