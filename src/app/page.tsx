import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, ShieldAlert, Terminal, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Subtle Header */}
      <nav className="border-b border-slate-100 py-4 px-6 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <span className="font-bold tracking-tighter text-xl">mimic<span className="text-blue-600">_</span></span>
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="mailto:optionalddram@gmail.com" className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">Contact</a>
        </div>
      </nav>

      {/* Hero: The "Hire Me" Statement */}
      <header className="max-w-5xl mx-auto pt-24 pb-16 px-6">
        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Full-Stack Developer <br /> 
          <span className="text-blue-600">Building Secure Systems.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-8">
          Based in Tempe, AZ. Currently specializing in <span className="font-semibold text-slate-900">TypeScript</span> and <span className="font-semibold text-slate-900">Next.js</span> at Persevere. 
          I bridge the gap between high-performance web apps and offensive security research.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/optionalddram-jpg" className="flex items-center gap-2 bg-slate-100 px-5 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all">
            <Github size={20} /> GitHub
          </a>
        </div>
      </header>

      {/* Skill Grid: Pro Level */}
      <section id="skills" className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-12">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <Code2 className="mb-4 text-blue-600" />
              <h3 className="font-bold text-lg mb-2">Frontend Engineering</h3>
              <p className="text-slate-500 text-sm mb-4 text-balance">Modern UI development with React, Tailwind CSS, and Type-safe Props.</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js 15', 'Tailwind', 'Framer Motion'].map(s => <span key={s} className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold uppercase">{s}</span>)}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <Terminal className="mb-4 text-blue-600" />
              <h3 className="font-bold text-lg mb-2">Backend & Logic</h3>
              <p className="text-slate-500 text-sm mb-4 text-balance">Scalable server-side logic using Node.js and Python for automation.</p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'TypeScript', 'PostgreSQL', 'Python'].map(s => <span key={s} className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold uppercase">{s}</span>)}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <ShieldAlert className="mb-4 text-blue-600" />
              <h3 className="font-bold text-lg mb-2">Cybersecurity</h3>
              <p className="text-slate-500 text-sm mb-4 text-balance">Active Bug Bounty hunter on Intigriti focusing on XSS and Logic flaws.</p>
              <div className="flex flex-wrap gap-2">
                {['Burp Suite', 'OWASP Top 10', 'Linux', 'Vulnerability Research'].map(s => <span key={s} className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold uppercase">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theory & Obsession Footer */}
      <footer className="py-20 px-6 text-center border-t border-slate-100">
        <p className="text-slate-400 text-sm mb-4 tracking-widest uppercase font-bold italic">Persistence + Obsession</p>
        <p className="max-w-xl mx-auto text-slate-600 italic">
          "Currently honing my craft at Persevere, focusing on the intersection of clean code and system resilience."
        </p>
      </footer>
    </div>
  );
}
