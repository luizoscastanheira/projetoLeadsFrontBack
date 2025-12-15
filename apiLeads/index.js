// Camada Rest da Aplicação

// Importação de serviços e bilbiotecas
import express from "express";
import cors from "cors";

// Importaçao apenas para teste de conexao
//import pool from "./src/config/conexao.js"

const app = express();
app.use(express.json());    // habilita o req.body para o formato json
app.use(cors());            // Habilitando CORS

// Data
let data = new Date();

// Importando as funções incluindo CRUD
import { createRecord, listRecords } from "./src/repository/leadCRUD.js";

// Início dos endpoints da aplicação
// Endpoint apenas para verificar informação sobre o servidor
app.get("/info", (req,res)=>{
    let textoMsg = `O servidor está online desde.`;
    res.json({mensagem:textoMsg, horario:data});
});

// Endpoint que lista todos os registros da tabela leads
app.get("/list", async (req,res)=>{
    const registrosLeads = await listRecords();

    res.json(registrosLeads);
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