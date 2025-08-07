import { ExternalLink, Github, Folder, Star, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Food Delivery Website",
      description: "Full-stack application with React.js frontend, Node.js backend, and MongoDB. Features delivery tracking and real-time location updates.",
      tech: ["React.js", "Node.js", "MongoDB", "Real-time APIs"],
      image: "🍕",
      category: "Full-Stack",
      featured: true,
      status: "Completed",
      year: "2024"
    },
    {
      title: "E-Commerce Frontend",
      description: "Modern e-commerce interface built with React.js, featuring product catalogs, shopping cart, and responsive design.",
      tech: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
      image: "🛒",
      category: "Frontend",
      featured: true,
      status: "Completed",
      year: "2024"
    },
    {
      title: "Interactive To-Do App",
      description: "Feature-rich task management application with drag-and-drop functionality, local storage, and priority settings.",
      tech: ["React.js", "Local Storage", "CSS3", "JavaScript"],
      image: "✅",
      category: "Frontend",
      featured: false,
      status: "Completed",
      year: "2024"
    },
    {
      title: "Inventory Management System",
      description: "Complete inventory tracking system with CRUD operations, search functionality, and data visualization.",
      tech: ["React.js", "API Integration", "Charts", "Database"],
      image: "📦",
      category: "Full-Stack",
      featured: true,
      status: "Completed",
      year: "2024"
    },
    {
      title: "Learning Display App",
      description: "Educational platform built for beginners, featuring interactive tutorials and progress tracking.",
      tech: ["React.js", "Educational Content", "Progress Tracking"],
      image: "🎓",
      category: "Frontend",
      featured: false,
      status: "In Progress",
      year: "2024"
    },
    {
      title: "E-Commerce Landing Page",
      description: "High-converting landing page with modern design, optimized for performance and user engagement.",
      tech: ["HTML5", "CSS3", "JavaScript", "SEO Optimization"],
      image: "🛍️",
      category: "Frontend",
      featured: false,
      status: "Completed",
      year: "2024"
    }
  ];

  const categories = ["All", "Full-Stack", "Frontend"];

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/10"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl floating-shape"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl floating-shape" style={{animationDelay: "2s"}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center glass-card rounded-full px-6 py-3 mb-6">
            <Folder className="w-5 h-5 mr-2 text-primary" />
            <span className="text-sm font-medium">My Work</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-gradient text-glow">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent projects and technical achievements in web development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="glass-card rounded-2xl p-2 inline-flex gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                  index === 0 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className={`group glass-card rounded-3xl overflow-hidden card-3d hover:scale-105 transition-all duration-500 ${
              project.featured ? "lg:col-span-1 md:row-span-1" : ""
            }`}>
              {/* Project Header */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center overflow-hidden">
                {/* Project Icon/Emoji */}
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                
                {/* Floating badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.featured && (
                    <div className="glass-dark rounded-full px-3 py-1 flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" fill="currentColor" />
                      <span className="text-xs font-medium">Featured</span>
                    </div>
                  )}
                  <div className={`glass-dark rounded-full px-3 py-1 text-xs font-medium ${
                    project.status === "Completed" ? "text-green-400" : "text-orange-400"
                  }`}>
                    {project.status}
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="glass-dark rounded-full px-3 py-1 text-xs font-medium">
                    {project.year}
                  </div>
                </div>

                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.year}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-md border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 btn-3d bg-primary hover:bg-primary/90 group-hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="btn-3d border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground group-hover:scale-105 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto card-3d relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                I'm always excited to take on new challenges and create amazing digital experiences. 
                Let's collaborate and build something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-3d bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg hover:scale-105 transition-all duration-300">
                  <Star className="w-5 h-5 mr-2" />
                  Start a Project
                </Button>
                <Button variant="outline" className="btn-3d border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg hover:scale-105 transition-all duration-300">
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;