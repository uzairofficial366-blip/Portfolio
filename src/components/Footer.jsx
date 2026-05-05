import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-10 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex gap-5">
          <a href="https://github.com/uzairofficial366-blip" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200" aria-label="GitHub">
            <FiGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/muhammaduzair-khattak-11668a220" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200" aria-label="LinkedIn">
            <FiLinkedin size={22} />
          </a>
          <a href="mailto:innocentd00270@gmail.com"
            className="hover:text-white transition-colors duration-200" aria-label="Email">
            <FiMail size={22} />
          </a>
        </div>
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Muhammad Uzair Khattak · AI Engineer &amp; NLP Specialist
        </p>
        <p className="text-xs text-gray-600">Khyber Pakhtunkhwa, Pakistan</p>
      </div>
    </footer>
  );
}
