
import connection from '../config/connection.js'

export default class UserController{

    async setUser(req,res) {
        res.send({"msg":"set info successfully"});  
    }

    async addUser (req,res){
        const {name,email}=req.body;

    const data=await connection.query(
      `INSERT INTO userinfo (name,email) VALUES ('${name}','${email}')`
    )
    res.status(200).json(data);
    }

    async getUsers(req,res){
        try{
            const data=await  connection.query(
                `SELECT * FROM userinfo`
            )
           
         if(data.length===0){
            res.status(403).json({success:false});
         }else{
            res.status(200).json(data.rows)
         }
        }catch(err){
            console.log(err);
        }
    }


    async getUser(req,res){
        const {id}=req.params;
     
        try{
            const data=await  connection.query(
                `SELECT * FROM userinfo WHERE id=${id}`
            )
           
         if(data.length===0){
            res.status(403).json({success:false});
         }else{
            res.status(200).json(data.rows)
         }
        }catch(err){
            console.log(err);
        }
    }

    async deleteUser(req,res){
        const id=req.body.id;
        const data=await connection.query(
            `DELETE FROM userinfo WHERE id=${id}`
        )
        res.status(200).json(data);
    }

    async updateName(req,res){
        const {name}=req.body;

        const data=await connection.query(
                `UPDATE userinfo SET name='${name}'  WHERE id=2`
        )

        res.status(200).json(data);
    }
}