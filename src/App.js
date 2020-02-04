import React from "react";
import "./css/reset.css";
import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const data = [
  {
    className: "border-red",
    title: "Full Time Sales Associate - Sydney Boutique",
    contractType: "CDI",
    country: "Australie",
    city: "Sidney"
  },
  {
    className: "border-green",
    title: "Full Time Sales Associate - Sydney Boutique",
    contractType: "CDI",
    country: "Australie",
    city: "Sidney"
  },
  {
    className: "border-yellow",
    title: "Full Time Sales Associate - Sydney Boutique",
    contractType: "CDI",
    country: "Australie",
    city: "Sidney"
  },
  {
    className: "border-blue",
    title: "Full Time Sales Associate - Sydney Boutique",
    contractType: "CDI",
    country: "Australie",
    city: "Sidney"
  },
  {
    className: "border-pink",
    title: "Full Time Sales Associate - Sydney Boutique",
    contractType: "CDI",
    country: "Australie",
    city: "Sidney"
  },
  {
    className: "border-red",
    title: "Full Time Sales Associate - Sydney Boutique",
    contractType: "CDI",
    country: "Australie",
    city: "Sidney"
  },
  {
    className: "border-green",
    title: "Full Time Sales Associate - Sydney Boutique",
    contractType: "CDI",
    country: "Australie",
    city: "Sidney"
  },
  {
    className: "border-yellow",
    title: "Full Time Sales Associate - Sydney Boutique",
    contractType: "CDI",
    country: "Australie",
    city: "Sidney"
  },
  {
    className: "border-blue",
    title: "Full Time Sales Associate - Sydney Boutique",
    contractType: "CDI",
    country: "Australie",
    city: "Sidney"
  }
];

function App() {
  return (
    <div className="App">
      <Header name="The Job Board"></Header>
      <Jobs infos={data}></Jobs>
      <Footer></Footer>
    </div>
  );
}

export default App;
