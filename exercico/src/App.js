import React from "react";

import { Footer } from "./componete/Footer/Footer";
import Header from "./componete/Header/Header";
import Nav from "./componete/Nav/Nav";
import Usuario from "./componete/Usuario/Usuario";


import "./styles.css";

export default function App() {
  // const titulo = "Título do vídeo";

  const infVideo=[

    {
      titulo: "Titulo do video1",
      image: <img src="https://picsum.photos/400/400?a=1 " alt="" />
    },
    {
      titulo: "Titulo do video2",
      image: <img src="https://picsum.photos/400/400?a=1 " alt="" />
    },
    {
      titulo: "Titulo do video3",
      image: <img src="https://picsum.photos/400/400?a=1 " alt="" />
    },
    {
      titulo: "Titulo do video4",
      image: <img src="https://picsum.photos/400/400?a=1 " alt="" />
    }
  ]

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <Header/>

        <main>
          <Nav/>

         <Usuario Informacoes={infVideo} reproduz ={reproduzVideo}/>
        </main>

      <Footer/>
      </div>
    </div>
  );
}