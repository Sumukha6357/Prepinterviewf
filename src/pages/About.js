import React from "react";

function About() {
  return (
    <section className="w-full max-w-4xl mx-auto my-12 bg-white dark:bg-gray-800 rounded-lg shadow py-12">
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
  );
}

export default About;