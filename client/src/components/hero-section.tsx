import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import profileImage from "@assets/Portifolio-imagem_1761944696649.png";

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} 
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="flex flex-col items-start text-left space-y-8">
            <Badge 
              variant="secondary" 
              className="bg-primary/10 text-primary border-primary/20 hover-elevate gap-2 px-4 py-2"
              data-testid="badge-availability"
            >
              <span data-testid="text-availability-message">{t.hero.badge}</span>
            </Badge>

            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight" data-testid="text-hero-heading">
              <span className="text-foreground">{t.hero.greeting}</span>
              <span className="text-primary inline-block relative">
                Artur Braz Lopes
                <svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  height="12" 
                  viewBox="0 0 300 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M2 10C50 4 100 2 150 3C200 4 250 6 298 10" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className="text-primary"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl leading-relaxed font-medium" data-testid="text-hero-tagline">
              {t.hero.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-base md:text-lg px-8 py-6 font-bold group"
                data-testid="button-start-project"
              >
                {t.hero.viewProjects}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base md:text-lg px-8 py-6 font-bold bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40"
                data-testid="button-view-portfolio"
              >
                {t.hero.viewPortfolio}
              </Button>
            </div>

            <div className="flex flex-wrap items-start gap-4 pt-8">
              <Button 
                size="lg"
                variant="outline"
                className="gap-2"
                data-testid="button-github"
                asChild
              >
                <a href="https://github.com/ArturBrazLopes" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="gap-2"
                data-testid="button-linkedin"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="gap-2"
                data-testid="button-instagram"
                asChild
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <SiInstagram className="h-5 w-5" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-2xl">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl opacity-40" style={{ transform: 'scale(1.2) translateY(2%)' }} />
              <img 
                src={profileImage} 
                alt="Artur Braz Lopes"
                className="relative z-10 w-full h-auto rounded-lg object-cover"
                data-testid="img-profile"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">{t.hero.scrollDiscover}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
