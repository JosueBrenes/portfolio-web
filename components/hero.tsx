import { Button } from "@/components/ui/button"
import { Github, Mail, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-12 md:py-24 text-center px-4">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-transparent">
          Web Development Specialist
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground text-base sm:text-lg md:text-xl">
          I'm Josué Brenes, a passionate Full Stack web developer dedicated to crafting exceptional digital experiences
          with modern technologies.
        </p>
      </div>
      <div className="flex gap-3 sm:gap-4">
        <Link href="https://github.com/JosueBrenes" target="_blank" rel="noreferrer">
          <Button variant="outline" size="icon" className="rounded-full h-10 w-10 sm:h-12 sm:w-12">
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/josue-brenes/" target="_blank" rel="noreferrer">
          <Button variant="outline" size="icon" className="rounded-full h-10 w-10 sm:h-12 sm:w-12">
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link href="https://x.com/_brenes_3005" target="_blank" rel="noreferrer">
          <Button variant="outline" size="icon" className="rounded-full h-10 w-10 sm:h-12 sm:w-12">
            <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Twitter</span>
          </Button>
        </Link>
        <Link href="mailto:josuebrenes3005@gmail.com">
          <Button variant="outline" size="icon" className="rounded-full h-10 w-10 sm:h-12 sm:w-12">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </Link>
      </div>
    </section>
  )
}
