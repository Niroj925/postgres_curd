import "dotenv/config";
 import pkg from "pg";

 const {Pool}=pkg;

 const client =new Pool({
    user:process.env.user,
    host:"localhost",
    database:"api",
    password:process.env.password,
    port:5432
 });

 export default client;