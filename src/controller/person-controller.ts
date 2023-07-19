import { Router } from "express";
import { personRepository } from "../repository/person-repository";
import { checkId } from "../middleware";


export const personController = Router();

personController.get('/', async (req,res) => {
    const persons = await personRepository.findAll();
    res.json(persons);
});

personController.get('/:id', checkId, async (req,res) => {
    
    const person = await personRepository.findById(req.params.id);
    if(!person) {
        res.status(404).end('Not Found');
        return;
    }
    res.json(person);
})
