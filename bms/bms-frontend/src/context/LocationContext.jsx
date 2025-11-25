import React, { createContext, useContext, useEffect, useState } from "react";

export const LocationContext = createContext({
  location: null,
  loading: true,
  error: null,
});

// Location Provider component
export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch location data from coordinates
  const fetchLocationData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();

      
      const userLocation =
        data?.address?.city ||
        data?.address?.town ||
        data?.address?.village ||
        data?.address?.state ||
        "Unknown";

      setLocation(userLocation);
    } catch (err) {
      setError("India");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchLocationData(latitude, longitude);
      },
      () => {
        setError("Unable to retrieve your location");
        setLoading(false);
      }
    );
  }, []);

  return (
    <LocationContext.Provider value={{ location, loading, error }}>
      {children}
    </LocationContext.Provider>
  );
};


export const useLocation = () => useContext(LocationContext);
