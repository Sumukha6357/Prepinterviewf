import React, { useState } from "react";
// import { updateUserName } from "../api/userApi"; // Adjust the path as needed

function ProfileCardDropdown({ onClose }) {
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const [editing, setEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);
  const [message, setMessage] = useState("");

  return (
    <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-blue-100 rounded-xl shadow-lg z-30 p-4">
      <div className="font-bold text-blue-700 mb-2">Profile</div>
      {!editing ? (
        <div className="mb-2">
          <div>
            <strong>User Name:</strong> {userName || "Unknown"}
          </div>
          <button
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={() => {
              setNewUserName(userName);
              setEditing(true);
              setMessage("");
            }}
          >
            Change UserName
          </button>
          <button
            className="mt-2 ml-2 px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!newUserName.trim()) return;
            try {
              // const response = await updateUserName(newUserName);
              localStorage.setItem("userName", newUserName);
              setUserName(newUserName);
              setEditing(false);
              window.dispatchEvent(new Event("storage"));
            } catch {
              setMessage("Failed to update username on server.");
            }
          }}
          className="flex flex-col gap-2 mt-2"
        >
          <input
            type="text"
            value={newUserName}
            onChange={e => setNewUserName(e.target.value)}
            className="border rounded px-2 py-1"
            autoFocus
          />
          <div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-1 rounded mr-2 hover:bg-green-700 transition"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500 transition"
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
      {message && <div className="text-green-600 text-center mt-2">{message}</div>}
    </div>
  );
}

export default ProfileCardDropdown;