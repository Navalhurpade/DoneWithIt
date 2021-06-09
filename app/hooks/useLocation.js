import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { longitude, latitude },
      } = await Location.getCurrentPositionAsync();

      setLocation({
        longitude: longitude,
        latitude: latitude,
      });
      return;
    } catch (error) {
      console.log("Error getting location: " + error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
