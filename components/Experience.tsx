import React from 'react';
import { Briefcase, Calendar, ArrowRightCircle } from 'lucide-react';
import { JobPosition } from '../types';

const positions: JobPosition[] = [
  {
    id: '1',
    role: 'Senior Engineer & Team Lead',
    company: 'Global Tech Consultancy', // Replaces IOLAP, INC.
    period: 'Feb 2024 - Present',
    description: [
      'Full-time technical and team lead for a Global Reinsurance Client.',
      'Lead and mentor a cross-functional team of 6 developers and QA specialists.',
      'Drive sprint planning, backlog refinement, and bi-monthly strategic sessions.',
      'Collaborate with Product Owner to define and prioritize user stories.',
      'Architect technical solutions and establish coding best practices.',
      'Conduct code reviews, oversee documentation, and manage stakeholder relationships.'
    ],
    techStack: ['C#', '.NET', 'React', 'Team Leadership']
  },
  {
    id: '2',
    role: 'Team Lead',
    company: 'Financial Software Agency', // Replaces IT SISTEMI
    period: 'Aug 2022 - Feb 2024',
    description: [
      'Led a team of 3-5 developers working on a completely new in-house software platform.',
      'Managed project timelines, ticket writing, and coordination with project consultants.',
      'Facilitated inter-team coordination between DevOps and QA.',
      'Resolved technical challenges and mediated team conflicts.'
    ],
    techStack: ['WebApi 2', 'React.js', 'Fluent UI', 'Management']
  },
  {
    id: '3',
    role: 'Software Contractor',
    company: 'Global Reinsurance Provider', // Replaces RenaissanceRe
    period: 'June 2021 - Mar 2025',
    description: [
      'Part-time role focusing on specialized underwriting applications.',
      'Maintained and developed large scale applications for Underwriters.',
      'Utilized AWS services for modern cloud infrastructure integration.',
      'Worked with complex data handling using Elastic Stack.'
    ],
    techStack: ['WinForms', 'C# 8', 'Blazor', 'AWS', 'Elastic Stack']
  },
  {
    id: '4',
    role: 'Senior Software Engineer',
    company: 'US-Based Tech Consultancy', // Replaces IOLAP
    period: 'Aug 2018 - May 2021',
    description: [
      'Worked exclusively with US-based clients in the Energy and Oil & Gas sectors.',
      'Developed SQL Caching Layers and Azure Mobile Web Services.',
      'Built Azure Functions for data transformation and import pipelines.',
      'Developed and maintained console apps and web solutions for auto-insurance programs.',
      'Created internal Azure Web Applications using Modern Auth (JWT, Azure AD).'
    ],
    techStack: ['Azure Functions', 'SQL', 'GraphQL', 'React.js', 'MobX', 'Material UI']
  },
  {
    id: '5',
    role: 'Senior Software Engineer',
    company: 'Enterprise Insurance Solutions', // Replaces IN CUBIS
    period: 'Jan 2008 - Aug 2018',
    description: [
      'Developed large enterprise solutions for multiple Insurance Companies.',
      'Designed CMS software for publishing news and customer documents.',
      'Created web services for 3rd party integration (selling premiums, policy generation).',
      'Developed a Travel Insurance Webshop for a major regional insurer.'
    ],
    techStack: ['Enterprise Architecture', 'CMS', 'Web Services', 'E-commerce']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1.5 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-6 top-2 bottom-2 w-0.5 bg-slate-200"></div>

            {positions.map((job) => (
              <div key={job.id} className="relative md:pl-20">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 bg-white border-2 border-teal-500 rounded-full items-center justify-center z-10">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{job.role}</h3>
                      <h4 className="text-lg text-slate-600 font-medium">{job.company}</h4>
                    </div>
                    <div className="flex items-center text-slate-500 text-sm font-medium bg-slate-50 px-3 py-1 rounded-full self-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      {job.period}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {job.description.map((item, index) => (
                      <li key={index} className="flex items-start text-slate-600 leading-relaxed">
                        <ArrowRightCircle className="w-5 h-5 text-teal-400 mr-3 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                    {job.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;