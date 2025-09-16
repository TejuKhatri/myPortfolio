import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold text-gradient mb-4">
              Teju Khatri
            </div>
            <p className="text-muted-foreground mb-6">
              Frontend Developer & IT Student passionate about creating modern, 
              user-friendly web experiences with cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/TejuKhatri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg card-3d flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/teju-khatri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg card-3d flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:biduthkhatri33@gmail.com"
                className="w-10 h-10 bg-secondary rounded-lg card-3d flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <strong className="text-foreground">Email:</strong><br />
                biduthkhatri33@gmail.com
              </div>
              <div>
                <strong className="text-foreground">Phone:</strong><br />
                +977 9803782949
              </div>
              <div>
                <strong className="text-foreground">Location:</strong><br />
                Pokhara, Nepal
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Teju Khatri. All rights reserved.
          </div>
          <div className="flex items-center text-muted-foreground text-sm mt-4 md:mt-0">
            Made with using React.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;