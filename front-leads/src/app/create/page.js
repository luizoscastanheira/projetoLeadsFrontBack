import estilos from "./Create.module.css";

export default function create(){
    return(
        <main className={estilos.containerMain}>
            <h1>Cadatre um contato</h1>

            <form id="fomulario" method="post" action="http://localhost:8080/create" className={estilos.formulario}>

                <input type="text" placeholder="Digite o nome." name="nome"/>
                <input type="email" placeholder="Digite o email." name="email"/>
                <input type="text" placeholder="Digite o telefone" name="telefone"/>

                <button type="submit">Registrar</button>

            </form>

        </main>
    );
};