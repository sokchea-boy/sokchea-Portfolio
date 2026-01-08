"use client"

import { Button } from "../components/ui/Buttons"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("Contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="Hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">Full Stack Developer</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              Building pixel-perfect digital experiences with modern web technologies. Passionate about clean code and
              innovative solutions.
            </p>
            <div className="flex items-center justify-center gap-4 pt-8">
              <Button onClick={scrollToContact} size="lg" className="gap-2 flex items-center ">
                Get In Touch
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-black">
                <a href="https://github.com/sokchea-boy?tab=repositories" target="_blank" rel="noopener noreferrer" className="gap-2 flex items-center ">
                  <Github className="h-4 w-4 "  />
                  GitHub
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-6">
              <a
                href="https://github.com/sokchea-boy?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sokchea-boy-492b07374/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
