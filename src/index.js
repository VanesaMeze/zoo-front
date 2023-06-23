import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./storage/UserProvider";
import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AnimalProvider from "./storage/AnimalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <AnimalProvider>
        <BrowserRouter>
          <Header />
          <App />
          <Footer />
        </BrowserRouter>
      </AnimalProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
