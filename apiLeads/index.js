// Camada Rest da Aplicação

// Importação de serviços e bilbiotecas
import express from "express";
import cors from "cors";

// Importaçao apenas para teste de conexao
// import pool from "./src/config/conexao.js"

const app = express();
app.use(express.json());    // habilita o req.body para o formato json
app.use(cors());            // Habilitando CORS
app.use(express.urlencoded({ extended: true })); // PARA FORMULÁRIOS HTML

// Data
let data = new Date();

// Importando as funções incluindo CRUD
// Funções CRUD
import { createRecord, listRecords } from "./src/repository/leadCRUD.js";
// Funções de validação
import { validaDadosAutenticacao, GeraToken, validaToken } from "./src/middleware/validaLeads.js";

// Início dos endpoints da aplicação
// Endpoint apenas para verificar informação sobre o servidor
app.get("/info", (req, res)=>{
    let textoMsg = `O servidor está online desde.`;
    res.json({mensagem:textoMsg, horario:data});
});

// Endpoint de login
app.post ('/login', (req, res)=>{
    const usuario = req.body.usuario;
    const senha = req.body.senha;

    const autenticacaoValida = validaDadosAutenticacao(usuario, senha);

    if(!autenticacaoValida){
        res.status(401).send({message: "Usuário não autorizado!"});
        return;
    };

    const token = GeraToken();

    res.status(200).send({token: token})
});


// Endpoint que lista todos os registros da tabela leads
// endpoint padrão simples
// app.get("/list", async (req, res)=>{
//     const registrosLeads = await listRecords();

//     res.json(registrosLeads);
// });

// Endpoint refeito para aceitar autenticação
app.get ("/list", async (req, res) => {
    // Recebe o token enviado na requisição e usa split para remover o texto 'Bearer'
    let token;
    if(typeof req.headers.authorization !== 'undefined') {
        token = req.headers.authorization.split(' ')[1];
    } else {
        token =-1
    }

    const tokenValido = validaToken(token);
    if(!tokenValido.status) {
        res.status(tokenValido.codigo).end();
        return;
    }

    const listaLeads = await listRecords();
    res.status(tokenValido.codigo).send({listaLeads});
});



// Endpoint que cadastra um registro no banco
app.post("/create", async (req, res)=>{
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;

    await createRecord(nome, email, telefone);

    res.status(204).end();
});


// Fim dos endpoints


// Porta de acesso 
app.listen(8080, ()=>{
    console.log(`O servidor ficou online às ${data}.`)

    // testando a conexão
    //const conexao = await pool.getConnection();
    //console.log(conexao.threadId)
});