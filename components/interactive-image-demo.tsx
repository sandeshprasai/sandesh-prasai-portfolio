"use client"

import { InteractiveImage } from "./interactive-image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function InteractiveImageDemo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Interactive Image Examples</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Hover and click on images to see different interaction effects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example 1: Scale Effect with Modal */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scale + Modal</CardTitle>
                <CardDescription>Click to view details in modal</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveImage
                  src="/modern-tech-workspace.png"
                  alt="Tech workspace with laptop and coffee"
                  width={600}
                  height={400}
                  hoverEffect="scale"
                  interactionType="modal"
                  scrollAnimation="fade"
                  modalContent={
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Modern Workspace</h3>
                      <p className="text-muted-foreground mb-4">
                        A clean, minimal workspace setup perfect for productivity and creativity.
                      </p>
                      <div className="flex gap-2">
                        <Badge>Productivity</Badge>
                        <Badge>Design</Badge>
                        <Badge>Tech</Badge>
                      </div>
                    </div>
                  }
                />
              </CardContent>
            </Card>

            {/* Example 2: Glow Effect with Link */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Glow + Link</CardTitle>
                <CardDescription>Click to open external link</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveImage
                  src="/ai-neural-network.png"
                  alt="AI neural network visualization"
                  width={600}
                  height={400}
                  hoverEffect="glow"
                  interactionType="link"
                  href="https://github.com"
                  scrollAnimation="slide-up"
                />
              </CardContent>
            </Card>

            {/* Example 3: Shadow Effect with Expand */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Shadow + Expand</CardTitle>
                <CardDescription>Click to expand fullscreen</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveImage
                  src="/coding-on-laptop-screen.jpg"
                  alt="Coding on laptop screen"
                  width={600}
                  height={400}
                  hoverEffect="shadow"
                  interactionType="expand"
                  scrollAnimation="slide-left"
                />
              </CardContent>
            </Card>

            {/* Example 4: Lift Effect with Custom Action */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lift + Custom</CardTitle>
                <CardDescription>Click for custom action</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveImage
                  src="/mobile-app-interface.png"
                  alt="Mobile app interface design"
                  width={600}
                  height={400}
                  hoverEffect="lift"
                  interactionType="custom"
                  onCustomClick={() => alert("Custom action triggered!")}
                  scrollAnimation="slide-right"
                />
              </CardContent>
            </Card>

            {/* Example 5: Scale with Zoom Animation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scale + Zoom In</CardTitle>
                <CardDescription>Zooms in on scroll</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveImage
                  src="/abstract-data-visualization.png"
                  alt="Abstract data visualization"
                  width={600}
                  height={400}
                  hoverEffect="scale"
                  interactionType="expand"
                  scrollAnimation="zoom"
                />
              </CardContent>
            </Card>

            {/* Example 6: Glow with Modal */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Glow + Modal</CardTitle>
                <CardDescription>Glowing effect with details</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveImage
                  src="/futuristic-technology.png"
                  alt="Futuristic technology concept"
                  width={600}
                  height={400}
                  hoverEffect="glow"
                  interactionType="modal"
                  scrollAnimation="fade"
                  modalContent={
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Future Tech</h3>
                      <p className="text-muted-foreground">
                        Exploring the possibilities of tomorrow's technology today.
                      </p>
                    </div>
                  }
                />
              </CardContent>
            </Card>
          </div>

          {/* Usage Example Code */}
        </div>
      </div>
    </section>
  )
}
