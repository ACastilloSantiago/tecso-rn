import { useEffect, useState } from "react";
import { getPetById } from "../api/setupAxios";

export const useFetchPetById = (id) => {
  const [pet, setPet] = useState({});

  useEffect(() => {
    (async () => {
      const resp = await getPetById(id);
      setPet(resp);
    })();
  }, [id]);

  return {
    pet,
  };
};
