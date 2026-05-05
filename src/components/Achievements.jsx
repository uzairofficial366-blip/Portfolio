import { FiAward, FiCpu, FiBookOpen, FiUsers } from 'react-icons/fi';

export default function Achievements() {
  const achievements = [
    {
      title: 'Generative AI Engineering',
      icon: <FiCpu className="w-6 h-6 text-blue-500" />,
      highlight: 'Worked as Generative AI Engineer at ALFASUN Technologies, building LLM and RAG systems.',
      details: [
        'Designed and deployed RAG pipelines using LangChain, FAISS, and Hugging Face Transformers for production AI systems.',
        'Fine-tuned GPT and T5 models for domain-specific NLP tasks including text generation, classification, and MCQ generation.',
      ],
    },
    {
      title: 'NLP & AI Research',
      icon: <FiBookOpen className="w-6 h-6 text-emerald-500" />,
      highlight: 'Research Assistant at Islamia College Peshawar — Urdu Sentiment Analysis & Educational AI.',
      details: [
        'Developed transformer-based and RNN-based Urdu Sentiment Analysis models for low-resource language NLP.',
        'Built automated MCQ generation systems and educational AI chatbots powered by fine-tuned language models.',
      ],
    },
    {
      title: 'Certifications & Training',
      icon: <FiAward className="w-6 h-6 text-purple-500" />,
      highlight: 'Certified in Python Programming and completed Agentic AI Bootcamp.',
      details: [
        'Earned Introduction to Programming Using Python certification — strong programming foundation for AI/ML.',
        'Completed Agentic AI Bootcamp — hands-on training in building autonomous AI agents and multi-step workflows.',
      ],
    },
    {
      title: 'Academic Excellence',
      icon: <FiUsers className="w-6 h-6 text-amber-500" />,
      highlight: 'CS graduate from Islamia College Peshawar (Chartered University), class of 2025.',
      details: [
        'Bachelor\'s in Computer Science (September 2021 – July 2025) with specialization in AI and Machine Learning.',
        'Actively contributed to AI research while pursuing academic studies, bridging theory and real-world AI application.',
      ],
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Highlights &amp; Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Key milestones from my journey as an AI Engineer — research, certifications, and real-world AI projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((item) => (
            <div key={item.title} className="bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              </div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">{item.highlight}</p>
              <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                {item.details.map((line, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{line}</span>
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
