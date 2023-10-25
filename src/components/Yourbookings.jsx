import React, { useState } from 'react';
import './Yourbookings.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ref, get, onValue, child, getDatabase } from 'firebase/database';

const YourBookings = ({userId}) => {
  const [bookings,setBookings]=useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyCDyuwqxEQq5H1tX0lpABAeTcZIkHqrQjY",
    authDomain: "pawprint-1af7d.firebaseapp.com",
    databaseURL: "https://pawprint-1af7d-default-rtdb.firebaseio.com",
    projectId: "pawprint-1af7d",
    storageBucket: "pawprint-1af7d.appspot.com",
    messagingSenderId: "776130279088",
    appId: "1:776130279088:web:f6fd45ac432668b63ded75",
    measurementId: "G-NG6EXFSFW0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();

  const bookingsData = [
    {
      firstName: '',
      lastName: '',
      petsName: '',
      address: '',
      phoneNumber: '',
      dateOfStart: '',
      dateOfEnd: '',
      specialRequirements: '',
      grooming: '',
      training: '',
      daycare: '',
      walking: '',
      boarding: '',
      dog: '',
      cat: '',
      vetenary: '',
      feed: '',
    },
  ];

  function AddItemToTable(firstName, lastName, petsName, address, phoneNumber, dateOfStart, dateOfEnd, specialRequirements, grooming, training, daycare, walking, boarding, dog, cat, vetenary, feed) {
    var stdNo = 0;
    var tbody = document.getElementById('tbody1');
    let trow = document.createElement("tr");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let td8 = document.createElement('td');
    let td9 = document.createElement('td');
    let td10 = document.createElement('td');
    let td11 = document.createElement('td');
    let td12 = document.createElement('td');
    let td13 = document.createElement('td');
    let td14 = document.createElement('td');
    let td15 = document.createElement('td');
    let td16 = document.createElement('td');
    let td17 = document.createElement('td');
    let td18 = document.createElement('td');
    td1.innerHTML = ++stdNo;
    td2.innerHTML = firstName;
    td3.innerHTML = lastName;
    td4.innerHTML = petsName;
    td5.innerHTML = address;
    td6.innerHTML = phoneNumber;
    td7.innerHTML = dateOfStart;
    td8.innerHTML = dateOfEnd;
    td9.innerHTML = specialRequirements;
    td10.innerHTML = grooming;
    td11.innerHTML = training;
    td12.innerHTML = daycare;
    td13.innerHTML = walking;
    td14.innerHTML = boarding;
    td15.innerHTML = dog;
    td16.innerHTML = cat;
    td17.innerHTML = vetenary;
    td18.innerHTML = feed;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td10);
    trow.appendChild(td11);
    trow.appendChild(td12);
    trow.appendChild(td13);
    trow.appendChild(td14);
    trow.appendChild(td15);
    trow.appendChild(td16);
    trow.appendChild(td17);
    trow.appendChild(td18);
    tbody.appendChild(trow);
  }

  function AddAllItemsToTable(User) {
    var stdNo = 0;
    var tbody = document.getElementById('tbody1');

    if (tbody) {
      tbody.innerHTML = '';
      User.forEach((element) => {
        AddItemToTable(element.firstName, element.lastName, element.petsName, element.address, element.phoneNumber, element.dateOfStart, element.dateOfEnd, element.specialRequirements, element.grooming, element.training, element.daycare, element.walking, element.boarding, element.dog, element.cat, element.vetenary, element.feed);
      });
    }
  }

  function GetAllDataOnce() {
    const dbRef = ref(db);
    get(child(dbRef, "BookingDataRecords")).then((snapshot) => {
      var users = [];
      snapshot.forEach(childSnapshot => {
        users.push(childSnapshot.val());
      });
      AddAllItemsToTable(users);
    });
  }
  function fetchUserBookings(userId) {
    const dbRef = ref(db, `users/${userId}/bookings`);
    onValue(dbRef, (snapshot) => {
      const userBookings = [];
      snapshot.forEach((childSnapshot) => {
        userBookings.push(childSnapshot.val());
      });
      setBookings(userBookings);
    });
  }

  function GetAllDataRealtime() {
    const dbRef = ref(db, "BookingDataRecords");
    onValue(dbRef, (snapshot) => {
      var users = [];
      snapshot.forEach(childSnapshot => {
        users.push(childSnapshot.val());
      });
      AddAllItemsToTable(users);
    });
  }

  window.onload = GetAllDataRealtime;

  return (
    <div className="t1">
      <div
        style={{
          backgroundColor: 'white',
          padding: '50px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '5000px',
          maxHeight:'5000px',
          margin: '0 auto',
        }}
      >
        <div>
          <h2>Booking Details</h2>
          <table className="booking-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Pet's Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Date of Start</th>
                <th>Date of End</th>
                <th>Special Requirements</th>
                <th>Grooming</th>
                <th>Training</th>
                <th>Daycare</th>
                <th>Walking</th>
                <th>Boarding</th>
                <th>Dog</th>
                <th>Cat</th>
                <th>Veterinary</th>
                <th>Feed</th>
              </tr>
            </thead>
            <tbody id='tbody1'>
            {bookings.map((booking, index) => (
                <tr key={index}>
                  {/* ... Display booking details in each <td> ... */}
                </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default YourBookings;
