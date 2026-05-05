'use client';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-4 pb-16 bg-gradient-to-br from-gray-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 py-2 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 p-3 shadow-2xl flex items-center justify-center animate-[float_4s_ease-in-out_infinite]">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden flex items-center justify-center">
                <Image
                  src="/profile.png"
                  alt="Muhammad Uzair Khattak"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-2 md:order-1 space-y-5 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400">
            AI Engineer &amp; NLP Specialist
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            <span className="typing">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Uzair Khattak</span>
            </span>
          </h1>

          <ul className="text-base sm:text-lg text-gray-700 dark:text-gray-200 max-w-xl leading-snug space-y-2 mx-auto md:mx-0 text-left">
            <li className="grid grid-cols-[16px_1fr] gap-3 items-start">
              <span className="text-blue-600 dark:text-blue-400 font-extrabold leading-[1.4] text-lg">•</span>
              <span className="font-medium">AI Engineer specializing in NLP &amp; Deep Learning</span>
            </li>
            <li className="grid grid-cols-[16px_1fr] gap-3 items-start">
              <span className="text-blue-600 dark:text-blue-400 font-extrabold leading-[1.4] text-lg">•</span>
              <span className="font-medium">Building Intelligent Systems with LLMs, LangChain &amp; RAG</span>
            </li>
            <li className="grid grid-cols-[16px_1fr] gap-3 items-start">
              <span className="text-blue-600 dark:text-blue-400 font-extrabold leading-[1.4] text-lg">•</span>
              <span className="font-medium">Researching Urdu AI Models &amp; Transformer Architectures</span>
            </li>
            <li className="grid grid-cols-[16px_1fr] gap-3 items-start">
              <span className="text-blue-600 dark:text-blue-400 font-extrabold leading-[1.4] text-lg">•</span>
              <span className="font-medium">Generative AI Engineer with RAG &amp; Agentic AI Systems</span>
            </li>
            <li className="grid grid-cols-[16px_1fr] gap-3 items-start">
              <span className="text-blue-600 dark:text-blue-400 font-extrabold leading-[1.4] text-lg">•</span>
              <span className="font-medium">CS Graduate — Islamia College Peshawar (Chartered University)</span>
            </li>
          </ul>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href="/Uzair Updated CV.pdf"
              target="_blank"
              rel="noreferrer"
              download="Uzair_Updated_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-sm sm:text-base font-medium shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <FiDownload className="w-4 h-4" />
              View Resume
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
            <span className="text-base font-semibold text-gray-700 dark:text-gray-200">Find me on</span>
            <div className="flex items-center gap-3">
              <a href="https://github.com/uzairofficial366-blip" target="_blank" rel="noreferrer" aria-label="GitHub"
                className="group w-11 h-11 rounded-full border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/40 backdrop-blur flex items-center justify-center text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-500/60 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                <FiGithub className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/muhammaduzair-khattak-11668a220" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="group w-11 h-11 rounded-full border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/40 backdrop-blur flex items-center justify-center text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-500/60 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                <FiLinkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <a href="mailto:innocentd00270@gmail.com" aria-label="Email"
                className="group w-11 h-11 rounded-full border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/40 backdrop-blur flex items-center justify-center text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-500/60 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                <FiMail className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
