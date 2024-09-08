import express from "express";
import { createTask, getTask } from "../controllers/task.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/tasks', auth, getTask)
router.post('/create', auth, createTask);

export default router;