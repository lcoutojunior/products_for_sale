import HealthCheckController from "@controllers/HealthCheckController";
import ShoeController from "@controllers/ShoeController";
import express from 'express';
const routes = express.Router();

routes.get('/healthCheck', async(req, res) => {
    await HealthCheckController.healthCheck(req, res);
});

routes.get('/shoes', async (req, res) => {
   await ShoeController.getShoes(req, res);
});

routes.get('/shoes/:uuid', async (req, res) => {
        await ShoeController.getShoe(req, res);
});

routes.post('/shoes', async (req, res) => {
    return await ShoeController.createShoe(req, res);    
});

export default routes;

