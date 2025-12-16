"use client"

import type React from "react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Briefcase, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
  {
    type: "achievement",
    icon: Zap,
    title: "Hackathon Winner – Real-Time Accident Reporting System",
    organization: "ISTN Hackathon",
    period: "13–14 December  2025",
    description:
      "Won first place in a college hackathon by developing a real-time accident reporting system. Contributed primarily to backend development, including API design, database integration, and real-time notifications, enabling rapid reporting and response.",
    highlights: [
      "First place winner",
      "Backend development and API design",
      "Real-time data handling and notifications",
      "Team collaboration",
    ],
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Python & Git Trainer",
    organization: "Cosmos College of Management and Technology",
    period: "June 2025",
    description:
      "Conducted a one-week training program, training 100+ students in Python programming and Git version control. Designed a comprehensive course specifically for early semester students to build a strong foundation.",
    highlights: ["100+ students trained", "Course design", "Hands-on training"],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Computer Engineering",
    organization: "Pokhara University, Satdobato",
    period: "2021 — Present",
    description:
      "Final year student specializing in AI engineering and backend development. Working on major project involving AI-based attendance system using face recognition technology.",
    highlights: ["Final Year", "Focus: AI & Backend", "Major Project: AI Attendance System"],
  },
  {
    type: "achievement",
    icon: Award,
    title: "Hackathon Participant",
    organization: "ICT Club, Cosmos College",
    period: "2024",
    description:
      "Participated in hackathon event organized by the ICT club, collaborating with team members to build innovative solutions under time constraints.",
    highlights: ["Team collaboration", "Problem solving", "Rapid development"],
  },
]

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Experience & Education</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              My academic journey and professional experiences that shaped my career
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <Card
                  key={index}
                  className={`hover:border-primary/50 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <Badge variant="secondary">{exp.period}</Badge>
                        </div>
                        <CardDescription className="text-lg mb-4">{exp.organization}</CardDescription>
                        <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight) => (
                            <Badge key={highlight} variant="outline" className="text-sm px-2.5 py-0.5">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
