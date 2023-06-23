import { Card } from "react-bootstrap";
import Slider from "../layout/Slider";
import { Link } from "react-router-dom";

const AnimalRow = ({ animals }) => {
  return (
    <>
      <div className="container">
        <Slider />
      </div>
      <br />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {animals?.map((animal, id) => (
          <div
            key={id}
            className="text-center col m-5"
            style={{ width: "340px" }}
          >
            <Card
              style={{
                backgroundColor: "rgb(227,218,201)",
                opacity: "0.8",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Card.Body>
                <Card.Title>{animal.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {animal.type}
                </Card.Subtitle>
                <Card.Text>{animal.habitat}</Card.Text>
                <br />
                <Link to={`/animals/${animal.id}`}>
                  <button className="btn button1">See more</button>
                </Link>
              </Card.Body>
            </Card>
            <br />
          </div>
        ))}
      </div>
      <br />
    </>
  );
};

export default AnimalRow;
