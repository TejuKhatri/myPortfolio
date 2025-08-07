import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/teju-hero.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl floating-shape"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/30 rounded-full blur-2xl floating-shape" style={{animationDelay: "2s"}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-secondary/50 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary">👋 Hello, I'm</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Teju</span>
              <br />
              <span className="text-foreground">Khatri</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6 font-medium">
              Frontend Developer & IT Student
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Passionate about creating modern, user-friendly websites with React.js, 
              HTML, CSS, and JavaScript. Currently studying at Informatics College Pokhara.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection("portfolio")}
                className="btn-3d bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="btn-3d border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/TejuKhatri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full card-3d hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/teju-khatri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full card-3d hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-3xl overflow-hidden card-3d">
                <img 
                  src={heroImage} 
                  alt="Teju Khatri - Frontend Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-2xl blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/30 rounded-xl blur-lg"></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full bg-card card-3d"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;