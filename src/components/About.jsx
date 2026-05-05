'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-10 sm:py-14 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 lg:gap-10 items-start">

        <div className="flex justify-center lg:justify-start">
          <div className="relative group w-55 lg:w-86 animate-[float_4.5s_ease-in-out_infinite]">
            <div className="absolute inset-0 rounded-2xl bg-blue-600/15 blur-xl group-hover:bg-blue-600/25 transition duration-300" />
            <div className="relative rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-800 shadow-lg">
              <Image
                src="/profile.png"
                alt="Muhammad Uzair Khattak"
                width={520}
                height={520}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                priority={false}
              />
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I&apos;m Muhammad Uzair Khattak, an AI Engineer and Computer Science graduate from Islamia College Peshawar (Chartered University). I specialize in Machine Learning, Deep Learning, and Natural Language Processing, with expertise in designing and deploying transformer-based and RNN-based architectures for intelligent, data-driven solutions.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I have hands-on experience in LLM development, Retrieval-Augmented Generation (RAG), and Agentic AI systems using LangChain, FAISS, and Hugging Face Transformers. My recent work includes Urdu Sentiment Analysis models, educational AI chatbots, and automated MCQ generation systems powered by fine-tuned GPT and T5 models.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-4">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">AI & NLP Engineering</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">LLMs, LangChain, RAG, FAISS, Hugging Face, Transformers.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-4">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Generative AI Systems</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Fine-tuned GPT/T5 models, chatbots, MCQ generation, automation.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-4">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Research & Development</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Urdu AI models, Research Assistant at Islamia College Peshawar.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-4">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Web Development</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">React, Next.js, Node.js — AI-integrated full stack applications.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Contact
            </a>
            <a href="/Uzair Updated CV.pdf" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
