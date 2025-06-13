import React from "react";
import { useParams } from "react-router-dom";

function Interview() {
  const { type } = useParams(); // Get selected type from URL

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-blue-600 capitalize">{type} Interview</h1>
      <p className="mt-4 text-gray-700">This is the {type} interview page. Content will be added here.</p>
    </div>
  );
}

export default Interview;
