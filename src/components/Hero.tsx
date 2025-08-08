import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin, Sparkles, Code, Globe } from "lucide-react";
import heroImage from "@/assets/teju-profile.jpg";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "Frontend Developer",
    "React.js Specialist", 
    "UI/UX Enthusiast",
    "IT Student"
  ];

  useEffect(() => {
    const typeRole = () => {
      const role = roles[currentRole];
      if (isTyping) {
        if (displayText.length < role.length) {
          setTimeout(() => {
            setDisplayText(role.slice(0, displayText.length + 1));
          }, 100);
        } else {
          setTimeout(() => {
            setIsTyping(false);
          }, 2000);
        }
      } else {
        if (displayText.length > 0) {
          setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, 50);
        } else {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }
      }
    };

    const timer = setTimeout(typeRole, 100);
    return () => clearTimeout(timer);
  }, [displayText, isTyping, currentRole, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const generateParticles = () => {
    return Array.from({ length: 15 }, (_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${Math.random() * 3 + 5}s`
        }}
      />
    ));
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden hero-bg">
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {generateParticles()}
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-shape opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl floating-shape opacity-40" style={{animationDelay: "2s"}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl floating-shape" style={{animationDelay: "4s"}}></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-primary/30 rounded-xl rotate-45 floating-shape"></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-accent/20 rounded-full floating-shape" style={{animationDelay: "3s"}}></div>
      <div className="absolute top-2/3 right-1/3 w-12 h-12 border-2 border-primary/40 rotate-12 floating-shape" style={{animationDelay: "1s"}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center glass-card rounded-full px-6 py-3 mb-6 animate-pulse">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium">Available for New Projects</span>
            </div>
            
            {/* Main Heading with Enhanced Typography */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="text-glow text-gradient block">Teju</span>
                <span className="text-foreground/90 block">Khatri</span>
              </h1>
              
              {/* Animated Role */}
              <div className="text-2xl lg:text-3xl font-medium text-muted-foreground min-h-[3rem] flex items-center justify-center lg:justify-start">
                <Code className="w-8 h-8 mr-3 text-primary" />
                <span className="border-r-2 border-primary pr-1 animate-pulse">
                  {displayText}
                </span>
              </div>
            </div>
            
            {/* Enhanced Description */}
            <div className="glass-dark rounded-2xl p-6 space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Crafting exceptional digital experiences with modern web technologies. 
                Specializing in <span className="text-primary font-semibold">React.js</span>, 
                <span className="text-primary font-semibold"> JavaScript</span>, and 
                <span className="text-primary font-semibold"> responsive design</span>.
              </p>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Informatics College Pokhara</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>Pokhara, Nepal</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("portfolio")}
                className="group relative overflow-hidden btn-3d bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold animated-border"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Explore My Work
              </Button>
              <Button 
                variant="outline" 
                className="group btn-3d border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold glass-card"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>
            
            {/* Enhanced Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/TejuKhatri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 glass-card rounded-2xl card-3d hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/teju-khatri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 glass-card rounded-2xl card-3d hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Enhanced Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated Border */}
              <div className="hero-image-wrapper">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden relative z-10">
                  <img 
                    src={heroImage} 
                    alt="Teju Khatri - Frontend Developer" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -right-6 glass-card rounded-xl p-4 animate-bounce" style={{animationDelay: "1s"}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">7+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 animate-bounce" style={{animationDelay: "2s"}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2024</div>
                  <div className="text-xs text-muted-foreground">Started</div>
                </div>
              </div>
              
              {/* Tech Stack Floating Icons */}
              <div className="absolute top-1/4 -left-8 p-3 glass-card rounded-full floating-shape">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute top-3/4 -right-8 p-3 glass-card rounded-full floating-shape" style={{animationDelay: "3s"}}>
                <span className="text-2xl">🟨</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection("about")}
            className="group p-4 glass-card rounded-full card-3d animate-bounce hover:animate-pulse"
          >
            <ChevronDown className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          </button>
          <div className="text-xs text-center text-muted-foreground mt-2">Scroll Down</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;