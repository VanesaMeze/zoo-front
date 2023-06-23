import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./register/Register";
import LogIn from "./register/LogIn";
import Home from "./components/Home";
import Animals from "./components/Animals";
import SingleAnimal from "./components/SingleAnimal";
import AddAnimal from "./components/AddAnimal";
import ProtectedRoute from "./shared/ProtectedRoute";
import UserContext from "./storage/UserContext";
import { useContext, useEffect } from "react";
import AnimalContext from "./storage/AnimalContext";
import { getAnimals } from "./service/animalsService";

function App() {
  const animalContext = useContext(AnimalContext);

  const { signedIn } = useContext(UserContext);

  useEffect(() => {
    if (signedIn) {
      getAnimals().then(({ data }) => {
        animalContext.updateAnimal(data);
      });
    }
  }, [signedIn]);

  return (
    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/animals" element={<Animals />}></Route>
      <Route path="/animals/:id" element={<SingleAnimal />}></Route>
      <Route
        path="/add"
        element={
          <ProtectedRoute>
            <AddAnimal />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/animals/edit/:id"
        element={
          <ProtectedRoute>
            <AddAnimal />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
}

export default App;
