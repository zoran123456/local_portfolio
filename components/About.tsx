import React from 'react';
import { Globe, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative group order-last md:order-first">
             <div className="absolute inset-0 bg-teal-600 rounded-2xl rotate-6 opacity-10 group-hover:rotate-3 transition-transform duration-300"></div>
             <div className="absolute inset-0 bg-slate-900 rounded-2xl -rotate-2 opacity-5 group-hover:-rotate-1 transition-transform duration-300"></div>
             <img 
               src="/profile.JPG" 
               alt="Zoran Bošjak" 
               className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5] filter grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I am a Full-stack .NET Developer with almost 20 years of experience building modern web applications. 
                Throughout my career, I’ve led and delivered projects for large enterprise clients, specifically specializing in the insurance industry.
              </p>
              <p>
                Currently, I am channeling my deep technical expertise into <span className="font-semibold text-teal-700">Solution Architecture</span>, 
                working towards Amazon AWS Solution Architect certifications. I am passionate about solving real-world problems with clean code and clear, open teamwork.
              </p>
              <p>
                I embrace the latest technologies, combining proven .NET frameworks with cutting-edge AI tools like ChatGPT and GitHub Copilot to enhance productivity and innovation. 
                I value clear processes, simple solutions, and knowledge sharing—whether through mentoring junior developers or writing technical documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-teal-100 text-teal-600 rounded-lg">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Global Experience</h3>
                </div>
                <p className="text-slate-600 text-xs">
                  Strong track record with USA, Ireland, and UK clients.
                </p>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Modern Stack</h3>
                </div>
                <p className="text-slate-600 text-xs">
                  .NET 8, Web API, React.js, AWS Cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;