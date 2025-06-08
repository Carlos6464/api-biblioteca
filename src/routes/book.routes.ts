import { Router } from "express";
import { BookController } from "../controller/BookController";
import { BookService } from "../service/BookService";

const router = Router();
const controller = new BookController(new BookService());

router.post("/books", controller.create);
router.get("/books", controller.findAll);
router.get("/books/:id", controller.findOne);
router.put("/books/:id", controller.update);
router.delete("/books/:id", controller.delete);

export default router;