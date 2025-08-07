import { Code, Smartphone, Database, Zap, Palette, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating modern, responsive websites using React.js, HTML5, CSS3, and JavaScript with focus on user experience and performance.",
      features: ["React.js Applications", "Responsive Design", "Modern JavaScript", "Component Architecture"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Developing mobile-responsive websites that work seamlessly across all devices and screen sizes.",
      features: ["Responsive Layouts", "Touch-Friendly UI", "Progressive Web Apps", "Cross-Browser Support"]
    },
    {
      icon: Database,
      title: "Backend Integration",
      description: "Integrating frontend applications with backend services, APIs, and databases for complete functionality.",
      features: ["RESTful API Integration", "Database Management", "Node.js Development", "MongoDB & MySQL"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing websites for speed, accessibility, and search engines to ensure the best user experience.",
      features: ["Fast Loading Times", "SEO Optimization", "Code Optimization", "Performance Monitoring"]
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Converting designs into pixel-perfect, interactive websites with smooth animations and modern aesthetics.",
      features: ["Design to Code", "Interactive Elements", "Modern Animations", "User-Centered Design"]
    },
    {
      icon: Search,
      title: "Website Maintenance",
      description: "Providing ongoing support, updates, and maintenance to keep your website running smoothly and securely.",
      features: ["Regular Updates", "Bug Fixes", "Security Patches", "Performance Monitoring"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development services focused on creating modern, 
            user-friendly websites with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group card-3d rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              {/* Service Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
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
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Technologies I <span className="text-gradient">Work With</span>
            </h3>
            <p className="text-muted-foreground">
              Modern tools and frameworks I use to build exceptional web experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React.js", icon: "⚛️" },
              { name: "JavaScript", icon: "🟨" },
              { name: "HTML5", icon: "🔗" },
              { name: "CSS3", icon: "🎨" },
              { name: "Node.js", icon: "🟢" },
              { name: "MongoDB", icon: "🍃" },
              { name: "MySQL", icon: "🐬" },
              { name: "Git", icon: "📚" },
              { name: "Axios", icon: "🔄" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Express", icon: "🚀" },
              { name: "Tailwind", icon: "💨" }
            ].map((tech, index) => (
              <div key={index} className="text-center card-3d rounded-xl p-4 hover:scale-110 transition-transform">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;