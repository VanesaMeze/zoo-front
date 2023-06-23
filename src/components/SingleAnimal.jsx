import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAnimalById } from "../service/animalsService";
import Slider from "../layout/Slider";

const SingleAnimal = () => {
  // const { signedIn } = useContext(UserContext);
  // const navigate = useNavigate();
  const [animal, setAnimals] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getAnimalById(id).then(({ data }) => {
        setAnimals(data);
      });
    }
    // if (!signedIn) {
    //   navigate("/login");
    // }
  }, [id]);

  return (
    <div
      className="container"
      style={{
        opacity: "80%",
        marginTop: "80px",
        width: "700px",
      }}
    >
      <div
        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        style={{
          backgroundColor: "rgb(253,245,230)",
          opacity: "0.8",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2">{animal.name}</strong>
          <h4 className="mb-0">{animal.type}</h4>
          <div className="mb-1 text-body-secondary">
            Habitat: {animal.habitat}
          </div>
          <p className="card-text mb-auto">
            Rare: {animal.rare !== 0 ? "Yes" : "No"}
          </p>
          <p className="card-text mb-auto">
            No of type in zoo: {animal.count_in_zoo}
          </p>
          <p className="card-text mb-auto">
            Favourite food: {animal.favourite_food}
          </p>
        </div>
        <div className="col-auto d-none d-lg-block"></div>
        <Link
          to={`/animals/edit/${animal.id}`}
          className="nav-link"
          aria-current="page"
        >
          <button className="btn button1 w-100 py-2" type="submit">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleAnimal;
