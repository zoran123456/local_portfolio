import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dotnet' | 'aws'>('dotnet');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-teal-50 to-transparent opacity-60 rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-50 to-transparent opacity-60 rounded-tr-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium border border-teal-200">
              <span className="flex h-2 w-2 rounded-full bg-teal-600 mr-2"></span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-tight">
              Architecting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Scalable Solutions
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Senior Full-stack .NET Developer transitioning into Solution Architecture. 
              With nearly 20 years of experience building robust enterprise applications, 
              I bridge the gap between complex code and strategic infrastructure.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all"
              >
                Get in touch
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </a>
              
              <div className="flex items-center gap-4 px-4">
                <a href="https://github.com/zoran123456" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/zbosnjak-dev/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:zoran0406@hotmail.com" className="text-slate-400 hover:text-teal-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800">
                {/* Editor Header */}
                <div className="bg-slate-800 flex items-center justify-between px-4 py-2">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    {/* Tabs */}
                    <div className="flex space-x-1 bg-slate-950/30 rounded-lg p-1 ml-6">
                        <button 
                          onClick={() => setActiveTab('dotnet')}
                          className={`px-3 py-1 text-xs font-mono rounded transition-all duration-200 ${activeTab === 'dotnet' ? 'bg-slate-700 text-blue-300 shadow-sm' : 'text-slate-500 hover:text-slate-400'}`}
                        >
                          BackendService.cs
                        </button>
                        <button 
                          onClick={() => setActiveTab('aws')}
                          className={`px-3 py-1 text-xs font-mono rounded transition-all duration-200 ${activeTab === 'aws' ? 'bg-slate-700 text-yellow-300 shadow-sm' : 'text-slate-500 hover:text-slate-400'}`}
                        >
                          InfraStack.yaml
                        </button>
                    </div>
                    <div className="w-10"></div> {/* Spacer */}
                </div>

                {/* Code Content */}
                <div className="p-6 pt-4 font-mono text-sm text-slate-300 leading-relaxed min-h-[340px]">
                    {activeTab === 'dotnet' ? (
                      <div className="animate-fadeIn">
                        <p><span className="text-purple-400">public async</span> <span className="text-yellow-300">Task</span>&lt;<span className="text-blue-300">Result</span>&gt; <span className="text-yellow-300">ProcessAsync</span>(Req r) {'{'}</p>
                        <p className="pl-4 text-slate-500">// Implements Clean Architecture</p>
                        <p className="pl-4"><span className="text-blue-300">var</span> entity = <span className="text-purple-400">await</span> _repo.<span className="text-yellow-300">GetByIdAsync</span>(r.Id);</p>
                        <br/>
                        <p className="pl-4"><span className="text-purple-400">if</span> (entity.Status == Status.Active) {'{'}</p>
                        <p className="pl-8"><span className="text-purple-400">await</span> _service.<span className="text-yellow-300">CalculatePremium</span>(entity);</p>
                        <p className="pl-8"><span className="text-purple-400">await</span> _db.<span className="text-yellow-300">SaveChangesAsync</span>();</p>
                        <br/>
                        <p className="pl-8"><span className="text-purple-400">return</span> Result.<span className="text-yellow-300">Success</span>(entity);</p>
                        <p className="pl-4">{'}'}</p>
                        <br/>
                        <p className="pl-4"><span className="text-purple-400">return</span> Result.<span className="text-yellow-300">Fail</span>(<span className="text-green-300">"Invalid State"</span>);</p>
                        <p>{'}'}</p>
                      </div>
                    ) : (
                      <div className="animate-fadeIn">
                        <p><span className="text-slate-500"># AWS CloudFormation / SAM</span></p>
                        <p><span className="text-purple-400">Resources:</span></p>
                        <p className="pl-4"><span className="text-blue-300">InsurancePolicyFunction:</span></p>
                        <p className="pl-8"><span className="text-purple-400">Type:</span> <span className="text-green-300">AWS::Serverless::Function</span></p>
                        <p className="pl-8"><span className="text-purple-400">Properties:</span></p>
                        <p className="pl-12"><span className="text-purple-400">Handler:</span> App::Handler</p>
                        <p className="pl-12"><span className="text-purple-400">Runtime:</span> dotnet8</p>
                        <p className="pl-12"><span className="text-purple-400">Events:</span></p>
                        <p className="pl-16"><span className="text-blue-300">Api:</span></p>
                        <p className="pl-20"><span className="text-purple-400">Type:</span> Api</p>
                        <p className="pl-20"><span className="text-purple-400">Properties:</span></p>
                        <p className="pl-24"><span className="text-purple-400">Path:</span> /policies</p>
                        <p className="pl-24"><span className="text-purple-400">Method:</span> post</p>
                        <p className="pl-12"><span className="text-purple-400">Policies:</span></p>
                        <p className="pl-16">- <span className="text-blue-300">DynamoDBCrudPolicy:</span></p>
                        <p className="pl-24"><span className="text-purple-400">TableName:</span> !Ref PoliciesTable</p>
                      </div>
                    )}
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;