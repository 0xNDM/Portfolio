import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

const Contact = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="border-primary/50 hover:bg-primary/10 hover:border-primary group"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                    {social.label}
                  </a>
                </Button>
              );
            })}
          </div>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground text-lg px-8"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border/50 text-center text-muted-foreground">
        <p>© 2024 Creative Developer. Built with passion and modern web technologies.</p>
      </div>
    </section>
  );
};

export default Contact;
