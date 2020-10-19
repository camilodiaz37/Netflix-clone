import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  console.log("prueba para arender a usar ramas en git")
  const a = 0;
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="ORIGINALES DE NETFLIX"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Mas Vistos" fetchURL={requests.fetchTrending} />
      <Row title="Mejor Calificados" fetchURL={requests.fetchToRated} />
      <Row title="Peliculas de Acción" fetchURL={requests.fetchActionMovies} />
      <Row title="Peliculas de Comedia" fetchURL={requests.fetchComedyMovies} />
      <Row title="Peliculas de Terror" fetchURL={requests.fetchHorrorMovies} />
      <Row
        title="Peliculas de Romance"
        fetchURL={requests.fetchRomanceMovies}
      />
      <Row
        title="Peliculas Historicas"
        fetchURL={requests.fetchHistoryMovies}
      />
    </div>
  );
}

export default App;
