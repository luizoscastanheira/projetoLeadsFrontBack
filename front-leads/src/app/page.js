import Image from "next/image";
import Link from "next/link";
import estilos from "./page.module.css";

export default function Home() {
  return (
    <div className={estilos.containerBase}>

      <div className={estilos.boxBanner}>
        <h1>Sistema de Contatos Internos</h1>
        <h2>Seja Bem-vindo</h2>
        <p>Escolha uma ação no menu superior.</p>
      </div>
    
    </div>
  );
}
