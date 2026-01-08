// importando JWT para autenticação
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../env/env.js";


// Função de autenticação
function validaDadosAutenticacao(usuario, senha){
    if(usuario == 'admin' && senha == '123456'){
        return true;
    } else {
        return false;
    }
};

// Função que valida usuário - Não implementada ainda


// função que gera token
export function GeraToken() {
    const usuarioLogado = {"idUsuario": 1}

    const token = jwt.sign(usuarioLogado, JWT_SECRET, { expiresIn: '30d' });

    return token;
};


// função que valida o o token recebido
function validaToken(token){
    let status;
    let codigo;

    jwt.verify(token, JWT_SECRET, function(erro, dadosToken){
        if(erro == null && dadosToken.idUsuario == 1){
            status = true;
            codigo = 200;
        } else {
            status = false;
            codigo = 401;
        };
    });

    return {status: status, codigo: codigo}
};





export { validaDadosAutenticacao, validaToken }

console.log(JWT_SECRET)