"use client";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a final-year{" "}
              <span className="text-foreground font-medium">
                Computer Engineering student at Pokhara University
              </span>
              . My focus areas include Backend development and AI engineering,
              where I specialize in creating scalable and efficient systems.
            </p>

            <p>
              My core expertise lies in backend development with{" "}
              <span className="text-foreground font-medium">
                Node.js, Express.js, and MongoDB
              </span>
              . I have worked within MERN-based teams, where I contributed to
              backend architecture, API development, and database design for
              project such as invoicing systems which was part of my minor
              college project , using Git for effective team collaboration.
            </p>

            <p>
              Currently, I'm working on my major project: an{" "}
              <span className="text-foreground font-medium">
                AI-based attendance system
              </span>
              that uses face detection and recognition to automate attendance
              tracking.
            </p>

            <p>
              Beyond coding, I'm also committed to sharing knowledge with others.
              I've trained over 100+ students in Python and Git, designing
              courses specifically for early-semester students to help them
              build a strong foundation in programming.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-lg text-muted-foreground">
                Years of Study
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-lg text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg text-muted-foreground">
                Students Trained
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
