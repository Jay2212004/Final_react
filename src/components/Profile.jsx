import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function UserProfile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}
