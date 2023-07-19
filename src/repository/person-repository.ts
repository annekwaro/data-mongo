
import { ObjectId } from "mongodb";
import { Person } from "../entities";
import { connection } from "./connection"

const collection = connection.db('first').collection<Person>('person');

export const personRepository = {
    findAll(){
        return collection.find().toArray();
    },
    findById(_id:string) {
        return collection.findOne(new ObjectId(_id));
    }
}