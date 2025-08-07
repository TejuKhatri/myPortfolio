import { Code, Smartphone, Database, Zap, Palette, Search, Layers, Cpu, Shield, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating modern, responsive websites using React.js, HTML5, CSS3, and JavaScript with focus on user experience and performance.",
      features: ["React.js Applications", "Responsive Design", "Modern JavaScript", "Component Architecture"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design", 
      description: "Developing mobile-responsive websites that work seamlessly across all devices and screen sizes.",
      features: ["Responsive Layouts", "Touch-Friendly UI", "Progressive Web Apps", "Cross-Browser Support"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Database,
      title: "Backend Integration",
      description: "Integrating frontend applications with backend services, APIs, and databases for complete functionality.",
      features: ["RESTful API Integration", "Database Management", "Node.js Development", "MongoDB & MySQL"],
      gradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing websites for speed, accessibility, and search engines to ensure the best user experience.",
      features: ["Fast Loading Times", "SEO Optimization", "Code Optimization", "Performance Monitoring"],
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Converting designs into pixel-perfect, interactive websites with smooth animations and modern aesthetics.",
      features: ["Design to Code", "Interactive Elements", "Modern Animations", "User-Centered Design"],
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      icon: Search,
      title: "Website Maintenance",
      description: "Providing ongoing support, updates, and maintenance to keep your website running smoothly and securely.",
      features: ["Regular Updates", "Bug Fixes", "Security Patches", "Performance Monitoring"],
      gradient: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  const techStack = [
    { name: "React.js", icon: "⚛️", category: "Frontend" },
    { name: "JavaScript", icon: "🟨", category: "Language" },
    { name: "HTML5", icon: "🔗", category: "Markup" },
    { name: "CSS3", icon: "🎨", category: "Styling" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "MySQL", icon: "🐬", category: "Database" },
    { name: "Git", icon: "📚", category: "Version Control" },
    { name: "Axios", icon: "🔄", category: "HTTP Client" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "Express", icon: "🚀", category: "Backend" },
    { name: "Tailwind", icon: "💨", category: "CSS Framework" }
  ];

  const workflowSteps = [
    { icon: Layers, title: "Discovery & Planning", desc: "Understanding your needs and project requirements" },
    { icon: Palette, title: "Design & Prototype", desc: "Creating wireframes and interactive prototypes" },
    { icon: Code, title: "Development", desc: "Building with modern technologies and best practices" },
    { icon: Rocket, title: "Launch & Support", desc: "Deployment and ongoing maintenance support" }
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl floating-shape"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-2xl floating-shape" style={{animationDelay: "4s"}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center glass-card rounded-full px-6 py-3 mb-6">
            <Cpu className="w-5 h-5 mr-2 text-primary" />
            <span className="text-sm font-medium">What I Offer</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-gradient text-glow">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development services focused on creating modern, 
            user-friendly websites with cutting-edge technology
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group glass-card rounded-3xl p-8 card-3d hover:scale-105 transition-all duration-500 relative overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Service Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-3xl mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                {/* Service Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Service Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 group-hover:bg-primary-foreground transition-colors"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              My <span className="text-gradient">Work Process</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              A structured approach to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto glass-card card-3d group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Technologies Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Technologies I <span className="text-gradient">Work With</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Modern tools and frameworks I use to build exceptional web experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="text-center glass-card rounded-2xl p-6 card-3d group hover:scale-110 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <div className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto card-3d relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss your ideas and create something amazing together. 
                Quality, performance, and user experience are my top priorities.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold btn-3d hover:scale-105 transition-all duration-300 text-lg">
                <Rocket className="w-5 h-5 mr-2" />
                Let's Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;