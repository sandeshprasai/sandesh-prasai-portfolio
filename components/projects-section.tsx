"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "Real-Time Accident Reporting System",
    description:
      "Developed a real-time accident reporting platform during a college hackathon to enable rapid incident reporting and response. Contributed primarily to backend development, including API design, data handling, and system logic to ensure reliable and timely information flow.",
    tags: ["Next Js", "Node.js", "Express.js", "MongoDB", "REST API", "Git", "Hackathon Project", "Team Collaboration"],
    github: "https://github.com/sandeshprasai/ISTN-Hackathon.git",
    team: "Hackathon team project",
    demo: "https://istn-hackathon-mu.vercel.app",
  },
  {
    title: "AI-Based Attendance System",
    description:
      "Major college project developing an automated attendance system using face detection and recognition to replace manual processes. Integrating the recognition model with backend for real-time attendance logging and exploring scalable deployment options.",
    tags: [
      "Python",
      "Machine Learning",
      "CNN",
      "YoloV8",
      "Face Recognition",
      "Backend Integration",
      "Database Management",
    ],
    github: "https://github.com/sandeshprasai/AI_Attendance_System.git",
    demo: "https://ai-attendance-system-three.vercel.app/",
    status: "In Progress",
  },
  {
    title: "Smart Invoice",
    description:
      "A complete invoicing solution with backend services built using Node.js, Express, and MongoDB. Features secure REST APIs for invoice generation, user management, and transaction tracking with optimized query performance.",
    tags: ["VueJs", "Node.js", "Express", "MongoDB", "REST API", "Git"],
    github: "https://github.com/sandeshprasai/SmartInvoice",
    demo: "https://smart-invoice-beta.vercel.app/",
    team: "4-member team",
  },
  {
    title: "AgriBuddy – Smart Agriculture Support App",
    description:
      "AgriBuddy is an Android application developed during a hackathon at Cosmos College of Management and Technology to assist farmers  with real-time environmental monitoring and crop management. I contributed primarily to backend and data management, implementing Firebase integration for cloud storage, real-time updates, and push notifications. The system collects data from soil sensors measuring moisture, humidity, and water levels, which is stored in the Firebase Realtime Database. Based on the sensor data, automated actions are triggered, such as operating irrigation pumps and sending fire or water-level alerts to users, ensuring efficient farm management and rapid response to critical conditions.",
    tags: [
      "Android",
      "Kotlin",
      "Firebase",
      "Realtime Database",
      "Push Notifications",
      "Hackathon Project",
      "Team Collaboration",
    ],
    github: "https://github.com/Samriddha-Upreti/Agro-guardian.git",
    team: "Team project",
  },
  {
    title: "Inventory Management Application",
    description:
      "Designed and developed an inventory system with core features like product management and stock tracking. Built with C# and .NET for backend logic and SQL database for persistent storage.",
    tags: ["C#", ".NET", "GunaUI", "SQL", "Git", "Team Collaboration"],
    github: "https://github.com/sandeshprasai/Semester_Project.git",
    team: "4-member team",
  },
]

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured Projects</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A selection of projects showcasing my experience in backend development, AI/ML, and full-stack
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`flex flex-col hover:border-primary/50 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.status && (
                      <Badge variant="secondary" className="shrink-0">
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-sm px-2.5 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.team && (
                    <p className="text-lg text-muted-foreground mb-4">Collaborated with {project.team}</p>
                  )}

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 min-w-[120px] sm:flex-none bg-transparent"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center"
                        >
                          <Github className="mr-2 h-4 w-4 shrink-0" />
                          <span className="truncate">GitHub</span>
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild className="flex-1 min-w-[120px] sm:flex-none">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4 shrink-0" />
                          <span className="truncate">Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={`mt-12 text-center transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/sandeshprasai" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
