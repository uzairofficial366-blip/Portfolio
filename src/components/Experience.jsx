import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'IT Artificer',
      period: 'April 2026 – Present',
      location: 'Chamkani, Pakistan · On-site',
      description: [
        'Working on web development projects as part of an internship at IT Artificer.',
        'Building and maintaining web applications using modern frontend and backend technologies.',
        'Collaborating with the team to deliver production-ready features and improvements.',
      ],
      tech: ['Web Development', 'JavaScript', 'React', 'Node.js'],
    },
    {
      title: 'Generative AI Engineer',
      company: 'ALFASUN Technologies Private Limited',
      period: 'July 2025 – September 2025',
      location: 'Pakistan · AI/ML Engineering',
      description: [
        'Designed and deployed Generative AI solutions using LLMs and modern AI frameworks.',
        'Built RAG pipelines and Agentic AI systems integrating LangChain and FAISS for intelligent retrieval.',
        'Fine-tuned GPT and T5 models for domain-specific NLP tasks including text generation and classification.',
        'Collaborated on production AI features incorporating Hugging Face Transformers and OpenAI APIs.',
      ],
      tech: ['LLMs', 'LangChain', 'RAG', 'FAISS', 'Hugging Face', 'GPT Fine-tuning', 'T5', 'Python', 'OpenAI API'],
    },
    {
      title: 'Research Assistant',
      company: 'Islamia College Peshawar (Public Sector University)',
      period: 'February 2025 – August 2025',
      location: 'Peshawar, Pakistan · Research',
      description: [
        'Conducted research in AI and NLP with a focus on Urdu language models and sentiment analysis.',
        'Developed and evaluated transformer-based and RNN-based architectures for low-resource language tasks.',
        'Built automated MCQ generation systems powered by fine-tuned GPT and T5 models for educational AI.',
        'Explored human–AI interaction, language modeling, and AI-driven education applications.',
      ],
      tech: ['NLP', 'Deep Learning', 'Transformers', 'RNN', 'Urdu AI', 'Sentiment Analysis', 'MCQ Generation', 'Python', 'PyTorch'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center gap-2 text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <FiBriefcase className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <span>Work Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Professional experience as an AI Engineer and researcher, including Generative AI engineering,
            NLP research, and web development roles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 mb-12 last:mb-0">
              {index !== experiences.length - 1 && (
                <span className="absolute left-3 sm:left-4 top-4 bottom-0 w-px bg-gradient-to-b from-blue-500/80 to-transparent" />
              )}
              <span className="absolute left-1.5 sm:left-3 top-3 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 shadow" />

              <div className="bg-white/95 dark:bg-gray-950/90 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-5 sm:p-6 hover:shadow-lg hover:border-blue-500/70 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex flex-col items-start sm:items-end">
                    <span className="inline-flex items-center gap-1"><FiCalendar className="w-3 h-3" />{exp.period}</span>
                    <span className="inline-flex items-center gap-1 mt-1"><FiMapPin className="w-3 h-3" />{exp.location}</span>
                  </div>
                </div>

                <ul className="mt-3 space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.tech && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs sm:text-[11px] rounded-full bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
