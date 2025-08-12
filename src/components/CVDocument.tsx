import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CVDocument = () => {
  const downloadCV = () => {
    const element = document.getElementById('cv-content');
    if (element) {
      const opt = {
        margin: 0.5,
        filename: 'Teju_Khatri_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
      // Create a new window with the CV content for printing/saving
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Teju Khatri - CV</title>
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { font-family: 'Arial', sans-serif; line-height: 1.4; color: #333; background: white; }
              .cv-container { max-width: 800px; margin: 0 auto; padding: 40px; }
              .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2563eb; padding-bottom: 20px; }
              .name { font-size: 36px; font-weight: bold; color: #2563eb; margin-bottom: 10px; }
              .contact-info { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 10px; }
              .contact-item { font-size: 14px; color: #666; }
              .section { margin-bottom: 25px; }
              .section-title { font-size: 18px; font-weight: bold; color: #2563eb; margin-bottom: 15px; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; }
              .summary-text { text-align: justify; color: #555; margin-bottom: 15px; }
              .education-item, .project-item { margin-bottom: 15px; }
              .degree { font-weight: bold; color: #333; }
              .institution { color: #2563eb; font-weight: 600; }
              .date { color: #666; font-style: italic; }
              .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
              .skill-category { }
              .skill-category-title { font-weight: bold; color: #2563eb; margin-bottom: 8px; }
              .skill-list { list-style: none; }
              .skill-list li { padding: 2px 0; color: #555; }
              .skill-list li:before { content: "•"; color: #2563eb; margin-right: 8px; }
              .project-title { font-weight: bold; color: #333; margin-bottom: 5px; }
              .project-desc { color: #555; margin-bottom: 5px; }
              .tech-stack { color: #2563eb; font-size: 12px; }
              @media print { body { -webkit-print-color-adjust: exact; } }
            </style>
          </head>
          <body>
            <div class="cv-container">
              <div class="header">
                <h1 class="name">Teju Khatri</h1>
                <div class="contact-info">
                  <span class="contact-item">+977 9803782549</span>
                  <span class="contact-item">tejukhatri533@gmail.com</span>
                  <span class="contact-item">GitHub.com/TejuKhatri</span>
                  <span class="contact-item">LinkedIn.com/in/teju-khatri</span>
                </div>
                <div class="contact-info">
                  <span class="contact-item">Kapilkash, Pokhara-14</span>
                </div>
              </div>

              <div class="section">
                <h2 class="section-title">Summary</h2>
                <p class="summary-text">
                  I am a self-driven and detail-oriented Bachelor of Information Technology (BIT) student 
                  with hands-on experience in full-stack web development. I specialize in building dynamic 
                  and responsive user interfaces using JavaScript, React.js and developing secure, 
                  efficient backend systems with Node.js. I have practical experience working with both 
                  SQL and NoSQL databases, and I am passionate about creating scalable solutions. I can 
                  handle a wide range of data management tasks. I follow clean code practices and object-
                  oriented programming principles to ensure maintainable and efficient code.
                </p>
              </div>

              <div class="section">
                <h2 class="section-title">Education</h2>
                <div class="education-item">
                  <div class="degree">Bachelor of Information Technology</div>
                  <div class="institution">Informatics College of Pokhara, Nepal</div>
                  <div class="date">April 2024 - Present</div>
                </div>
              </div>

              <div class="section">
                <h2 class="section-title">Skills and Interest</h2>
                <div class="skills-grid">
                  <div class="skill-category">
                    <h3 class="skill-category-title">Technical Skills</h3>
                    <h4 style="font-weight: 600; margin: 10px 0 5px 0;">Frontend Development</h4>
                    <ul class="skill-list">
                      <li>Languages: JavaScript, HTML5, CSS3</li>
                      <li>Library: React.js</li>
                      <li>API: REST API, Axios, Fetch</li>
                      <li>Database Management: MySQL, PostgreSQL, MongoDB</li>
                      <li>CSS Framework: Tailwind CSS</li>
                    </ul>
                    
                    <h4 style="font-weight: 600; margin: 15px 0 5px 0;">Backend Development</h4>
                    <ul class="skill-list">
                      <li>Node.js</li>
                      <li>Basic Java</li>
                    </ul>
                  </div>

                  <div class="skill-category">
                    <h3 class="skill-category-title">Tools</h3>
                    <ul class="skill-list">
                      <li>Version Control: Git</li>
                      <li>Development: Docker, CRUD (Basic Knowledge)</li>
                      <li>UI/UX: Postman, Thunder Client</li>
                    </ul>

                    <h3 class="skill-category-title" style="margin-top: 20px;">Soft Skills</h3>
                    <ul class="skill-list">
                      <li>Communication</li>
                      <li>Team Collaboration</li>
                      <li>Critical Thinking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="section">
                <h2 class="section-title">Personal Projects</h2>
                
                <div class="project-item">
                  <div class="project-title">Inventory management system</div>
                  <div class="project-desc">Interactive To-Do List React.js</div>
                </div>

                <div class="project-item">
                  <div class="project-title">E-Commerce Landing Page</div>
                  <div class="project-desc">A simple e-commerce front-end (React.js)</div>
                  <div class="tech-stack">Commercial portfolio app (HTML, CSS, JavaScript)</div>
                </div>

                <div class="project-item">
                  <div class="project-title">A beginner-friendly app to display user learning (React.js)</div>
                </div>

                <div class="project-item">
                  <div class="project-title">Food delivery website</div>
                </div>

                <div class="project-item">
                  <div class="project-title">A full-stack website built with React.js frontend, Node.js backend, and MongoDB database.</div>
                </div>
              </div>
            </div>
          </body>
          </html>
        `);
        printWindow.document.close();
        
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 250);
      }
    }
  };

  return (
    <Button 
      variant="outline" 
      className="group btn-3d border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold glass-card"
      onClick={downloadCV}
    >
      <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
      Download CV
    </Button>
  );
};

export default CVDocument;