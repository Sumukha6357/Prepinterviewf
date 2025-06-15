export async function fetchTechnicalQuestions() {
  const response = await fetch("https://your-backend.com/api/technical-questions");
  if (!response.ok) throw new Error("Failed to fetch questions");
  return response.json();
}

export async function fetchBothQuestions() {
  const response = await fetch("https://your-backend.com/api/both-questions");
  if (!response.ok) throw new Error("Failed to fetch questions");
  return response.json();
}

export async function fetchAptitudeQuestions() {
  const response = await fetch("https://your-backend.com/api/aptitude-questions");
  if (!response.ok) throw new Error("Failed to fetch questions");
  return response.json();
}