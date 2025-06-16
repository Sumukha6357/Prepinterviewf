import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  fetchAptitudeQuestions,
  fetchTechnicalQuestions,
  fetchBothQuestions,
} from "../api/questionApi";

function Home() {
  const interviewRef = useRef(null);
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (location.hash === "#interview" && interviewRef.current) {
      interviewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleStartAptitude = async () => {
    try {
      const data = await fetchAptitudeQuestions();
      setQuestions(data.questions);
    } catch (err) {
      alert("Failed to fetch questions.");
    }
  };

  const handleStartTechnical = async () => {
    try {
      const data = await fetchTechnicalQuestions();
      setQuestions(data.questions);
    } catch (err) {
      alert("Failed to fetch technical questions.");
    }
  };

  const handleStartBoth = async () => {
    try {
      const data = await fetchBothQuestions();
      setQuestions(data.questions);
    } catch (err) {
      alert("Failed to fetch both questions.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center px-4">
      <h1 className="text-2xl font-bold text-blue-600 mt-8 mb-8 text-center">
        {isLoggedIn
          ? `Welcome to InterviewPrep, ${userName || "User"}!`
          : "Welcome to InterviewPrep!"}
      </h1>

      {/* Interview Types Section */}
      {isLoggedIn && (
        <section
          ref={interviewRef}
          id="interview"
          className="w-full max-w-5xl mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
            Types of Interviews
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Aptitude */}
            <div className="bg-white shadow rounded-lg p-6 flex-1 text-center dark:bg-gray-800 dark:text-white">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Aptitude
              </h3>
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
            <div className="bg-white shadow rounded-lg p-6 flex-1 text-center dark:bg-gray-800 dark:text-white">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Technical
              </h3>
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
            <div className="bg-white shadow rounded-lg p-6 flex-1 text-center dark:bg-gray-800 dark:text-white">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Aptitude & Technical
              </h3>
              <p className="mb-4">
                Challenge yourself with a mix of both aptitude and technical
                questions.
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

      {/* About Section */}
      <section
        id="about"
        className="w-full max-w-4xl mb-8 bg-white dark:bg-gray-800 rounded-lg shadow py-12"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">About Us</h2>
          <p className="text-gray-700 dark:text-gray-200">
            InterviewPrep is dedicated to helping candidates and recruiters
            prepare for technical and aptitude interviews. Our platform provides
            curated questions, mock tests, and resources to guide your interview
            journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full max-w-4xl mb-8 bg-gray-100 dark:bg-gray-900 rounded-lg shadow py-12"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-200 mb-2">
            Have questions or feedback? Reach out to us:
          </p>
          <ul className="text-gray-700 dark:text-gray-200">
            <li>
              Email:{" "}
              <a
                href="mailto:support@interviewprep.com"
                className="text-blue-600 hover:underline"
              >
                support@interviewprep.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:1234567890"
                className="text-blue-600 hover:underline"
              >
                76248-86357
              </a>
            </li>
            <li>Address: JSpiders Basavanagudi, Bengaluru</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
