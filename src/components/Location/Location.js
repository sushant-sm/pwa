import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './Location.css';

function Location() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Location-related logic using the Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);

  const handleGetLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null);
          setIsLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
      setIsLoading(false);
    }
  };

  return (
    <div className="location-box">
      <h2>Your Location</h2>
      {location ? (
        <div className="location-info">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p className="location-error">{error}</p>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetLocation}
        disabled={isLoading || location !== null}
      >
        {isLoading ? 'Loading...' : 'Get Location'}
      </Button>
    </div>
  );
}

export default Location;
