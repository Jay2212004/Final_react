import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isEditing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ name: user.name, email: user.email });

  const profileStyles = {
    textAlign: "center",
    padding: "20px",
    background: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const imageStyles = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid #fff",
  };

  const nameStyles = {
    fontSize: "24px",
    color: "#333",
    marginTop: "10px",
  };

  const emailStyles = {
    fontSize: "18px",
    color: "#555",
  };

  const buttonStyles = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // In a real application, you would perform the save logic here,
    // such as making an API request to update the user information.
    
    // For this example, we'll just update the editedUser state.
    setEditing(false);
    user.name = editedUser.name;
    user.email = editedUser.email;
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={profileStyles}>
        <img src={user.picture} alt={user.name} style={imageStyles} />
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
            />
            <input
              type="text"
              value={editedUser.email}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
            />
          </div>
        ) : (
          <div>
            <h2 style={nameStyles}>Username: {user.name}</h2>
            <p style={emailStyles}>Email ID: {user.email}</p>
          </div>
        )}
        {isEditing ? (
          <button style={buttonStyles} onClick={handleSaveClick}>Save</button>
        ) : (
          <button style={buttonStyles} onClick={handleEditClick}>Edit</button>
        )}
      </div>
    )
  );
};

export default Profile;
