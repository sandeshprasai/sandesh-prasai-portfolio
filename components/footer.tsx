"use client";

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-lg text-muted-foreground">
          <p className="mb-2">© {currentYear} Sandesh Prasai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
