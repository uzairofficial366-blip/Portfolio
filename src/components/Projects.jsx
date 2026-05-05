'use client';
import { useState } from 'react';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'AI/NLP', 'Full Stack', 'Frontend'];

  const projects = [
    {
      title: 'Urdu Sentiment Analysis Model',
      subtitle: 'NLP Research Project',
      description: 'Developed a transformer-based Urdu Sentiment Analysis model using fine-tuned multilingual BERT. Focused on low-resource language challenges and achieving state-of-the-art performance on Urdu text classification.',
      role: 'AI/NLP Research Engineer',
      businessImpact: 'Advances Urdu AI research and enables sentiment analysis for Urdu social media, reviews, and news content.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&h=600&fit=crop',
      technologies: ['Python', 'Hugging Face', 'BERT', 'Transformers', 'PyTorch', 'NLP'],
      category: 'AI/NLP',
      github: 'https://github.com/uzairofficial366-blip',
      live: '',
    },
    {
      title: 'Educational AI Chatbot',
      subtitle: 'LLM-Powered Learning Assistant',
      description: 'Built an educational chatbot using RAG (Retrieval-Augmented Generation) with LangChain and FAISS for intelligent document retrieval. Enables students to query course materials and get contextual answers.',
      role: 'Generative AI Engineer',
      businessImpact: 'Enhances student learning by providing instant, contextual answers from course materials using AI.',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=600&fit=crop',
      technologies: ['LangChain', 'RAG', 'FAISS', 'OpenAI API', 'Python', 'Hugging Face'],
      category: 'AI/NLP',
      github: 'https://github.com/uzairofficial366-blip',
      live: '',
    },
    {
      title: 'Automated MCQ Generation System',
      subtitle: 'Generative AI for Education',
      description: 'Designed an automated MCQ generation pipeline powered by fine-tuned GPT and T5 models. Takes educational text as input and generates high-quality multiple choice questions with distractors.',
      role: 'Generative AI Engineer',
      businessImpact: 'Reduces teacher workload and enables rapid assessment creation for educational institutions.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&h=600&fit=crop',
      technologies: ['GPT Fine-tuning', 'T5', 'Python', 'Hugging Face', 'PyTorch', 'NLP'],
      category: 'AI/NLP',
      github: 'https://github.com/uzairofficial366-blip',
      live: '',
    },
    {
      title: 'Agentic AI Workflow System',
      subtitle: 'LangChain & LangGraph Agents',
      description: 'Built multi-step agentic AI workflows using LangChain and LangGraph. The system autonomously plans and executes tasks, uses tools, and handles multi-turn reasoning for complex problem solving.',
      role: 'AI Engineer',
      businessImpact: 'Demonstrates advanced AI automation capabilities for enterprise workflow optimization.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=600&fit=crop',
      technologies: ['LangChain', 'LangGraph', 'OpenAI API', 'Python', 'RAG', 'Agentic AI'],
      category: 'AI/NLP',
      github: 'https://github.com/uzairofficial366-blip',
      live: '',
    },
    {
      title: 'School Management System',
      subtitle: 'Full Stack SaaS Platform',
      description: 'A multi-tenant school management ERP built with Next.js, Prisma, and PostgreSQL (Neon). Features role-based dashboards for Admin, Teachers, Students, Parents, and more with full auth and fee management.',
      role: 'Full Stack Developer',
      businessImpact: 'Provides institutions with a unified platform for academics, attendance, fees, and communication.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&h=600&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind CSS'],
      category: 'Full Stack',
      github: 'https://github.com/uzairofficial366-blip/SCHOOL-MANAGEMENT-SYSTEM',
      live: 'https://school-management-system-6p34.vercel.app',
    },
    {
      title: 'AI-Integrated Web Application',
      subtitle: 'LLM-Powered Full Stack App',
      description: 'A full stack web application integrating LLM capabilities via API, featuring intelligent search, AI-powered recommendations, and automated data processing with a React frontend and Node.js backend.',
      role: 'Full Stack AI Developer',
      businessImpact: 'Demonstrates seamless integration of AI capabilities into production web applications.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'OpenAI API', 'LangChain', 'MongoDB', 'REST APIs'],
      category: 'Full Stack',
      github: 'https://github.com/uzairofficial366-blip',
      live: '',
    },
  ];

  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Selected Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            A snapshot of AI/NLP systems, Generative AI projects, and full stack applications — focusing on
            real-world intelligent system design and production deployment.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <FiFilter /><span>Filter by focus</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button key={filter} onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm border transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900'
                }`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <div key={project.title} className="group bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col">
              <div className="relative h-30 sm:h-39 overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${project.image})` }} />
              </div>

              <div className="flex-1 p-4 flex flex-col">
                <div className="mb-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">{project.category}</p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{project.subtitle}</p>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">{project.description}</p>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-3">
                  Role: <span className="font-semibold text-gray-900 dark:text-white">{project.role}</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{project.businessImpact}</p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project?.technologies ?? []).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full text-[11px] bg-blue-50 dark:bg-gray-900 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      {!!project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                          <FiGithub className="w-4 h-4" /><span>Code</span>
                        </a>
                      )}
                      {!!project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                          <FiExternalLink className="w-4 h-4" /><span>Live</span>
                        </a>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">Built with AI-first approach</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
