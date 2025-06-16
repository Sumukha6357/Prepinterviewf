// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-lg z-40 dark:text-white px-6 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <div className="text-gray-500 mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} InterviewPrep
        </div>
        <div className="flex items-center mb-2 md:mb-0">
          <svg className="w-5 h-5 mr-1 text-blue-600 inline" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          Address: JSpiders Basavanagudi, Bengaluru
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-gray-500 font-semibold">Follow us:</span>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition" title="Twitter">
            <svg className="w-8 h-8 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.64 4.08A12.72 12.72 0 0 1 3.1 4.86a4.48 4.48 0 0 0 1.39 5.98c-.73-.02-1.41-.22-2-.56v.06a4.48 4.48 0 0 0 3.6 4.4c-.34.09-.7.14-1.07.14-.26 0-.51-.02-.76-.07a4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.19 0-.37-.01-.56A9.22 9.22 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.7z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition" title="LinkedIn">
            <svg className="w-8 h-8 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v4.77z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;