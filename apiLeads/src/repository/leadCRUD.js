// Camada que acessa os dados
import pool from "../config/conexao.js";


// Função que lista os dados da tabela leads - Read
async function listRecords(){
    const conexao = await pool.getConnection(); // Abrindo a conexão
    const leadsTB = await conexao.query('SELECT * FROM leads'); // Consultando o banco
    const leads = leadsTB[0]; // Ajustando a resposta que é uma array de duas posições das quais 'so aprimeira nos interessa
    conexao.release(); // Fechando a conexão;

    // Abaixo são linhas de teste para ver no console
    // console.log(leadsTB)
    // console.log("----------------------------------")
    // console.log(leads)

    return leads; // Retornando os dados ao solicitante
};

// Função para cadastrar dados na tabela leads - Create
async function createRecord(nome, email, telefone){
    const conexao = await pool.getConnection();
    const leadsTB = await conexao.query('INSERT INTO leads (nome, email, telefone) VALUES(?, ?, ?)',[nome, email, telefone]);
    conexao.release();
};

// Função para atualizar dados na tabela leads - Update
// Função para apagar dados na tabela leads - Delete

// Exportando as funcões

export { listRecords, createRecord }