import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiCplusplus, SiLua } from "react-icons/si";
import { Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500 dark:text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500 dark:text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500 dark:text-yellow-500" },
  { name: "Python", icon: SiPython, color: "text-blue-400 dark:text-blue-400" },
  { name: "C#", icon: Code2, color: "text-purple-500 dark:text-purple-500" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600 dark:text-blue-600" },
  { name: "Java", icon: Code2, color: "text-red-500 dark:text-red-500" },
  { name: "Lua", icon: SiLua, color: "text-indigo-500 dark:text-indigo-500" },
];

export function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 md:py-32 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary" data-testid="badge-about">
            {t.services.badgeAbout}
          </Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            {t.services.title} <span className="text-primary">{t.services.titleHighlight}</span> {t.services.titleSuffix}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            {t.services.description}
          </p>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary" data-testid="badge-skills">
              {t.services.badgeSkills}
            </Badge>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl">
              {t.services.skillsTitle} <span className="text-primary">{t.services.skillsTitleHighlight}</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={skill.name}
                  className="group p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2 transition-all duration-300 hover:border-primary/30"
                  style={{ animationDelay: `${index * 50}ms` }}
                  data-testid={`card-skill-${skill.name.toLowerCase()}`}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className={`${skill.color} dark:${skill.color} transition-transform group-hover:scale-110`}>
                      <Icon className="h-12 w-12" data-testid={`icon-skill-${skill.name.toLowerCase()}`} />
                    </div>
                    <h4 
                      className="font-display font-bold text-lg text-foreground text-center"
                      data-testid={`text-skill-${skill.name.toLowerCase()}`}
                    >
                      {skill.name}
                    </h4>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
