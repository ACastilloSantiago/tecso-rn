import { useEffect, useState } from "react";
import { getCities, getProvinces } from "../api/setupAxios";

export const useFetchAddress = () => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvinces, setSelectedProvinces] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const handleProvinces = async () => {
      const response = await getProvinces();
      setProvinces(response);
    };
    handleProvinces();
  }, []);

  useEffect(() => {
    const handleCities = async () => {
      if (!selectedProvinces) return setCities([]);

      const response = await getCities(selectedProvinces);
      setCities(response);
    };
    handleCities();
  }, [selectedProvinces]);

  return {
    provinces,
    cities,
    setSelectedProvinces,
  };
};
