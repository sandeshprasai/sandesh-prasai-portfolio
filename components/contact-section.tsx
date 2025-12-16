"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sandeshprasai4321@gmail.com",
    href: "mailto:sandeshprasai4321@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9807928148",
    href: "tel:+9779807928148",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bagmati Province, Kalanki, Nepal",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sandeshprasai",
    username: "@sandeshprasai",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sandeshprasai",
    username: "/sandeshprasai",
  },
]

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="contact" className="py-20 md:py-32" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon
                  return (
                    <div key={contact.label} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-medium">{contact.label}</p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-lg text-muted-foreground">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <CardHeader>
                <CardTitle>Connect with Me</CardTitle>
                <CardDescription>Find me on these platforms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-medium">{social.label}</p>
                        <p className="text-lg text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          <div
            className={`text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <Button size="lg" asChild>
              <a href="mailto:sandeshprasai4321@gmail.com?subject=Inquiry%20from%20Portfolio%20Website&body=Hello%20Sandesh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20regarding%20[insert%20reason%20here].%0D%0A%0D%0APlease%20let%20me%20know%20a%20good%20time%20to%20connect.%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]">
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
