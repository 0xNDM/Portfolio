import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/0xNDM/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nathnaeldagnaw/" },
  { icon: Send, label: "Telegram", href: "https://t.me/NDM_0x" },
  { icon: Mail, label: "Email", href: "mailto:hello@nathnael.me" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = (form.get('name') as string || '').trim();
    const email = (form.get('email') as string || '').trim();
    const message = (form.get('message') as string || '').trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'someone'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@nathnael.me?subject=${subject}&body=${body}`;
  };

  return (
    <section ref={ref} id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <motion.div
              animate={focused === 'name' ? { scale: 1.02 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                name="name"
                placeholder="Your Name"
                className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all"
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
              />
            </motion.div>
            
            <motion.div
              animate={focused === 'email' ? { scale: 1.02 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all"
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
              />
            </motion.div>
            
            <motion.div
              animate={focused === 'message' ? { scale: 1.02 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all resize-none"
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground text-lg"
              >
                Send Message
              </Button>
            </motion.div>
          </motion.form>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-24 pt-8 border-t border-border/50 text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>© {new Date().getFullYear()} Nathnael. All Rights Reserved.</p>
      </motion.div>
    </section>
  );
};

export default Contact;
