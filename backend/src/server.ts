import express from 'express';

import './database/connection';

const app = express();

//add um pluguim paraexpress aceitar o Json
app.use(express.json());
//Rota
//Recurso = usuário
//métodos HTTP = GET, POST, PUT, DELETE
//Parâmetro

//Get = Buscar uma informação(Lista, intem)
//Post =  Criar informação
//Put Editar uma informação                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
//Delete = Deletar uma informação

app.get('/users',(request, response) => {
    return response.json({message:'Hello World'});
});

app.listen(3322);

//REQ /RES
//localhost:3322