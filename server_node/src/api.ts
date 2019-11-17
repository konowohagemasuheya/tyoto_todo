import express from 'express';
import * as modules from 'src/modules';

const api = express();
api.use(express.json());

api.get('/todos', async (req, res) => {
    const allToDos = await modules.getAllToDos();
    res.status(200).json(allToDos);
});

export {
    api,
}