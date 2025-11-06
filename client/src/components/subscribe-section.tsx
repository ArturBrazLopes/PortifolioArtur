import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Users, Heart } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function SubscribeSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language];

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/subscribe", { email });
    },
    onSuccess: () => {
      toast({
        title: t.subscribe.successTitle,
        description: t.subscribe.successDescription,
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: t.subscribe.errorTitle,
        description: error.message || t.subscribe.errorDescription,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      subscribeMutation.mutate(email);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card/20 to-background" id="subscribe">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-3xl" />
            
            <div className="relative bg-card/80 backdrop-blur-sm border border-card-border rounded-2xl p-8 md:p-16 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground" data-testid="text-trust-indicator">
                  {t.subscribe.trustIndicator}
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
                {t.subscribe.title} <span className="text-primary">→</span>
              </h2>
              
              <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {t.subscribe.description}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder={t.subscribe.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12 bg-background border-border focus:border-primary transition-colors text-base"
                    required
                    data-testid="input-email"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="h-12 px-8 font-bold group"
                  disabled={subscribeMutation.isPending}
                  data-testid="button-subscribe"
                >
                  {subscribeMutation.isPending ? (
                    t.subscribe.buttonLoading
                  ) : (
                    <>
                      {t.subscribe.button}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-6" data-testid="text-privacy-notice">
                {t.subscribe.privacy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
