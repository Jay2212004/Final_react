import React from 'react';
import jsPDF from 'jspdf';
import Booking from './Booking';
const Preview = ({ formData}) => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Set title
    doc.setFontSize(18); // Increase font size for the title
    doc.setFont('bold');
    doc.text('PAWPRINT Booking Preview', 105, 15, null, null, 'center');

    // Reset font size and style
    doc.setFontSize(12);
    doc.setFont('normal');

    let yOffset = 40; // Start content below the title

    // Add content to the PDF
    doc.text(20, yOffset, `First Name: ${formData.firstName}`);
    doc.text(20, yOffset + 10, `Last Name: ${formData.lastName}`);
    doc.text(20, yOffset + 20, `Pet's Name: ${formData.petsName}`);
    doc.text(20, yOffset + 30, `Address: ${formData.address}`);
    doc.text(20, yOffset + 40, `Phone Number: ${formData.phoneNumber}`);
    doc.text(20, yOffset + 50, 'Services:');
    yOffset += 60;

    // List services
    const services = [
      { label: 'Grooming', value: formData.grooming },
      { label: 'Training', value: formData.training },
      { label: 'Daycare', value: formData.daycare },
      { label: 'Walking', value: formData.walking },
      { label: 'Boarding', value: formData.boarding },
    ];

    services.forEach((service) => {
      if (service.value) {
        doc.text(30, yOffset, service.label);
        yOffset += 10;
      }
    });

    // Additional content
    if (formData.daycare) {
      doc.text(20, yOffset, `Feed: ${formData.feed ? 'Yes' : 'No'}`);
      yOffset += 10;
    }

    doc.text(20, yOffset, `Pet's Gender: ${formData.gender === 'female' ? 'Female' : 'Male'}`);

    if (formData.dateOfStart && formData.dateOfEnd) {
      yOffset += 10;
      doc.text(20, yOffset, `Start of session: ${formData.dateOfStart.toDateString()}`);
      doc.text(20, yOffset + 10, `End of session: ${formData.dateOfEnd.toDateString()}`);
    }

    yOffset += 20;
    doc.text(20, yOffset, 'Type of Pet:');

    // List types of pets
    const petTypes = [
      { label: 'Dog', value: formData.dog },
      { label: 'Cat', value: formData.cat },
      { label: 'Rabbit', value: formData.rabbit },
      { label: 'Hamster', value: formData.hamster },
      { label: 'Turtle', value: formData.turtle },
    ];

    const selectedPetTypes = petTypes.filter((petType) => petType.value);

    // Build a comma-separated string of selected pet types
    const selectedPetTypesString = selectedPetTypes.map((petType) => petType.label).join(', ');

    yOffset += 10;
    doc.text(30, yOffset, selectedPetTypesString);

    yOffset += 10;
    doc.text(20, yOffset, `Special Requirements: ${formData.specialRequirements}`);

    // Save the PDF as a blob
    const blob = doc.output('blob');

    // Create a download link for the PDF
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'booking_preview.pdf';
    a.style.textDecoration = 'none'; // Remove underlines
    a.style.padding = '10px 20px'; // Add padding
    a.style.border = '2px solid #007bff'; // Add border
    a.style.borderRadius = '5px'; // Add border radius
    a.style.color = '#007bff'; // Change text color
    a.style.cursor = 'pointer'; // Add pointer cursor
    a.style.display = 'inline-block'; // Make it inline-block
    a.style.marginTop = '20px'; // Add top margin
    a.style.textAlign = 'center'; // Center-align text
    a.innerText = 'Download PDF';

    // Replace the content of the "Download PDF" button with the styled link
    const downloadPdfButton = document.getElementById('downloadPdfButton');
    downloadPdfButton.innerHTML = '';
    downloadPdfButton.appendChild(a);

    // Hide the "Download PDF" button when the link is clicked
    a.addEventListener('click', () => {
      downloadPdfButton.style.display = 'none';
    });
  };

  return (
    <div className="t1">
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: '20px', // Corrected size value
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Booking Preview
        </h2>
        <div>
          <p>
            <strong>First Name:</strong> {formData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {formData.lastName}
          </p>
          <p>
            <strong>Pet's Name:</strong> {formData.petsName}
          </p>
          <p>
            <strong>Address:</strong> {formData.address}
          </p>
          <p>
            <strong>Phone Number:</strong> {formData.phoneNumber}
          </p>
          <p>
            <strong>Services:</strong>
            {formData.grooming && <span> Grooming</span>}
            {formData.training && <span> Training</span>}
            {formData.daycare && <span> Daycare</span>}
            {formData.walking && <span> Walking</span>}
            {formData.boarding && <span> Boarding</span>}
          </p>
          {formData.daycare && (
            <p>
              <strong>Feed:</strong> {formData.feed ? 'Yes' : 'No'}
            </p>
          )}
         <p>
  <strong>Pet's Gender:</strong> {formData.petgender === 'female' ? 'Female' : 'Male'}
</p>

          {formData.dateOfStart && (
            <p>
              <strong>Start of session:</strong> {formData.dateOfStart.toDateString()}
            </p>
          )}
          {formData.dateOfEnd && (
            <p>
              <strong>End of session:</strong> {formData.dateOfEnd.toDateString()}
            </p>
          )}
          <p>
            <strong>Type of Pet:</strong>
            {formData.dog && <span> Dog</span>}
            {formData.cat && <span> Cat</span>}
            {formData.rabbit && <span> Rabbit</span>}
            {formData.hamster && <span> Hamster</span>}
            {formData.turtle && <span> Turtle</span>}
          </p>
          <p>
            <strong>Special Requirements:</strong> {formData.specialRequirements}
          </p>
        </div>
        <div id="downloadPdfButton" style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={handleDownloadPDF}>Download PDF</button>
          <button>Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
