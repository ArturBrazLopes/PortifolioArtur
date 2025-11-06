import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { SiSharp, SiDotnet, SiReact, SiVite, SiMongodb } from "react-icons/si";

export function ProjectsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: "chat-app",
      title: t.projects.projects["chat-app"].title,
      description: t.projects.projects["chat-app"].description,
      technologies: [
        { name: "WPF", icon: SiDotnet },
        { name: "C#", icon: SiSharp },
        { name: ".NET", icon: SiDotnet },
      ],
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/ArturBrazLopes/ChatApp-in-CSharp",
      liveUrl: "#",
    },
    {
      id: "finmate",
      title: t.projects.projects["finmate"].title,
      description: t.projects.projects["finmate"].description,
      technologies: [
        { name: "React", icon: SiReact },
        { name: "Vite", icon: SiVite },
        { name: "MongoDB", icon: SiMongodb },
      ],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/ArturBrazLopes/FitMate",
      liveUrl: "#",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <Badge 
            variant="secondary" 
            className="bg-primary/10 text-primary border-primary/20 hover-elevate gap-2 px-4 py-2"
            data-testid="badge-projects"
          >
            {t.projects.badge}
          </Badge>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight" data-testid="text-projects-heading">
            <span className="text-foreground">{t.projects.title} </span>
            <span className="text-primary">{t.projects.titleHighlight}</span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl" data-testid="text-projects-description">
            {t.projects.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl font-bold" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2" data-testid={`container-tech-${project.id}`}>
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="gap-1.5 px-3 py-1 text-sm"
                      data-testid={`badge-tech-${project.id}-${index}`}
                    >
                      <tech.icon className="h-3.5 w-3.5" />
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 pt-2">
                <Button
                  variant="default"
                  className="flex-1 font-bold"
                  asChild
                  data-testid={`button-code-${project.id}`}
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    {t.projects.codeButton}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 font-bold border-primary/20 hover:border-primary/40"
                  asChild
                  data-testid={`button-site-${project.id}`}
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    {t.projects.siteButton}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
