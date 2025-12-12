import { DemoForm } from "./DemoForm";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(199_89%_48%/0.1)_0%,transparent_50%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-primary" />
          AI-Powered Sales Calls
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-delay-1 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          AI That Sells Like
          <br />
          <span className="text-gradient">Your Best Closer.</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          If your business doesn't call customers after purchasing, it's time to
          book a demo below.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-delay-3 mt-10">
          <DemoForm />
        </div>

        {/* Value statement */}
        <div className="animate-fade-in-delay-3 mx-auto mt-16 max-w-xl rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
          <p className="text-base text-foreground">
            <span className="text-gradient font-semibold">$70k+</span> in
            additional sales generated during AI training — trained on our own
            top salespeople.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 sm:grid-cols-3">
          <div className="animate-fade-in-delay-1 flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <p className="mt-4 font-display text-3xl font-bold text-foreground">
              90%
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Lower OPEX
            </p>
          </div>
          <div className="animate-fade-in-delay-2 flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <p className="mt-4 font-display text-3xl font-bold text-foreground">
              24/7
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Always Available
            </p>
          </div>
          <div className="animate-fade-in-delay-3 flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <p className="mt-4 font-display text-3xl font-bold text-foreground">
              &lt;1min
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Response Time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
