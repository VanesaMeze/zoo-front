import { API } from "../shared/api";

export const getAnimals = (currentPage) => {
  return API.get(`/animals?page=${currentPage}`);
};

export const getAnimalById = (id) => {
  return API.get(`/animals/${id}`);
};

export const editAnimalById = (id, animal) => {
  return API.put(`/animals/${id}`, animal);
};

export const addAnimal = (
  name,
  type,
  habitat,
  rare,
  count_in_zoo,
  favourite_food
) => {
  return API.post("/animals", {
    name,
    type,
    habitat,
    rare,
    count_in_zoo,
    favourite_food,
  });
};
