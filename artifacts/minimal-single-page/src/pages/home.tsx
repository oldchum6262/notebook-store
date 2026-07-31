import { useState } from 'react';
import { ArrowRight, Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-[100dvh] w-full bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <div 
            className="font-serif text-2xl font-semibold text-foreground opacity-0 animate-fade-in"
            data-testid="logo-northstar"
          >
            Northstar
          </div>
          <a 
            href="mailto:hello@northstar.studio"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors opacity-0 animate-fade-in animation-delay-100"
            data-testid="link-email"
          >
            hello@northstar.studio
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero */}
        <section className="mb-32">
          <h1 
            className="font-serif text-5xl md:text-7xl font-semibold text-foreground leading-[1.1] mb-8 opacity-0 animate-fade-in-up animation-delay-200"
            data-testid="heading-hero"
          >
            We help thoughtful teams turn complex ideas into clear, useful products.
          </h1>
          <p 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl opacity-0 animate-fade-in-up animation-delay-300"
            data-testid="text-hero-description"
          >
            A small digital studio that listens carefully, thinks deeply, and builds software that actually works for the people who use it.
          </p>
        </section>

        {/* What we do */}
        <section className="mb-32 opacity-0 animate-fade-in-up animation-delay-400">
          <h2 
            className="text-sm uppercase tracking-wider text-primary font-semibold mb-8"
            data-testid="heading-what-we-do"
          >
            What we do
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div data-testid="service-strategy">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Strategy
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We help you figure out what to build and why. Clear direction before a single line of code.
              </p>
            </div>
            <div data-testid="service-design">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Design
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Interfaces that feel obvious to use. Every screen, every state, every edge case considered.
              </p>
            </div>
            <div data-testid="service-engineering">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Engineering
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Reliable, maintainable code that ships on time. We build it right the first time.
              </p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="mb-32 opacity-0 animate-fade-in-up animation-delay-500">
          <h2 
            className="text-sm uppercase tracking-wider text-primary font-semibold mb-8"
            data-testid="heading-how-we-work"
          >
            How we work
          </h2>
          <div className="space-y-8 max-w-2xl">
            <div className="flex gap-6" data-testid="principle-small">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-serif text-lg font-semibold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Small by design
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  You work directly with senior practitioners. No account managers, no junior teams, no telephone game.
                </p>
              </div>
            </div>
            <div className="flex gap-6" data-testid="principle-clarity">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-serif text-lg font-semibold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Clarity over complexity
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We cut through noise to find the simple solution. If we can't explain it clearly, we haven't understood it yet.
                </p>
              </div>
            </div>
            <div className="flex gap-6" data-testid="principle-craft">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-serif text-lg font-semibold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Craft, not just output
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Every detail matters. We sweat the interactions, the copy, the states you never thought to specify.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who we've worked with */}
        <section className="mb-32 opacity-0 animate-fade-in-up animation-delay-600">
          <h2 
            className="text-sm uppercase tracking-wider text-primary font-semibold mb-8"
            data-testid="heading-clients"
          >
            Who we've worked with
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
            From early-stage startups finding their footing to established companies rethinking legacy systems. Healthcare platforms, financial tools, education software, internal dashboards that actually get used.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Healthcare SaaS',
              'Fintech',
              'Education Tech',
              'Internal Tools',
              'B2B Platforms',
              'Design Systems'
            ].map((tag, i) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
                data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20 opacity-0 animate-fade-in-up animation-delay-600">
          <div className="bg-card border border-card-border rounded-lg p-10 md:p-12">
            <h2 
              className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4"
              data-testid="heading-cta"
            >
              Let's talk about your project
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              We take on a handful of projects each year. If you're working on something that matters and need a thoughtful partner, we'd like to hear from you.
            </p>
            
            {/* Email form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="your@email.com"
                  required
                  disabled={isSubmitted}
                  className={`
                    w-full pl-12 pr-4 py-3 
                    bg-background border rounded-lg
                    text-foreground placeholder:text-muted-foreground
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${isFocused ? 'border-primary' : 'border-input'}
                  `}
                  data-testid="input-email"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitted}
                className="group relative overflow-hidden"
                data-testid="button-submit"
              >
                {isSubmitted ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Sent
                  </>
                ) : (
                  <>
                    Get in touch
                    <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4">
              Or email us directly at{' '}
              <a 
                href="mailto:hello@northstar.studio" 
                className="text-primary hover:underline font-medium"
                data-testid="link-direct-email"
              >
                hello@northstar.studio
              </a>
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="font-serif text-xl font-semibold text-foreground mb-2">
                Northstar
              </div>
              <p className="text-sm text-muted-foreground">
                A small digital studio for thoughtful teams
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <a 
                href="mailto:hello@northstar.studio"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid="footer-link-email"
              >
                hello@northstar.studio
              </a>
              <p className="text-sm text-muted-foreground">
                {new Date().getFullYear()} Northstar Studio
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
