import { useContext, useEffect, useState } from "react";
import AnimalContext from "../storage/AnimalContext";
import { getAnimals } from "../service/animalsService";
import AnimalRow from "./AnimalRow";

const Animals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const { animals, updateAnimal } = useContext(AnimalContext);

  useEffect(() => {
    document.querySelector(".nav").classList.add("affix");
    getAnimals(currentPage).then(({ data }) => {
      // console.log(data);
      updateAnimal(data.data);
      setLastPage(data.last_page);
    });
  }, [currentPage]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    // console.log(lastPage);
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <AnimalRow animals={animals} />
      </div>
      <div className=" d-flex justify-content-center m-3">
        <nav aria-label="Page navigation example" style={{ opacity: "80%" }}>
          <ul className="pagination">
            <li className="page-item">
              <button
                className="btn button1"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <span className="btn button1">Page {currentPage}</span>
            </li>
            <li className="page-item">
              <button
                className="btn button1"
                onClick={goToNextPage}
                disabled={currentPage === lastPage}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Animals;
