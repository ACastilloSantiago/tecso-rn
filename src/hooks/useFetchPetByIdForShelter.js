import { useEffect, useState } from "react";
import { getPetById } from "../api/setupAxios";

export const useFetchPetByIdForShelter = (id) => {
  const [pet, setPet] = useState({});

  useEffect(() => {
    (async () => {
      const resp = await getPetById(id);
      const { contacto, ...rest } = resp;
      setPet(rest);
    })();
  }, [id]);

  return {
    pet,
  };
};
