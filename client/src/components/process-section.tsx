import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const certificateFiles = [
  {
    id: "codecademy-cpp",
    institution: "Codecademy",
    file: "/attached_assets/Screenshot_2_1761246925991.png"
  },
  {
    id: "senai-frontend",
    institution: "SENAI",
    file: "/attached_assets/Senai certificado Front-end_1761243531211.pdf"
  },
  {
    id: "senai-backend",
    institution: "SENAI",
    file: "/attached_assets/Senai certificado Back-end_1761243531211.pdf"
  },
  {
    id: "senai-trabalho",
    institution: "SENAI",
    file: "/attached_assets/Senai certificado Mundo do Trabalho _1761243531209.pdf"
  },
  {
    id: "senai-hibrido",
    institution: "SENAI",
    file: "/attached_assets/Senai_certificado_Dev_Aplicativo_Hibridos_1761243531210.pdf"
  },
  {
    id: "senai-csharp",
    institution: "SENAI",
    file: "/attached_assets/Senai_certificado_Dev_CSharp_1761243531211.pdf"
  }
];

export function ProcessSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 md:py-32 bg-background" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary" data-testid="badge-certificates">
            {t.process.badge}
          </Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            {t.process.title} <span className="text-primary">{t.process.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            {t.process.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificateFiles.map((certificate, index) => {
            const certData = t.process.certificates[certificate.id as keyof typeof t.process.certificates];
            return (
            <a
              key={certificate.id}
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              data-testid={`link-certificate-${certificate.id}`}
            >
              <Card
                className="group p-6 bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2 transition-all duration-300 hover:border-primary/30 hover:shadow-lg h-full cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-certificate-${certificate.id}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" data-testid={`icon-certificate-${certificate.id}`} />
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 
                  className="font-display font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors"
                  data-testid={`text-certificate-title-${certificate.id}`}
                >
                  {certData.title}
                </h3>
                
                <Badge 
                  variant="secondary" 
                  className="mb-3 bg-primary/5 text-primary/80"
                  data-testid={`badge-institution-${certificate.id}`}
                >
                  {certificate.institution}
                </Badge>
                
                <p 
                  className="text-muted-foreground text-sm leading-relaxed"
                  data-testid={`text-certificate-description-${certificate.id}`}
                >
                  {certData.description}
                </p>
              </Card>
            </a>
          );
          })}
        </div>
      </div>
    </section>
  );
}
