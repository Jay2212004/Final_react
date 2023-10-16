import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';

const Preview = ({ formData }) => {
  const [paymentDone, setPaymentDone] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);

  useEffect(() => {
    if (paymentDone && !pdfDownloaded) {
      // Payment is done, generate the PDF
      const doc = new jsPDF();
      let yOffset = 40; 

      // Set the PDF content
      doc.setFontSize(18); // Increase font size for the title
      doc.setFont('bold');
      doc.text('PAWPRINT Booking Preview', 105, 15, null, null, 'center');
      doc.setFontSize(12);
      doc.setFont('normal');

      // Add content to the PDF using formData
      doc.text(20, 40, `First Name: ${formData.firstName}`);
      doc.text(20, 50, `Last Name: ${formData.lastName}`);
      doc.text(20, 60, `Pet's Name: ${formData.petsName}`);
      // Add other form data fields here
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
  
      doc.text(20, yOffset, `Pet's Gender: ${formData.petgender === 'female' ? 'Female' : 'Male'}`);
  
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
      setPdfBlob(blob);

      setPdfDownloaded(true);
    }
  }, [formData, paymentDone, pdfDownloaded]);

  const handlePayment = () => {
    // Simulate payment (you can replace this with actual payment logic)
    // For this example, I'm simulating a delay with setTimeout
    setTimeout(() => {
      alert('Payment Done Successfully');
      setPaymentDone(true);
    }, 1000); // Simulate a 2-second payment process
  };

  const handleDownloadPDF = () => {
    // Create a URL for the blob
    const url = URL.createObjectURL(pdfBlob);

    // Open the blob content in a new window or tab
    window.open(url, '_blank');
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
        <h2
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Booking Preview
        </h2>

        {paymentDone && pdfDownloaded ? (
          // Display the content along with the title after PDF download
          <div>
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
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={handleDownloadPDF}>Download PDF</button>
            </div>
          </div>
        ) : (
          // Display payment button
          <div style={{ textAlign: 'center' }}>
            <button onClick={handlePayment}>Pay Now</button>
          </div>
        )}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
         
        </div>
      </div>
    </div>
  );
};

export default Preview;
