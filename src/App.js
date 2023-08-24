import React from 'react';
import './App.css';
import Location from './components/Location/Location';
import QRScanner from './components/QR/QRScanner';
import PushNotification from './components/PushNotification/PushNotification';
import Camera from './components/Camera/Camera';
import PhoneBook from './components/PhoneBook/PhoneBook';

function App() {
  return (
    <div className="App">
      <Location />
      <QRScanner />
      <PushNotification />
      <Camera />
      <PhoneBook />
    </div>
  );
}

export default App;
