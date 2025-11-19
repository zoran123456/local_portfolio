import React from 'react';
import { Mail, MapPin, Download, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-900 text-white py-24 scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Let's Build Something Great</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            With a strong background in both technical leadership and hands-on development, I can help scale your solutions.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
            <div className="flex flex-col items-center gap-3 group">
              <div className="p-4 bg-slate-800 rounded-full group-hover:bg-teal-900/30 transition-colors">
                <Mail className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <a href="mailto:zoran0406@hotmail.com" className="text-xl font-medium hover:text-teal-400 transition-colors">zoran0406@hotmail.com</a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 group">
              <div className="p-4 bg-slate-800 rounded-full group-hover:bg-teal-900/30 transition-colors">
                <MapPin className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Location</p>
                <p className="text-xl font-medium">Rijeka, Croatia</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`${import.meta.env.BASE_URL}newCV.pdf`} download className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-teal-600 text-teal-400 font-medium rounded-full hover:bg-teal-600 hover:text-white transition-all text-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
              </a>
              <a href="https://www.linkedin.com/in/zbosnjak-dev/" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition-all text-lg shadow-lg shadow-blue-900/30">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
              </a>
          </div>
        
        <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Zoran Bošjak. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;