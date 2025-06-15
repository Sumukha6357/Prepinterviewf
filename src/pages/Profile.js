import React, { useState } from "react";
import { updateUserName } from "../api/userApi"; // make sure this exists

function Profile() {
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const [editing, setEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!newUserName.trim()) {
      setMessage("Username cannot be empty.");
      return;
    }
    try {
      await updateUserName(newUserName); // <-- call backend API
      localStorage.setItem("userName", newUserName);
      setUserName(newUserName);
      setEditing(false);
      setMessage("Username updated!");
      window.dispatchEvent(new Event("storage"));
    } catch (err) {
      setMessage("Failed to update username on server.");
    }
  };

  console.log("editing:", editing, "userName:", userName);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
        {!editing ? (
          <div className="text-lg text-center mb-4 flex flex-col items-center gap-4">
            <div>
              <strong>User Name:</strong> {userName || "Unknown"}
            </div>
            <div className="flex gap-4">
              <button
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => {
                  setNewUserName(userName);
                  setEditing(true); // <-- Change this to true
                  setMessage("");
                }}
              >
                Change UserName
              </button>
              <button
                className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
                onClick={() => {
                  // Navigate to change password page or open change password form
                }}
              >
                Change Password
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleUpdate} className="flex flex-col items-center mb-4">
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              className="border rounded px-3 py-2 mb-2 w-full"
              autoFocus
            />
            <div>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded mr-2 hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                onClick={() => {
                  setEditing(false);
                  setMessage("");
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        {message && <div className="text-green-600 text-center">{message}</div>}
      </div>
    </div>
  );
}

export default Profile;