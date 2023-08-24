import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './PushNotification.css';

function PushNotification() {
  const [notificationStatus, setNotificationStatus] = useState('Click the button to show a notification');

  const handleShowNotification = () => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification('Hello!', {
          body: 'This is a sample notification.',
        });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            new Notification('Hello!', {
              body: 'This is a sample notification.',
            });
          } else {
            setNotificationStatus('Notification permission denied.');
          }
        });
      }
    } else {
      setNotificationStatus('Notifications are not supported by your browser.');
    }
  };

  return (
    <div className="push-notification-box">
      <h2>Push Notifications</h2>
      <Button variant="contained" color="primary" onClick={handleShowNotification}>
        Show Notification
      </Button>
      <p className="notification-status">{notificationStatus}</p>
    </div>
  );
}

export default PushNotification;
