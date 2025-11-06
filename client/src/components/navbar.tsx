import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: t.nav.home, id: "hero" },
    { label: t.nav.about, id: "services" },
    { label: t.nav.education, id: "stats" },
    { label: t.nav.certificates, id: "process" },
    { label: t.nav.projects, id: "projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-display font-black text-2xl md:text-3xl hover-elevate rounded-md px-2 py-1"
            data-testid="button-logo"
          >
            <span className="text-primary">Artur</span>
            <span className="text-foreground"> Braz</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-base font-medium hover-elevate"
                data-testid={`button-nav-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 bg-background/50 backdrop-blur-sm rounded-md p-1 border border-border">
              <Button
                variant={language === "pt" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("pt")}
                className="text-xs"
                data-testid="button-language-pt"
              >
                PT
              </Button>
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className="text-xs"
                data-testid="button-language-en"
              >
                EN
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-background/98 backdrop-blur-md border-b border-border"
          data-testid="mobile-menu"
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-start text-base font-medium"
                data-testid={`button-mobile-nav-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
            
            <div className="sm:hidden pt-2 border-t border-border space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider px-2">
                {t.nav.language}
              </p>
              <Button
                variant={language === "pt" ? "default" : "ghost"}
                onClick={() => setLanguage("pt")}
                className="w-full justify-start"
                data-testid="button-language-mobile-pt"
              >
                <Globe className="h-4 w-4 mr-2" />
                Português
              </Button>
              <Button
                variant={language === "en" ? "default" : "ghost"}
                onClick={() => setLanguage("en")}
                className="w-full justify-start"
                data-testid="button-language-mobile-en"
              >
                <Globe className="h-4 w-4 mr-2" />
                English
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
