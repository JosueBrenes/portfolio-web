"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, Twitter, Linkedin, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">Josué Brenes</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium ml-6">
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

        {/* Desktop social links */}
        <div className="hidden md:flex items-center space-x-4">
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/40">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="#experience"
              className="px-4 py-2 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="px-4 py-2 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#achievements"
              className="px-4 py-2 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </Link>
            <Link
              href="#tech-stack"
              className="px-4 py-2 hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Tech Stack
            </Link>

            <div className="flex space-x-4 px-4 pt-2">
              <Link href="https://github.com/JosueBrenes" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://x.com/_brenes_3005" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/josue-brenes/" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:josuebrenes3005@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
