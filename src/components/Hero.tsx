import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Full Stack Developer
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Crafting beautiful and functional web experiences with modern technologies.
          Specialized in React, Node.js, and cloud solutions.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
        >
          View My Work
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}