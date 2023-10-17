import React, { useState } from 'react';
import './Booking.css';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';
import Preview from './Prereview';
import Checkbox from '@mui/material/Checkbox';
import {
  Container,
  Box,
  Text,

  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormControlLabel, Radio as MuiRadio } from '@mui/material';
import Typography from '@mui/material/Typography';

const Booking = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    petsName: '',
    address: '',
    phoneNumber: '',
    grooming: false,
    training: false,
    daycare: false,
    walking: false,
    boarding: false,
    dog: false,
    cat: false,
    vetenary: false,
    feed: false,

    dateOfStart: new Date(),
    dateOfEnd: new Date(),
    specialRequirements: '',
  });
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const radioGroupStyles = {
    marginBottom: '20px',
  };
  const styles = {
    checkboxContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px',
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
    },
  };
  
  const [petgender, setGender] = useState('female');

  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;
    const phoneRegex = /^\d{10}$/; // Change this pattern according to your requirements.
    setIsValidPhoneNumber(phoneRegex.test(phoneNumber));
    handleInputChange(e);
  };
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleSubmit = () => {
    setShowPreview(true);
  };
  const handleGenderChange = (value) => {
    setFormData({
      ...formData,
      petgender: value,
    });
  };

  return (
    <div className="t1">
      <Container
        style={{
          backgroundColor: 'white',
          padding: '50px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <Box>
          <Text
            style={{
              fontSize: '2xl',
              fontWeight: 'bold',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            Booking Form
          </Text>
          <form>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                marginBottom: '15px',
                fontSize: 'lg',
              }}
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                marginBottom: '15px',
                fontSize: 'lg',
              }}
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="petsName"
              placeholder="Pet's Name"
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                marginBottom: '15px',
                fontSize: 'lg',
              }}
              value={formData.petsName}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="address"
              placeholder="Address"
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                marginBottom: '15px',
                fontSize: 'lg',
              }}
              value={formData.address}
              onChange={handleInputChange}
            />
            {/* Phone Number Input */}
            <Input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                marginBottom: '15px',
                fontSize: 'lg',
              }}
              value={formData.phoneNumber}
              onChange={handlePhoneNumberChange}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Allow only digits
              }}
              pattern="[0-9]*"
              required
            />
            {!isValidPhoneNumber && (
              <p className="error-message" style={{ color: 'red' }}>
                Please enter a valid phone number.
              </p>
            )}

           
<FormLabel>Services:</FormLabel>
<Box style={styles.checkboxContainer}>
  <div style={styles.checkboxLabel}>
    <Checkbox
      checked={formData.grooming}
      onChange={handleInputChange}
      name="grooming"
    />
    <Typography variant="">Grooming</Typography>
  </div>

  <div style={styles.checkboxLabel}>
    <Checkbox
      checked={formData.training}
      onChange={handleInputChange}
      name="training"
    />
    <Typography variant="">Training</Typography>
  </div>

  <div style={styles.checkboxLabel}>
    <Checkbox
      checked={formData.daycare}
      onChange={handleInputChange}
      name="daycare"
    />
    <Typography variant="">DayCare</Typography>
  </div>

  <div style={styles.checkboxLabel}>
    <Checkbox
      checked={formData.walking}
      onChange={handleInputChange}
      name="walking"
    />
    <Typography variant="">Walking</Typography>
  </div>

  <div style={styles.checkboxLabel}>
    <Checkbox
      checked={formData.boarding}
      onChange={handleInputChange}
      name="boarding"
    />
    <Typography variant="">Boarding</Typography>
  </div>

  {formData.daycare && (
    <div style={styles.checkboxLabel}>
      <Checkbox
        checked={formData.feed}
        onChange={handleInputChange}
        name="feed"
      />
      <Typography variant="">Should we feed your pet?</Typography>
    </div>
  )}

  <div style={styles.checkboxLabel}>
    <Checkbox
      checked={formData.vetenary}
      onChange={handleInputChange}
      name="vetenary"
    />
    <Typography variant="">Veterinary Services</Typography>
  </div>
</Box>


            <FormControl style={radioGroupStyles}>
              <FormLabel style={{ marginTop: '12px' }}>Pet's Gender</FormLabel>
              <RadioGroup
                value={formData.petgender}
                onChange={(value) => handleGenderChange(value)}
              >
                <Stack direction="row">
                  <FormControlLabel
                    value="female"
                    control={<MuiRadio />}
                    label="Female"
                    checked={formData.petgender === 'female'}
                    onChange={() => handleGenderChange('female')}
                  />
                  <FormControlLabel
                    value="male"
                    control={<MuiRadio />}
                    label="Male"
                    checked={formData.petgender === 'male'}
                    onChange={() => handleGenderChange('male')}
                  />
                </Stack>
              </RadioGroup>

            </FormControl>


            <FormControl style={{ marginBottom: '15px' }}>
              <FormLabel style={{ display: 'inline-block', marginRight: '12px' }}>
                Start of session:
              </FormLabel>
              <DatePicker
                selected={formData.dateOfStart}
                onChange={(date) =>
                  handleInputChange({ target: { name: 'dateOfStart', value: date } })
                }
                dateFormat="dd/MM/yyyy"
                style={{
                  marginLeft: '12px',
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  padding: '10px',
                  fontSize: 'lg',
                }}
              />
              <div style={{ display: 'inline-block', marginRight: '12px' }}>
                <FormLabel style={{ display: 'inline-block', marginRight: '12px' }}>
                  End of session:
                </FormLabel>
                <DatePicker
                  selected={formData.dateOfEnd}
                  onChange={(date) =>
                    handleInputChange({ target: { name: 'dateOfEnd', value: date } })
                  }
                  dateFormat="dd/MM/yyyy"
                  style={{
                    width: '100%',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '10px',
                    fontSize: 'lg',
                    display: 'inline-block',
                  }}
                />
              </div>
            </FormControl>
            <FormLabel style={{ marginBottom: '12px' }}>Type Of Pet:</FormLabel>
            <Checkbox
              name="dog"
              checked={formData.dog}
              onChange={handleInputChange}
            >
              
            </Checkbox> <Typography variant="">Dog</Typography>
            <Checkbox
              name="cat"
              checked={formData.cat}
              onChange={handleInputChange}
            >
            
            </Checkbox><Typography variant="">Cat</Typography>
            {/* Add more checkboxes here if needed */}
            <Input
              type="text"
              name="specialRequirements"
              placeholder="Any special requirement"
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                marginBottom: '15px',
                marginTop: '15px',
                fontSize: 'lg',
              }}
              value={formData.specialRequirements}
              onChange={handleInputChange}
            />
            <Button
              type="button"
              style={{
                display: 'block',
                backgroundColor: '#4285F4',
                color: 'white',
                marginLeft: '8px',
                fontSize: 'lg',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
      {showPreview && <Preview formData={formData} />}
    </div>
  );
};

export default Booking;
