import { Code, GraduationCap, Heart, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "7+" },
    { icon: GraduationCap, label: "Years of Study", value: "1+" },
    { icon: Heart, label: "Technologies", value: "8+" },
    { icon: Users, label: "Happy Clients", value: "5+" },
  ];

  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 80 },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate IT student with a focus on frontend development and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm currently studying at <strong>Informatics College Pokhara</strong> since 2024, 
              pursuing my passion for technology and web development. My specialization lies in 
              frontend development, where I create engaging, user-friendly interfaces using modern technologies.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With expertise in <strong>React.js, HTML, CSS, and JavaScript</strong>, I focus on 
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

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center card-3d p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;