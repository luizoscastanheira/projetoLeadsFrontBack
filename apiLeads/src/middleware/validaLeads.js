// importando JWT para autenticação
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../env/env.js";

// função que gera token
export function GeraToken() {
    const usuarioLogado = {"idUsuario": 1}

    const token = jwt.sign(usuarioLogado, JWT_SECRET, { expiresIn: '30d' });

    return token;
};


// Função que valida usuário


// Função de autenticação
function validaDadosAutenticacao(usuario, senha){
    if(usuario == 'admin' && senha == '123456'){
        return true;
    } else {
        return false;
    }
};



export { validaDadosAutenticacao }

console.log(JWT_SECRET)