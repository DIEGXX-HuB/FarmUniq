import { Schema,model } from "mongoose";

const usuarioSchema = new Schema({
    name:String,
    email:String,
    password:String,
    selectedRole:String
  });
  
  const Usuario = model('Usuario', usuarioSchema);
  
export default  Usuario;