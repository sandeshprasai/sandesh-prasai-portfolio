"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Brain } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "Python", "C#", "C"],
  },
  {
    title: "Backend & Frameworks",
    icon: Database,
    skills: ["Node.js", "Express.js", "REST APIs", "Git", "GitHub"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "AI/ML & Tools",
    icon: Brain,
    skills: ["Machine Learning", "Face Recognition", "Python ML Libraries", "Model Integration"],
  },
]

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Skills & Technologies</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.title}
                  className={`group hover:border-primary/50 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm px-2.5 py-0.5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div
            className={`mt-12 text-center transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="text-sm px-2.5 py-0.5">
                Team Collaboration
              </Badge>
              <Badge variant="outline" className="text-sm px-2.5 py-0.5">
                Problem Solving
              </Badge>
              <Badge variant="outline" className="text-sm px-2.5 py-0.5">
                Communication (English & Nepali)
              </Badge>
              <Badge variant="outline" className="text-sm px-2.5 py-0.5">
                Adaptability
              </Badge>
              <Badge variant="outline" className="text-sm px-2.5 py-0.5">
                Technical Training
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
