"use client";

import { Button } from "@/components/ui/button";
import { NewsletterSignup } from "@/components/newsletter-signup";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-slate-900/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-60 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Toronto's <span className="text-primary">Fintech</span> Community
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Connecting innovators, entrepreneurs, and investors in Toronto's thriving financial technology ecosystem.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="/events">View All Events</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/events/submit">Submit Event</a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md" id="newsletter">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
