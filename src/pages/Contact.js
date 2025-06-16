import React from "react";

function Contact() {
  return (
    <section className="w-full max-w-4xl mx-auto my-12 bg-gray-100 dark:bg-gray-900 rounded-lg shadow py-12">
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
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@interviewprep.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              +1 (234) 567-890
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;