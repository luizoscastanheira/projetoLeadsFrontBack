// Arquivo de conexão ao Banco de dados

import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host        :   'localhost',
    user        :   'usuarioLeads',
    password    :   'senha123456',
    database    :   'projetoLeadsDB'
});

export default pool;