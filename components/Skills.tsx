import React from 'react';

const skills = {
  core: [
    { name: "C# 8 & .NET Core", level: 95 },
    { name: "Web API", level: 95 },
    { name: "Entity Framework Core", level: 90 },
    { name: "SQL / T-SQL", level: 85 },
    { name: "Legacy (WinForms / WebForms)", level: 90 },
  ],
  frontend: [
    { name: "Blazor", level: 80 },
    { name: "Fluent UI / Material UI", level: 80 },
    { name: "React.js", level: 60 },
    { name: "DevExpress", level: 60 },
  ],
  cloud: [
    { name: "Amazon AWS", level: 65 },
    { name: "Azure Cloud", level: 50 },
    { name: "Azure DevOps", level: 10 },
    { name: "Docker", level: 10 },
  ]
};

const SkillBar: React.FC<{ name: string; level: number; colorClass: string }> = ({ name, level, colorClass }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-slate-700">{name}</span>
      <span className="text-sm font-medium text-slate-500">{level}%</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2.5">
      <div 
        className={`h-2.5 rounded-full ${colorClass}`} 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit built over two decades of continuous learning and application.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Backend Column */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center border-b pb-4 border-slate-100">
              <span className="w-2 h-8 bg-blue-600 rounded mr-3"></span>
              Backend & Data
            </h3>
            {skills.core.map(s => (
              <SkillBar key={s.name} name={s.name} level={s.level} colorClass="bg-blue-600" />
            ))}
          </div>

          {/* Frontend Column */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center border-b pb-4 border-slate-100">
              <span className="w-2 h-8 bg-teal-500 rounded mr-3"></span>
              Frontend UI
            </h3>
            {skills.frontend.map(s => (
              <SkillBar key={s.name} name={s.name} level={s.level} colorClass="bg-teal-500" />
            ))}
          </div>

          {/* Cloud Column */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center border-b pb-4 border-slate-100">
              <span className="w-2 h-8 bg-purple-600 rounded mr-3"></span>
              Cloud & DevOps
            </h3>
            {skills.cloud.map(s => (
              <SkillBar key={s.name} name={s.name} level={s.level} colorClass="bg-purple-600" />
            ))}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-sm text-slate-500 italic">
                Currently pursuing AWS Solution Architect Certifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;