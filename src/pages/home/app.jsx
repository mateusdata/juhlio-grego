import React, { useState } from "react";
import "./style.css";
import Instagran from "./image/instagram.png";
import Kwai from "./image/zap.png";
import Tiktok from "./image/tiktok.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Lc from "./image/lc.gif";
import Cesar from "./image/cesar.jpeg";
import Gitsafado from "./image/gitsafado.gif";
//import Gitemogin from "./image/gitemogin.gif";
import FormDialog from "../../components/app";

export default function Home() {
  const [menu, setMenu] = useState(null);
  const [buttonLogin, setButtonLogin] = useState(false);
 // const [updateImages, setUpdateImages] = useState(Gitemogin);
  
  /*function atualizarImagens() {
   
    let objFotos = [
      Gitemogin,
      Gitsafado
     
    ];

     setInterval(() => {
      let randomic = Math.floor(Math.random() * 2);
      setUpdateImages(objFotos[randomic]);
      setInterval(() => {
        if(randomic===1){
          setUpdateImages(objFotos[randomic]);
        }
        else{
          setUpdateImages(objFotos[0]);
        }
        
      }, 2000)
     
    }, 2000);
  }*/

  function botaoMenu() {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }
  function login() {
    if (buttonLogin) {
      console.log("entrou " + buttonLogin);
      setButtonLogin(false);
      console.log("entrou " + buttonLogin);
    } else {
      setButtonLogin(true);
      console.log("entrou" + +buttonLogin);
    }
  }

  return (
    <div>
      <div  className="botao">
        <button onClick={botaoMenu}>
          {menu ? <CloseIcon /> : <MenuIcon />}{" "}
        </button>

        <button onClick={login}>
          <AccountCircleSharpIcon
            style={{ marginRight: "50%", color: "rgb(223, 215, 215)" }}
          />
        </button>
      </div>

      {menu ? (
        <div className="aba">
          <a href="mailto:jhulio1522@gmail.com.br?subject=Duvida - Contato com o Grego">
            Email
          </a>
          <a href="/">Fotos</a>
          <a href="/">Ajuda</a>
          <img id="gif" src={Lc} alt="Leila Carla" />
        </div>
      ) : (
        false
      )}

      <div className={menu ? "borrar" : "home"}>
        {buttonLogin ? <FormDialog /> : false}

        <div id="app">
          <img id="usuario" src={Cesar} alt="Cesar" /> <br /> <br />
          <h1>Jhulio Cesar</h1>
          <p>Acompanhem o Grego nas outras redes</p>
        </div>
        <img id="emogin" src={Gitsafado} alt="" />
        <div className="acessoria">
          <a
            id="instagran"
            href="https://www.instagram.com/pretooh_1522/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img className="link" src={Instagran} alt="" />
            Instagram
          </a>
          <a
            id="zap"
            href="https://api.whatsapp.com/send?phone=5577998345442&text=Olá Grego!%20"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img className="link" src={Kwai} alt="" />
            Whatsapp
          </a>
          <a
            id="tiktok"
            href="https://www.tiktok.com/@o_grego_?_t=8Wusxnx4NMb&_r=1"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img src={Tiktok} className="link" alt="" /> Tiktok
          </a>
        </div>
        <h2 id="nomeUsuario">@pretooh_1522</h2>
      </div>
    </div>
  );
}
