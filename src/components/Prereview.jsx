import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';


const Preview = ({ formData }) => {
  const [paymentDone, setPaymentDone] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [razorpay, setRazorpay] = useState(null); // Store Razorpay instance
  useEffect(() => {

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
     
      ];
  
      const selectedPetTypes = petTypes.filter((petType) => petType.value);
  
      // Build a comma-separated string of selected pet types
      const selectedPetTypesString = selectedPetTypes.map((petType) => petType.label).join(', ');
  
      yOffset += 10;
      doc.text(30, yOffset, selectedPetTypesString);
  
      yOffset += 10;
      doc.text(20, yOffset, `Special Requirements: ${formData.specialRequirements}`);
      // doc.text(20, yOffset, `Payment Id: ${formData.razorpay_payment_id}`);
      yOffset += 10;
      doc.text(20, yOffset, 'Payment Successfull!!!!');
      // Save the PDF as a blob
      const blob = doc.output('blob');
      setPdfBlob(blob);

      setPdfDownloaded(true);
    
  }, [formData, paymentDone, pdfDownloaded]);

  
  var amount=1000;

  const handlePayment = (e) => {
   e.preventDefault();
    if(amount ===""){
      alert("Please enter amount")
    }else{
      var options={
        key:"rzp_test_jLzMullevuP0L8",
        key_secret:"ip76dxg0yK98U59Q6XS3ad55",
        amount:amount*100,
        currency:"INR",
        image:"https://th.bing.com/th/id/OIG.6oVz_YCy_skTGsSYId2e?w=173&h=173&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
        name:"PAWPRINT",
        description:"Payment for service",
        handler:function(response){
          alert(response.razorpay_payment_id);
        },
        prefill:{
          name:"Jay Uchagaonkar",
          email:"uchagaonkar54jay@gmail.com",
          contact:"8356024668"
        },
        notes:{address:"Borivali"},
        theme:{
          color:"#3399cc"
        }
      };
      var pay=new window.Razorpay(options);
      pay.open();
    }
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
        <>
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
            {formData.cat && <span> Cat</span>}</p>
          
          <p>
            <strong>Special Requirements:</strong> {formData.specialRequirements}
          </p>
          </div>
    
          <div style={{ textAlign: 'center' }}>
            <button onClick={handlePayment}>Pay Now</button>
            <button style={{marginTop:"8px"}} onClick={handleDownloadPDF}>Download PDF</button>
          </div></>
        
      </div>
    </div>
  );
};

export default Preview;
