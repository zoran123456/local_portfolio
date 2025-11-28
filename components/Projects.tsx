import React from 'react';
import { Github, ExternalLink, Code2, BookOpen, Layout, Database, Terminal } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "K9 - Modular Monolith",
    description: "A robust, production-ready .NET 8 Modular Monolith reference architecture, showcasing Domain-Driven Design (DDD), CQRS, and advanced Geospatial features with PostGIS.",
    tags: [".NET 8", "Modular Monolith", "DDD", "PostGIS"],
    link: "https://github.com/zoran123456/K9",
    icon: <Database className="w-6 h-6 text-teal-600" />
  },
  {
    title: "HRTool Backend",
    description: "Modular HR management backend built with ASP.NET Core WebAPI, Entity Framework Core, and SQLite, following Clean Architecture principles.",
    tags: [".NET 8", "Clean Architecture", "EF Core", "SQLite"],
    link: "https://github.com/zoran123456/hrtool-clean-architecture",
    icon: <Layout className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Loan Amortization Calculator",
    description: "High-precision, client-side FinTech application built with .NET 8 Blazor WebAssembly. Demonstrates financial math precision and performant UI.",
    tags: [".NET 8", "Blazor WASM", "MudBlazor", "FinTech"],
    link: "https://github.com/zoran123456/LoanAmortizationCalculator",
    icon: <Code2 className="w-6 h-6 text-purple-600" />
  },
  {
    title: "ASP.NET Core Web API Book",
    description: "A practical guide for Angular developers to learn ASP.NET Core Web API. 10-week learning plan with practical examples.",
    tags: ["Education", "Book", "ASP.NET Core", "Croatian"],
    link: "https://github.com/zoran123456/webapi-book-croatian",
    icon: <BookOpen className="w-6 h-6 text-orange-600" />
  },
  {
    title: "Comic Smart Panels",
    description: "Smart Panels Creator/Viewer for CBR/CBZ files. WPF application for designing and viewing smart panels in digital comics.",
    tags: ["WPF", ".NET Framework", "Desktop App", "Graphics"],
    link: "https://github.com/zoran123456/Comic-Smart-Panels",
    icon: <Terminal className="w-6 h-6 text-slate-600" />
  },
  {
    title: "Ardalis.Specification Example",
    description: "Example project demonstrating the Specification pattern implementation using Ardalis.Specification package for cleaner data access.",
    tags: [".NET", "DDD", "Specification Pattern", "Best Practices"],
    link: "https://github.com/zoran123456/Ardalis.Specification-Example",
    icon: <Code2 className="w-6 h-6 text-green-600" />
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Open Source Projects</h2>
          <div className="w-20 h-1.5 bg-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            I believe in giving back to the community. Here are some of my open-source projects 
            showcasing architectural patterns, best practices, and creative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-teal-50 transition-colors">
                  {project.icon}
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com/zoran123456" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-700 font-medium transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View more on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
