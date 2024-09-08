import Task from "../models/task.js";

export const createTask = async (req, res) => {
    try {
        const {name, status, description} = req.body;
        const creator = req.userId;
        const task = await Task.create({name, creator, status, description});
        res.status(201).json({message: 'created!', task});
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error });
    }
}

export const getTask = async (req, res) => {
    try {
        const tasks = await Task.find().populate('creator').sort({ createdAt: 'desc'});
        res.status(200).json(tasks);
    } 
    catch (error) {
        console.log(error);
        res.status(400).json({ error: error });
    }
}