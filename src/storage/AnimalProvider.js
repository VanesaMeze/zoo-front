import { useState } from "react";
import AnimalContext from "./AnimalContext";
import { addAnimal } from "../service/animalsService";

const AnimalProvider = ({ children }) => {
  const [animalState, setAnimalState] = useState([]);

  const postNewAnimal = (animal) => {
    const existingAnimal = animalState.find((c) => c.name === animal.name);
    if (existingAnimal) {
      return;
    }
    addAnimal(animal).then(({ data }) => {
      setAnimalState((prevState) => [...prevState, data]);
    });
  };

  const animalContext = {
    animals: animalState,
    updateAnimal: setAnimalState,
    addAnimal: postNewAnimal,
  };
  return (
    <AnimalContext.Provider value={animalContext}>
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalProvider;
