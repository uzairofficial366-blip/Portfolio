'use client';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-36 h-36 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse overflow-hidden">
            <img
              src="/profile.png"
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in">
          Muhammad Uzair
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
          AI Engineer &amp; NLP Specialist
        </p>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-loading-bar"></div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: '0ms' }}
          ></div>
          <div
            className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: '150ms' }}
          ></div>
          <div
            className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"
            style={{ animationDelay: '300ms' }}
          ></div>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex justify-center space-x-4 mt-8 opacity-60">
          <div className="text-blue-500 animate-float">⚛️</div>
          <div
            className="text-black dark:text-white animate-float"
            style={{ animationDelay: '0.5s' }}
          >
            ▲
          </div>
          <div
            className="text-blue-600 animate-float"
            style={{ animationDelay: '1s' }}
          >
            📱
          </div>
        </div>
      </div>
    </div>
  );
}
