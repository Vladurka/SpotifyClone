import { Router } from "express";
import { getSong } from "../controllers/song.controller.js";

const router = Router();

router.get("/", getSong);

export default router;
