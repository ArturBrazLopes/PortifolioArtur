import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Instagram, Linkedin, Github, Mail, Phone, Heart, Circle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-5">
            <div className="mb-6">
              <h3 className="font-display font-black text-3xl">
                <span className="text-primary">Artur</span>
                <span className="text-foreground"> Braz Lopes</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              {t.footer.description}
            </p>
            <div className="mb-6">
              <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">
                {t.footer.socialMedia}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="hover-elevate active-elevate-2 hover:text-primary transition-colors"
                    asChild
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
              {t.footer.availability}
            </h4>
            <div className="mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary gap-2" data-testid="badge-availability-status">
                <Circle className="h-2 w-2 fill-primary" />
                {t.footer.availableStatus}
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {t.footer.availabilityDescription}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:arturbrazlopes@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                arturbrazlopes@gmail.com
              </a>
              <a
                href="tel:+5561982698558"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
                data-testid="link-phone"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                +55 61 98269-8558
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © <span data-testid="text-copyright-year">{currentYear}</span> Artur Braz Lopes. {t.footer.copyright}
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1" data-testid="text-made-with">
              {t.footer.madeWith} <Heart className="h-3 w-3 text-primary fill-primary" /> {t.footer.madeWithSuffix}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
