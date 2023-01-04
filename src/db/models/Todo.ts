//The model folder is for the code to communicate with PostgreSQL. Todo.ts is the model for each todo

import { Model } from "objection";

export class Todo extends Model{
    // letting this module know that the table name is todos in which we are working with.
    static get tableName() {
        return "todos";
    }

    id!: string;
    title!: string;
    done!: boolean;

    createdAt!: string;
    updatedAt!: string;

    //Each time that a new record is created, it shows the current time in which record is created or updated.

    $beforeInsert() {
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }

    //making sure that the updatedAt record is only being updated
    $beforeUpdate() {
        this.updatedAt = new Date().toISOString();
    }
}