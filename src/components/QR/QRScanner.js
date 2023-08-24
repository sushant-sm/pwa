import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader'; // Use curly braces here
import './QRScanner.css';

function QRScanner() {
  const [result, setResult] = useState('');
  const [scanEnabled, setScanEnabled] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleScanButtonClick = () => {
    setScanEnabled(!scanEnabled);
    setResult('');
  };

  return (
    <div className="qr-scanner">
      <h2>QR Code Scanner</h2>
      <button className="scan-button" onClick={handleScanButtonClick}>
        Scan your QR code here
      </button>
      {scanEnabled && (
        <div className="scanner-box">
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
        </div>
      )}
      {result && <p className="qr-result">Result: {result}</p>}
    </div>
  );
}

export default QRScanner;
