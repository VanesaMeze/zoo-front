import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addAnimal,
  editAnimalById,
  getAnimalById,
} from "../service/animalsService";
import UserContext from "../storage/UserContext";

const AddAnimal = () => {
  const navigate = useNavigate();
  const { signedIn } = useContext(UserContext);
  const [animal, setAnimals] = useState({
    name: "",
    type: "",
    habitat: "",
    rare: true,
    count_in_zoo: "",
    favourite_food: "",
  });
  const [rare, setIsRare] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getAnimalById(id).then(({ data }) => {
        setAnimals(data);
      });
    }
    if (!signedIn) {
      navigate("/login");
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (animal.name.length === 0) {
      return alert(`Name is required!`);
    }
    if (animal.type.length === 0) {
      return alert(`Type field is required!`);
    }
    if (animal.habitat.length === 0) {
      return alert(`Habitat field is required!`);
    }
    if (animal.rare.length === 0) {
      return alert(`Rare field is required!`);
    }
    if (animal.count_in_zoo.length === 0) {
      return alert(`Please add a number!`);
    }
    if (animal.favourite_food.length === 0) {
      return alert(`Favourite food field is required!`);
    }
    if (id) {
      editAnimalById(id, animal);
    } else {
      addAnimal(
        animal.name,
        animal.type,
        animal.habitat,
        animal.rare,
        animal.count_in_zoo,
        animal.favourite_food
      );
      setAnimals({
        name: "",
        type: "",
        habitat: "",
        rare: rare,
        count_in_zoo: "",
        favourite_food: "",
      });
    }
    navigate("/animals");
  };

  const handleChecked = () => {
    setIsRare(!rare);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnimals((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        className="container mt-5"
        onSubmit={(event) => handleSubmit(event, animal)}
      >
        <div className="form-floating mt-3">
          <input
            name="name"
            value={animal.name}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="name"
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="type"
            value={animal.type}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="type"
          />
          <label htmlFor="type">Type</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="habitat"
            value={animal.habitat}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="habitat"
          />
          <label htmlFor="habitat">Habitat</label>
        </div>
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={rare}
            onChange={handleChecked}
            name="rare"
            value={animal.rare}
          />
          <label htmlFor="rare">Rare</label>
        </div>
        <div className="form-floating mt-3">
          <input
            className="form-control"
            type="number"
            name="count_in_zoo"
            onChange={handleInputChange}
            value={animal.count_in_zoo}
          ></input>
          <label htmlFor="count_in_zoo">No of type in zoo</label>
        </div>
        <div className="form-floating mt-3">
          <input
            type="text"
            name="favourite_food"
            value={animal.favourite_food}
            placeholder="favourite_food"
            className="form-control"
            onChange={handleInputChange}
          />
          <label htmlFor="duration">Favourite food</label>
        </div>
        <div>
          {id ? (
            <button
              className="w-100 btn btn-outline-light mt-3"
              type="submit"
              onClick={handleSubmit}
            >
              Edit
            </button>
          ) : (
            <button
              className="w-100 btn btn-outline-light mt-3"
              type="submit"
              onClick={handleSubmit}
            >
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default AddAnimal;
