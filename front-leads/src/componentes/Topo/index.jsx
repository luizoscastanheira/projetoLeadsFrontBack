import estilos from "./Topo.module.css";
import Link from "next/link";

export default function Topo(){
    return(
        <header className={estilos.containerHeader}>
            <nav className={estilos.containerNav}>
                <Link href="/" className={estilos.linkNav}>Home</Link>
                <Link href="/login" className={estilos.linkNav}>Listar Contatos</Link>
                <Link href="/create" className={estilos.linkNav}>Cadastar Novo Contato</Link>
            </nav>
        </header>
    );
};