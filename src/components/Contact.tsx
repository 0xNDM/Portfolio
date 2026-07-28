import { useState, useRef } from "react";
import { Github, Linkedin, Mail, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nathnaeldagnaw/" },
  { icon: Github, label: "GitHub", href: "https://github.com/0xNDM/" },
  { icon: Mail, label: "Email", href: "mailto:hello@nathnael.me" },
];

const Contact = () => {
  const ref = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData(e.currentTarget);
    const name = (form.get("name") as string || "").trim();
    const email = (form.get("email") as string || "").trim();
    const message = (form.get("message") as string || "").trim();

    if (!email || !message) {
      toast.error("Please fill out your email and message.");
      setIsSubmitting(false);
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "a Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:hello@nathnael.me?subject=${subject}&body=${body}`;
    toast.success("Opening your email client...");
    setIsSubmitting(false);
  };

  return (
    <section ref={ref} id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-500 uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-foreground mt-4 mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Have a project in mind, a dataset to analyze, or want to chat? Send me a message below or connect via social links!
          </p>

          {/* Attached Clickable Social Icons */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 hover:bg-cyan-500/10 border border-border/80 hover:border-cyan-500/50 text-foreground hover:text-cyan-500 text-xs font-medium font-mono transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Centered Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/80 shadow-xl space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-5 h-5 text-cyan-500" />
              <h3 className="font-bold text-lg font-display text-foreground">
                Send a Message
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/80 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-sm text-foreground transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5">
                  Your Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/80 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-sm text-foreground transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your dataset, project, or role details..."
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/80 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-sm text-foreground transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground text-center sm:text-left">
          <p>© {new Date().getFullYear()} Nathnael Dagnaw. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-cyan-500">React + Vite + Tailwind</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
