import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState();
  let mounted = true;

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
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
    if (mounted) getLocation();

    return () => {
      mounted = false;
    };
  }, []);

  return location;
};

export default useLocation;
