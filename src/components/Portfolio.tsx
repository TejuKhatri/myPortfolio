import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Food Delivery Website",
      description: "Full-stack application with React.js frontend, Node.js backend, and MongoDB. Features delivery tracking and real-time location updates.",
      tech: ["React.js", "Node.js", "MongoDB", "Real-time APIs"],
      image: "🍕",
      category: "Full-Stack"
    },
    {
      title: "E-Commerce Frontend",
      description: "Modern e-commerce interface built with React.js, featuring product catalogs, shopping cart, and responsive design.",
      tech: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
      image: "🛒",
      category: "Frontend"
    },
    {
      title: "Interactive To-Do App",
      description: "Feature-rich task management application with drag-and-drop functionality, local storage, and priority settings.",
      tech: ["React.js", "Local Storage", "CSS3", "JavaScript"],
      image: "✅",
      category: "Frontend"
    },
    {
      title: "Inventory Management System",
      description: "Complete inventory tracking system with CRUD operations, search functionality, and data visualization.",
      tech: ["React.js", "API Integration", "Charts", "Database"],
      image: "📦",
      category: "Full-Stack"
    },
    {
      title: "Learning Display App",
      description: "Educational platform built for beginners, featuring interactive tutorials and progress tracking.",
      tech: ["React.js", "Educational Content", "Progress Tracking"],
      image: "🎓",
      category: "Frontend"
    },
    {
      title: "E-Commerce Landing Page",
      description: "High-converting landing page with modern design, optimized for performance and user engagement.",
      tech: ["HTML5", "CSS3", "JavaScript", "SEO Optimization"],
      image: "🛍️",
      category: "Frontend"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent projects and technical achievements in web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group card-3d rounded-2xl overflow-hidden">
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 btn-3d bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="btn-3d border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card-3d rounded-2xl p-8 bg-gradient-to-r from-primary/5 to-accent/5">
            <h3 className="text-2xl font-bold mb-4">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and create amazing digital experiences.
            </p>
            <Button className="btn-3d bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;