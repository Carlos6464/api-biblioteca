import { Router } from "express";
import { PublisherController } from "../controller/PublisheController"; 
import { PublisherService } from "../service/PublisheService";

const router = Router();
const controller = new PublisherController(new PublisherService());

router.post("/", controller.create);
router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
