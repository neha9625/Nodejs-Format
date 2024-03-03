import mysql from 'mysql2';
import env from '../env.js';

const Pool = mysql.createPool({
    connectionLimit: 20,
    host: env.MYSQL_HOST,
    port: env.MYSQL_PORT,
    user: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
    multipleStatements: true
});

export default Pool;


