import { Router } from "express";
import { BookController } from "../controller/BookController";
import { BookService } from "../service/BookService";

const router = Router();
const controller = new BookController(new BookService());

router.post("/", controller.create);
router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;