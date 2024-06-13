import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';


const QRCodeReader = () => {
  const [result, setResult] = useState('');
  const [details, setDetails] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      const decodedData = JSON.parse(data);
      setDetails(decodedData);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h2>Scan QR Code</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>Scanned Data: {result}</p>
      {details && (
        <div>
          <p>Your Phone Number: {details.phoneNumber}</p>
          <p>Next of Kin Phone Number: {details.nextOfKinPhone}</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeReader;
