import { Router } from "express";
import { personRepository } from "../repository/person-repository";
import { checkId } from "../middleware";
import Joi from "joi";

const personValidation = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().positive().required(),
    address: Joi.object({
        number: Joi.string().required(),
        street: Joi.string().required(),
        city: Joi.string().required(),
        country: Joi.string().required()
    }).required()
});



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
});

personController.post('/', async (req,res) => {
    const validation = personValidation.validate(req.body, {abortEarly:false});
    if(validation.error) {
        res.status(400).json(validation.error);
        return;
    }
    const person = await personRepository.persist(req.body);
    res.status(201).json(person);
});

