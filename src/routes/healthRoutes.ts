import { Router } from "express";
import HealtController from "../controllers/HealthController";

const healthRoutes = Router()
const controller = new HealtController()

healthRoutes.get('/info', controller.info)
healthRoutes.get('/ping', controller.ping)

export default healthRoutes