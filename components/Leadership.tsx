import React from 'react';
import { Users, Heart, Scale } from 'lucide-react';

const Leadership: React.FC = () => {
  return (
    <section className="py-20 bg-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Leadership Philosophy</h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-6">
              I am a strong advocate for the <span className="text-white font-semibold">Scandinavian leadership style</span>. 
              I believe that the best results come from environments where hierarchy is flat, and every voice is heard.
            </p>
            <p className="text-teal-100 text-lg leading-relaxed">
              My approach is built on high trust, transparency, and equality. I strive to create a culture where team members feel empowered to take ownership, share ideas openly, and collaborate without barriers.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-teal-800/50 p-6 rounded-xl border border-teal-700/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-500/20 rounded-lg text-teal-300">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Flat Structure</h3>
                  <p className="text-teal-200/80">Removing unnecessary hierarchy to speed up decision making and foster direct communication.</p>
                </div>
              </div>
            </div>

            <div className="bg-teal-800/50 p-6 rounded-xl border border-teal-700/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-500/20 rounded-lg text-teal-300">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">High Trust</h3>
                  <p className="text-teal-200/80">Believing in the team's expertise and giving them the autonomy to excel without micromanagement.</p>
                </div>
              </div>
            </div>

            <div className="bg-teal-800/50 p-6 rounded-xl border border-teal-700/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-500/20 rounded-lg text-teal-300">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Equality</h3>
                  <p className="text-teal-200/80">Ensuring equal opportunities and respect for everyone, regardless of their role or seniority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
