import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_zeuxccq', // Your service ID
        'template_default', // You can create a custom template in EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'biduthkhatri33@gmail.com', // Your Gmail
        },
        '4SionZDBvvUXUGMZZ' // Your public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "biduthkhatri33@gmail.com",
      href: "mailto:biduthkhatri33@gmail.com",
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9803782949",
      href: "tel:+9779803782949",
      color: "text-green-500",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pokhara, Nepal",
      href: "#",
      color: "text-purple-500",
      bgColor: "from-purple-500/20 to-violet-500/20"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/TejuKhatri",
      color: "hover:text-slate-700",
      username: "@TejuKhatri"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/teju-khatri",
      color: "hover:text-blue-600",
      username: "teju-khatri"
    }
  ];

  const responseTime = [
    { icon: Clock, title: "Response Time", desc: "Usually within 24 hours" },
    { icon: CheckCircle, title: "Project Discussion", desc: "Free consultation available" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl floating-shape"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/15 rounded-full blur-2xl floating-shape" style={{animationDelay: "3s"}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center glass-card rounded-full px-6 py-3 mb-6">
            <MessageSquare className="w-5 h-5 mr-2 text-primary" />
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-gradient text-glow">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can bring your ideas to life 
            with modern web development solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-8 card-3d">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center mr-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center space-x-4 glass-card rounded-2xl p-6 card-3d hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative z-10 flex items-center space-x-4 w-full">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{info.label}</div>
                        <div className="font-semibold text-lg group-hover:text-primary transition-colors">{info.value}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-3xl p-8 card-3d">
              <h4 className="text-xl font-semibold mb-6">Follow Me</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 glass-dark rounded-2xl card-3d hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <social.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold group-hover:text-primary transition-colors">{social.label}</div>
                        <div className="text-sm text-muted-foreground">{social.username}</div>
                      </div>
                    </div>
                    <div className="text-muted-foreground group-hover:text-primary transition-colors">
                      →
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time Info */}
            <div className="glass-card rounded-3xl p-8 card-3d relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-1 gap-6">
                  {responseTime.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-card rounded-3xl p-6 card-3d bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-green-700 dark:text-green-300">Available for New Projects</div>
                  <div className="text-sm text-muted-foreground">
                    Currently accepting new freelance opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="glass-card rounded-3xl p-8 card-3d relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center mr-3">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass-dark border-primary/20 focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass-dark border-primary/20 focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass-dark border-primary/20 focus:border-primary transition-colors"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass-dark border-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-3d bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;