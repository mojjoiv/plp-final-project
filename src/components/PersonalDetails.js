import React, { useState } from 'react';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

const PersonalDetails = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nextOfKinName, setNextOfKinName] = useState('');
  const [nextOfKinPhone, setNextOfKinPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        phoneNumber,
        nextOfKinName,
        nextOfKinPhone,
      });
      navigate('/qr');
    }
  };

  return (
    <div>
      <h2>Enter Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Your Phone Number"
          required
        />
        <input
          type="text"
          value={nextOfKinName}
          onChange={(e) => setNextOfKinName(e.target.value)}
          placeholder="Next of Kin Name"
          required
        />
        <input
          type="text"
          value={nextOfKinPhone}
          onChange={(e) => setNextOfKinPhone(e.target.value)}
          placeholder="Next of Kin Phone"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
