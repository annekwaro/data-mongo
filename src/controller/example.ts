import { Router } from "express";

//Un Router express est un peu l'équivalent d'une classe Controller en Symfony, il servira à regrouper les routes/méthodes thématiquement liées
export const exampleController = Router();

//accessible sur http://localhost:3000/api/example en GET
exampleController.get('/', (req,res)=> {
    res.send('from example');
})
//accessible sur http://localhost:3000/api/example/bloup en GET
exampleController.get('/bloup', (req,res) => {
    res.send('yes, bloup')
})