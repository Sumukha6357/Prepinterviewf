import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchAptitudeQuestions,
  fetchTechnicalQuestions,
  fetchBothQuestions,
} from "../api/questionApi"; // adjust path as needed

function Home() {
  const interviewRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName");
  const role = localStorage.getItem("role");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (location.hash === "#interview" && interviewRef.current) {
      interviewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
  }, [role, navigate]);

  const handleStartAptitude = async () => {
    try {
      const data = await fetchAptitudeQuestions();
      setQuestions(data.questions); // or just setQuestions(data) if your API returns an array
      // Optionally: navigate to quiz page, or show questions in a modal
      console.log("Fetched questions:", data);
    } catch (err) {
      alert("Failed to fetch questions.");
    }
  };

  const handleStartTechnical = async () => {
    try {
      const data = await fetchTechnicalQuestions();
      setQuestions(data.questions);
      console.log("Fetched technical questions:", data);
    } catch (err) {
      alert("Failed to fetch technical questions.");
    }
  };

  const handleStartBoth = async () => {
    try {
      const data = await fetchBothQuestions();
      setQuestions(data.questions);
      console.log("Fetched both questions:", data);
    } catch (err) {
      alert("Failed to fetch both questions.");
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-blue-600">
        {isLoggedIn
          ? `Welcome to InterviewPrep, ${userName || "User"}!`
          : "Welcome to InterviewPrep!"}
      </h1>
      {/* ...other sections... */}
      {isLoggedIn && (
        <section ref={interviewRef} id="interview" className="my-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
            Types of Interviews
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Aptitude */}
            <div className="bg-white shadow rounded-lg p-6 flex-1 text-center">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Aptitude</h3>
              <p className="mb-4">
                Sharpen your logical, quantitative, and verbal skills with our
                aptitude questions.
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleStartAptitude}
              >
                Start Aptitude
              </button>
            </div>
            {/* Technical */}
            <div className="bg-white shadow rounded-lg p-6 flex-1 text-center">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Technical</h3>
              <p className="mb-4">
                Practice coding, algorithms, and core technical concepts for
                interviews.
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleStartTechnical}
              >
                Start Technical
              </button>
            </div>
            {/* Aptitude & Technical */}
            <div className="bg-white shadow rounded-lg p-6 flex-1 text-center">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Aptitude & Technical
              </h3>
              <p className="mb-4">
                Challenge yourself with a mix of aptitude and technical questions.
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleStartBoth}
              >
                Start Both
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full flex justify-between items-center px-6 py-6 bg-white border-t border-gray-200 text-lg z-40">
        <div className="text-gray-500">&copy; {new Date().getFullYear()} InterviewPrep</div>
        <div className="flex items-center space-x-6">
          <span className="text-gray-500 font-semibold">Follow us:</span>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition"
            title="Twitter"
          >
            <svg className="w-8 h-8 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.64 4.08A12.72 12.72 0 0 1 3.1 4.86a4.48 4.48 0 0 0 1.39 5.98c-.73-.02-1.41-.22-2-.56v.06a4.48 4.48 0 0 0 3.6 4.4c-.34.09-.7.14-1.07.14-.26 0-.51-.02-.76-.07a4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.19 0-.37-.01-.56A9.22 9.22 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.7z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition"
            title="LinkedIn"
          >
            <svg className="w-8 h-8 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v4.77z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;