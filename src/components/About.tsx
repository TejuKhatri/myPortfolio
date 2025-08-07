import { Code, GraduationCap, Heart, Users, Award, Zap, Brain, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "7+", color: "text-blue-500" },
    { icon: GraduationCap, label: "Years of Study", value: "1+", color: "text-green-500" },
    { icon: Heart, label: "Technologies", value: "8+", color: "text-red-500" },
    { icon: Users, label: "Happy Clients", value: "5+", color: "text-purple-500" },
  ];

  const skills = [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "JavaScript", level: 85, icon: "🟨" },
    { name: "HTML/CSS", level: 95, icon: "🎨" },
    { name: "Node.js", level: 75, icon: "🟢" },
    { name: "MongoDB", level: 70, icon: "🍃" },
    { name: "MySQL", level: 80, icon: "🐬" },
  ];

  const achievements = [
    { icon: Award, title: "Modern Web Development", desc: "Specialized in cutting-edge frontend technologies" },
    { icon: Zap, title: "Fast Learner", desc: "Quickly adapting to new technologies and frameworks" },
    { icon: Brain, title: "Problem Solver", desc: "Creative solutions for complex technical challenges" },
    { icon: Target, title: "Goal Oriented", desc: "Focused on delivering exceptional user experiences" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-shape"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/15 rounded-full blur-2xl floating-shape" style={{animationDelay: "3s"}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center glass-card rounded-full px-6 py-3 mb-6">
            <Brain className="w-5 h-5 mr-2 text-primary" />
            <span className="text-sm font-medium">Getting to know me</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-gradient text-glow">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate IT student with a focus on frontend development and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Enhanced Story Section */}
          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-8 card-3d">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently studying at <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md">Informatics College Pokhara</span> since 2024, 
                  pursuing my passion for technology and web development. My specialization lies in 
                  frontend development, where I create engaging, user-friendly interfaces using modern technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With expertise in <span className="text-primary font-semibold">React.js, HTML, CSS, and JavaScript</span>, I focus on 
                  building responsive, accessible websites that provide excellent user experiences. 
                  I also have knowledge in backend technologies including Node.js and database management 
                  with MySQL, PostgreSQL, and MongoDB.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, I enjoy learning about new web technologies, working on personal 
                  projects, and contributing to the developer community. My goal is to create digital 
                  solutions that make a positive impact.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-card rounded-2xl p-6 card-3d group hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <achievement.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-8 card-3d">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Skills & Technologies</h3>
              </div>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="glass-dark px-3 py-1 rounded-full">
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-border/50 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary via-primary to-accent rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass-card rounded-3xl p-8 card-3d group hover:scale-105 transition-all duration-300 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-3xl mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="glass-card rounded-3xl p-8 mx-auto max-w-2xl card-3d relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate and create something amazing together using modern web technologies.
              </p>
              <button className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-semibold btn-3d hover:scale-105 transition-all duration-300">
                <Heart className="w-5 h-5 mr-2" />
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;