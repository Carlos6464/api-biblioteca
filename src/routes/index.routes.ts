import { Router } from "express";
import publisherRoutes from "./publisher.routes";
import bookRoutes from "./book.routes";

const router = Router();
router.use("/publishers", publisherRoutes);
router.use("/books", bookRoutes);

export default router;