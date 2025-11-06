import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function StatsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 md:py-32 bg-card/30" id="stats">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary" data-testid="badge-education">
            {t.stats.badge}
          </Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            {t.stats.title} <span className="text-primary">{t.stats.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            {t.stats.description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card
            className="group p-8 md:p-10 bg-background/50 backdrop-blur-sm border-border hover-elevate active-elevate-2 transition-all duration-300 hover:border-primary/30"
            data-testid="card-main-education"
          >
            <div className="flex items-start gap-6">
              <div className="p-3 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-8 w-8 text-primary" data-testid="icon-graduation" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2" data-testid="text-degree-title">
                      {t.stats.degreeTitle}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium" data-testid="text-university">
                      {t.stats.university}
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary" data-testid="badge-period">
                    {t.stats.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-degree-description">
                  {t.stats.degreeDescription}
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              className="group p-8 bg-background/50 backdrop-blur-sm border-border hover-elevate active-elevate-2 transition-all duration-300 hover:border-primary/30"
              data-testid="card-senai-courses"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-primary" data-testid="icon-senai" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-1" data-testid="text-senai-title">
                    {t.stats.senaiTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-senai-subtitle">
                    {t.stats.senaiSubtitle}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground" data-testid="text-senai-html">HTML & CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground" data-testid="text-senai-js">JavaScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground" data-testid="text-senai-csharp">{t.stats.senaiCsharp}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground" data-testid="text-senai-api">{t.stats.senaiApi}</span>
                </div>
              </div>
            </Card>

            <Card
              className="group p-8 bg-background/50 backdrop-blur-sm border-border hover-elevate active-elevate-2 transition-all duration-300 hover:border-primary/30"
              data-testid="card-codecademy-courses"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-6 w-6 text-primary" data-testid="icon-codecademy" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-1" data-testid="text-codecademy-title">
                    {t.stats.codecademyTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-codecademy-subtitle">
                    {t.stats.codecademySubtitle}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground" data-testid="text-codecademy-cpp">C++ Programming</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground" data-testid="text-codecademy-java">Java Programming</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
