import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { db, auth } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const QRCodePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  const qrValue = JSON.stringify({
    phoneNumber: userData.phoneNumber,
    nextOfKinPhone: userData.nextOfKinPhone,
  });

  return (
    <div>
      <h2>Your QR Code</h2>
      <QRCode value={qrValue} />
      <p>Your Phone Number: {userData.phoneNumber}</p>
      <p>Next of Kin Phone Number: {userData.nextOfKinPhone}</p>
    </div>
  );
};

export default QRCodePage;
