import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react"; // Added Loader2
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ScrollAnimation";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false); // Added loading state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Get a FREE Access Key from web3forms.com for manoj010503@gmail.com
      // 2. Paste that key below
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "936bdd40-8eff-4dbe-ab8e-7dc53b795fad", 
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `New Marstec Lead from ${formData.name}`,
          from_name: "Marstec Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent! It will arrive in manoj010503@gmail.com shortly.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-copper rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <span className="text-copper font-semibold tracking-widest uppercase text-sm">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
            Contact Us
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us for a free consultation and quote. We&apos;re here to help
            bring your vision to life.
          </p>
          <div className="w-24 h-1 bg-copper-gradient mx-auto rounded-full mt-6" />
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollAnimation variant="fadeLeft" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">Company Information</h3>
                <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-copper/20 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-foreground mb-1">Address</h4>
                        <p className="text-primary-foreground/70">
                          Lot 10444-1, Jalan Sg Jati,
                          <br />
                          Kg Jawa, Klang, Selangor, Malaysia
                        </p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-copper/20 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-foreground mb-1">Phone / Fax</h4>
                        <p className="text-primary-foreground/70">03-3319 3375</p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-copper/20 rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-foreground mb-1">Email</h4>
                        <p className="text-primary-foreground/70">manoj010503@gmail.com</p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-copper/20 rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-foreground mb-1">Business Hours</h4>
                        <p className="text-primary-foreground/70">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 9:00 AM - 1:00 PM
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10"
              >
                <h4 className="font-display text-lg font-bold text-primary-foreground mb-4">
                  Company Registration
                </h4>
                <div className="space-y-2 text-sm">
                  <p className="text-primary-foreground/70">
                    <span className="text-copper font-medium">MARSTEC SDN BHD:</span> 202201002299 (1447996-V)
                  </p>
                  <p className="text-primary-foreground/70">
                    <span className="text-copper font-medium">MAARSTEC ENTERPRISE:</span> 001453888-H
                  </p>
                  <p className="text-primary-foreground/70">
                    <span className="text-copper font-medium">Paid Up Capital:</span> RM 100,000.00
                  </p>
                </div>
              </motion.div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeRight" delay={0.3}>
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-copper focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="grid md:grid-cols-2 gap-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-copper focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-copper focus:border-transparent transition-all"
                      placeholder="+60 12-345 6789"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-copper focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <Button variant="hero" size="lg" className="w-full group" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}