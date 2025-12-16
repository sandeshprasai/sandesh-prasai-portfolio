"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Grid Wrapper with Animation */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              {/* Profile Image with Staggered Animation Delay */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-fade-in-up [animation-delay:200ms]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <Image
                    src="/images/gemini-generated-image-j70se7j70se7j70s.png"
                    alt="Sandesh Prasai - Professional Portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="mb-6 animate-fade-in-up">
                <p className="text-lg text-muted-foreground mb-4">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
                  Sandesh Prasai
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-6">
                  Backend Developer | AI Engineer
                </p>
              </div>

              {/* Text Elements with Staggered Delays */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up [animation-delay:300ms]">
                Computer Engineering student passionate about building intelligent systems and scalable backend
                applications. Experienced with Node.js, Python, and Machine Learning.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 animate-fade-in-up [animation-delay:400ms]">
                <Button size="lg" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="./Sandesh_Prasai.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 animate-fade-in-up [animation-delay:500ms]">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/sandeshprasai" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com/in/sandeshprasai" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:sandeshprasai4321@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </a>
    </section>
  )
}
