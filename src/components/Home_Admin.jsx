import './Home_Admin.css';
import {useAuth0} from '@auth0/auth0-react';
export default function Home_Admin() {
  const {user}=useAuth0();
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="admin-panel">
   
      
      <main>
        
        <section className="users">
          <h2>Users Logged In</h2>
          {user && user.name && (
  <div className="user-card" key={user.user_id}>
    <h3>{user.name}</h3>
    <p>Email: {user.email}</p>
    {/* Add more user information fields as needed */}
  </div>
)}

        </section>
        {/* <section className="dashboard">
          <h2>Dashboard</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Type</th>
                <th>Number of Bookings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ongoing Bookings</td>
                <td>5</td> 
              </tr>
              <tr>
                <td>Completed Bookings</td>
                <td>10</td> 
              </tr>
              <tr>
                <td>Bookings Booked</td>
                <td>8</td> 
              </tr>
            </tbody>
          </table>
        </section> */}
      </main>
      
      <button onClick={logout}>Logout</button>
    </div>
  );
}