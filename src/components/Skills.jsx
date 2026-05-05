import { FiCode, FiLayout, FiDatabase, FiUsers } from 'react-icons/fi';

export default function Skills() {
  const skillGroups = [
    {
      title: 'AI & Machine Learning',
      icon: <FiDatabase className="w-6 h-6 text-blue-500" />,
      description: 'Core AI/ML expertise with deep learning frameworks, NLP, and model training.',
      skills: [
        'Machine Learning & Deep Learning',
        'Natural Language Processing (NLP)',
        'Transformer Architectures',
        'RNN / LSTM Networks',
        'PyTorch & TensorFlow',
        'Scikit-learn',
        'Computer Vision',
        'Data Analysis',
      ],
    },
    {
      title: 'LLMs & Generative AI',
      icon: <FiLayout className="w-6 h-6 text-emerald-500" />,
      description: 'Building and deploying production LLM systems, RAG pipelines, and agentic workflows.',
      skills: [
        'LangChain & LangGraph',
        'Retrieval-Augmented Generation (RAG)',
        'Agentic AI Systems',
        'FAISS & Vector Databases',
        'Hugging Face Transformers',
        'GPT & T5 Fine-tuning',
        'OpenAI API',
        'Prompt Engineering',
      ],
    },
    {
      title: 'Languages & Web Development',
      icon: <FiCode className="w-6 h-6 text-purple-500" />,
      description: 'Programming languages and web technologies used to build AI-integrated applications.',
      skills: [
        'Python',
        'JavaScript (ES6+)',
        'React & Next.js',
        'Node.js',
        'HTML5 & CSS3',
        'REST APIs',
        'Git & GitHub',
        'Vercel',
      ],
    },
    {
      title: 'Soft Skills',
      icon: <FiUsers className="w-6 h-6 text-amber-500" />,
      description: 'Skills developed through research, academic work, and collaborative projects.',
      skills: [
        'Research & Analytical Thinking',
        'Critical Thinking',
        'Problem-Solving',
        'Academic Writing',
        'Team Collaboration',
        'Time Management',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills &amp; Stack</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Technical skills developed through AI research, Generative AI engineering, NLP projects,
            and continuous learning in machine learning and intelligent systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800">
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{group.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{group.description}</p>
              <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-200">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
