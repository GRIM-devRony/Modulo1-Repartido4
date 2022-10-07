import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Header />
      <div className="bienvenida">
        <h1>Bienvenido a la mejor página para organizar tus tareas!</h1>
      </div>
      <div className="body">
        <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <h3>ORDENA TUS PRIORIDADES</h3>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque ipsam cumque repellat molestiae perferendis rerum saepe
                  quo recusandae modi velit, tenetur similique voluptatem at,
                  quasi eveniet molestias voluptates veniam rem.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <h3>AÑADIR TAREA</h3>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  inventore, at voluptatibus aut consequatur necessitatibus
                  repellendus, ratione maxime eum dolorum nemo facilis
                  laboriosam, quidem animi tempore ipsam harum iusto. Expedita.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <h3>BORRAR TAREAS</h3>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  maiores culpa in voluptates unde ad repellendus commodi
                  voluptate, fugit, aperiam nulla eum blanditiis quae veniam.
                  Velit quisquam reprehenderit nemo adipisci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
