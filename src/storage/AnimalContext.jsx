import { createContext } from "react";

const AnimalContext = createContext({
  animals: [],
  postAnimal: () => {},
  updateAnimal: () => {},
});

export default AnimalContext;
