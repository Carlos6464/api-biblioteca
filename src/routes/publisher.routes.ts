import { Router } from "express";
import { PublisherController } from "../controller/PublisheController"; 
import { PublisherService } from "../service/PublisheService";

const router = Router();
const controller = new PublisherController(new PublisherService());

router.post("/publishers", controller.create);
router.get("/publishers", controller.findAll);
router.get("/publishers/:id", controller.findOne);
router.put("/publishers/:id", controller.update);
router.delete("/publishers/:id", controller.delete);

export default router;
